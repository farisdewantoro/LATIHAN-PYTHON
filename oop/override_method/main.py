class Hero:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def showInfo(self):
        print(f'nama : {self.name} health : {self.health}')


class Hero_intelligent(Hero):
    def __init__(self,name):
        #Hero.__init__(self,name,100) #cara 1
        #Hero.showInfo(self)
        super().__init__(name,100)
        self.tipe = 'intelegent'
    def showInfo(self):
        print(f'nama : {self.name} \nhealth : {self.health}\ntipe : {self.tipe}')
class Hero_Strength(Hero):
    def __init__(self, name):
        # Hero.__init__(self,name,200)
        super().__init__(name, 200)


teachies = Hero_intelligent('teachies')
axe = Hero_Strength('axe')
print(teachies.__dict__)
