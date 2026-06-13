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
# 4. PROSES STRATIFIED RANDOM SAMPLING 20% (ROBUST)
# ==========================================
# Mengelompokkan berdasarkan kolom 'Hari', lalu mengambil 20% acak dari setiap kelompok
df_sampel_strat = pd.DataFrame()
for hari_nama, group in df.groupby('Hari'):
    sampled_group = group.sample(frac=0.20, random_state=42)
    df_sampel_strat = pd.concat([df_sampel_strat, sampled_group])

n_sampel_strat = len(df_sampel_strat)
print(f"[INFO] Sukses mengambil 20% sampel Stratified ({n_sampel_strat} Data) dari total {total_populasi} populasi.")

# ==========================================
# 5. PERHITUNGAN STATISTIK DESKRIPTIF TOTAL (TANPA RUPIAH)
# ==========================================
rata_populasi = df[kolom_analisis].mean()
std_populasi = df[kolom_analisis].std()
min_populasi = df[kolom_analisis].min()
max_populasi = df[kolom_analisis].max()

rata_strat = df_sampel_strat[kolom_analisis].mean()
std_strat = df_sampel_strat[kolom_analisis].std()
min_strat = df_sampel_strat[kolom_analisis].min()
max_strat = df_sampel_strat[kolom_analisis].max()

# Menghitung Standard Error (SE) untuk sampel Stratified secara berstrata dengan FPC
var_strat_sum = 0
for hari_nama, group in df.groupby('Hari'):
    N_h = len(group)
    sampled_h = df_sampel_strat[df_sampel_strat['Hari'] == hari_nama]
    n_h = len(sampled_h)
    s_h2 = sampled_h[kolom_analisis].var() # sample variance
    W_h = N_h / total_populasi
    fpc_h = 1 - (n_h / N_h)
    var_strat_sum += (W_h**2) * fpc_h * (s_h2 / n_h)

std_error_strat = np.sqrt(var_strat_sum)


print("\n" + "="*55)
print("     HASIL ANALISIS STATISTIK: STRATIFIED SAMPLING (TOTAL)     ")
print("="*55)
print(f"Rata-rata Pendapatan Populasi : {rata_populasi:,.2f}")
print(f"Rata-rata Pendapatan Sampel   : {rata_strat:,.2f}")
print(f"Standar Deviasi Populasi      : {std_populasi:,.2f}")
print(f"Standar Deviasi Sampel (s)    : {std_strat:,.2f}")
print(f"Standard Error Sampel (SE)    : {std_error_strat:,.2f}")
print(f"Nilai Minimum Populasi        : {min_populasi:,.2f}")
print(f"Nilai Minimum Sampel          : {min_strat:,.2f}")
print(f"Nilai Maksimum Populasi        : {max_populasi:,.2f}")
print(f"Nilai Maksimum Sampel          : {max_strat:,.2f}")
print("="*55)

# ==========================================
# 6. PERHITUNGAN STATISTIK DESKRIPTIF PER HARI (STRATA)
# ==========================================
print("\n" + "="*85)
print("              PERBANDINGAN PARAMETER PER HARI (POPULASI vs SAMPEL)              ")
print("="*85)
print(f"{'Hari':<12} | {'Pop N':<6} | {'Samp n':<6} | {'Pop Mean':<12} | {'Samp Mean':<12} | {'Pop SD':<10} | {'Samp SD':<10}")
print("-"*85)

# Mengurutkan hari agar rapi
urutan_hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Minggu']

for hari in urutan_hari:
    # Populasi
    sub_pop = df[df['Hari'] == hari][kolom_analisis]
    n_pop = len(sub_pop)
    pop_mean = sub_pop.mean()
    pop_sd = sub_pop.std()
    
    # Sampel Stratified
    sub_samp = df_sampel_strat[df_sampel_strat['Hari'] == hari][kolom_analisis]
    n_samp = len(sub_samp)
    samp_mean = sub_samp.mean()
    samp_sd = sub_samp.std()
    
    print(f"{hari:<12} | {n_pop:<6} | {n_samp:<6} | {pop_mean:<12,.2f} | {samp_mean:<12,.2f} | {pop_sd:<10,.2f} | {samp_sd:<10,.2f}")

print("="*85)

# ==========================================
# 7. VISUALISASI KDE PLOT (POPULASI VS STRATIFIED)
# ==========================================
plt.figure(figsize=(10, 6))
sns.kdeplot(df[kolom_analisis], label='Populasi Data Utuh', color='blue', fill=True, alpha=0.3)
sns.kdeplot(df_sampel_strat[kolom_analisis], label=f'Sampel Stratified ({n_sampel_strat} Data)', color='green', linestyle='--')

plt.title(f'Analisis Distribusi {kolom_analisis}: Populasi vs Stratified Random Sampling (20%)', fontsize=12)
plt.ticklabel_format(style='plain', axis='x') 
plt.xlabel('Nilai Pendapatan (Daily Revenue)')
plt.ylabel('Density')
plt.legend()

plt.show()
