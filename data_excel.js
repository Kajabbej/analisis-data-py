// Dataset harian hasil pembersihan (perhitungan daily reveneu)
const excelDataset = [
  {
    "Tanggal": "2010-12-01",
    "TotalHarga": 58635.56000000026,
    "JumlahTransaksi": 3108,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2010-12-02",
    "TotalHarga": 46207.27999999991,
    "JumlahTransaksi": 2109,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2010-12-03",
    "TotalHarga": 45620.4599999999,
    "JumlahTransaksi": 2202,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2010-12-05",
    "TotalHarga": 31383.95000000016,
    "JumlahTransaksi": 2725,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2010-12-06",
    "TotalHarga": 53860.180000000015,
    "JumlahTransaksi": 3878,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2010-12-07",
    "TotalHarga": 45059.05000000015,
    "JumlahTransaksi": 2963,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2010-12-08",
    "TotalHarga": 44189.839999999866,
    "JumlahTransaksi": 2647,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2010-12-09",
    "TotalHarga": 52532.13000000003,
    "JumlahTransaksi": 2891,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2010-12-10",
    "TotalHarga": 57404.91000000017,
    "JumlahTransaksi": 2758,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2010-12-12",
    "TotalHarga": 17240.92000000005,
    "JumlahTransaksi": 1451,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2010-12-13",
    "TotalHarga": 35379.34000000009,
    "JumlahTransaksi": 2283,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2010-12-14",
    "TotalHarga": 42843.290000000205,
    "JumlahTransaksi": 2087,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2010-12-15",
    "TotalHarga": 29443.69000000013,
    "JumlahTransaksi": 1349,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2010-12-16",
    "TotalHarga": 48334.34999999993,
    "JumlahTransaksi": 1790,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2010-12-17",
    "TotalHarga": 43534.19000000001,
    "JumlahTransaksi": 3115,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2010-12-19",
    "TotalHarga": 7517.309999999992,
    "JumlahTransaksi": 522,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2010-12-20",
    "TotalHarga": 24741.750000000015,
    "JumlahTransaksi": 1763,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2010-12-21",
    "TotalHarga": 47097.939999999915,
    "JumlahTransaksi": 1586,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2010-12-22",
    "TotalHarga": 6134.569999999999,
    "JumlahTransaksi": 291,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2010-12-23",
    "TotalHarga": 11796.310000000025,
    "JumlahTransaksi": 963,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-04",
    "TotalHarga": 14950.480000000014,
    "JumlahTransaksi": 1184,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-06",
    "TotalHarga": 37392.73999999999,
    "JumlahTransaksi": 1832,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-07",
    "TotalHarga": 27233.140000000065,
    "JumlahTransaksi": 1794,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-01-09",
    "TotalHarga": 15710.800000000025,
    "JumlahTransaksi": 1117,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-10",
    "TotalHarga": 24191.64,
    "JumlahTransaksi": 1976,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-01-11",
    "TotalHarga": 67817.1300000002,
    "JumlahTransaksi": 1454,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-12",
    "TotalHarga": 23958.77999999998,
    "JumlahTransaksi": 1809,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-01-13",
    "TotalHarga": 20533.540000000005,
    "JumlahTransaksi": 1445,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-14",
    "TotalHarga": 47377.2600000001,
    "JumlahTransaksi": 1510,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-01-16",
    "TotalHarga": 7116.609999999981,
    "JumlahTransaksi": 646,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-17",
    "TotalHarga": 29256.000000000295,
    "JumlahTransaksi": 2557,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-01-18",
    "TotalHarga": 18680.800000000003,
    "JumlahTransaksi": 1447,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-19",
    "TotalHarga": 25585.81000000013,
    "JumlahTransaksi": 1416,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-01-20",
    "TotalHarga": 17995.909999999974,
    "JumlahTransaksi": 1502,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-21",
    "TotalHarga": 31978.440000000195,
    "JumlahTransaksi": 1594,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-01-23",
    "TotalHarga": 10285.94999999997,
    "JumlahTransaksi": 879,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-24",
    "TotalHarga": 25555.620000000134,
    "JumlahTransaksi": 1485,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-01-25",
    "TotalHarga": 27971.520000000113,
    "JumlahTransaksi": 1654,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-26",
    "TotalHarga": 19493.320000000065,
    "JumlahTransaksi": 1289,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-01-27",
    "TotalHarga": 21092.140000000076,
    "JumlahTransaksi": 1575,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-28",
    "TotalHarga": 18567.76999999999,
    "JumlahTransaksi": 1008,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-01-30",
    "TotalHarga": 6456.439999999991,
    "JumlahTransaksi": 722,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-31",
    "TotalHarga": 22364.650000000103,
    "JumlahTransaksi": 1509,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-02-01",
    "TotalHarga": 28433.220000000023,
    "JumlahTransaksi": 1574,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-02-02",
    "TotalHarga": 21048.45000000002,
    "JumlahTransaksi": 1411,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-02-03",
    "TotalHarga": 23344.580000000096,
    "JumlahTransaksi": 989,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-02-04",
    "TotalHarga": 24994.170000000042,
    "JumlahTransaksi": 1232,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-02-06",
    "TotalHarga": 3457.1099999999965,
    "JumlahTransaksi": 279,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-07",
    "TotalHarga": 25525.989999999983,
    "JumlahTransaksi": 1261,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-02-08",
    "TotalHarga": 20728.140000000043,
    "JumlahTransaksi": 1228,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-02-09",
    "TotalHarga": 16692.579999999976,
    "JumlahTransaksi": 879,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-02-10",
    "TotalHarga": 13427.539999999994,
    "JumlahTransaksi": 785,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-02-11",
    "TotalHarga": 20387.279999999984,
    "JumlahTransaksi": 957,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-02-13",
    "TotalHarga": 5535.399999999994,
    "JumlahTransaksi": 624,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-14",
    "TotalHarga": 26222.03000000017,
    "JumlahTransaksi": 1108,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-02-15",
    "TotalHarga": 36842.58000000006,
    "JumlahTransaksi": 1335,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-02-16",
    "TotalHarga": 24730.81000000009,
    "JumlahTransaksi": 1191,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-02-17",
    "TotalHarga": 26361.87000000019,
    "JumlahTransaksi": 1719,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-02-18",
    "TotalHarga": 15928.399999999987,
    "JumlahTransaksi": 854,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-02-20",
    "TotalHarga": 9578.890000000032,
    "JumlahTransaksi": 864,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-21",
    "TotalHarga": 23807.830000000176,
    "JumlahTransaksi": 1425,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-02-22",
    "TotalHarga": 32292.62000000012,
    "JumlahTransaksi": 1593,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-02-23",
    "TotalHarga": 26792.76000000015,
    "JumlahTransaksi": 1578,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-02-24",
    "TotalHarga": 22655.830000000096,
    "JumlahTransaksi": 1294,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-02-25",
    "TotalHarga": 18029.840000000007,
    "JumlahTransaksi": 978,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-02-27",
    "TotalHarga": 9491.049999999981,
    "JumlahTransaksi": 812,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-28",
    "TotalHarga": 21753.680000000186,
    "JumlahTransaksi": 1737,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-01",
    "TotalHarga": 25471.71000000005,
    "JumlahTransaksi": 1361,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-02",
    "TotalHarga": 18296.45,
    "JumlahTransaksi": 935,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-03",
    "TotalHarga": 35842.62000000009,
    "JumlahTransaksi": 1389,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-04",
    "TotalHarga": 19474.8700000001,
    "JumlahTransaksi": 1107,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-06",
    "TotalHarga": 9596.229999999987,
    "JumlahTransaksi": 844,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-03-07",
    "TotalHarga": 30525.58000000021,
    "JumlahTransaksi": 1971,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-08",
    "TotalHarga": 25017.47000000018,
    "JumlahTransaksi": 1600,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-09",
    "TotalHarga": 21907.120000000094,
    "JumlahTransaksi": 1277,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-10",
    "TotalHarga": 25597.890000000112,
    "JumlahTransaksi": 1131,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-11",
    "TotalHarga": 21995.28000000005,
    "JumlahTransaksi": 959,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-13",
    "TotalHarga": 4137.619999999995,
    "JumlahTransaksi": 537,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-03-14",
    "TotalHarga": 25864.590000000062,
    "JumlahTransaksi": 1111,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-15",
    "TotalHarga": 20660.029999999955,
    "JumlahTransaksi": 1292,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-16",
    "TotalHarga": 21182.640000000065,
    "JumlahTransaksi": 874,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-17",
    "TotalHarga": 38804.25000000005,
    "JumlahTransaksi": 2074,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-18",
    "TotalHarga": 16770.459999999995,
    "JumlahTransaksi": 1379,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-20",
    "TotalHarga": 21980.640000000098,
    "JumlahTransaksi": 1453,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-03-21",
    "TotalHarga": 16370.270000000037,
    "JumlahTransaksi": 1068,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-22",
    "TotalHarga": 31312.350000000228,
    "JumlahTransaksi": 2384,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-23",
    "TotalHarga": 24029.070000000094,
    "JumlahTransaksi": 1319,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-24",
    "TotalHarga": 36562.1000000001,
    "JumlahTransaksi": 1577,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-25",
    "TotalHarga": 30656.03000000007,
    "JumlahTransaksi": 1386,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-27",
    "TotalHarga": 8979.979999999996,
    "JumlahTransaksi": 737,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-03-28",
    "TotalHarga": 19207.030000000002,
    "JumlahTransaksi": 1672,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-29",
    "TotalHarga": 70531.46999999978,
    "JumlahTransaksi": 1983,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-30",
    "TotalHarga": 31489.25000000014,
    "JumlahTransaksi": 1590,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-31",
    "TotalHarga": 31004.08000000019,
    "JumlahTransaksi": 1738,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-01",
    "TotalHarga": 24391.780000000057,
    "JumlahTransaksi": 1261,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-03",
    "TotalHarga": 6878.0999999999985,
    "JumlahTransaksi": 731,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-04",
    "TotalHarga": 25073.020000000182,
    "JumlahTransaksi": 1705,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-04-05",
    "TotalHarga": 28353.83000000014,
    "JumlahTransaksi": 1215,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-06",
    "TotalHarga": 17279.350000000064,
    "JumlahTransaksi": 1122,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-07",
    "TotalHarga": 18229.00000000011,
    "JumlahTransaksi": 1527,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-08",
    "TotalHarga": 23299.140000000112,
    "JumlahTransaksi": 1441,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-10",
    "TotalHarga": 9363.879999999972,
    "JumlahTransaksi": 940,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-11",
    "TotalHarga": 22110.310000000063,
    "JumlahTransaksi": 1259,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-04-12",
    "TotalHarga": 25124.250000000084,
    "JumlahTransaksi": 1152,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-13",
    "TotalHarga": 23898.200000000023,
    "JumlahTransaksi": 1052,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-14",
    "TotalHarga": 35295.580000000096,
    "JumlahTransaksi": 1608,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-15",
    "TotalHarga": 28327.130999999976,
    "JumlahTransaksi": 1483,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-17",
    "TotalHarga": 12704.299999999994,
    "JumlahTransaksi": 968,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-18",
    "TotalHarga": 32185.610000000288,
    "JumlahTransaksi": 3208,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-04-19",
    "TotalHarga": 23837.650000000183,
    "JumlahTransaksi": 1887,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-20",
    "TotalHarga": 28239.390000000025,
    "JumlahTransaksi": 1025,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-21",
    "TotalHarga": 31198.60000000008,
    "JumlahTransaksi": 1930,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-26",
    "TotalHarga": 30585.540000000157,
    "JumlahTransaksi": 1903,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-27",
    "TotalHarga": 25590.56000000002,
    "JumlahTransaksi": 1307,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-28",
    "TotalHarga": 21241.900000000063,
    "JumlahTransaksi": 1192,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-01",
    "TotalHarga": 6964.659999999997,
    "JumlahTransaksi": 452,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-03",
    "TotalHarga": 19617.860000000135,
    "JumlahTransaksi": 1449,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-05-04",
    "TotalHarga": 27462.3000000001,
    "JumlahTransaksi": 1161,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-05-05",
    "TotalHarga": 28750.650000000238,
    "JumlahTransaksi": 1838,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-06",
    "TotalHarga": 35714.58000000002,
    "JumlahTransaksi": 2051,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-08",
    "TotalHarga": 18808.920000000046,
    "JumlahTransaksi": 1506,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-09",
    "TotalHarga": 26060.43000000019,
    "JumlahTransaksi": 1766,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-05-10",
    "TotalHarga": 45564.119999999915,
    "JumlahTransaksi": 2586,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-05-11",
    "TotalHarga": 33240.36000000021,
    "JumlahTransaksi": 1701,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-05-12",
    "TotalHarga": 59911.969999999856,
    "JumlahTransaksi": 1965,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-13",
    "TotalHarga": 30744.07000000008,
    "JumlahTransaksi": 1425,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-15",
    "TotalHarga": 9924.280000000004,
    "JumlahTransaksi": 809,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-16",
    "TotalHarga": 25279.77000000014,
    "JumlahTransaksi": 1609,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-05-17",
    "TotalHarga": 53603.82999999985,
    "JumlahTransaksi": 1932,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-05-18",
    "TotalHarga": 34337.29000000008,
    "JumlahTransaksi": 1366,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-05-19",
    "TotalHarga": 34348.750000000015,
    "JumlahTransaksi": 1949,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-20",
    "TotalHarga": 26256.520000000062,
    "JumlahTransaksi": 1129,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-22",
    "TotalHarga": 24205.370000000068,
    "JumlahTransaksi": 1564,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-23",
    "TotalHarga": 30739.550000000083,
    "JumlahTransaksi": 1646,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-05-24",
    "TotalHarga": 37028.910000000054,
    "JumlahTransaksi": 1750,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-05-25",
    "TotalHarga": 24152.280000000075,
    "JumlahTransaksi": 1322,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-05-26",
    "TotalHarga": 33208.590000000026,
    "JumlahTransaksi": 971,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-27",
    "TotalHarga": 28232.19000000009,
    "JumlahTransaksi": 1170,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-29",
    "TotalHarga": 7208.299999999988,
    "JumlahTransaksi": 632,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-31",
    "TotalHarga": 21967.96000000007,
    "JumlahTransaksi": 1281,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-01",
    "TotalHarga": 20191.200000000124,
    "JumlahTransaksi": 1456,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-06-02",
    "TotalHarga": 32502.010000000162,
    "JumlahTransaksi": 1588,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-06-03",
    "TotalHarga": 16750.999999999996,
    "JumlahTransaksi": 858,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-05",
    "TotalHarga": 25520.35000000011,
    "JumlahTransaksi": 1561,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-06",
    "TotalHarga": 16791.39,
    "JumlahTransaksi": 1229,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-07",
    "TotalHarga": 37644.30000000004,
    "JumlahTransaksi": 1926,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-08",
    "TotalHarga": 42940.909999999814,
    "JumlahTransaksi": 2327,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-06-09",
    "TotalHarga": 45515.75000000025,
    "JumlahTransaksi": 1850,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-06-10",
    "TotalHarga": 22540.659999999985,
    "JumlahTransaksi": 1067,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-12",
    "TotalHarga": 12483.85999999999,
    "JumlahTransaksi": 1075,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-13",
    "TotalHarga": 20372.930000000055,
    "JumlahTransaksi": 1472,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-14",
    "TotalHarga": 40211.93000000002,
    "JumlahTransaksi": 1587,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-15",
    "TotalHarga": 46139.179999999906,
    "JumlahTransaksi": 1718,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-06-16",
    "TotalHarga": 34131.730000000054,
    "JumlahTransaksi": 1534,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-06-17",
    "TotalHarga": 20800.72000000004,
    "JumlahTransaksi": 961,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-19",
    "TotalHarga": 22360.010000000104,
    "JumlahTransaksi": 1167,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-20",
    "TotalHarga": 33493.4000000001,
    "JumlahTransaksi": 2020,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-21",
    "TotalHarga": 22730.010000000064,
    "JumlahTransaksi": 1538,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-22",
    "TotalHarga": 21794.940000000053,
    "JumlahTransaksi": 1017,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-06-23",
    "TotalHarga": 24273.31000000014,
    "JumlahTransaksi": 1973,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-06-24",
    "TotalHarga": 8619.880000000001,
    "JumlahTransaksi": 1039,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-26",
    "TotalHarga": 6175.169999999984,
    "JumlahTransaksi": 708,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-27",
    "TotalHarga": 16823.859999999993,
    "JumlahTransaksi": 1182,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-28",
    "TotalHarga": 34704.64000000011,
    "JumlahTransaksi": 1043,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-29",
    "TotalHarga": 21775.43,
    "JumlahTransaksi": 1358,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-06-30",
    "TotalHarga": 43834.550000000076,
    "JumlahTransaksi": 1620,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-01",
    "TotalHarga": 13171.82000000001,
    "JumlahTransaksi": 1027,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-03",
    "TotalHarga": 5977.139999999991,
    "JumlahTransaksi": 602,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-07-04",
    "TotalHarga": 44154.75000000023,
    "JumlahTransaksi": 2200,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-07-05",
    "TotalHarga": 40334.9700000001,
    "JumlahTransaksi": 2202,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-06",
    "TotalHarga": 26279.580000000133,
    "JumlahTransaksi": 1816,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-07",
    "TotalHarga": 31357.72000000012,
    "JumlahTransaksi": 1940,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-08",
    "TotalHarga": 26840.08000000012,
    "JumlahTransaksi": 1630,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-10",
    "TotalHarga": 5692.069999999985,
    "JumlahTransaksi": 820,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-07-11",
    "TotalHarga": 22429.530000000123,
    "JumlahTransaksi": 1515,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-07-12",
    "TotalHarga": 25892.040000000077,
    "JumlahTransaksi": 1667,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-13",
    "TotalHarga": 11612.049999999948,
    "JumlahTransaksi": 1618,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-14",
    "TotalHarga": 32575.960000000163,
    "JumlahTransaksi": 1734,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-15",
    "TotalHarga": 14478.929999999933,
    "JumlahTransaksi": 1136,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-17",
    "TotalHarga": 17174.660000000036,
    "JumlahTransaksi": 1248,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-07-18",
    "TotalHarga": 28443.27000000024,
    "JumlahTransaksi": 2234,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-07-19",
    "TotalHarga": 49316.780000000035,
    "JumlahTransaksi": 1667,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-20",
    "TotalHarga": 27305.41000000014,
    "JumlahTransaksi": 2015,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-21",
    "TotalHarga": 30957.06999999999,
    "JumlahTransaksi": 1570,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-22",
    "TotalHarga": 20015.229999999978,
    "JumlahTransaksi": 1301,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-24",
    "TotalHarga": 26476.200000000044,
    "JumlahTransaksi": 1125,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-07-25",
    "TotalHarga": 26687.650000000176,
    "JumlahTransaksi": 1946,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-07-26",
    "TotalHarga": 21271.30100000004,
    "JumlahTransaksi": 1279,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-27",
    "TotalHarga": 25568.450000000106,
    "JumlahTransaksi": 1259,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-28",
    "TotalHarga": 55706.880000000034,
    "JumlahTransaksi": 1565,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-29",
    "TotalHarga": 18094.209999999955,
    "JumlahTransaksi": 1131,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-31",
    "TotalHarga": 33486.359999999986,
    "JumlahTransaksi": 1271,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-01",
    "TotalHarga": 21362.840000000022,
    "JumlahTransaksi": 1200,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-08-02",
    "TotalHarga": 14947.269999999933,
    "JumlahTransaksi": 1369,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-08-03",
    "TotalHarga": 27075.02000000017,
    "JumlahTransaksi": 1560,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-08-04",
    "TotalHarga": 61028.6500000001,
    "JumlahTransaksi": 1839,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-08-05",
    "TotalHarga": 21298.300000000094,
    "JumlahTransaksi": 1455,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-07",
    "TotalHarga": 7464.1199999999935,
    "JumlahTransaksi": 541,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-08",
    "TotalHarga": 19987.149999999994,
    "JumlahTransaksi": 1490,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-08-09",
    "TotalHarga": 26623.20000000008,
    "JumlahTransaksi": 1119,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-08-10",
    "TotalHarga": 27474.220000000118,
    "JumlahTransaksi": 1376,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-08-11",
    "TotalHarga": 72132.7900000002,
    "JumlahTransaksi": 1984,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-08-12",
    "TotalHarga": 10049.47999999996,
    "JumlahTransaksi": 1122,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-14",
    "TotalHarga": 5150.179999999998,
    "JumlahTransaksi": 557,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-15",
    "TotalHarga": 17205.54,
    "JumlahTransaksi": 926,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-08-16",
    "TotalHarga": 19103.710000000032,
    "JumlahTransaksi": 1035,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-08-17",
    "TotalHarga": 49392.21999999998,
    "JumlahTransaksi": 1666,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-08-18",
    "TotalHarga": 53225.669999999955,
    "JumlahTransaksi": 1539,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-08-19",
    "TotalHarga": 17248.539999999994,
    "JumlahTransaksi": 819,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-21",
    "TotalHarga": 14549.210000000008,
    "JumlahTransaksi": 1070,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-22",
    "TotalHarga": 27978.41000000003,
    "JumlahTransaksi": 1272,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-08-23",
    "TotalHarga": 25756.30000000006,
    "JumlahTransaksi": 1458,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-08-24",
    "TotalHarga": 37074.900000000045,
    "JumlahTransaksi": 1876,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-08-25",
    "TotalHarga": 22458.880000000034,
    "JumlahTransaksi": 1342,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-08-26",
    "TotalHarga": 25550.229999999978,
    "JumlahTransaksi": 929,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-28",
    "TotalHarga": 10784.779999999977,
    "JumlahTransaksi": 1200,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-30",
    "TotalHarga": 31640.900000000096,
    "JumlahTransaksi": 3235,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-08-31",
    "TotalHarga": 16117.999999999998,
    "JumlahTransaksi": 1305,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-01",
    "TotalHarga": 37296.60000000006,
    "JumlahTransaksi": 1405,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-02",
    "TotalHarga": 41745.07000000001,
    "JumlahTransaksi": 2376,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-09-04",
    "TotalHarga": 17018.489999999998,
    "JumlahTransaksi": 1343,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-05",
    "TotalHarga": 36844.04000000002,
    "JumlahTransaksi": 1587,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-06",
    "TotalHarga": 28052.62000000006,
    "JumlahTransaksi": 1140,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-07",
    "TotalHarga": 34125.65000000011,
    "JumlahTransaksi": 2112,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-08",
    "TotalHarga": 26708.000000000106,
    "JumlahTransaksi": 1779,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-09",
    "TotalHarga": 29317.690000000068,
    "JumlahTransaksi": 1607,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-09-11",
    "TotalHarga": 35465.470000000096,
    "JumlahTransaksi": 2032,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-12",
    "TotalHarga": 29039.310000000096,
    "JumlahTransaksi": 1702,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-13",
    "TotalHarga": 54828.45000000007,
    "JumlahTransaksi": 2438,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-14",
    "TotalHarga": 23360.660000000134,
    "JumlahTransaksi": 1376,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-15",
    "TotalHarga": 62943.80999999994,
    "JumlahTransaksi": 2197,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-16",
    "TotalHarga": 25858.060000000034,
    "JumlahTransaksi": 1475,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-09-18",
    "TotalHarga": 15692.330000000029,
    "JumlahTransaksi": 1274,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-19",
    "TotalHarga": 46212.21000000002,
    "JumlahTransaksi": 1436,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-20",
    "TotalHarga": 109286.20999999993,
    "JumlahTransaksi": 1718,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-21",
    "TotalHarga": 42944.07000000001,
    "JumlahTransaksi": 3129,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-22",
    "TotalHarga": 57076.83000000002,
    "JumlahTransaksi": 2748,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-23",
    "TotalHarga": 39426.48000000005,
    "JumlahTransaksi": 2642,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-09-25",
    "TotalHarga": 31210.921000000104,
    "JumlahTransaksi": 1987,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-26",
    "TotalHarga": 28642.27100000011,
    "JumlahTransaksi": 1554,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-27",
    "TotalHarga": 35752.159999999916,
    "JumlahTransaksi": 1897,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-28",
    "TotalHarga": 43383.03999999988,
    "JumlahTransaksi": 2877,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-29",
    "TotalHarga": 43464.33000000008,
    "JumlahTransaksi": 2508,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-30",
    "TotalHarga": 43992.84999999993,
    "JumlahTransaksi": 1887,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-10-02",
    "TotalHarga": 11623.580000000014,
    "JumlahTransaksi": 1429,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-10-03",
    "TotalHarga": 64214.78,
    "JumlahTransaksi": 2296,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-04",
    "TotalHarga": 48240.839999999895,
    "JumlahTransaksi": 2797,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-10-05",
    "TotalHarga": 75244.42999999986,
    "JumlahTransaksi": 2447,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-06",
    "TotalHarga": 55306.27999999994,
    "JumlahTransaksi": 3189,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-07",
    "TotalHarga": 47538.019999999815,
    "JumlahTransaksi": 2426,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-10-09",
    "TotalHarga": 11922.239999999993,
    "JumlahTransaksi": 1292,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-10-10",
    "TotalHarga": 44265.89000000007,
    "JumlahTransaksi": 3232,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-11",
    "TotalHarga": 38267.75000000006,
    "JumlahTransaksi": 2467,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-10-12",
    "TotalHarga": 29302.850000000173,
    "JumlahTransaksi": 2193,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-13",
    "TotalHarga": 37067.17000000006,
    "JumlahTransaksi": 2358,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-14",
    "TotalHarga": 35225.53999999997,
    "JumlahTransaksi": 1810,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-10-16",
    "TotalHarga": 21605.440000000053,
    "JumlahTransaksi": 1254,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-10-17",
    "TotalHarga": 47064.139999999956,
    "JumlahTransaksi": 2944,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-18",
    "TotalHarga": 44637.84000000008,
    "JumlahTransaksi": 2908,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-10-19",
    "TotalHarga": 36003.43000000002,
    "JumlahTransaksi": 2318,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-20",
    "TotalHarga": 60793.13999999962,
    "JumlahTransaksi": 2350,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-21",
    "TotalHarga": 62961.25999999998,
    "JumlahTransaksi": 1404,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-10-23",
    "TotalHarga": 12302.410000000013,
    "JumlahTransaksi": 1728,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-10-24",
    "TotalHarga": 38407.71999999994,
    "JumlahTransaksi": 2976,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-25",
    "TotalHarga": 40807.49000000003,
    "JumlahTransaksi": 2492,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-10-26",
    "TotalHarga": 37842.07999999995,
    "JumlahTransaksi": 1930,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-27",
    "TotalHarga": 47480.1499999999,
    "JumlahTransaksi": 2540,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-28",
    "TotalHarga": 39559.47000000007,
    "JumlahTransaksi": 1641,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-10-30",
    "TotalHarga": 34545.28000000011,
    "JumlahTransaksi": 2907,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-10-31",
    "TotalHarga": 48475.450000000164,
    "JumlahTransaksi": 3414,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-01",
    "TotalHarga": 28741.55000000017,
    "JumlahTransaksi": 1786,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-02",
    "TotalHarga": 45239.059999999816,
    "JumlahTransaksi": 2632,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-03",
    "TotalHarga": 62816.54999999997,
    "JumlahTransaksi": 2419,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-04",
    "TotalHarga": 60081.75999999989,
    "JumlahTransaksi": 3011,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-06",
    "TotalHarga": 42912.400000000176,
    "JumlahTransaksi": 3437,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-07",
    "TotalHarga": 70001.08000000009,
    "JumlahTransaksi": 2099,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-08",
    "TotalHarga": 56647.659999999814,
    "JumlahTransaksi": 4070,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-09",
    "TotalHarga": 62599.42999999966,
    "JumlahTransaksi": 2716,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-10",
    "TotalHarga": 68956.24000000003,
    "JumlahTransaksi": 3275,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-11",
    "TotalHarga": 54835.509999999995,
    "JumlahTransaksi": 4089,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-13",
    "TotalHarga": 33520.22000000013,
    "JumlahTransaksi": 3018,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-14",
    "TotalHarga": 112141.10999999996,
    "JumlahTransaksi": 3597,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-15",
    "TotalHarga": 60594.229999999865,
    "JumlahTransaksi": 3445,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-16",
    "TotalHarga": 64408.7000000001,
    "JumlahTransaksi": 4195,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-17",
    "TotalHarga": 60329.719999999776,
    "JumlahTransaksi": 3621,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-18",
    "TotalHarga": 48031.80000000006,
    "JumlahTransaksi": 2920,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-20",
    "TotalHarga": 34902.01000000018,
    "JumlahTransaksi": 3334,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-21",
    "TotalHarga": 48302.499999999796,
    "JumlahTransaksi": 2930,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-22",
    "TotalHarga": 62307.31999999994,
    "JumlahTransaksi": 3967,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-23",
    "TotalHarga": 78480.6999999997,
    "JumlahTransaksi": 3619,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-24",
    "TotalHarga": 48080.279999999926,
    "JumlahTransaksi": 3766,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-25",
    "TotalHarga": 50442.72000000002,
    "JumlahTransaksi": 3125,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-27",
    "TotalHarga": 20571.500000000084,
    "JumlahTransaksi": 2543,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-28",
    "TotalHarga": 55442.01999999994,
    "JumlahTransaksi": 3330,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-29",
    "TotalHarga": 72219.19999999998,
    "JumlahTransaksi": 4313,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-30",
    "TotalHarga": 59150.97999999988,
    "JumlahTransaksi": 3454,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-12-01",
    "TotalHarga": 51410.94999999973,
    "JumlahTransaksi": 2901,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-12-02",
    "TotalHarga": 57086.059999999874,
    "JumlahTransaksi": 2880,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-12-04",
    "TotalHarga": 24565.78000000009,
    "JumlahTransaksi": 2038,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-12-05",
    "TotalHarga": 57751.31999999973,
    "JumlahTransaksi": 5331,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-12-06",
    "TotalHarga": 54228.37000000012,
    "JumlahTransaksi": 3365,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-12-07",
    "TotalHarga": 75076.21999999967,
    "JumlahTransaksi": 2438,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-12-08",
    "TotalHarga": 81417.77999999982,
    "JumlahTransaksi": 4940,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-12-09",
    "TotalHarga": 32131.53000000001,
    "JumlahTransaksi": 1632,
    "Hari": "Jumat"
  }
];

// Hasil Simple Random Sampling (SRS) 20% (n = 61)
const srsDataset = [
  {
    "Tanggal": "2011-07-18",
    "TotalHarga": 28443.27000000024,
    "JumlahTransaksi": 2234,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-17",
    "TotalHarga": 20800.72000000004,
    "JumlahTransaksi": 961,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-21",
    "TotalHarga": 31198.60000000008,
    "JumlahTransaksi": 1930,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-05",
    "TotalHarga": 75244.42999999986,
    "JumlahTransaksi": 2447,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-02-21",
    "TotalHarga": 23807.830000000176,
    "JumlahTransaksi": 1425,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2010-12-12",
    "TotalHarga": 17240.92000000005,
    "JumlahTransaksi": 1451,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-06",
    "TotalHarga": 35714.58000000002,
    "JumlahTransaksi": 2051,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-21",
    "TotalHarga": 22730.010000000064,
    "JumlahTransaksi": 1538,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-03",
    "TotalHarga": 5977.139999999991,
    "JumlahTransaksi": 602,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-20",
    "TotalHarga": 17995.909999999974,
    "JumlahTransaksi": 1502,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2010-12-07",
    "TotalHarga": 45059.05000000015,
    "JumlahTransaksi": 2963,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-10",
    "TotalHarga": 9363.879999999972,
    "JumlahTransaksi": 940,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-03",
    "TotalHarga": 23344.580000000096,
    "JumlahTransaksi": 989,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-13",
    "TotalHarga": 11612.049999999948,
    "JumlahTransaksi": 1618,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-05-05",
    "TotalHarga": 28750.650000000238,
    "JumlahTransaksi": 1838,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-02-04",
    "TotalHarga": 24994.170000000042,
    "JumlahTransaksi": 1232,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-13",
    "TotalHarga": 30744.07000000008,
    "JumlahTransaksi": 1425,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-02",
    "TotalHarga": 14947.269999999933,
    "JumlahTransaksi": 1369,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-27",
    "TotalHarga": 35752.159999999916,
    "JumlahTransaksi": 1897,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-05",
    "TotalHarga": 25520.35000000011,
    "JumlahTransaksi": 1561,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-14",
    "TotalHarga": 23360.660000000134,
    "JumlahTransaksi": 1376,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-10",
    "TotalHarga": 68956.24000000003,
    "JumlahTransaksi": 3275,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-02",
    "TotalHarga": 11623.580000000014,
    "JumlahTransaksi": 1429,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-11",
    "TotalHarga": 67817.1300000002,
    "JumlahTransaksi": 1454,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-09",
    "TotalHarga": 45515.75000000025,
    "JumlahTransaksi": 1850,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-05",
    "TotalHarga": 36844.04000000002,
    "JumlahTransaksi": 1587,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-14",
    "TotalHarga": 35225.53999999997,
    "JumlahTransaksi": 1810,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-08",
    "TotalHarga": 25017.47000000018,
    "JumlahTransaksi": 1600,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-18",
    "TotalHarga": 15692.330000000029,
    "JumlahTransaksi": 1274,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-19",
    "TotalHarga": 23837.650000000183,
    "JumlahTransaksi": 1887,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-06-01",
    "TotalHarga": 20191.200000000124,
    "JumlahTransaksi": 1456,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-18",
    "TotalHarga": 48031.80000000006,
    "JumlahTransaksi": 2920,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-21",
    "TotalHarga": 14549.210000000008,
    "JumlahTransaksi": 1070,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-01-31",
    "TotalHarga": 22364.650000000103,
    "JumlahTransaksi": 1509,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2010-12-21",
    "TotalHarga": 47097.939999999915,
    "JumlahTransaksi": 1586,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-13",
    "TotalHarga": 33520.22000000013,
    "JumlahTransaksi": 3018,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-03-11",
    "TotalHarga": 21995.28000000005,
    "JumlahTransaksi": 959,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-03-28",
    "TotalHarga": 19207.030000000002,
    "JumlahTransaksi": 1672,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-01-10",
    "TotalHarga": 24191.64,
    "JumlahTransaksi": 1976,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-02-17",
    "TotalHarga": 26361.87000000019,
    "JumlahTransaksi": 1719,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-30",
    "TotalHarga": 31489.25000000014,
    "JumlahTransaksi": 1590,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-13",
    "TotalHarga": 4137.619999999995,
    "JumlahTransaksi": 537,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-25",
    "TotalHarga": 22458.880000000034,
    "JumlahTransaksi": 1342,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-05-03",
    "TotalHarga": 19617.860000000135,
    "JumlahTransaksi": 1449,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2010-12-09",
    "TotalHarga": 52532.13000000003,
    "JumlahTransaksi": 2891,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-22",
    "TotalHarga": 62307.31999999994,
    "JumlahTransaksi": 3967,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-15",
    "TotalHarga": 60594.229999999865,
    "JumlahTransaksi": 3445,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-14",
    "TotalHarga": 25864.590000000062,
    "JumlahTransaksi": 1111,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-28",
    "TotalHarga": 55442.01999999994,
    "JumlahTransaksi": 3330,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-19",
    "TotalHarga": 46212.21000000002,
    "JumlahTransaksi": 1436,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-12",
    "TotalHarga": 29302.850000000173,
    "JumlahTransaksi": 2193,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-16",
    "TotalHarga": 21605.440000000053,
    "JumlahTransaksi": 1254,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-02-24",
    "TotalHarga": 22655.830000000096,
    "JumlahTransaksi": 1294,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-18",
    "TotalHarga": 16770.459999999995,
    "JumlahTransaksi": 1379,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-17",
    "TotalHarga": 60329.719999999776,
    "JumlahTransaksi": 3621,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-26",
    "TotalHarga": 28642.27100000011,
    "JumlahTransaksi": 1554,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-01",
    "TotalHarga": 37296.60000000006,
    "JumlahTransaksi": 1405,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-13",
    "TotalHarga": 23898.200000000023,
    "JumlahTransaksi": 1052,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-12-07",
    "TotalHarga": 75076.21999999967,
    "JumlahTransaksi": 2438,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-08-03",
    "TotalHarga": 27075.02000000017,
    "JumlahTransaksi": 1560,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-24",
    "TotalHarga": 26476.200000000044,
    "JumlahTransaksi": 1125,
    "Hari": "Minggu"
  }
];

// Hasil Stratified Random Sampling 20% (n = 60)
const stratifiedDataset = [
  {
    "Tanggal": "2011-03-18",
    "TotalHarga": 16770.459999999995,
    "JumlahTransaksi": 1379,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-09-30",
    "TotalHarga": 43992.84999999993,
    "JumlahTransaksi": 1887,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-29",
    "TotalHarga": 18094.209999999955,
    "JumlahTransaksi": 1131,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-11-11",
    "TotalHarga": 54835.509999999995,
    "JumlahTransaksi": 4089,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-15",
    "TotalHarga": 28327.130999999976,
    "JumlahTransaksi": 1483,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-12-02",
    "TotalHarga": 57086.059999999874,
    "JumlahTransaksi": 2880,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-07-01",
    "TotalHarga": 13171.82000000001,
    "JumlahTransaksi": 1027,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-06-24",
    "TotalHarga": 8619.880000000001,
    "JumlahTransaksi": 1039,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-08-12",
    "TotalHarga": 10049.47999999996,
    "JumlahTransaksi": 1122,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-05-13",
    "TotalHarga": 30744.07000000008,
    "JumlahTransaksi": 1425,
    "Hari": "Jumat"
  },
  {
    "Tanggal": "2011-04-21",
    "TotalHarga": 31198.60000000008,
    "JumlahTransaksi": 1930,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-09-22",
    "TotalHarga": 57076.83000000002,
    "JumlahTransaksi": 2748,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-03",
    "TotalHarga": 62816.54999999997,
    "JumlahTransaksi": 2419,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-03",
    "TotalHarga": 35842.62000000009,
    "JumlahTransaksi": 1389,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-10-06",
    "TotalHarga": 55306.27999999994,
    "JumlahTransaksi": 3189,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-01-13",
    "TotalHarga": 20533.540000000005,
    "JumlahTransaksi": 1445,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-04-07",
    "TotalHarga": 18229.00000000011,
    "JumlahTransaksi": 1527,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-11-24",
    "TotalHarga": 48080.279999999926,
    "JumlahTransaksi": 3766,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2010-12-23",
    "TotalHarga": 11796.310000000025,
    "JumlahTransaksi": 963,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-07-21",
    "TotalHarga": 30957.06999999999,
    "JumlahTransaksi": 1570,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-10",
    "TotalHarga": 25597.890000000112,
    "JumlahTransaksi": 1131,
    "Hari": "Kamis"
  },
  {
    "Tanggal": "2011-03-20",
    "TotalHarga": 21980.640000000098,
    "JumlahTransaksi": 1453,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-09-25",
    "TotalHarga": 31210.921000000104,
    "JumlahTransaksi": 1987,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-07-24",
    "TotalHarga": 26476.200000000044,
    "JumlahTransaksi": 1125,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-06",
    "TotalHarga": 42912.400000000176,
    "JumlahTransaksi": 3437,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-17",
    "TotalHarga": 12704.299999999994,
    "JumlahTransaksi": 968,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-11-27",
    "TotalHarga": 20571.500000000084,
    "JumlahTransaksi": 2543,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-26",
    "TotalHarga": 6175.169999999984,
    "JumlahTransaksi": 708,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-06-19",
    "TotalHarga": 22360.010000000104,
    "JumlahTransaksi": 1167,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-08-07",
    "TotalHarga": 7464.1199999999935,
    "JumlahTransaksi": 541,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-05-08",
    "TotalHarga": 18808.920000000046,
    "JumlahTransaksi": 1506,
    "Hari": "Minggu"
  },
  {
    "Tanggal": "2011-04-27",
    "TotalHarga": 25590.56000000002,
    "JumlahTransaksi": 1307,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-09-28",
    "TotalHarga": 43383.03999999988,
    "JumlahTransaksi": 2877,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-09",
    "TotalHarga": 62599.42999999966,
    "JumlahTransaksi": 2716,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-03-09",
    "TotalHarga": 21907.120000000094,
    "JumlahTransaksi": 1277,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-10-12",
    "TotalHarga": 29302.850000000173,
    "JumlahTransaksi": 2193,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-01-19",
    "TotalHarga": 25585.81000000013,
    "JumlahTransaksi": 1416,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-13",
    "TotalHarga": 23898.200000000023,
    "JumlahTransaksi": 1052,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-11-30",
    "TotalHarga": 59150.97999999988,
    "JumlahTransaksi": 3454,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2010-12-22",
    "TotalHarga": 6134.569999999999,
    "JumlahTransaksi": 291,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-07-27",
    "TotalHarga": 25568.450000000106,
    "JumlahTransaksi": 1259,
    "Hari": "Rabu"
  },
  {
    "Tanggal": "2011-04-26",
    "TotalHarga": 30585.540000000157,
    "JumlahTransaksi": 1903,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-09-27",
    "TotalHarga": 35752.159999999916,
    "JumlahTransaksi": 1897,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-08",
    "TotalHarga": 56647.659999999814,
    "JumlahTransaksi": 4070,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-03-08",
    "TotalHarga": 25017.47000000018,
    "JumlahTransaksi": 1600,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-10-11",
    "TotalHarga": 38267.75000000006,
    "JumlahTransaksi": 2467,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-18",
    "TotalHarga": 18680.800000000003,
    "JumlahTransaksi": 1447,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-04-12",
    "TotalHarga": 25124.250000000084,
    "JumlahTransaksi": 1152,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-11-29",
    "TotalHarga": 72219.19999999998,
    "JumlahTransaksi": 4313,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-01-04",
    "TotalHarga": 14950.480000000014,
    "JumlahTransaksi": 1184,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-26",
    "TotalHarga": 21271.30100000004,
    "JumlahTransaksi": 1279,
    "Hari": "Selasa"
  },
  {
    "Tanggal": "2011-07-18",
    "TotalHarga": 28443.27000000024,
    "JumlahTransaksi": 2234,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-10-17",
    "TotalHarga": 47064.139999999956,
    "JumlahTransaksi": 2944,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-07-11",
    "TotalHarga": 22429.530000000123,
    "JumlahTransaksi": 1515,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-11-14",
    "TotalHarga": 112141.10999999996,
    "JumlahTransaksi": 3597,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-06-27",
    "TotalHarga": 16823.859999999993,
    "JumlahTransaksi": 1182,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-09-26",
    "TotalHarga": 28642.27100000011,
    "JumlahTransaksi": 1554,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-03-14",
    "TotalHarga": 25864.590000000062,
    "JumlahTransaksi": 1111,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-05-16",
    "TotalHarga": 25279.77000000014,
    "JumlahTransaksi": 1609,
    "Hari": "Senin"
  },
  {
    "Tanggal": "2011-01-17",
    "TotalHarga": 29256.000000000295,
    "JumlahTransaksi": 2557,
    "Hari": "Senin"
  }
];
