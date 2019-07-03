class A:
    def method_a(self):
        print('ini adlaah method a')
class B:
    def method_b(self):
        print('ini adalah method b')

class Sesuatu(A,B):
    def __init__(self,nama):
        self.nama = nama

objek = Sesuatu('halo')

objek.method_a()
objek.method_b()
print(objek.nama)
