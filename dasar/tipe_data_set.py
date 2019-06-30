#set , himpunan : 
# - tidak punya urutan 
himpunan ={
    "data",
    "data2",
    "data3"
}
himpunan.add("data4")
himpunan.add("data41")
print(himpunan)

print(50*"-")

#contoh 2
himpunan2 = set()
himpunan2.add("waw")
himpunan2.add('wadaw')
himpunan2.add(222)
print(himpunan2)
#print(himpunan2[0]) #error karena tidak ada indexing
h_ganjil = {1,3,5,7,9}
h_genap = {2,4,6,8,10}
h_prima = {2,3,5,7}
print(h_ganjil.union(h_genap))
print(h_ganjil.intersection(h_prima))
print(h_ganjil)

