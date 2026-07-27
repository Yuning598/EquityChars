(() => {
  "use strict";
  const loc = (line) => typeof line === "number" ? `BondChars · chars/myPack.py · L${line}` : `BondChars · ${line}`;
  const rule = (latex, zh, en, line, inputs) => ({ latex, zh, en, source: loc(line), inputs });
  const rolling = (symbol, zh, en, line = 284) => rule(`\\( ${symbol}_{i,t}=\\operatorname{stat}\\{r_{i,t-36},\\ldots,r_{i,t-1}\\} \\)`, zh, en, line, "monthly_return_winsorized; 36-month lookback; minimum 12 observations; one-month lag");
  const rules = {
    age: rule("\\( AGE_{i,t}=(d_t-d_i^{issue})/365.25 \\)", "月末交易日与发行日之差（年），整体滞后一期。", "Difference between the month-end trading day and issue date, in years; lagged one month.",118,"trading_day_month, offering_date"),
    time2maturity: rule("\\( T2M_{i,t}=(d_i^{mat}-d_t)/365.25 \\)", "到期日与月末交易日之差（年），整体滞后一期。", "Difference between maturity and the month-end trading day, in years; lagged one month.",128,"trading_day_month, maturity"),
    size: rule("\\( SIZE_i=\\text{offering amount}_i \\)", "发行额；在因子拼接阶段写入。", "Issue offering amount, merged at the factor-assembly stage.","chars/s5_run4_Factor_Generating.py · L43-48","df_issues.offering_amt"),
    rating: rule("\\( RATING_{i,t}=\\operatorname{mean}(R^{Moody's}_{i,\\le t},R^{S\\&P}_{i,\\le t}) \\)", "取截至当日两家评级机构最新有效评级的数值编码均值；AAA/Aaa=1，向低评级递增；整体滞后一期。", "Mean of the latest valid Moody’s and S&P numeric ratings through date t; AAA/Aaa=1 and larger values indicate lower quality; lagged one month.",142,"rating history, rating_date; Moody’s and S&P mappings"),
    'VaR_5%': rule("\\( VaR^{5\\%}_{i,t}=-r_{i,(2:36),t-1} \\)", "过去 36 个月收益的第二个最小顺序统计量取负；至少 12 个有效观测，整体滞后一期。", "Negative second-smallest order statistic of the prior 36 monthly returns; at least 12 observations; lagged one month.",173,"monthly_return_winsorized"),
    'VaR_10%': rule("\\( VaR^{10\\%}_{i,t}=-r_{i,(4:36),t-1} \\)", "过去 36 个月收益的第四个最小顺序统计量取负；至少 12 个有效观测，整体滞后一期。", "Negative fourth-smallest order statistic of the prior 36 monthly returns; at least 12 observations; lagged one month.",173,"monthly_return_winsorized"),
    Amihud: rule("\\( ILLIQ_{i,t}=\\operatorname{mean}_{d\\in t} |r_{i,d}|/DVOL_{i,d} \\)", "日收益绝对值除以美元成交额的月均值；无有效日观测则缺失，整体滞后一期。", "Monthly mean of absolute daily return divided by dollar volume; missing with no valid daily observations; lagged one month.",190,"dirty_price, clean_price, principal_amt, entrd_vol_qt"),
    std_Amihud: rule("\\( SDILLIQ_{i,t}=\\operatorname{sd}_{d\\in t}(|r_{i,d}|/DVOL_{i,d}) \\)", "日度 Amihud 度量在月内的标准差，整体滞后一期。", "Within-month standard deviation of the daily Amihud measure; lagged one month.",252,"daily Amihud inputs"),
    Roll: rule("\\( ROLL_{i,t}=2\\sqrt{-\\operatorname{Cov}(r_{i,d},r_{i,d-1})} \\)", "仅当日收益一阶协方差为负时取该值，否则置零；月内少于 5 个有效日则缺失，整体滞后一期。", "Applied only when first-order daily-return covariance is negative, otherwise zero; missing with fewer than 5 valid days; lagged one month.",191,"daily dirty_price returns"),
    BPW: rule("\\( BPW_{i,t}=-\\operatorname{Cov}(r_{i,d},r_{i,d-1}) \\)", "月内日收益一阶协方差的相反数；少于 5 个有效日则缺失，整体滞后一期。", "Negative first-order covariance of daily returns; missing with fewer than 5 valid days; lagged one month.",199,"daily dirty_price returns"),
    P_HL: rule("\\( PHL_{i,t}=\\operatorname{mean}_{d\\in t}\\frac{2(e^{\\alpha_d}-1)}{1+e^{\\alpha_d}} \\)", "依 Corwin–Schultz 高低价估计量，以日内高低价比构造并按月平均；整体滞后一期。", "Corwin–Schultz high–low estimator computed from the daily high–low price ratio and averaged monthly; lagged one month.",205,"df_price_max, df_price_min"),
    TC_IQR: rule("\\( TCIQR_{i,t}=\\operatorname{mean}_{d\\in t}(P^{75}_{i,d}-P^{25}_{i,d})/P^{50}_{i,d} \\)", "日度价格分位数差相对中位价的月均值，整体滞后一期。", "Monthly mean of the daily interquartile price range scaled by the median price; lagged one month.",256,"df_price_25, df_price_50, df_price_75"),
    Range_daily: rule("\\( RANGE_{i,t}=\\operatorname{mean}_{d\\in t}(P^{max}_{i,d}-P^{min}_{i,d}) \\)", "日内最高价减最低价的月均值，整体滞后一期。", "Monthly mean of the daily maximum-minus-minimum price range; lagged one month.",261,"df_price_max, df_price_min"),
    trades: rule("\\( TRADES_{i,t}=\\sum_{d\\in t}1\\{\\text{trade}_{i,d}\\} \\)", "月内交易日期记录数，整体滞后一期。", "Count of trade-date records within the month; lagged one month.",270,"trd_exctn_dt"),
    turnover: rule("\\( TURN_{i,t}=10^{-6}\\,VOLUME_{i,t}/SIZE_i \\)", "月度成交量除以发行额后乘以 10^{-6}。", "Monthly volume divided by offering amount, multiplied by 10⁻⁶.","chars/s5_run4_Factor_Generating.py · L116","volume, size"),
    ytm: rule("\\( P=\\sum_j C(1+y/f)^{-n_j}+F(1+y/f)^{-n_0} \\)", "以脏价、票息、面值和剩余付息期数数值求解到期收益率。", "Yield to maturity solved numerically from dirty price, coupon cash flows, face value, and remaining coupon periods.",448,"approximate_price, accrued_interest, coupon, principal_amt, payment frequency"),
    duration: rule("\\( DUR=\\frac{1}{P}\\left[\\sum_j\\frac{C n_j}{(1+y/f)^{n_j}}+\\frac{F n_0}{(1+y/f)^{n_0}}\\right]\\frac{m}{12} \\)", "以代码中的贴现现金流权重计算久期，并按付息月数换算为年。", "Discounted-cash-flow duration calculated with the implementation’s cash-flow weights and converted to years by coupon-month frequency.",477,"YTM inputs and coupon schedule"),
    '1-month_mom': rule("\\( MOM1_{i,t}=r_{i,t-1} \\)", "上月 winsorized 月收益。", "Previous month’s winsorized monthly return.",421,"monthly_return_winsorized"),
    '6-month_mom': rule("\\( MOM6_{i,t}=\\prod_{k=2}^{6}(1+r_{i,t-k})-1 \\)", "6 个月窗口中剔除最近一期；不足 2 个有效观测则缺失。", "Six-month compounded return excluding the most recent observation; missing with fewer than 2 valid observations.",421,"monthly_return_winsorized"),
    '12-month_mom': rule("\\( MOM12_{i,t}=\\prod_{k=2}^{12}(1+r_{i,t-k})-1 \\)", "12 个月窗口中剔除最近一期；不足 3 个有效观测则缺失。", "Twelve-month compounded return excluding the most recent observation; missing with fewer than 3 valid observations.",421,"monthly_return_winsorized"),
    LTR_mom: rule("\\( LTR_{i,t}=\\prod_{k=13}^{48}(1+r_{i,t-k})-1 \\)", "48 个月窗口中剔除最近 12 个月；不足 6 个有效观测则缺失。", "Forty-eight-month compounded return excluding the most recent 12 months; missing with fewer than 6 valid observations.",421,"monthly_return_winsorized")
  };
  ["variance","skewness","kurtosis"].forEach((key) => { rules[key]=rolling(key.toUpperCase(),"过去 36 个月 winsorized 月收益的样本矩；至少 12 个有效观测，整体滞后一期。","Sample moment of prior 36 winsorized monthly returns; at least 12 observations; lagged one month."); });
  ["market_beta","default_beta","term_beta","liq_beta","drf_beta","crf_beta","lrf_beta","vix_beta","unc_beta"].forEach((key) => { rules[key]=rule(`\\( ${key}=\\widehat{\\beta}\\text{ from a 36-month OLS regression} \\)`,"以超额月收益为因变量的 36 个月滚动 OLS 系数；至少 12 个有效观测，整体滞后一期。","Coefficient from a 36-month rolling OLS of excess monthly returns; at least 12 observations; lagged one month.", key.includes("market")||key.includes("default")||key.includes("term") ? 300 : 339,"monthly_return_winsorized, risk-free return, relevant factor series"); });
  rules.market_residual_variance=rule("\\( VAR(\\hat{\\varepsilon}^{MKT}) \\)","市场因子回归残差的 36 个月方差，整体滞后一期。","36-month variance of market-model residuals; lagged one month.",312,"market-factor regression residuals");
  rules.term_default_residual_variance=rule("\\( VAR(\\hat{\\varepsilon}^{TERM,DEF}) \\)","TERM–DEF 回归残差的 36 个月方差，整体滞后一期。","36-month variance of TERM–DEF regression residuals; lagged one month.",323,"TERM and Default factor regression residuals");
  rules.COSKEW=rule("\\( COSKEW=\\widehat{\\beta}_{MKT^2} \\)","在 MKTbond、MKTbond² 与常数项回归中的二次项系数；36 个月窗口，整体滞后一期。","Coefficient on MKTbond² in a regression on MKTbond, MKTbond², and a constant; 36-month window; lagged one month.",391,"bond excess return, MKTbond, MKTbond²");
  rules.ISKEW=rule("\\( ISKEW=\\operatorname{skew}(\\hat{\\varepsilon}) \\)","上述 coskewness 回归残差的样本偏度；36 个月窗口，整体滞后一期。","Sample skewness of residuals from the coskewness regression; 36-month window; lagged one month.",391,"coskewness-regression residuals");
  rules.barQ=rule("\\( \\overline Q_{i,t}=\\operatorname{mean}_{d\\in t}Q_{i,d} \\)","月内日交易量均值，整体滞后一期。","Within-month mean daily trade volume; lagged one month.",244,"entrd_vol_qt");
  rules.std_barQ_1mom=rule("\\( SDQ_{i,t}=\\operatorname{sd}_{d\\in t}Q_{i,d} \\)","月内日交易量标准差，整体滞后一期。","Within-month standard deviation of daily trade volume; lagged one month.",245,"entrd_vol_qt");
  rules.range_monthly=rule("\\( RANGE^{M}_{i,t}=maxDaily_{i,t}-minDaily_{i,t} \\)","月度最大日收益减最小日收益。","Monthly maximum daily return minus minimum daily return.","chars/s5_run4_Factor_Generating.py · L143","max_daily, min_daily");
  rules.P_FHT=rule("\\( PFHT_{i,t}=2\\,\\Phi^{-1}[(1+PZeros_{i,t})/2]\\,VAR_{i,t} \\)","实现中由 P_Zeros 的正态分位数变换乘以 2 和收益方差构造。", "Implementation multiplies the normal-quantile transform of P_Zeros by 2 and return variance.","chars/s5_run4_Factor_Generating.py · L91","P_Zeros, variance");
  const step = (zh, en) => ({ zh, en });
  const attachSteps = (keys, steps) => keys.forEach((key) => { rules[key].steps = steps; });

  attachSteps(["ytm"], [
    step("以脏价减应计利息得到净价，并按票息频率列出剩余现金流。", "Convert dirty price to clean price and enumerate remaining cash flows at the coupon frequency."),
    step("对收益率方程作数值求根，得到与价格一致的到期收益率。", "Numerically solve the yield equation for the rate consistent with price."),
    step("将求得的月度收益率按付息频率年化，并将结果整体滞后一个月。", "Annualize using coupon frequency and lag the resulting characteristic by one month.")
  ]);
  attachSteps(["duration"], [
    step("使用同月求得的到期收益率贴现每一笔票息和本金现金流。", "Discount each coupon and principal cash flow using the contemporaneous solved yield."),
    step("以现金流时间加权的现值除以债券价格。", "Divide the time-weighted present value of cash flows by bond price."),
    step("按实现中的付息月数换算成年，并整体滞后一个月。", "Convert to years using the implementation's coupon-month convention and lag one month.")
  ]);
  attachSteps(["market_beta", "default_beta", "term_beta", "liq_beta", "drf_beta", "crf_beta", "lrf_beta", "vix_beta", "unc_beta"], [
    step("以债券月度超额收益为因变量，取相应因子和常数项。", "Use bond monthly excess return as the dependent variable with the relevant factor and a constant."),
    step("在过去 36 个月窗口内估计 OLS；有效观测少于 12 个时不报告。", "Estimate OLS over the prior 36 months; do not report with fewer than 12 valid observations."),
    step("将回归系数整体滞后一个月，以避免前视。", "Lag the fitted coefficient one month to avoid look-ahead.")
  ]);
  attachSteps(["COSKEW", "ISKEW"], [
    step("在 36 个月窗口内以 MKTbond、MKTbond 的平方和常数项估计回归。", "Estimate the 36-month regression on MKTbond, its square, and a constant."),
    step("COSKEW 取平方项系数；ISKEW 取该回归残差的样本偏度。", "COSKEW is the squared-factor coefficient; ISKEW is the sample skewness of these residuals."),
    step("结果整体滞后一个月。", "Lag the result one month.")
  ]);
  attachSteps(["P_FHT"], [
    step("以当月无交易天数占 30 天的比例构造 P_Zeros。", "Construct P_Zeros from the share of non-trading days in a 30-day month."),
    step("将 P_Zeros 映射为正态分位数，并与收益方差相乘。", "Map P_Zeros through a normal quantile and multiply by return variance."),
    step("该指标是实现中的联合估计输入，不是独立的 H-L 排序方向。", "This is a joint-estimation input in the implementation, not an independently sorted H-L direction.")
  ]);  window.SignalAtlasBondCalculations = { rules };
})();