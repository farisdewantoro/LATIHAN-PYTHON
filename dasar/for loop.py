gorengan = ['bakwan','cireng','tahu isi','tempe goreng','ubi']

for g in gorengan:
    print(g)
print(50*"=")

# bakwan = 'testing string loop'
# for i in bakwan:
#     print(i)

buah = ['semangka','jeruk','apel','anggur']
sayur = ['kangkung','wortel','tomat','kol']

daftar_belanja = [gorengan,buah,sayur]

for num,sub in enumerate(daftar_belanja,start=2): #start adalah variable option untuk menentukan start index defaulnya adalah 0
    print("testing {}:{}".format(num,sub))

# for sub in daftar_belanja:
#     for subsub in sub:
#         print(f'ini bagian : {subsub}')

print(50*"=")

#function range berisi 3 parameter start,stop,step/increment

#break => akan berhenti atau keluar dari for, maka proses loop berhenti ketika break
number = 25
for i in range(0,40,1):
    print(i)
    if i is number:
        print('angka ditemukan',i)
        break
else: #ditaro sejejer dengan for untuk bagian akhir yaitu 40 kalo ke break maka tidak akan muncul
    print('final loop') 

print(50*"=")

#loop 2 array sekaligus
colors = ["red", "green", "blue", "purple"]
ratios = [0.2, 0.3, 0.1, 0.4]
for color, ratio in zip(colors, ratios):
    print("{}% {}".format(ratio, color))
