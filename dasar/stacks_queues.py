

#untuk antrian dan penumpukan data

stack = [1,2,3,4,5]
#memasukan data baru
print('data stack',stack)
stack.append(7)
print('data masuk',7)
stack.append(8)
print('data masuk', 8)
print(stack)
stack.pop() #menghilangkan data terakhir
print(stack)


#antrian
from collections import deque
antrian = deque([1,2,3,4,5])
print(antrian)

#menambahkan data
antrian.append(6)
print('data masuk',6)
print(antrian)

antrian.append(7)
print('data masuk', 7)
print(antrian)

#mengurani antrian
out = antrian.popleft()
print('data keluar :',out)
print('data sekarang :',antrian)
