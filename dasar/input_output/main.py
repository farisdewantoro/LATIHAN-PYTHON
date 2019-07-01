#input output file

#membuat file text


"""
pada open terdapat beberapa mode, terletak di parameter kedua
w = write mode / mode menulis dan menghapus file lama
r = read mode only / hanya bisa baca
a = appending mode / menambahkan data di akhir baris
r+ = write and read mode
"""

file = open("data.txt",'w')
file.write('ini adalah data text yang dibuat')
file.write('\nini baris kedua')
file.write('\nini baris ketiga')
file.close()

#membaca file text 
file2 = open('data.txt','r')
print(file2.read(10))  #10 adalah parameter yang akan menghasilkan teks hanya 10 karakter
print(file2.readline()) #membaca baris 1
print(file2.readline()) #membaca baris 2
file2.close()

file3 = open('data.txt','a')
file3.write('\n baris ini digunakan dengan menggunakan append')
file3.close()

