import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import os

# ==========================================
# 1. MEMBACA FILE EXCEL
# ==========================================
path_file = "data.csv.xlsx" 
if not os.path.exists(path_file):
    path_file = "data exel/data.csv.xlsx"
if not os.path.exists(path_file):
    path_file = "../data.csv.xlsx"

print(f"[OK] Berhasil menemukan file: {path_file}")
df = pd.read_excel(path_file, sheet_name='perhitungan daily reveneu')

# Mengunci 305 data asli populasi harian awal
df = df.head(305)

# Kolom target analisis
kolom_analisis = 'Total Harga'
kolom_tanggal = 'TglBersih'

# ==========================================
# 2. PEMBERSIHAN DATA (MENGHAPUS NEGATIF / REFUND)
# ==========================================
# Memastikan bertipe numerik
df[kolom_analisis] = pd.to_numeric(df[kolom_analisis], errors='coerce')
df = df.dropna(subset=[kolom_analisis])

# Filter: Hanya mengambil pendapatan > 0 (membuang data negatif/refund)
df = df[df[kolom_analisis] > 0]

total_populasi = len(df)
print(f"[INFO] Total baris populasi bersih yang valid (> 0): {total_populasi} baris data.")

# ==========================================
# 3. EKSTRAKSI HARI DARI TANGGAL YANG TERSEDIA
# ==========================================
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

# ==========================================
# 4. PROSES SIMPLE RANDOM SAMPLING (SRS) 20%
# ==========================================
# Menggunakan frac=0.20 untuk mengambil 20% sampel acak secara keseluruhan
df_sampel_srs = df.sample(frac=0.20, random_state=42)
n_sampel_srs = len(df_sampel_srs)
print(f"[INFO] Sukses mengambil 20% sampel SRS ({n_sampel_srs} Data) dari total {total_populasi} populasi.")

# ==========================================
# 5. PERHITUNGAN STATISTIK DESKRIPTIF (TANPA RUPIAH)
# ==========================================
rata_populasi = df[kolom_analisis].mean()
std_populasi = df[kolom_analisis].std()
min_populasi = df[kolom_analisis].min()
max_populasi = df[kolom_analisis].max()

rata_srs = df_sampel_srs[kolom_analisis].mean()
std_srs = df_sampel_srs[kolom_analisis].std()
min_srs = df_sampel_srs[kolom_analisis].min()
max_srs = df_sampel_srs[kolom_analisis].max()

# Menghitung Standard Error (SE) untuk sampel SRS dengan Finite Population Correction (FPC)
fpc_factor = np.sqrt(1 - n_sampel_srs / total_populasi)
std_error_srs = (std_srs / np.sqrt(n_sampel_srs)) * fpc_factor


print("\n" + "="*55)
print("     HASIL ANALISIS STATISTIK: SIMPLE RANDOM SAMPLING     ")
print("="*55)
print(f"Rata-rata Pendapatan Populasi : {rata_populasi:,.2f}")
print(f"Rata-rata Pendapatan Sampel   : {rata_srs:,.2f}")
print(f"Standar Deviasi Populasi      : {std_populasi:,.2f}")
print(f"Standar Deviasi Sampel (s)    : {std_srs:,.2f}")
print(f"Standard Error Sampel (SE)    : {std_error_srs:,.2f}")
print(f"Nilai Minimum Populasi        : {min_populasi:,.2f}")
print(f"Nilai Minimum Sampel          : {min_srs:,.2f}")
print(f"Nilai Maksimum Populasi        : {max_populasi:,.2f}")
print(f"Nilai Maksimum Sampel          : {max_srs:,.2f}")
print("="*55)

# ==========================================
# 6. VISUALISASI KDE PLOT (POPULASI VS SRS)
# ==========================================
plt.figure(figsize=(10, 6))
sns.kdeplot(df[kolom_analisis], label='Populasi Data Utuh', color='blue', fill=True, alpha=0.3)
sns.kdeplot(df_sampel_srs[kolom_analisis], label=f'Sampel Acak SRS ({n_sampel_srs} Data)', color='red', linestyle='--')

plt.title(f'Analisis Distribusi {kolom_analisis}: Populasi vs Simple Random Sampling (20%)', fontsize=12)
plt.ticklabel_format(style='plain', axis='x') 
plt.xlabel('Nilai Pendapatan (Daily Revenue)')
plt.ylabel('Density')
plt.legend()

plt.show()
