#List 
ganjil = [1,3,5,7,9]

#Tuple 
# - lebih ringan diproses
# - datanya fix tidak bisa dirubah

genap = (2,4,6,8,10)

#genap[2] = 99 #error tidak bisa 
#genap.append(99) #error tidak memiliki fungsi append

print(type(genap))
print(type(ganjil))
print(50*"-")
# print(dir(ganjil)) #fungsi yang ada di ganjil
# print(dir(genap))

import sys
import timeit
#contoh memory
data_list = [1,2,3,4,5,"gg"]
data_tuple = (1,2,3,4,5,"gg")
besar_datalist = sys.getsizeof(data_list)
besar_datatuple = sys.getsizeof(data_tuple)

print('besar data list',besar_datalist)
print('besar data tuple', besar_datatuple)

print(50*'=')
data_list2 = timeit.timeit(stmt="[1,2,3,4,5,6]",number=1000000)
data_tuple2 = timeit.timeit(stmt="(1,2,3,4,5,6)",number=1000000)
print("waktu list",data_list2)
print("waktu tuple",data_tuple2)

