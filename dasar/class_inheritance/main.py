class Ojek():
    
    def __init__(self,nama,transmisi,daerah):
        self.nama = nama
        self.transmisi = transmisi
        self.daerah = daerah

    def cek_id(self):
        print(f'{self.nama} motor : {self.transmisi} daerah : {self.daerah}')
    
class Gojek(Ojek):
    def cek_id(self):
        print('cek aplikasi gojek')

ojek1 = Ojek('mario','manual','bandung')
ojek2 = Gojek('jak','manual','jakarta')

ojek1.cek_id()
ojek2.cek_id()

