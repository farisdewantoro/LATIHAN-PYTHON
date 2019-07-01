class Hero(): #template atau class
    def __init__(self,name,health):
        self.name = name
        self.health = health

hero1 = Hero("sniper",100) #Object / instance 
hero2 = Hero("sven",200)
hero3 = Hero("meepo",300)

print(hero1.__dict__)