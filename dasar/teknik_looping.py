nama_band = [
    'payung tunduh',
    'dialog dini hari',
    'mr. sonjaya',
    'parahyena',
    'syahrini' #tidak akan ditampilkan di zip
]

lagu =[
    'akad',
    'zona nyaman',
    'rumahku',
    'sang filsuf'
    ]

#enumerate
enumerate
for i,val in enumerate(nama_band):
    print(f'ini index ke {i} dan value : {val}')

#zip -> kalo array tidak sesuai tidak akan ditampilkan
for band,lagu in zip(nama_band,lagu):
    print(band,lagu)

print(50*"=")
playlist = {'baby','ahay dedeuh','gg'}
playlist2 = {
    'payung teduh':"akad",
    'fourtwnty':'zona nyaman',
    'dialog dini hari':'rumahku'
}

for i,v in playlist2.items():
    print(f'ini key : {i} dan ini value : {v}')




