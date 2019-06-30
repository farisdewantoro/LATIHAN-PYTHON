barang = ['kunci','ember','jaket']
print(barang)

#beberapa method yang bisa digunakan untuk memanipulasi list
barang.append('sepeda')
print(barang,'tambahan data')
barang.remove('jaket')
print(barang,'remove data')
barang.extend('dd') #ini masukin kedalam iterable
print(barang)
barang.insert(1,'sepeda')
print(barang,'tambah data dengan index ke : 1')

barang.reverse()
print(barang) #dibalik

jumlahSepeda = barang.count('sepeda')
print('jumlah sepeda',jumlahSepeda)


#pindahin variable 

#cara yang salah, variable data1 dan barang maka akan sama 
data1 = barang
data1.append('data1')
print(data1)
print(barang)

#cara yang benar, menggunakan copy agar tidak mengganggu data barang
data1 = barang.copy()
data1.append('dddd')
print(data1,'ini menggunakan copy1')
print(barang)
