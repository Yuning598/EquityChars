# Bond long–short direction audit

## Rule used by the website

The public bond panel's 41 requested fields match the characteristics used as
joint inputs in Feng, Jiang, Li, Song, and Wang, *Deep Tangency Portfolio*
(Internet Appendix, Table A1). That paper learns the marginal sign jointly; it
does **not** prescribe 41 separate univariate long–short portfolios. The website
therefore reports the reproducible descriptive convention **High minus Low** for
all fields unless a direct, field-matched paper provides a different portfolio
definition. It must not describe these baseline spreads as literature-directed
trading factors.

## Directly checked portfolio definitions

| Field / construct | Paper | Verified portfolio convention | Website treatment |
| --- | --- | --- | --- |
| `6-month_mom` | Jostova, Nikolova, Philipov, and Stahel (2013), *RFS* | Past six-month winner P10 minus loser P1; equal weighted; six overlapping monthly cohorts, held after a one-month lag. | Keep High minus Low only as a descriptive one-month sort. It is not a replication of the paper's overlapping strategy. |
| `LTR_mom` | Bali, Subrahmanyam, and Wen (2021), *JFE* | Long-term-reversal factor is low LTR minus high LTR, using value-weighted quintiles. | A future direction CSV should set this field to −1 when the goal is to reproduce their reversal factor. |
| `vix_beta` | Chung, Wang, and Wu (2019), *JFE* | High VIX-beta minus low VIX-beta decile is negative on average; the paper also reports 5-by-5 conditional sorts. | High minus Low is the paper's reported spread; its expected sign is negative, not a reason to invert the legs. |
| `1-month_mom` | No field-matched univariate paper confirmed | In the shared 41-field taxonomy this is a short-term-return input; the name alone is insufficient to claim a momentum rather than reversal portfolio. | Keep High minus Low baseline; do not label it “Jostova momentum.” |
| `rating`, `duration`, `VaR_5%`, `Amihud`, `ytm`, `size`, `age`, `time2maturity`, `turnover`, `VaR_10%`, `std_Amihud`, `Roll`, `BPW`, `P_HL`, `P_FHT`, `TC_IQR`, `Range_daily`, `trades`, `variance`, `skewness`, `kurtosis`, `COSKEW`, `ISKEW`, `market_beta`, `market_residual_variance`, `term_beta`, `default_beta`, `term_default_residual_variance`, `drf_beta`, `crf_beta`, `lrf_beta`, `liq_beta`, `unc_beta`, `12-month_mom`, `barQ`, `std_barQ_1mom`, `range_monthly` | Feng et al., *Deep Tangency Portfolio*, Internet Appendix Table A1 | Joint model inputs, with no preassigned univariate H−L sign. | Keep High minus Low baseline. Add a sign only after a field-matched primary-source verification. |

## Return definition checked

Dickerson, Mueller, and Robotti (2023), *Priced Risk in Corporate Bonds*,
construct daily clean prices as volume-weighted transaction prices and compute
monthly total returns from clean price, accrued interest, and coupons. The
currently released field is `monthly_return`; it is retained as a total return
until the release includes an explicitly named excess-return field. The builder
lags the formation characteristic and `size` (amount outstanding) by one month.

## Primary sources

- Dickerson, Mueller, and Robotti (2023), [Priced Risk in Corporate Bonds](https://doi.org/10.1016/j.jfineco.2023.103707).
- Jostova et al. (2013), [Momentum in Corporate Bond Returns](https://doi.org/10.1093/rfs/hht022).
- Bali, Subrahmanyam, and Wen (2021), [Long-Term Reversals in the Corporate Bond Market](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2978861).
- Chung, Wang, and Wu (2019), [Volatility and the Cross-Section of Corporate Bond Returns](https://doi.org/10.1016/j.jfineco.2019.02.002).
