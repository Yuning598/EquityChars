import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

import pandas as pd
import pyarrow.feather as feather


ROOT = Path(__file__).resolve().parents[1]


def load_module(name, relative_path):
    spec = importlib.util.spec_from_file_location(name, ROOT / relative_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


equity = load_module("equity_portfolios", "scripts/build_long_short_portfolios.py")
bond = load_module("bond_portfolios", "scripts/build_bond_long_short_portfolios.py")


class PortfolioBuilderTests(unittest.TestCase):
    def test_equity_builder_writes_quintiles_deciles_and_frequency_specific_drawdowns(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "equity.parquet"
            output = Path(directory) / "portfolio.json"
            frame = pd.DataFrame([
                {"date": date, "ret": 0.01 * (stock + 1), "me": stock + 1, "signal": stock}
                for date in pd.date_range("2020-01-31", periods=15, freq="ME")
                for stock in range(10)
            ])
            frame.to_parquet(source, index=False)
            equity.build_portfolios(str(source), output, "test", "test", 5, None, 1, None, "full")
            payload = json.loads(output.read_text())
            result = payload["series"]["signal"]
            self.assertEqual(set(result["quantiles"]), {"5", "10"})
            summary = result["quantiles"]["5"]["summary"]["vw"]
            self.assertIn("arithmetic_mean_monthly", summary)
            self.assertIn("geometric_mean_annualized", summary)
            self.assertIn("max_drawdown_monthly", summary)
            self.assertIn("max_drawdown_yearly", summary)

    def test_bond_builder_uses_lagged_signals_and_amount_outstanding_weights(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "bond.feather"
            output = Path(directory) / "portfolio.json"
            rows = []
            for month in pd.date_range("2020-01-31", periods=4, freq="ME"):
                for identifier in range(10):
                    row = {"complete_cusip": f"B{identifier:08d}", "date": month, "size": identifier + 1, "monthly_return": 0.001 * (identifier + 1)}
                    row.update({characteristic: float(identifier) for characteristic in bond.BOND_CHARACTERISTICS})
                    rows.append(row)
            feather.write_feather(pd.DataFrame(rows), source)
            bond.build(str(source), output, "test", "monthly_return", 5, None)
            payload = json.loads(output.read_text())
            self.assertEqual(len(payload["characteristics"]), 41)
            self.assertEqual(set(payload["characteristics"]), set(bond.BOND_CHARACTERISTICS))
            result = payload["series"]["size"]
            self.assertEqual(set(result["quantiles"]), {"5", "10"})
            rows = result["quantiles"]["10"]["vw"]
            self.assertEqual(len(rows), 3, "the first month is omitted because formation values are lagged")
            self.assertEqual(payload["metadata"]["return_basis"], "total_return_pending_excess_return")

    def test_bond_builder_does_not_use_stale_signals_across_missing_months(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "bond.feather"
            output = Path(directory) / "portfolio.json"
            rows = []
            for month in (pd.Timestamp("2020-01-31"), pd.Timestamp("2020-03-31")):
                for identifier in range(10):
                    row = {
                        "complete_cusip": f"B{identifier:08d}",
                        "date": month,
                        "size": identifier + 1,
                        "monthly_return": 0.001 * (identifier + 1),
                    }
                    row.update({characteristic: float(identifier) for characteristic in bond.BOND_CHARACTERISTICS})
                    rows.append(row)
            feather.write_feather(pd.DataFrame(rows), source)
            bond.build(str(source), output, "test", "monthly_return", 5, None)
            payload = json.loads(output.read_text())
            self.assertEqual(payload["series"]["rating"]["quantiles"]["10"]["ew"], [])


if __name__ == "__main__":
    unittest.main()
