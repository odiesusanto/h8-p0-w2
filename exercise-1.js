1.
STORE "resultan_gaya" with 0
STORE m with 600
STORE a with 2

STORE "resultan_gaya" with m * a

DISPLAY "resultan_gaya"


2.
STORE tahun with 0
STORE RESULT with "unknown"

IF tahun / 4 = 0 AND tahun / 100 tidak 0 THEN
    RESULT = "tahun kabisat"    
ELSE IF tahun / 4 = 0 AND tahun / 100 = 0 AND tahun / 400 = 0 THEN
    RESULT = "tahun kabisat"
ELSE 
    RESULT ="bukan tahun kabisat"
END IF
DISPLAY RESULT


3.
STATE: MESIN CUCI = false
STORE "PAKAIAN" = 0

WHILE MESIN CUCI = false THEN
    Foxie akan terus memasukan pakaian
    Jika pakaian sebanyak 20 = true
    Kalau tidak kembali ke WHILE
END WHILE


4.
STATE: GURU MERIKSA KUKU
STORE "JUMLAH_SISWA" = 0

WHILE "JUMLAH_SISWA" < 40 THEN
    Guru akan terus periksa kuku 
    DO "JUMLAH_SISWA + 1"
IF KUKU PANJANG THEN SISWA DIHUKUM
ELSE SISWA DI PUJI
END IF
END WHILE

RETURN "JUMLAH_SISWA"


