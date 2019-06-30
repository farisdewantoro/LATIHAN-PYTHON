def siswa(nama):
    print('siswa ini bernama',nama)

siswa('mario')

#fungsi dengan menggunakan keywords arguments
def guru(nama,pelajaran):
    print('guru ini bernama : ',nama)
    print('mengejaar',pelajaran)

#dibalik juga masih sama asal variablenya sama
guru(nama="aasda",pelajaran="sdaasd")
guru(pelajaran="gg",nama="endang")

#fungsi dengan menggunakan default arguments

def f_default(nama="tes"):
    print('ini namanya',nama)


f_default()