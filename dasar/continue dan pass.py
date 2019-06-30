#di for loop ada 3 method:
#break ==>stop loop
#continue ==> langsung lompat ke index berikutnya
#pass ==> berguna untuk dummy data, tidak berpengaruh pada loop

for i in range(1,10):
    if i is 6:
        print("nilai i adalah",i)
        pass
        print('cek bro  <---')
    print('nilai saat ini adalah',i)
else:
    print('final')

print(50*"-")