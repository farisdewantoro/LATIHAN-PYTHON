class Hero:
    #Encapsulasi
    #agar terjaga dan tidak mudah dirubah
    
    #private class variable
    __jumlah = 0
    
    def __init__(self,name,health,attc):
        self.__name = name
        self.__health = health
        self.__attc = attc
        Hero.__jumlah += 1

    #hanya berlaku untuk objek, karena ada self
    def getJumlah(self):
        return Hero.__jumlah
    #hanya berlaku untuk class, karena tidak ada self
    def getJumlah1():
        return Hero.__jumlah

    #method static (decorator)
    @staticmethod
    def getJumlah2():
        return Hero.__jumlah
    @classmethod
    def getJumlah3(self):
        return self.__jumlah

    # getter
    def getName(self):
        return self.__name
    def getList(self):
        return self.__dict__
    def getHealth(self):
        return self.__health
    def getByKey(self,key):
        return self[key]
    #setter
    def diserang(self,serangPower):
        self.__health -=serangPower 

#awal dari game
drow = Hero('drow',50,5)


sf = Hero('sf',55,12)
#print(drow.name) #ttidak bisa 

print('dari obj saja ',drow.getJumlah()) # dari obj
print('dari class saja ',Hero.getJumlah1())  # dari class
print('static method : ',drow.getJumlah2()) #static method bisa di gunakan di keduanya obj dan class
print('class method : ', drow.getJumlah3()) #bisa keduanya --> paling bagus
