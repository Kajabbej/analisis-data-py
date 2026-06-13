import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import os

# ==========================================
# 1. MEMBACA FILE EXCEL ASLI ANDA
# ==========================================
path_file = "data.csv.xlsx" 
if not os.path.exists(path_file):
    path_file = "../data.csv.xlsx"

print(f"✅ Berhasil menemukan file: {path_file}")
df = pd.read_excel(path_file, sheet_name='perhitungan daily reveneu')

# Mengunci 305 data asli populasi harian
df = df.head(305)


# 2. MENGUNCI KOLOM TARGET (TOTAL HARGA)
kolom_analisis = 'Total Harga'
print(f"🎯 Kolom target analisis: '{kolom_analisis}'")

# Bersihkan data dari teks rusak atau baris kosong
df[kolom_analisis] = pd.to_numeric(df[kolom_analisis], errors='coerce')
df = df.dropna(subset=[kolom_analisis])

total_populasi = len(df)
print(f"📈 Total baris populasi yang valid: {total_populasi} baris data.")


# ==========================================
# 3. PROSES RANDOM SAMPLING (PANDAS - SET 20%)
# ==========================================
# Menggunakan parameter 'frac=0.20' untuk mengambil 20% secara otomatis
df_sampel = df.sample(frac=0.20, random_state=42)
n_sampel = len(df_sampel)

print(f"🎲 Sukses mengambil 20% sampel ({n_sampel} Data) dari total {total_populasi} populasi.")


# ==========================================
# 4. UJI STATISTIK MANUAL (SUDAH DITAMBAH SD & SE)
# ==========================================
rata_populasi = df[kolom_analisis].mean()
rata_sampel = df_sampel[kolom_analisis].mean()

# 1. Menghitung Standar Deviasi Sampel (s)
std_deviasi_sampel = df_sampel[kolom_analisis].std()

# 2. Menghitung Standar Error Sampel (SE)
std_error_sampel = std_deviasi_sampel / np.sqrt(n_sampel)

# 3. Menghitung Rumus t-test: t = (x_bar - mu) / SE
t_stat = (rata_sampel - rata_populasi) / std_error_sampel

print("="*45)
print("          HASIL ANALISIS STATISTIK          ")
print("="*45)
print(f"Rata-rata Pendapatan Populasi : Rp {rata_populasi:,.2f}")
print(f"Rata-rata Pendapatan Sampel   : Rp {rata_sampel:,.2f}")
print(f"Standar Deviasi Sampel (s)    :  {std_deviasi_sampel:,.2f} ")
print(f"Standar Error Sampel (SE)     :  {std_error_sampel:,.2f} ")
print(f"Nilai T-Statistic             : {t_stat:.4f}")
print("-"*45)

print("\n📢 KESIMPULAN UNTUK SLIDE PRESENTASI:")
# Menggunakan batas t-table 2.000 (untuk df sekitar 60 pada alpha 5% dua arah)
if -2.000 <= t_stat <= 2.000:
    print("Kesimpulan: GAGAL MENOLAK H0.")
    print("Artinya, secara statistik TIDAK ADA perbedaan signifikan antara sampel harian dan populasi.")
    print("Metode sampling acak kelompok kita VALID mencerminkan kondisi populasi!")
else:
    print("Kesimpulan: MENOLAK H0.")
    print("Artinya, ada perbedaan signifikan antara hasil sampling dengan populasi.")


# 5. VISUALISASI DISTRIBUSI (UNTUK SLIDE)
plt.figure(figsize=(10, 5))
sns.kdeplot(df[kolom_analisis], label='Populasi Data Utuh', color='blue', fill=True, alpha=0.3)
sns.kdeplot(df_sampel[kolom_analisis], label=f'Sampel Acak ({n_sampel} Data)', color='red', linestyle='--')

plt.title(f'Analisis Distribusi {kolom_analisis}: Populasi vs Sampel (20%)', fontsize=14)
plt.ticklabel_format(style='plain', axis='x') 
plt.xlabel('Nilai Pendapatan (Total Harga)')
plt.ylabel('Density')
plt.legend()

plt.savefig('distribusi_revenue_kelompok.png', dpi=300)
print("\n💾 Grafik sukses disimpan dengan nama 'distribusi_revenue_kelompok.png'")
plt.show()
