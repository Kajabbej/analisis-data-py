import pandas as pd
import json

file_path = "data exel/data.csv.xlsx"
print("Reading 'perhitungan daily reveneu' sheet...")
df = pd.read_excel(file_path, sheet_name='perhitungan daily reveneu')

# Clean columns
df = df.dropna(how='all', axis=1) # Drop completely empty columns
df.columns = [col.strip() for col in df.columns]

# Drop rows where TglBersih is null
df = df.dropna(subset=['TglBersih'])

# Keep only rows where TglBersih can be parsed as a valid datetime
df['ParsedDate'] = pd.to_datetime(df['TglBersih'], errors='coerce')
df = df.dropna(subset=['ParsedDate'])

# Rename columns to clean names
df.rename(columns={
    'TglBersih': 'Tanggal',
    'Total Harga': 'TotalHarga',
    'Jumlah Transaksi': 'JumlahTransaksi'
}, inplace=True)

# Format date column and numbers
df['Tanggal'] = df['ParsedDate'].dt.strftime('%Y-%m-%d')
df['TotalHarga'] = df['TotalHarga'].round(2)
df['JumlahTransaksi'] = df['JumlahTransaksi'].astype(int)

# Select columns to export
df_export = df[['Tanggal', 'TotalHarga', 'JumlahTransaksi']]

# Convert to records
records = df_export.to_dict(orient='records')

output_path = "data_excel.js"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write("// Dataset harian hasil pembersihan (perhitungan daily reveneu)\n")
    f.write("const excelDataset = ")
    json.dump(records, f, indent=2)
    f.write(";\n")

print(f"Successfully converted {len(records)} daily revenue records and saved to {output_path}")
