class Hero:
    def __init__(self, name, health, attc):
        self.name = name
        self.__health = health
        self.__attc = attc
        self.__armor = 0
        # self.__info = "name {} : \nhealth: {}".format(self.__name, self.__health)
     
    @property #merubah sebuah method menjadi seperti variable
    def info(self):
        return "name {} : \nhealth: {}".format(self.name, self.__health)
    @property
    def armor(self):
        pass
    @armor.getter
    def armor(self):
        return self.__armor
    def getHealth(self):
        return self.__health
    @armor.setter
    def armor(self,input):
        self.__armor = input
    @armor.deleter
    def armor(self):
        self.__armor = None
drow = Hero('drow',100,10)

#merubah info
print(drow.info)
drow.name ='ganti'
print(drow.info)

print(50*"=")

print(drow.armor)
drow.armor = 50
print(drow.armor)

print('DELETE')
del drow.armor
print(drow.__dict__)