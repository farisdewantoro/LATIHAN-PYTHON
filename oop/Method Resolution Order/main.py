#METHOD RESOLUTIN ORDER
#YAITU KETIKA MENG INHERITANCE DENGAN METHOD YANG SAMA AKAN DISESUAIKAN DENGAN ATURAN POSISI
#PADA KASUS INI YANG MUNCUL DARI A DULU








class A:
    def method(self):
        print('ini adlaah method a')


class B:
    def method(self):
        print('ini adalah method b')


class Sesuatu(A, B):
    def __init__(self, nama):
        self.nama = nama


objek = Sesuatu('halo')
help(objek)
objek.method()