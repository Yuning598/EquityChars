# Equity Characteristics Formula Documentation

This folder stores the maintained source for the Equity Characteristics
calculation documentation.

## Files

- `equity_characteristics_calculation.tex` — audited LaTeX source.
- `../../chars/files/equity_characteristics_calculation.pdf` — compiled PDF served by the static website.

## Maintenance Workflow

1. Edit `equity_characteristics_calculation.tex`.
2. Compile from this folder:

   ```bash
   pdflatex -interaction=nonstopmode -halt-on-error equity_characteristics_calculation.tex
   pdflatex -interaction=nonstopmode -halt-on-error equity_characteristics_calculation.tex
   ```

3. Copy the PDF to the Pages folder:

   ```bash
   cp equity_characteristics_calculation.pdf ../../chars/files/equity_characteristics_calculation.pdf
   ```

4. Update website links if the filename changes.

## Audit Policy

The formulas are normalized for notation and LaTeX correctness. Entries marked
in the audit notes should be checked against the implementation before being
treated as final methodological definitions.
