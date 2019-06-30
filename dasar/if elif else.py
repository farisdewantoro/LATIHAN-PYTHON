nilai = 60
nilai2 = 80
if nilai == 75:
    print("nilai anda: ", nilai)
    if nilai2 == 80:
        print("nilai kedua anda",nilai2)
if nilai != 51:
    print('nilai anda bukan 51')
if nilai is 60:
    print('"is" sama dengan == ')
if nilai is not 56:
    print('"is not" sama dengan != ')
else: 
 print('cacad')

print(50*"=")

if 80 <= nilai <=100:
    print('NILAI A')
elif 70 <= nilai <= 80:
    print('NILAI B')
elif 60 <= nilai <= 70:
    print('NILAI C')
elif 50 <= nilai <= 60:
    print('NILAI D')
else:
    print('tidak ada')

print(50*"=")
if 80 >= nilai :
    print('LEBIH BESAR DARI')
else:
    print('KURANG')


print(50*"=")

gorengan=["bakwan","cireng","bala-bala","gehu","combro","pisang goreng","pukis","risoles"] 
beli = "cireng"
beli2 = "roti"
if beli in gorengan:
    print(f"saya mau beli '{beli}' mang !") #tanpa perlu loop for, cari cireng didalam list gorengan
if not beli2 in gorengan:
    print(f"saya tidak menjual {beli2} jang") #kondisi dimana beli2 tidak ada di gorengan

print(50*"+")

karakter = "ca"
for kc in karakter:
    if kc in beli:
        print(f"ada karakter '{kc}' didalam '{beli}'")
    else:
        print(f"tidak ada karater di dalam '{beli}'")


