#scope variable : local

nama = "cassandra"
makanan = 'apel'
def rubahNama(namaBaru):
    global nama
    nama = namaBaru #variable nama tidak akan berubah kecuali ditambahkan global
    t ='gg' #variable local
    print('rubah nama jadi ',nama)
def kasihMakanan(a,b):
    global makanan,nama
    nama = a
    makanan = b


#print(t) # bakal error
rubahNama('apacoba')
kasihMakanan('makanan','nama')

print({
    nama,
    makanan
})