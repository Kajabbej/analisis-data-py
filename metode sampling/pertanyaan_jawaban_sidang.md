# DAFTAR PERTANYAAN & JAWABAN (Q&A) SIDANG METODE SAMPLING
## Simple Random Sampling vs Stratified Random Sampling (Daily Revenue Online Retail)

Dokumen ini disusun untuk membantu persiapan presentasi atau tanya jawab dengan Dosen Penguji mengenai metode penarikan sampel yang digunakan dalam analisis ini.

---

### **Pertanyaan 1: Mengapa Anda memilih "Hari" sebagai variabel strata dalam Stratified Random Sampling? Apa dasar pemikirannya?**
* **Jawaban**: 
  Pemilihan strata berdasarkan "Hari" didasarkan pada asumsi bisnis bahwa perilaku belanja pelanggan e-commerce memiliki pola siklus mingguan (*weekly cyclical pattern*). Dari data populasi terlihat ada perbedaan karakteristik pendapatan antar hari: misalnya hari Minggu memiliki rata-rata pendapatan terendah (`16.113,58`) sedangkan hari Kamis memiliki rata-rata tertinggi (`39.858,85`). 
  Jika kita menggunakan SRS (acak penuh), ada risiko hari Minggu atau hari Kamis tidak terwakili secara proporsional. Dengan menstratakan berdasarkan "Hari", kita menjamin bahwa sampel 20% yang diambil merepresentasikan setiap hari operasional secara adil dan proporsional.

---

### **Pertanyaan 2: Mengapa nilai Maksimum populasi (112.141,11) berhasil ditangkap oleh sampel Stratified, tetapi terlewat oleh sampel SRS (maksimumnya hanya 75.244,43)?**
* **Jawaban**: 
  Nilai maksimum populasi (`112.141,11`) merupakan sebuah pencilan (*outlier*) bernilai sangat tinggi yang terjadi pada hari tertentu (dalam kasus ini, hari Kamis). 
  * Pada **SRS**, penarikan sampel acak dilakukan secara global dari total 304 hari, sehingga peluang terpilihnya satu hari ekstrem tersebut sangat kecil. 
  * Pada **Stratified**, kita mengelompokkan data berdasarkan hari terlebih dahulu dan mengambil sampel dari masing-masing hari tersebut. Karena hari Kamis mendapatkan jatah sampel $n=11$ hari secara mandiri, peluang tertangkapnya hari ekstrem Kamis tersebut menjadi jauh lebih besar. Ini membuktikan metode Stratified lebih unggul dalam menjaga variabilitas rentang sebaran data populasi.

---

### **Pertanyaan 3: Mengapa Standard Error (SE) sampel Stratified (2.226,79) bernilai lebih besar daripada SE sampel SRS (1.935,75)? Bukankah secara teori Stratified Sampling harusnya lebih presisi?**
* **Jawaban**: 
  Secara teori, Stratified Sampling akan lebih presisi (SE lebih kecil) apabila variabilitas *antar* kelompok (strata) besar dan variabilitas *dalam* kelompok itu sendiri kecil (homogen). 
  Namun, pada data sampel kita, beberapa strata hari memiliki variabilitas dalam kelompok (*within-strata variance*) yang sangat tinggi—misalnya hari Senin memiliki Standar Deviasi sampel `29.219,61` (jauh lebih tinggi dari populasi hari Senin sebesar `17.573,18`). Karena ukuran sampel per hari cukup kecil ($n \approx 9$ hingga $11$), keberadaan pencilan tunggal dalam sampel acak harian tersebut dapat mendistorsi variansi strata tersebut dan menaikkan SE keseluruhan secara tertimbang.

---

### **Pertanyaan 4: Mengapa Anda menggunakan Finite Population Correction (FPC) dalam menghitung Standard Error? Kapan rumus koreksi ini wajib digunakan?**
* **Jawaban**: 
  FPC ($\sqrt{1 - n/N}$) digunakan untuk menyesuaikan (memperkecil) nilai Standard Error ketika kita mengambil sampel dari populasi yang terbatas tanpa pengembalian. 
  Secara aturan statistika, FPC **wajib digunakan** jika ukuran sampel ($n$) melebihi **5%** dari total populasi ($N$). Karena penelitian ini menggunakan ukuran sampel sebesar **20%** dari populasi ($n/N \approx 0,20$), penggunaan FPC sangat krusial. Tanpa FPC, kita akan menilai tingkat ketidakpastian sampel terlalu tinggi (*overestimate*).

---

### **Pertanyaan 5: Mengapa Anda membuang data transaksi yang bernilai negatif sebelum melakukan sampling? Apa dampaknya jika data tersebut dibiarkan?**
* **Jawaban**: 
  Data dengan `Total Harga` negatif menunjukkan adanya transaksi pembatalan (*cancellations*) atau pengembalian barang (*refunds*). 
  Data tersebut harus dibuang karena tujuan analisis kita adalah mengukur **keterwakilan rata-rata pendapatan harian operasional aktif**. Jika nilai negatif dibiarkan tetap masuk, nilai rata-rata (*mean*) populasi harian akan terdistorsi (bias ke bawah) dan sebaran data (*standar deviasi*) akan melebar secara buatan karena adanya gap ekstrem dari nilai negatif tersebut.
