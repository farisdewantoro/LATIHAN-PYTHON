class Mangga:
    #magic method
    def __init__(self,nama,jumlah):
            self.nama =nama
            self.jumlah = jumlah


            
    def __repr__(self): #dipakai buat debug
        return "ini adalah repr : {}".format(self.nama)

    #str mirip __repr__ dipakai buat production mode, lebih sering digunakan
    def __str__(self):
         return "ini adalah repr : {}".format(self.nama)

    def __add__(self,obj):
        return self.jumlah + obj.jumlah

    @property
    def __dict__(self):
        return "Objek ini mempunyai nama dan jumlah"
belanja1 = Mangga('tes',10)
belanja2 = Mangga('tes2', 20)
print(belanja1)
print(belanja2)
print(belanja1+belanja2) #pakai __add__ jadi bisa dijumlahkan
print(Mangga.__dict__)
