# LAPORAN ANALISIS STATISTIKA: UJI PERBANDINGAN METODE SAMPLING
## SIMPLE RANDOM SAMPLING vs STRATIFIED RANDOM SAMPLING PADA DATA PENDAPATAN HARIAN

---

## 1. Pendahuluan & Latar Belakang
Analisis ini bertujuan untuk membandingkan keterwakilan (*representativeness*) dari dua metode penarikan sampel acak sebesar **20%** dari data pendapatan harian (*daily revenue*) Online Retail:
1. **Simple Random Sampling (SRS)** 20% ($n = 61$)
2. **Stratified Random Sampling** 20% ($n = 60$) berbasis kelompok **Hari**

### 1.1 Spesifikasi Data & Pembersihan
* **Sumber Data**: Online Retail Dataset (UCI Machine Learning Repository).
* **Unit Analisis**: Pendapatan harian yang telah diagregasikan per tanggal operasional.
* **Volume Data Kasar**: 305 hari operasional.
* **Proses Pembersihan**:
  * Mengonversi kolom target `Total Harga` menjadi tipe data numerik.
  * Menghapus baris dengan data kosong (*missing values*).
  * **Membuang data bernilai negatif (refund/cancellation)** (filter `Total Harga > 0`) untuk menghindari distorsi rata-rata dan standar deviasi populasi.
* **Populasi Bersih ($N$)**: **304 Hari**.
* **Penggabungan Rentang Tahun**: Seluruh data transaksi dari **Desember 2010 hingga Desember 2011** langsung digabungkan menjadi satu populasi harian. Hari Senin di tahun 2010 dan 2011 dikelompokkan bersama ke dalam satu strata "Monday".
* **Ekstraksi Tanggal**: Kolom hari (`Hari`) diekstrak secara otomatis dari kolom tanggal `TglBersih` yang sudah tersedia di dataset menggunakan fungsi bawaan Pandas.

---

## 2. Metodologi Penarikan Sampel (20%)

### 2.1 Simple Random Sampling (SRS)
Metode ini mengambil 20% sampel harian ($n = 61$ hari) secara acak dari seluruh populasi 304 hari tanpa memperhatikan kategori atau kelompok hari. Setiap hari operasional memiliki peluang yang sama untuk terpilih.

### 2.2 Stratified Random Sampling (Sampling Berstrata)
Metode ini membagi populasi terlebih dahulu ke dalam 6 strata hari (Senin, Selasa, Rabu, Kamis, Jumat, Minggu — *Sabtu tidak terdata*). Dari masing-masing strata hari tersebut, diambil 20% sampel acak secara proporsional. Ini menghasilkan total $n = 60$ hari sampel yang dijamin mewakili setiap kategori hari secara adil.

### 2.3 Penyesuaian Standard Error (SE) & Finite Population Correction (FPC)
Dalam analisis ini, dilakukan dua penyesuaian statistika formal untuk meningkatkan presisi estimasi:
1. **Finite Population Correction (FPC)**: Karena ukuran sampel ($n \approx 60$) relatif besar dibandingkan ukuran populasi ($N = 304$) yaitu sekitar $20\%$ (jauh melebihi batas standar $5\%$), nilai *Standard Error* dikalikan dengan faktor koreksi $\sqrt{\frac{N-n}{N-1}}$ untuk meminimalkan bias estimasi pada populasi terbatas.
2. **Formula Standard Error Berstrata**: Alih-alih memperlakukan sampel berstrata seperti sampel acak sederhana (*Simple Random Sampling*), perhitungan SE untuk *Stratified Random Sampling* menggunakan penjumlahan variansi masing-masing strata secara tertimbang proporsional:
   $$\text{SE}_{\text{Stratified}} = \sqrt{ \sum_{h=1}^L \left(\frac{N_h}{N}\right)^2 \left(1 - \frac{n_h}{N_h}\right) \frac{s_h^2}{n_h} }$$

Dengan penyesuaian ini, estimasi tingkat kesalahan (*Standard Error*) menjadi lebih akurat secara akademis.

---

## 3. Hasil Perhitungan Statistik (Data Asli / Non-Rupiah)

Berikut adalah perbandingan parameter populasi terhadap hasil statistik kedua sampel dengan penyesuaian Standard Error:

### 3.1 Tabel Perbandingan Parameter Utama
| Parameter Statistik | Data Populasi (Sensus) | Sampel Simple Random (SRS) | Sampel Stratified |
| :--- | :---: | :---: | :---: |
| **Ukuran Data ($N$ atau $n$)** | $N = 304$ | $n = 61$ | $n = 60$ |
| **Rata-rata (Mean)** | 32,070.11 | 31,318.49 | 31,456.21 |
| **Standar Deviasi ($s$)** | 17,335.96 | 16,910.17 | 19,032.75 |
| **Standard Error ($SE$)** | - | 1,935.75 | 2,226.79 |
| **Nilai Minimum (Min)** | 3,457.11 | 4,137.62 | 6,134.57 |
| **Nilai Maksimum (Max)** | 112,141.11 | 75,244.43 | 112,141.11 |

*Catatan: Semua nilai di atas menggunakan angka desimal asli dari dataset (tidak diformat ke Rupiah) untuk menjaga orisinalitas data.*

### 3.2 Tabel Analisis Strata Hari (Khusus Stratified Sampling)
Tabel ini membandingkan Rata-rata (*Mean*) dan Standar Deviasi (*SD*) per kelompok hari antara populasi penuh dan sampel berstrata:

**Keterangan Kolom Tabel:**
* **Hari**: Kategori pengelompokan (strata) data berdasarkan nama hari.
* **Pop N**: Jumlah total hari operasional yang ada di data asli (Populasi).
* **Samp n**: Jumlah hari operasional yang terpilih sebagai sampel 20% melalui metode stratified.
* **Populasi Mean**: Rata-rata pendapatan harian asli dari data populasi untuk hari tersebut.
* **Sampel Mean**: Rata-rata pendapatan harian dari data sampel 20% untuk hari tersebut.
* **Populasi SD**: Nilai standar deviasi (sebaran/jarak simpangan pendapatan) pada data asli populasi.
* **Sampel SD**: Nilai standar deviasi (sebaran/jarak simpangan pendapatan) pada data sampel.

| Hari | Pop N | Samp n | Populasi Mean | Sampel Mean | Populasi SD | Sampel SD |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Senin** | 47 | 9 | 33,800.20 | 37,327.17 | 17,573.18 | 29,219.61 |
| **Selasa** | 52 | 10 | 37,811.21 | 33,851.66 | 17,836.12 | 18,028.97 |
| **Rabu** | 52 | 10 | 33,379.10 | 32,312.10 | 16,570.84 | 17,541.98 |
| **Kamis** | 53 | 11 | 39,858.85 | 36,130.45 | 16,308.23 | 17,260.91 |
| **Jumat** | 50 | 10 | 30,812.22 | 28,169.15 | 14,061.45 | 18,169.50 |
| **Minggu** | 50 | 10 | 16,113.58 | 21,066.42 | 10,243.06 | 11,025.08 |

### 3.3 Interpretasi Analitis Tabel Strata Hari

1. **Ukuran Sampel Proporsional (`Pop N` vs `Samp n`):**
   * Pembagian ukuran sampel ($n$) di setiap strata hari secara konsisten mengikuti proporsi $\approx 20\%$ dari ukuran populasi aslinya ($N$).
   * Contoh: Hari Kamis memiliki jumlah populasi terbanyak ($N = 53$) sehingga mendapatkan alokasi sampel terbesar yaitu $n = 11$. Hari Senin dengan populasi paling sedikit ($N = 47$) mendapat alokasi sampel terkecil yaitu $n = 9$. Ini membuktikan bahwa pembagian strata berjalan secara adil dan proporsional.

2. **Akurasi Rata-rata (`Pop Mean` vs `Samp Mean`):**
   * Rata-rata pendapatan harian tertinggi di populasi terjadi pada hari **Kamis** sebesar `39,858.85` dan di sampel terekam sebesar `36,130.45`.
   * Hari **Rabu** memiliki akurasi rata-rata terbaik dengan selisih populasi vs sampel yang sangat tipis, yaitu hanya sebesar `1,067.00` (`33,379.10` vs `32,312.10`).
   * Selisih mean terbesar terjadi pada hari **Senin**. Hal ini wajar dalam statistika karena ukuran sampel hari Senin yang kecil ($n = 9$) membuat nilai rata-rata sampelnya sangat sensitif terhadap pencilan (*outliers*).

3. **Penyimpangan Data (`Pop SD` vs `Samp SD`):**
   * **Standar Deviasi (SD)** mengukur seberapa jauh nilai data pendapatan harian menyebar dari rata-ratanya.
   * Di hari **Selasa, Rabu, Kamis, dan Minggu**, Standar Deviasi sampel sangat dekat dengan populasi aslinya. Hal ini menunjukkan bahwa dispersi (sebaran) data sampel mewakili dispersi data populasi secara akurat.
   * Hari **Senin** menunjukkan kenaikan SD sampel yang signifikan (`17,573.18` menjadi `29,219.61`). Hal ini menandakan bahwa dari 9 sampel acak hari Senin yang terambil, terdapat minimal satu transaksi bernilai ekstrim (*extreme value*) yang memperlebar rentang variabilitas sampel. 

---

## 4. Analisis Grafik Kerapatan Distribusi (KDE Plot)

### 4.1 Analisis Kurva Simple Random Sampling (`distribusi_pop_vs_srs.png`)
* **Bentuk Kurva:** Kurva sampel acak SRS (merah putus-putus) mengikuti bentuk umum kurva populasi (biru) dengan cukup baik.
* **Keterwakilan:** Karena diambil secara acak penuh dari keseluruhan, sampel SRS berhasil menangkap karakteristik pemusatan populasi (pada rentang 15,000 hingga 45,000). Namun, karena murni acak, nilai ekstrim tertinggi populasi (112,141.11) terlewatkan (maksimum sampel SRS hanya 75,244.43).

### 4.2 Analisis Kurva Stratified Random Sampling (`distribusi_pop_vs_stratified.png`)
* **Bentuk Kurva:** Kurva sampel Stratified (hijau putus-putus) menunjukkan kecocokan kelengkungan yang sangat presisi dengan kurva populasi (biru).
* **Keterwakilan:** Metode stratified berhasil menangkap variasi dari seluruh kelompok hari secara seimbang. Terbukti, nilai maksimum populasi (112,141.11) berhasil terjaring masuk ke dalam sampel karena penarikan sampel dilakukan di tiap sub-kelompok hari secara proporsional.

---

## 5. Walkthrough Kode Program (Code Explanation)

### 5.1 Penjelasan Kode `sampling_srs.py` (Simple Random Sampling)
Script ini dirancang untuk mengambil sampel acak sederhana 20% secara keseluruhan:
1. **Pembersihan Data:**
   ```python
   df[kolom_analisis] = pd.to_numeric(df[kolom_analisis], errors='coerce')
   df = df.dropna(subset=[kolom_analisis])
   df = df[df[kolom_analisis] > 0] # Filter data positif
   ```
   Bagian ini mengubah kolom target menjadi angka, menghapus baris kosong, dan membuang transaksi refund (nilai $\le 0$).
2. **Ekstraksi Hari:**
   ```python
   df[kolom_tanggal] = pd.to_datetime(df[kolom_tanggal])
   df['Hari'] = df[kolom_tanggal].dt.day_name()
   ```
   Membaca tanggal dari `TglBersih` dan mengekstrak nama harinya secara eksplisit ke kolom baru `Hari`.
3. **Penarikan Sampel SRS:**
   ```python
   df_sampel_srs = df.sample(frac=0.20, random_state=42)
   ```
   Menggunakan fungsi `.sample()` bawaan Pandas dengan proporsi `frac=0.20` (20%) dan `random_state=42` sebagai seed pengunci keacakan.
4. **Visualisasi KDE:**
   Membentuk perbandingan kurva Populasi (biru, fill=True) dan Sampel SRS (merah putus-putus) serta menyimpannya ke berkas `distribusi_pop_vs_srs.png`.

### 5.2 Penjelasan Kode `sampling_stratified.py` (Stratified Random Sampling)
Script ini dirancang untuk melakukan sampling acak berstrata berdasarkan hari:
1. **Logika Stratified Sampling (Berdasarkan Strata Hari):**
   ```python
   df_sampel_strat = pd.DataFrame()
   for hari_nama, group in df.groupby('Hari'):
       sampled_group = group.sample(frac=0.20, random_state=42)
       df_sampel_strat = pd.concat([df_sampel_strat, sampled_group])
   ```
   * Data dikelompokkan berdasarkan kolom `Hari` menggunakan `.groupby()`.
   * Loop `for` akan mengeksekusi setiap kelompok hari secara bergantian.
   * Fungsi `.sample(frac=0.20, random_state=42)` mengambil 20% data secara acak dari kelompok hari tersebut saja.
   * Fungsi `pd.concat()` menggabungkan kembali sampel-sampel kecil per hari tersebut menjadi satu DataFrame sampel utuh.
2. **Perhitungan Statistik per Strata:**
   Looping di atas daftar nama hari (`urutan_hari`) untuk mengambil sub-dataset populasi dan sub-dataset sampel stratified, kemudian menghitung Mean dan SD masing-masing hari untuk dicetak berdampingan di terminal.
3. **Visualisasi KDE:**
   Membuat visualisasi perbandingan kurva Populasi (biru) vs Sampel Stratified (hijau putus-putus) dan menyimpannya sebagai berkas `distribusi_pop_vs_stratified.png`.
