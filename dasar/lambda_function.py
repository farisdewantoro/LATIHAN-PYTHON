def jumlah(a,b):
    c = a+b
    return c
hasil = jumlah(4,5)

#membuat anonymous function dengan lambda
cobaprint = lambda a: print(a)
cobaprint('test')

#contoh 1 :
kali = lambda x,y:x*y
hasill = kali(5,2)
print(hasill)


number_list = range(-5, 5)
less_than_zero = list(filter(lambda x: x == 2, number_list))
print(less_than_zero)
