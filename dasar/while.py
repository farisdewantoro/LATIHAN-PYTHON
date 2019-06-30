angka = 0
while angka < 5:
    print('nilai saat ini :',angka)
    angka = angka+1


print('diluar while')
start = True
while start:
    print(angka)
    if angka is 100:
        start = False
        print("angka di temukan",angka)
    angka +=1

print(50*'-')

angka2 = 0
#else,break,continue,pass
while angka2 < 10:
    if angka2 is 5:
        print('keluar dari while')
        #continue -> #infinite loop karena loncat langsung ke index berikutnya dan tidak mengeksekusi angka2++

        break
        
    print('nilai angka adalah :', angka2)
    angka2 +=1
else:
    print('nilai angka diakhir while', angka2)
