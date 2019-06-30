data1 = [1,4,123,56,12,5]
#akses list
subdata1 = data1[3]
subdata2 = data1[-3] #ngambil dari belakang
subdata3 = data1[0:4] #0 sampai sebelum 4
subdata4 = data1[2:] #print dari index 2 sampe habis
subdata5 = data1[:2] #print dari index 0 sampe 2
subdata6 = data1[-2:] #print dari index -2 sampe belakang 
#potong list
data2 = [100,200,300,400,500,600]
#menambah list
penambahan1 = data1+data2
#merubah content dari list
data2[1] = 1 #merubah isi array
#isi variable
a = data1  #tidak boleh seperti ini, bakal merubah variable data1
a[0] =2000
b = data1[:] #yang benar seperti ini, tidak merubah data1
b[0] = 2000

#merubah content list dengan menggunakan slicing
data2[3:2] = [21,22]

#list dalam list
x = [data1,data2]

#mengkases list dalam multidimensional list
y = x[0][1]
print(data2)
#methods 
data2.append(2222) #mirip push
# data2.reverse() #array dibalik
data2.remove(2222) #remove dengan mencocokan value
data2.pop() #remove last index

# panjang_list = len(data2)
print(data2)



