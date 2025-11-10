# Calculate HSZ Replicating Anomalies
# ABR: Cumulative abnormal stock returns around earnings announcements

import pandas as pd
import numpy as np
import datetime as dt
import wrds
from dateutil.relativedelta import *
from pandas.tseries.offsets import *
import pyarrow.feather as feather
import sqlite3
from datetime import datetime
import os

###################
# Connect to WRDS #
###################
conn = wrds.Connection()
print(f"Connected to WRDS successfully!")

# Create output directory for yearly files
output_dir = 'abr_yearly'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
    print(f"Created directory: {output_dir}")

# Define year range
start_year = 1959
end_year = datetime.now().year

# Process year by year
for year in range(start_year, end_year + 1):
    print(f"\n{'='*20} Processing year {year} {'='*20}")
    
    # Check if this year was already processed
    output_file = os.path.join(output_dir, f'abr_{year}.feather')
    if os.path.exists(output_file):
        print(f"Year {year} already processed, skipping...")
        continue
    
    year_start = f'01/01/{year}'
    year_end = f'12/31/{year}'
    
    try:
        ###################
        # Compustat Block #
        ###################
        comp = conn.raw_sql(f"""
                            select gvkey, datadate, rdq, fyearq, fqtr
                            from comp.fundq
                            where indfmt = 'INDL' 
                            and datafmt = 'STD'
                            and popsrc = 'D'
                            and consol = 'C'
                            and datadate >= '{year_start}'
                            and datadate <= '{year_end}'
                            """)
        
        if comp.empty:
            print(f"No Compustat data for {year}, skipping...")
            continue
        
        comp['datadate'] = pd.to_datetime(comp['datadate'])
        
        print('='*10, f'comp data ready for {year}', '='*10)
        
        ###################
        #    CCM Block    #
        ###################
        ccm = conn.raw_sql("""
                          select gvkey, lpermno as permno, linktype, linkprim, 
                          linkdt, linkenddt
                          from crsp.ccmxpf_linktable
                          where linktype in ('LU', 'LC', 'LS')
                          and (linkprim ='C' or linkprim='P')
                          """, date_cols=['linkdt', 'linkenddt'])
        
        # if linkenddt is missing then set to today date
        ccm['linkenddt'] = ccm['linkenddt'].fillna(pd.to_datetime('today'))
        
        ccm1 = pd.merge(comp, ccm, how='left', on=['gvkey'])
        # extract month and year of rdq
        ccm1['rdq'] = pd.to_datetime(ccm1['rdq'])
        
        # set link date bounds
        ccm2 = ccm1[(ccm1['datadate'] >= ccm1['linkdt']) &
                    (ccm1['datadate'] <= ccm1['linkenddt'])]
        ccm2 = ccm2[['gvkey', 'datadate', 'rdq', 'fyearq', 'fqtr', 'permno']]
        
        if ccm2.empty:
            print(f"No CCM data for {year}, skipping...")
            continue
        
        print('='*10, f'ccm data ready for {year}', '='*10)
        
        ###################
        #    CRSP Block   #
        ###################
        # Expand date range to include lookback/forward periods
        crsp_start = f'01/01/{year-1}' if year > 1959 else year_start
        crsp_end = f'12/31/{year+1}'
        
        sql = f"""
        select distinct
            a.dlycaldt    as dlycaldt,
            c.dlyprcret   as sprtrn
        from crspq.inddlyseriesdata_ind as a
        left join crspq.inddlyseriesdata_ind as b
            on a.dlycaldt = b.dlycaldt and b.indno = 1000201
        left join crspq.inddlyseriesdata_ind as c
            on a.dlycaldt = c.dlycaldt and c.indno = 1000502
        where a.indno = 1000200
          and a.dlycaldt >= '{crsp_start}'
          and a.dlycaldt <= '{crsp_end}'
        order by a.dlycaldt
        """
        crsp_data = conn.raw_sql(sql, date_cols=['dlycaldt']).drop_duplicates()
        
        crsp_dsi = crsp_data[['dlycaldt']].rename(columns={'dlycaldt': 'date'})
        
        ccm3 = ccm2.copy()
        for i in range(6):
            ccm3['trad_%s' % i] = ccm3['rdq'] + pd.DateOffset(days=i)
            crsp_dsi['trad_%s' % i] = crsp_dsi['date']
            crsp_dsi = crsp_dsi[['date', 'trad_%s' % i]]
            ccm3 = pd.merge(ccm3, crsp_dsi, how='left', on='trad_%s' % i)
            ccm3['trad_%s' % i] = ccm3['date']
            ccm3 = ccm3.drop(['date'], axis=1)
        
        for i in range(5, 0, -1):
            count = i-1
            ccm3['trad_%s' % count] = np.where(
                ccm3['trad_%s' % count].isnull(), ccm3['trad_%s' % i], ccm3['trad_%s' % count])
        
        ccm3['rdq_trad'] = ccm3['trad_0']
        ccm3 = ccm3[['gvkey', 'permno', 'datadate',
                     'fyearq', 'fqtr', 'rdq', 'rdq_trad']]
        
        print('='*10, f'crsp block ready for {year}', '='*10)
        
        #############################
        #    CRSP abnormal return   #
        #############################
        crsp_d = conn.raw_sql(f"""
                              select a.dlyprc, a.dlyret, a.dlyvol,
                              a.shrout, a.dlycumfacpr, a.dlycumfacshr, a.permno, a.permco, a.dlycaldt,
                              a.cusip, a.hdrcusip, a.siccd
                              from crspq.dsf_v2 as a
                              where a.dlycaldt >= '{crsp_start}'
                              and a.dlycaldt <= '{crsp_end}'
                              and a.primaryexch IN ('N', 'A', 'Q')
                              and a.conditionaltype = 'RW'
                              and a.tradingstatusflg = 'A'
                              """, date_cols=['dlycaldt'])
        
        crsp_d.rename(columns={'dlyprc': 'prc', 'dlyret': 'ret', 'dlycaldt': 'date',
                               'dlycumfacpr': 'cfacpr', 'dlycumfacshr': 'cfacshr',
                               'cusip': 'cusip_crsp'}, inplace=True)
        
        crsp_d[['permco', 'permno']] = crsp_d[['permco', 'permno']].astype(int)
        crsp_d['date'] = pd.to_datetime(crsp_d['date'])
        crsp_d['meq'] = crsp_d['prc']*crsp_d['shrout']
        crsp_d = crsp_d.sort_values(by=['date', 'permno', 'meq'])
        
        crspsp500d = crsp_data[['dlycaldt', 'sprtrn']].rename(columns={'dlycaldt': 'date'})
        
        crsp_d = pd.merge(crsp_d, crspsp500d, how='left', on='date')
        crsp_d['abrd'] = crsp_d['ret'] - crsp_d['sprtrn']
        crsp_d = crsp_d[['date', 'permno', 'ret', 'sprtrn', 'abrd']]
        
        print('='*10, f'crsp abnormal return ready for {year}', '='*10)
        
        # date count regarding to rdq
        ccm3['minus10d'] = ccm3['rdq_trad'] - pd.Timedelta(days=10)
        ccm3['plus5d'] = ccm3['rdq_trad'] + pd.Timedelta(days=5)
        
        sql_conn = sqlite3.connect(':memory:')
        ccm3.to_sql('ccm3', sql_conn, index=False)
        crsp_d.to_sql('crsp_d', sql_conn, index=False)
        
        qry = """select a.*, b.date, b.abrd 
                      from ccm3 a left join crsp_d b 
                      on a.permno=b.permno 
                      and a.minus10d<=b.date 
                      and b.date<=a.plus5d 
                      order by a.permno, a.rdq_trad, b.date;"""
        df = pd.read_sql_query(qry, sql_conn)
        df.drop(['plus5d', 'minus10d'], axis=1, inplace=True)
        
        # delete missing return
        df = df[df['abrd'].notna()]
        
        if df.empty:
            print(f"No data after merging for {year}, skipping...")
            sql_conn.close()
            continue
        
        # count
        df.sort_values(by=['permno', 'rdq_trad', 'date'], inplace=True)
        condlist = [df['date'] == df['rdq_trad'],
                    df['date'] > df['rdq_trad'],
                    df['date'] < df['rdq_trad']]
        choicelist = [0, 1, -1]
        df['c_1'] = np.select(condlist, choicelist, default=np.nan)
        
        df_before = df[df['c_1'] == -1].copy()
        df_before['count'] = (df_before.groupby(['permno', 'rdq_trad'])[
                              'date'].cumcount(ascending=False) + 1) * -1
        
        df_after = df[df['c_1'] >= 0].copy()
        df_after['count'] = df_after.groupby(['permno', 'rdq_trad'])['date'].cumcount()
        
        df = pd.concat([df_before, df_after])
        
        df = df[(df['count'] >= -2) & (df['count'] <= 1)]
        
        df_temp = df.groupby(['permno', 'rdq_trad'])['abrd'].sum()
        df_temp = pd.DataFrame(df_temp)
        df_temp.reset_index(inplace=True)
        df_temp.rename(columns={'abrd': 'abr'}, inplace=True)
        df = pd.merge(df, df_temp, how='left', on=[
                      'permno', 'rdq_trad'], copy=False)
        df = df[df['count'] == 1]
        df.rename(columns={'date': 'rdq_plus_1d'}, inplace=True)
        df = df[['gvkey', 'permno', 'datadate', 'rdq', 'rdq_plus_1d', 'abr']]
        
        print('='*10, f'start populate for {year}', '='*10)
        
        # populate the quarterly abr to monthly
        crsp_msf = conn.raw_sql(f"""
                                select distinct mthcaldt
                                from crspq.msf_v2
                                where mthcaldt >= '{crsp_start}'
                                and mthcaldt <= '{crsp_end}'
                                """)
        crsp_msf.rename(columns={'mthcaldt': 'date'}, inplace=True)
        
        df['datadate'] = pd.to_datetime(df['datadate'])
        df['plus12m'] = df['datadate'] + np.timedelta64(12, 'M')
        df['plus12m'] = df['plus12m'] + MonthEnd(0)
        
        df.to_sql('df', sql_conn, index=False, if_exists='replace')
        crsp_msf.to_sql('crsp_msf', sql_conn, index=False, if_exists='replace')
        
        qry = """select a.*, b.date
                      from df a left join crsp_msf b 
                      on a.rdq_plus_1d < b.date
                      and a.plus12m >= b.date
                      order by a.permno, b.date, a.datadate desc;"""
        
        df = pd.read_sql_query(qry, sql_conn)
        
        df = df.drop_duplicates(['permno', 'date'])
        df['datadate'] = pd.to_datetime(df['datadate'])
        df['rdq'] = pd.to_datetime(df['rdq'])
        df['rdq_plus_1d'] = pd.to_datetime(df['rdq_plus_1d'])
        df = df[['gvkey', 'permno', 'datadate', 'rdq', 'rdq_plus_1d', 'abr', 'date']]
        df = df.dropna(subset=['date'])
        
        # Close SQLite connection
        sql_conn.close()
        
        # Save yearly result to file
        if not df.empty:
            feather.write_feather(df, output_file)
            print(f"Year {year} completed: {len(df)} records saved to {output_file}")
        else:
            print(f"No final data for {year}")
    
    except Exception as e:
        print(f"Error processing year {year}: {str(e)}")
        continue

# Combine all yearly files
print(f"\n{'='*20} Combining all years {'='*20}")
yearly_files = sorted([f for f in os.listdir(output_dir) if f.startswith('abr_') and f.endswith('.feather')])

if yearly_files:
    all_dfs = []
    for file in yearly_files:
        file_path = os.path.join(output_dir, file)
        df_year = feather.read_feather(file_path)
        all_dfs.append(df_year)
        print(f"Loaded {file}: {len(df_year)} records")
    
    # Combine all dataframes
    final_df = pd.concat(all_dfs, ignore_index=True)
    final_df = final_df.drop_duplicates()
    final_df = final_df.sort_values(by=['permno', 'date', 'datadate'])
    
    print(f"\nTotal records after combining: {len(final_df)}")
    
    # Save to final feather file
    feather.write_feather(final_df, 'abr.feather')
    print("Successfully saved to abr.feather")
    
    # Optionally, clean up yearly files
    # Uncomment the following lines if you want to delete yearly files after combining
    # for file in yearly_files:
    #     os.remove(os.path.join(output_dir, file))
    # os.rmdir(output_dir)
else:
    print("No yearly files found!")

# close the connection
conn.close()