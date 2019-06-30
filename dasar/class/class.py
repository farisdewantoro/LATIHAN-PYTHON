#class 
class mahasiswa():
    jurusan = 'teknik asdasd'
    __nilai = 4  # private
    def __init__(self,nama,nim):
        self.nama = nama #public
        self.nim = nim #public
    def belajar(self,kondisi):
        print(f'{self.nama} keur belajar {kondisi}')
    def tidur(self):
        print(f'{self.nama} heh siah tidur')
    def uts(self,input_nilai):
        self.__nilai +=input_nilai
    def uas(self,input_nilai):
        self.__nilai += input_nilai
    def check_status(self):
        if self.__nilai <= 50:
            print(self.nama,'tidak lulus')
        else:
            print(self.nama,'lulus')
#main program
otong  = mahasiswa('ntap',40000)
ucup = mahasiswa('ucup',1512)

otong.uts(25)
otong.uas(25)

otong.check_status()
