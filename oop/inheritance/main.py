class Hero:
    def __init__(self,name,health):
        self.name = name
        self.health = health
    def mantap(self):
        return self.name
class Hero_intelligent(Hero):
    pass


class Hero_Strength(Hero):
    pass

lina = Hero('lina',100)
teachies = Hero_intelligent('teachies',50)
axe = Hero_Strength('axe',400)
print(help(axe))
