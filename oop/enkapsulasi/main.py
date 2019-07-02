class Hero:
    #Encapsulasi
    #agar terjaga dan tidak mudah dirubah
    def __init__(self,name,health,attc):
        self.__name = name
        self.__health = health
        self.__attc = attc

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

#print(drow.name) #ttidak bisa 

print(drow.getHealth())
drow.diserang(5)
print(drow.getHealth())
