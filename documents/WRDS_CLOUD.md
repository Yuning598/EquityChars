# `chars_ciz`：WRDS Cloud 与本地完整运行流程

本流程使用 WRDS 账号 `phd22jm`。`chars_ciz` 使用本地项目中的
`data/raw/` 和 `data/processed/`；不要与 `data_monthly/` 混用。

## 1. 首次上传（本地终端）

在本地项目根目录执行：

```bash
scp -r chars_ciz phd22jm@wrds-cloud.wharton.upenn.edu:~/
scp postgres_scanner.duckdb_extension \
  phd22jm@wrds-cloud.wharton.upenn.edu:~/chars_ciz/
```

以后增量同步：

```bash
rsync -av \
  --exclude '__pycache__/' \
  --exclude 'download_data.py' \
  chars_ciz/ \
  phd22jm@wrds-cloud.wharton.upenn.edu:~/chars_ciz/
```

排除 `download_data.py` 是为了保留 WRDS Cloud 上的扩展路径修改。如果重新
上传该文件，需要再次执行下一节。

## 2. 配置 DuckDB 扩展（WRDS login 节点）

```bash
ssh phd22jm@wrds-cloud.wharton.upenn.edu
cd ~/chars_ciz
ls -lh ./postgres_scanner.duckdb_extension
```

本地底代码使用 `INSTALL postgres; LOAD postgres;`，但 Cloud 需要加载已上传的
扩展文件。执行：

```bash
python - <<'PY'
from pathlib import Path

path = Path("download_data.py")
text = path.read_text()
replacement = 'con.execute("LOAD \'./postgres_scanner.duckdb_extension\';")'
for old in (
    'con.execute("INSTALL postgres; LOAD postgres;")',
    'con.execute("LOAD \'postgres_scanner.duckdb_extension\';")',
):
    text = text.replace(old, replacement)
path.write_text(text)
PY
```

检查四处加载语句，必须包含 `./`：

```bash
grep -n "LOAD.*postgres" download_data.py
```

正确形式：

```python
con.execute("LOAD './postgres_scanner.duckdb_extension';")
```

## 3. 在计算节点下载原始数据

不能在 `wrds-cloud-login` 节点直接运行下载。申请交互式计算节点：

```bash
qrsh
hostname
```

主机名应变为类似 `wrds-sas14-w`，然后运行：

```bash
cd ~/chars_ciz
python download_data.py
```

输入 `phd22jm` 的 WRDS 密码。主程序从 `2024-01-01` 开始下载，结果写入
`~/data/raw/`。完成后检查并退出计算节点：

```bash
ls -lh ~/data/raw/
exit
```

预期原始 Parquet：

```text
ccm.parquet
comp_funda.parquet
comp_fundq.parquet
crsp_dsf.parquet
crsp_ind.parquet
crsp_msf.parquet
ibes.parquet
```

## 4. 运行 `iclink_ciz.sas`（WRDS login 节点）

返回 login 节点后提交：

```bash
cd ~/chars_ciz
qsas iclink_ciz.sas
qstat
```

`qstat` 查看任务；需要取消时运行：

```bash
qdel JOB_NUMBER
```

任务完成后检查：

```bash
ls -lh ~/chars_ciz/iclink_ciz.csv
```

若文件不存在，应先检查 SAS 日志，不要继续运行 `myre.py`。

## 5. 下载回本地

先退出 WRDS Cloud：

```bash
exit
```

在本地项目根目录执行：

```bash
mkdir -p data/raw data/processed

rsync -av \
  phd22jm@wrds-cloud.wharton.upenn.edu:~/data/raw/ \
  data/raw/

scp \
  phd22jm@wrds-cloud.wharton.upenn.edu:~/chars_ciz/iclink_ciz.csv \
  data/raw/iclink_ciz.csv
```

检查八个输入：

```bash
ls -lh \
  data/raw/ccm.parquet \
  data/raw/comp_funda.parquet \
  data/raw/comp_fundq.parquet \
  data/raw/crsp_dsf.parquet \
  data/raw/crsp_ind.parquet \
  data/raw/crsp_msf.parquet \
  data/raw/ibes.parquet \
  data/raw/iclink_ciz.csv
```

## 6. 本地继续计算其他特征

以下脚本全部在本地运行，不需要登录 WRDS：

```bash
cd chars_ciz
mkdir -p logs
set -o pipefail

python accounting.py 2>&1 | tee logs/accounting.log
python rolling_chars.py 2>&1 | tee logs/rolling_chars.log
python abr.py 2>&1 | tee logs/abr.log
python sue.py 2>&1 | tee logs/sue.log
python myre.py 2>&1 | tee logs/myre.log
python merge_chars.py 2>&1 | tee logs/merge_chars.log
python impute_rank_output.py 2>&1 | tee logs/impute_rank_output.log
```

执行顺序说明：

1. `accounting.py` 生成年度和季度会计特征。
2. `rolling_chars.py` 一次生成全部日频滚动特征。
3. `abr.py`、`sue.py` 和 `myre.py` 生成三个独立特征。
4. `myre.py` 必须能读取 `data/raw/iclink_ciz.csv`。
5. `merge_chars.py` 合并会计、滚动和三个独立特征，生成年度与季度 raw 文件。
6. `impute_rank_output.py` 合并年度/季度数据并生成最终原始、填补和排序结果。

## 7. 检查本地结果

```bash
cd ..
ls -lh data/processed/
```

中间结果包括：

```text
chars_a_accounting.parquet
chars_q_accounting.parquet
rolling_chars.parquet
abr.parquet
sue.parquet
myre.parquet
chars_a_raw.parquet
chars_q_raw.parquet
```

最终结果包括：

```text
chars_raw_no_impute.parquet
chars_raw_imputed.parquet
chars_rank_no_impute.parquet
chars_rank_imputed.parquet
```

检查各文件行列数：

```bash
python - <<'PY'
from pathlib import Path
import polars as pl

for path in sorted(Path("data/processed").glob("*.parquet")):
    scan = pl.scan_parquet(path)
    schema = scan.collect_schema()
    rows = scan.select(pl.len()).collect().item()
    print(f"{path.name}: rows={rows:,}, columns={len(schema)}")
PY
```

`size_grp` 会由最新版 `accounting.py` 计算，并经 `merge_chars.py` 和
`impute_rank_output.py` 保留到最终结果。

## 位置速查

| 工作 | 执行位置 | 命令 |
| --- | --- | --- |
| 上传代码与扩展 | 本地 | `scp` / `rsync` |
| 配置扩展路径 | WRDS login 节点 | 第 2 节命令 |
| 下载 WRDS 数据 | `qrsh` 计算节点 | `python download_data.py` |
| 生成 ICLINK | WRDS login 节点 | `qsas iclink_ciz.sas` |
| 查看/取消任务 | WRDS login 节点 | `qstat` / `qdel` |
| 下载 Cloud 结果 | 本地 | `rsync` / `scp` |
| 计算及合并全部特征 | 本地 | 第 6 节七个 Python 脚本 |
