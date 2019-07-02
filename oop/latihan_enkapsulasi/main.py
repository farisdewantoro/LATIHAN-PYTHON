class Hero:

    #private class variable
    __jumlah = 0
    def __init__(self,name,health,att,armor):
        self.__name = name
        self.__healthStandar = health
        self.__attPowerStandar = att
        self.__armorStandar = armor
        self.__level = 1
        self.__exp = 0

        self.__healthMax = self.__healthStandar * self.__level
        self.__attPower = self.__attPowerStandar *self.__level 
        self.__armor = self.__armorStandar * self.__level
        self.__health = self.__healthMax
        Hero.__jumlah +=1

    @property
    def info(self):
        return f'{self.__name} \nlevel : {self.__level} \n health : {self.__health}/{self.__healthMax} \nattack : {self.__attPower} \narmor :{self.__armor}'
    @property
    def gainExp():
        pass
    @gainExp.setter
    def gainExp(self,addExp):
        self.__exp += addExp
        if(self.__exp >= 100):
            print(self.__name,'level up bro')
            self.__level += 1
            self.__exp -= 100

            self.__healthMax = self.__healthStandar * self.__level
            self.__attPower = self.__attPowerStandar * self.__level
            self.__armor = self.__armorStandar * self.__level
    def attack(self,musuh):
        self.gainExp = 50

slardar = Hero('sladar',100,5,10)
axe = Hero('axe', 100, 5, 10)
print(slardar.info)
slardar.attack(axe)
slardar.attack(axe)
print(slardar.info)
