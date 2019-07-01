
"""
tipe error :
1. IOError 
2. ImportError
3. ValueError
4. Division by zero
5. KeyboardInterupted
6. EOFError
"""

while True:
    try:
        penyebut = int(input("masukan angka penyebut: "))
        pembilang = int(input('masukan angka pembilang : '))
        hasil = penyebut/pembilang
        break
    except Exception as err:
        print(err)
    # except ValueError:
    #     print("yang anda masukan salah \n")
    # except ZeroDivisionError:
    #     print('angka pembilang yang anda masukan adalah 0 \n')

print('berhasil', hasil)
