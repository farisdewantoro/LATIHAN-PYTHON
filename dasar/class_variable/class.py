#class 
class mahasiswa():
    
    jurusan ="ekonomi"
    jumlah_mahasiswa = 0
    def __init__(self,nama,nim):
        self.nama = nama #public
        self.nim = nim #public

        mahasiswa.jumlah_mahasiswa +=1
    def testing(self):
        return self.nama
    
#main program
otong = mahasiswa('otonggg',12351)
ucup = mahasiswa('adadxa',515151)
#variable instance melakukan overide dari class
otong.jurusan ='aksdkas' 
otong.ipk = 4
#########

print(mahasiswa.__dict__) #check semua variable
print(mahasiswa.jurusan)

print(50*"=")
print(otong.__dict__)
