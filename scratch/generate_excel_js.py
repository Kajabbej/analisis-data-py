import pandas as pd
import numpy as np
import json
import os

path_file = "data.csv.xlsx" 
if not os.path.exists(path_file):
    path_file = "data exel/data.csv.xlsx"

print(f"Reading file: {path_file}")
df = pd.read_excel(path_file, sheet_name='perhitungan daily reveneu')

# Head 305 to match original daily revenue population rows (excluding Excel summary rows)
df = df.head(305)

kolom_analisis = 'Total Harga'
kolom_tanggal = 'TglBersih'

df[kolom_analisis] = pd.to_numeric(df[kolom_analisis], errors='coerce')
df = df.dropna(subset=[kolom_analisis])

# Filter: hanya mengambil pendapatan > 0 (membuang data negatif/refund/cancellation)
df = df[df[kolom_analisis] > 0]

# Add Day name
df[kolom_tanggal] = pd.to_datetime(df[kolom_tanggal])
kamus_hari = {
    'Monday': 'Senin',
    'Tuesday': 'Selasa',
    'Wednesday': 'Rabu',
    'Thursday': 'Kamis',
    'Friday': 'Jumat',
    'Sunday': 'Minggu'
}
df['Hari'] = df[kolom_tanggal].dt.day_name().map(kamus_hari)

# Format rows for JSON output
def get_clean_records(dataframe):
    records = []
    for idx, row in dataframe.iterrows():
        records.append({
            "Tanggal": row[kolom_tanggal].strftime("%Y-%m-%d"),
            "TotalHarga": float(row[kolom_analisis]),
            "JumlahTransaksi": int(row['Jumlah Transaksi']) if 'Jumlah Transaksi' in row and not pd.isna(row['Jumlah Transaksi']) else 0,
            "Hari": row['Hari']
        })
    return records

population_records = get_clean_records(df)

# 1. Simple Random Sampling (SRS) 20%
df_srs = df.sample(frac=0.20, random_state=42)
srs_records = get_clean_records(df_srs)

# 2. Stratified Random Sampling 20%
df_strat = pd.DataFrame()
for hari_nama, group in df.groupby('Hari'):
    sampled_group = group.sample(frac=0.20, random_state=42)
    df_strat = pd.concat([df_strat, sampled_group])
stratified_records = get_clean_records(df_strat)

# Write to data_excel.js
output_content = f"""// Dataset harian hasil pembersihan (perhitungan daily reveneu)
const excelDataset = {json.dumps(population_records, indent=2)};

// Hasil Simple Random Sampling (SRS) 20% (n = 61)
const srsDataset = {json.dumps(srs_records, indent=2)};

// Hasil Stratified Random Sampling 20% (n = 60)
const stratifiedDataset = {json.dumps(stratified_records, indent=2)};
"""

with open("data_excel.js", "w", encoding="utf-8") as f:
    f.write(output_content)

print("Successfully written datasets to data_excel.js")
print(f"Population: {len(population_records)} rows")
print(f"SRS: {len(srs_records)} rows")
print(f"Stratified: {len(stratified_records)} rows")
