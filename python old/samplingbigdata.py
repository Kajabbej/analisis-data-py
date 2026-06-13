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

df = df[df[kolom_analisis] > 0]

# Bersihkan data dari teks rusak atau baris kosong
df[kolom_analisis] = pd.to_numeric(df[kolom_analisis], errors='coerce')
df = df.dropna(subset=[kolom_analisis])

total_populasi = len(df)
print(f"📈 Total baris data populasi utuh yang valid (di atas 0): {total_populasi} baris data.")


# ==========================================
# 3. ANALISIS DESKRIPTIF TOTAL (SENSUS)
# ==========================================
# Karena menggunakan semua data, kita tidak menghitung t-test, melainkan parameter populasi riil
rata_populasi = df[kolom_analisis].mean()
std_populasi = df[kolom_analisis].std()
min_pendapatan = df[kolom_analisis].min()
max_pendapatan = df[kolom_analisis].max()

# Menghitung Standard Error Populasi (SE) untuk menjawab pertanyaan Dosen
std_error_populasi = std_populasi / np.sqrt(total_populasi)

print("="*45)
print("     HASIL ANALISIS SENSUS DATA UTUH        ")
print("="*45)
print(f"Rata-rata Pendapatan (Mu)    : {rata_populasi:,.2f}")
print(f"Standar Deviasi (Sigma)      : {std_populasi:,.2f}")
print(f"Standard Error Total (SE)    : {std_error_populasi:,.2f}")
print(f"Pendapatan Terendah Harian   : {min_pendapatan:,.2f}")
print(f"Pendapatan Tertinggi Harian  : {max_pendapatan:,.2f}")
print("-"*45)


# ==========================================
# 4. VISUALISASI DISTRIBUSI TUNGGAL POPULASI
# ==========================================
plt.figure(figsize=(10, 5))

# Hanya menampilkan 1 kurva tunggal karena data dipakai semua 100%
sns.kdeplot(df[kolom_analisis], label='Distribusi Pendapatan Riil (305 Hari)', color='blue', fill=True, alpha=0.4)

# Tambahkan garis vertikal rata-rata sebagai jangkar visual
plt.axvline(rata_populasi, color='red', linestyle='--', linewidth=2, label=f'Rata-rata: {rata_populasi:,.2f}')


plt.title(f'Analisis Karakteristik Distribusi {kolom_analisis} (Sensus Total)', fontsize=14)
plt.ticklabel_format(style='plain', axis='x') 
plt.xlabel('Nilai Pendapatan (Total Harga)')
plt.ylabel('Density')
plt.legend()

plt.savefig('distribusi_revenue_sensus_total.png', dpi=300)
print("\n💾 Grafik sukses disimpan dengan nama 'distribusi_revenue_sensus_total.png'")
plt.show()
