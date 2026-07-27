from __future__ import annotations

import csv
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read_tsv(name: str) -> list[dict[str, str]]:
    with (ROOT / "metadata" / name).open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def load_builder():
    path = ROOT / "scripts" / "build_bond_site.py"
    spec = importlib.util.spec_from_file_location("build_bond_site", path)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(module)
    return module


class BondMetadataTest(unittest.TestCase):
    def test_core_characteristics_are_exactly_the_audited_41(self) -> None:
        rows = read_tsv("bond-characteristics.tsv")
        builder = load_builder()
        self.assertEqual(len(rows), 41)
        self.assertEqual({row["source_field"] for row in rows}, builder.EXPECTED_CORE_FIELDS)
        self.assertEqual({row["status"] for row in rows}, {"source-matched"})
        self.assertEqual({row["direction"] for row in rows}, {"模型决定"})

    def test_auxiliary_fields_are_not_promoted_to_signals(self) -> None:
        rows = read_tsv("bond-auxiliary-fields.tsv")
        builder = load_builder()
        self.assertEqual(len(rows), 13)
        self.assertEqual({row["source_field"] for row in rows}, builder.EXPECTED_AUXILIARY_FIELDS)
        self.assertEqual({row["core_signal"] for row in rows}, {"no"})

    def test_methods_cover_sort_regression_composite_and_optimization(self) -> None:
        rows = read_tsv("bond-portfolio-methods.tsv")
        text = " ".join(" ".join(row.values()) for row in rows)
        self.assertGreaterEqual(len(rows), 10)
        for term in ("十等分", "回归", "复合", "IPCA", "Softmax", "最大夏普"):
            self.assertIn(term, text)
        self.assertIn("持续期匹配", text)
        self.assertIn("一个月国库券", text)

    def test_builder_emits_dependency_free_javascript(self) -> None:
        builder = load_builder()
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "bond-data.js"
            payload = builder.build(output)
            script = output.read_text(encoding="utf-8")
        self.assertTrue(script.startswith("window.BOND_ATLAS_DATA = "))
        decoded = json.loads(script.removeprefix("window.BOND_ATLAS_DATA = ").removesuffix(";\n"))
        self.assertEqual(len(payload["characteristics"]), 41)
        self.assertEqual(len(decoded["auxiliaryFields"]), 13)
        self.assertEqual(len(decoded["methods"]), 13)

    def test_site_has_two_way_asset_class_navigation(self) -> None:
        equity = (ROOT / "site" / "index.html").read_text(encoding="utf-8")
        calculation = (ROOT / "site" / "calculation.html").read_text(encoding="utf-8")
        bond = (ROOT / "site" / "bond.html").read_text(encoding="utf-8")
        for page in (equity, calculation, bond):
            self.assertIn('href="index.html"', page)
            self.assertIn('href="bond.html"', page)
        self.assertNotIn('href="bond.css"', equity)
        self.assertNotIn('href="bond.css"', calculation)
        self.assertIn('href="bond.css"', bond)
        self.assertIn("41 个债券特征", bond)
        self.assertIn("四种收益对象必须分开", bond)

    def test_paper_wiki_preserves_direct_provenance_and_local_archives(self) -> None:
        builder = load_builder()
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "bond-data.js"
            payload = builder.build(output)
        papers = {paper["paper_id"]: paper for paper in payload["paperWiki"]}
        deep = papers["deep-tangency-portfolio"]
        self.assertEqual(deep["characteristic_count"], 41)
        self.assertEqual(deep["local_page"], 45)
        self.assertIn("papers/bond/feng-et-al-deep-tangency-portfolio.pdf", deep["local_file"])
        self.assertIn("common-risk-factors-in-the-cross-section-of-corporate-bond-returns", papers)
    def test_route_pages_are_generated_from_one_canonical_template(self) -> None:
        builder = load_builder()
        template = ROOT / "site" / "bond.html"
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory)
            pages = builder.build_route_pages(template, output)
            self.assertEqual(len(pages), 5)
            for filename, view in builder.BOND_PAGE_VIEWS.items():
                page = (output / filename).read_text(encoding="utf-8")
                self.assertIn(f'<body class="bond-page" data-bond-view="{view}">', page)
                self.assertIn('id="bondSourceEvidence"', page)
                self.assertIn('class="bond-study-glossary"', page)
    def test_audit_records_baseline_hashes_and_read_only_scope(self) -> None:
        rows = {row["metric"]: row for row in read_tsv("bond-dataset-audit.tsv")}
        self.assertEqual(rows["core_characteristics"]["value"], "41")
        self.assertEqual(rows["auxiliary_numeric_fields"]["value"], "13")
        self.assertEqual(rows["source_directory"]["status"], "read-only")
        self.assertEqual(len(rows["raw_sha256"]["value"]), 64)
        self.assertEqual(len(rows["imputed_sha256"]["value"]), 64)


if __name__ == "__main__":
    unittest.main()
