from __future__ import annotations

import csv
import tempfile
import unittest
from pathlib import Path

from scripts.build_evidence_site import (
    auto_evidence_from_html,
    build_indicator,
    build_method_variant,
    build_site_data,
    evidence_from_ranges,
    layout_text_variants,
    load_calculations,
    load_literature_formulas,
    load_method_designs,
    load_method_variants,
    local_audit_sources,
    parse_evidence_pointers,
    parse_ranges,
    select_indicator_paper,
    text_lines_with_pages,
)
from scripts.sync_equitychars_formulas import parse_equitychars_formulas
from scripts.sync_literature_formulas import CLOSEST_MEASURE, FORMULA_LATEX


class BuildEvidenceSiteTest(unittest.TestCase):
    def test_long_short_and_calculation_views_are_separate(self) -> None:
        project_root = Path(__file__).resolve().parents[1]
        index_html = (project_root / "site" / "index.html").read_text(
            encoding="utf-8"
        )
        app_js = (project_root / "site" / "app.js").read_text(encoding="utf-8")
        calculation_html = (
            project_root / "site" / "calculation.html"
        ).read_text(encoding="utf-8")
        calculation_js = (
            project_root / "site" / "calculation.js"
        ).read_text(encoding="utf-8")

        self.assertIn('href="calculation.html"', index_html)
        self.assertNotIn("methodVariantsMarkup", app_js)
        self.assertIn("const PAGE_SIZE = 20", app_js)
        self.assertIn("items.slice(start, start + PAGE_SIZE)", app_js)
        self.assertIn('src="calculation.js"', calculation_html)
        self.assertIn('id="calculationPagination"', calculation_html)
        self.assertIn("item.method_variants", calculation_js)
        self.assertIn("mathjax@4/tex-svg.js", calculation_js)
        self.assertIn("const PAGE_SIZE = 20", calculation_js)
        self.assertIn("items.slice(start, start + PAGE_SIZE)", calculation_js)
        self.assertIn("typesetPromise", calculation_js)
        self.assertIn("syntheticProjectVariant(item)", calculation_js)
        self.assertIn("calculation-comparison", calculation_js)
        self.assertIn("literature-card-stack", calculation_js)
        self.assertIn("closest_paper_measure", calculation_js)
        self.assertNotIn("projectVariant ||", calculation_js)

        calculation_position = index_html.index('href="calculation.html"')
        method_position = index_html.index('id="methodButton"')
        language_position = index_html.index('id="languageToggle"')
        self.assertLess(calculation_position, method_position)
        self.assertLess(method_position, language_position)

    def test_literature_formula_metadata_covers_all_sources(self) -> None:
        project_root = Path(__file__).resolve().parents[1]
        with (project_root / "metadata" / "characteristics.tsv").open(
            encoding="utf-8"
        ) as source:
            characteristic_ids = {
                row["characteristic_id"]
                for row in csv.DictReader(source, delimiter="\t")
            }
        formulas = load_literature_formulas(
            project_root / "metadata" / "literature-formulas.tsv",
            project_root,
            characteristic_ids,
        )
        site_data = build_site_data(project_root)

        self.assertEqual(set(formulas), characteristic_ids)
        self.assertTrue(
            all(rows[0]["formula_latex"] for rows in formulas.values())
        )
        self.assertEqual(set(FORMULA_LATEX), characteristic_ids)
        self.assertEqual(
            formulas["mom36m"][0]["formula_match"],
            "closest_paper_measure",
        )
        self.assertIn("mom36m", CLOSEST_MEASURE)
        self.assertEqual(len(site_data["indicators"]), 98)
        self.assertEqual(
            sum(len(item["method_variants"]) for item in site_data["indicators"]),
            113,
        )
        chmom = next(
            item for item in site_data["indicators"] if item["id"] == "chmom"
        )
        self.assertTrue(
            {
                "ciz-2022-coverage",
                "hxz-2020-coverage",
                "jkp-2023-decomposition",
                "novy-marx-2012",
                "ardila-2021",
            }.issubset({row["id"] for row in chmom["method_variants"]})
        )
        cashpr = next(
            item for item in site_data["indicators"] if item["id"] == "cashpr"
        )
        self.assertEqual(len(cashpr["method_variants"]), 4)
        self.assertEqual(
            {row["id"] for row in cashpr["method_variants"]},
            {
                "chandrashekar-2009",
                "rao-2013",
                "chen-zimmermann-2022",
                "fallahgoul-2024",
            },
        )

    def test_method_designs_cover_all_non_simple_characteristics(self) -> None:
        project_root = Path(__file__).resolve().parents[1]
        with (project_root / "metadata" / "construction-evidence.tsv").open(
            encoding="utf-8"
        ) as source:
            not_simple_ids = {
                row["characteristic_id"]
                for row in csv.DictReader(source, delimiter="\t")
                if row["paper_lms_direction"] == "not-simple"
            }
        designs = load_method_designs(
            project_root / "metadata" / "method-designs.tsv",
            not_simple_ids,
        )
        counts: dict[str, int] = {}
        for design in designs.values():
            family = str(design["family"])
            counts[family] = counts.get(family, 0) + 1

        self.assertEqual(set(designs), not_simple_ids)
        self.assertEqual(len(designs), 48)
        self.assertEqual(
            counts,
            {
                "cross_sectional_return_regression": 18,
                "multivariate_prediction_model": 11,
                "model_weighted_zero_investment": 6,
                "sorted_portfolio_comparison": 6,
                "event_study": 3,
                "implied_cost_of_capital": 2,
                "corporate_investment_regression": 1,
                "beta_pricing_test": 1,
            },
        )
        self.assertTrue(
            all(design["summary"]["zh"] for design in designs.values())
        )
        site_data = build_site_data(project_root)
        self.assertEqual(site_data["summary"]["methods"], counts)
        self.assertEqual(
            sum("method_design" in item for item in site_data["indicators"]),
            48,
        )

    def test_checked_calculation_metadata_covers_all_characteristics(self) -> None:
        project_root = Path(__file__).resolve().parents[1]
        with (project_root / "metadata" / "characteristics.tsv").open(
            encoding="utf-8"
        ) as source:
            characteristic_ids = {
                row["characteristic_id"]
                for row in csv.DictReader(source, delimiter="\t")
            }
        calculations = load_calculations(
            project_root / "metadata" / "calculations.tsv",
            characteristic_ids,
        )

        self.assertEqual(len(calculations), 98)
        self.assertTrue(
            all(row["formula_latex"] for row in calculations.values())
        )
        self.assertIn(
            r"\mathrm{RVAR\_MEAN}",
            calculations["rvar_mean"]["formula_latex"],
        )
        self.assertEqual(
            calculations["chmom"]["provenance"],
            "literature_audit_override",
        )
        self.assertFalse(calculations["chmom"]["source_commit"])
        code_calculations = {
            characteristic_id: row
            for characteristic_id, row in calculations.items()
            if characteristic_id != "chmom"
        }
        self.assertTrue(
            all(
                row["provenance"] == "equitychars_ciz_code"
                for row in code_calculations.values()
            )
        )
        self.assertTrue(
            all(row["source_commit"] for row in code_calculations.values())
        )
        self.assertIn(
            r"\mathrm{MKTRF}",
            calculations["abr"]["formula_latex"],
        )
        self.assertIn(
            r"\mathrm{IBQ}_{i,t-k-4}",
            calculations["nincr"]["formula_latex"],
        )
        self.assertIn(
            r"\prod_{k=1}^{12}",
            calculations["mom12m"]["formula_latex"],
        )
        self.assertIn(
            r"\mathrm{DM}_{i,t}}{\mathrm{DLTT}",
            calculations["secured"]["formula_latex"],
        )

    def test_formula_sync_merges_primary_rows_and_supplements(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            formula_source = root / "formulas.tex"
            formula_source.write_text(
                r"""
                \(\mathrm{abr}\) &
                \(\displaystyle \mathrm{ABR}_{i,t}=\mathrm{RET}_{i,t}\)
                & \(+1\)\\
                """,
                encoding="utf-8",
            )
            parsed = parse_equitychars_formulas(formula_source)

        self.assertEqual(set(parsed), {"abr"})
        self.assertIn(r"\mathrm{RET}", parsed["abr"]["formula_latex"])
        self.assertEqual(parsed["abr"]["formula_direction"], "+1")

    def test_method_variant_exposes_latex_formula(self) -> None:
        variant = build_method_variant(
            {
                "variant_id": "equitychars",
                "variant_role": "project_implementation",
                "source_label": "EquityChars",
                "formula": (
                    "RVAR_MEAN = Var(daily RET) over a rolling 3-month window"
                ),
            },
            Path("."),
        )

        self.assertIn(
            r"\operatorname{Var}",
            variant["formula_latex"],
        )

    def test_parse_ranges_accepts_singletons_and_spans(self) -> None:
        self.assertEqual(
            parse_ranges("15,30-32,287-291"),
            [(15, 15), (30, 32), (287, 291)],
        )

    def test_parse_evidence_pointer_extracts_local_text_ranges(self) -> None:
        pointer = (
            "extracted-text/example-publisher.txt:10-15,22; "
            "papers/example/example.pdf:p.4"
        )
        self.assertEqual(
            parse_evidence_pointers(pointer),
            [
                {
                    "path": "extracted-text/example-publisher.txt",
                    "ranges": [(10, 15), (22, 22)],
                }
            ],
        )

    def test_parse_evidence_pointer_accepts_distinct_source_pdf(self) -> None:
        pointer = (
            "extracted-text/example-supplement.txt:10-15"
            "@supporting-information/example/example-supplement.pdf"
        )
        self.assertEqual(
            parse_evidence_pointers(pointer),
            [
                {
                    "path": "extracted-text/example-supplement.txt",
                    "ranges": [(10, 15)],
                    "source_path": (
                        "supporting-information/example/example-supplement.pdf"
                    ),
                }
            ],
        )

    def test_form_feed_maps_following_text_to_next_pdf_page(self) -> None:
        mapped = text_lines_with_pages("page one\n\fpage two\nstill two")
        self.assertEqual(mapped[0], ("page one", 1))
        self.assertEqual(mapped[1], ("page two", 2))
        self.assertEqual(mapped[2], ("still two", 2))

    def test_range_evidence_retains_pdf_page(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = Path(tmp) / "paper.txt"
            source.write_text(
                "Front matter.\n"
                "\fThe strategy buys high-signal stocks and sells low-signal stocks. "
                "The portfolio is rebalanced monthly.\n",
                encoding="utf-8",
            )
            evidence = evidence_from_ranges(
                source,
                [(2, 2)],
                {"strategy", "buys", "high", "sells", "low", "portfolio"},
            )
        self.assertEqual(evidence[0]["page"], 2)
        self.assertEqual(evidence[0]["method"], "curated_lines")
        self.assertIn("buys high-signal stocks", evidence[0]["text"])

    def test_two_column_layout_keeps_columns_separate(self) -> None:
        variants = layout_text_variants(
            [
                "Left column starts a sentence.            Right column has other prose.",
                "It continues without interruption.       It also continues naturally.",
                "The signal ranks firms monthly.           This is a separate discussion.",
            ]
        )
        self.assertEqual(len(variants), 2)
        self.assertIn("Left column starts", variants[0])
        self.assertIn("It continues", variants[0])
        self.assertNotIn("Right column", variants[0])
        self.assertIn("Right column", variants[1])

    def test_local_audit_sources_only_include_existing_project_files(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "notes").mkdir()
            (root / "notes" / "audit.md").write_text("evidence", encoding="utf-8")
            sources = local_audit_sources(
                "notes/audit.md; metadata/missing.tsv; https://example.test",
                root,
            )
        self.assertEqual(
            sources,
            [{"path": "notes/audit.md", "href": "../notes/audit.md"}],
        )

    def test_automatic_html_evidence_extracts_visible_source_sentence(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = Path(tmp) / "paper.html"
            source.write_text(
                "<article><p>The strategy buys stocks with low turnover and "
                "sells stocks with high turnover every month.</p></article>"
                "<script>ignore this sentence about high turnover</script>",
                encoding="utf-8",
            )
            evidence = auto_evidence_from_html(
                source,
                {"strategy", "low", "turnover", "high", "month"},
            )
        self.assertEqual(evidence[0]["method"], "automatic_html_search")
        self.assertIn("buys stocks with low turnover", evidence[0]["text"])
        self.assertNotIn("ignore this sentence", evidence[0]["text"])

    def test_authoritative_paper_takes_precedence_for_indicator(self) -> None:
        papers = {
            "method-label": {"paper_id": "method-label", "title": "Method label"},
            "paper-2006": {"paper_id": "paper-2006", "title": "Published paper"},
        }
        paper = select_indicator_paper(
            {"paper_id": "method-label"},
            {"authoritative_paper_id": "paper-2006"},
            papers,
        )
        self.assertEqual(paper["paper_id"], "paper-2006")

    def test_method_variant_preserves_bilingual_window_and_pdf_page(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            source = root / "papers" / "example" / "paper.pdf"
            source.parent.mkdir(parents=True)
            source.write_bytes(b"%PDF-1.4\n")
            variant = build_method_variant(
                {
                    "variant_id": "paper",
                    "variant_role": "original_paper",
                    "source_label": "Published paper",
                    "formula": "x = a / b",
                    "data_fields": "Compustat: A, B",
                    "calculation_window_zh": "上一财年",
                    "calculation_window_en": "Previous fiscal year",
                    "source_path": "papers/example/paper.pdf",
                    "source_page": "7",
                },
                root,
            )

        self.assertEqual(variant["calculation_window"]["zh"], "上一财年")
        self.assertEqual(variant["source_href"], "../papers/example/paper.pdf#page=7")

    def test_method_variant_loader_groups_rows_by_characteristic(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            metadata = root / "metadata"
            metadata.mkdir()
            source = metadata / "method-variants.tsv"
            source.write_text(
                "characteristic_id\tvariant_id\tvariant_role\tsource_label\n"
                "cashpr\trepo\tproject_implementation\tEquityChars\n"
                "cashpr\tpaper\toriginal_paper\tOriginal paper\n"
                "bm_ia\tpaper\toriginal_paper\tIA paper\n",
                encoding="utf-8",
            )
            variants = load_method_variants(
                source, root, {"cashpr", "bm_ia"}
            )

        self.assertEqual(
            [row["id"] for row in variants["cashpr"]],
            ["paper"],
        )
        self.assertEqual(variants["bm_ia"][0]["source_label"], "IA paper")

    def test_curated_excerpt_links_to_distinct_source_pdf(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "extracted-text").mkdir()
            (root / "supporting-information" / "replication").mkdir(parents=True)
            (root / "extracted-text" / "replication.txt").write_text(
                "The signal is book-to-market minus its industry mean.\n",
                encoding="utf-8",
            )
            source_pdf = (
                root
                / "supporting-information"
                / "replication"
                / "replication-supplement.pdf"
            )
            source_pdf.write_bytes(b"%PDF-1.4\n")

            indicator = build_indicator(
                {
                    "raw_signal": "industry-adjusted book-to-market",
                    "breakpoints": "",
                    "weighting": "",
                    "rebalancing_frequency": "annual",
                    "long_leg": "high",
                    "short_leg": "low",
                    "paper_lms_direction": "N/A",
                    "evidence_pointer": (
                        "extracted-text/replication.txt:1"
                        "@supporting-information/replication/"
                        "replication-supplement.pdf"
                    ),
                },
                {
                    "characteristic_id": "bm_ia",
                    "characteristic_name": "Industry-adjusted book-to-market",
                },
                {
                    "paper_id": "original-working-paper",
                    "title": "Original Working Paper",
                    "local_file": "",
                },
                root,
            )

        self.assertEqual(
            indicator["evidence"][0]["href"],
            "../supporting-information/replication/"
            "replication-supplement.pdf#page=1",
        )
        self.assertEqual(
            indicator["evidence"][0]["source_file"],
            "supporting-information/replication/replication-supplement.pdf",
        )


if __name__ == "__main__":
    unittest.main()
