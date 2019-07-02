class Hero():  # template atau class
    #class variable
    jumlah_hero = 0

    def __init__(self, dictionary):
        self.name = 'name'
        self.health = 0
        self.attackPower = 0
        self.armorNumber = 0
        Hero.jumlah_hero += 1
        for k, v in dictionary.items():
            if k in self.__dict__:
                setattr(self, k, v)
          
    # void function atau method
    def serang(self,lawan):
        print(self.name + ' menyerang ' + lawan.name)
        lawan.diserang(self)
    def diserang(self,lawan):
        print(self.name + ' diserang ' + lawan.name)
        attack_diterima = lawan.attackPower/self.armorNumber
        print('serangan terasa : ' + str(attack_diterima))
        self.health -= attack_diterima
        print(f'darah {self.name} tersisa {str(self.health)}')
    def siapa(self):
        print("namaku adalah " + self.name)
        
    def healthUp(self, up):
        self.health += up

    def getHealth(self):
        return self.health


heroes = [
    {
        "name": "mirana",
        "health": 100,
        "attackPower": 50,
        "armorNumber": 10
    },
    {
        "name": "sven", 
        "health": 200,
        "attackPower": 50,
        "armorNumber": 10
    }
]

heroes.append({
    "name":"sniper",
    "health":100,
    "attackPower":50,
    "armorNumber":10
})

listHero = {}
for i, hero in enumerate(heroes):
    listHero[f"hero{i}"] = Hero(hero)


# akses class variable dari hero1
# print('akses class variable dari hero : ', Hero.jumlah_hero)
loop = 0
listHero['hero2'].serang(listHero['hero1'])
print("\n")
listHero['hero2'].serang(listHero['hero1'])
print("\n")
listHero['hero2'].serang(listHero['hero1'])
print("\n")
listHero['hero2'].serang(listHero['hero1'])
print("\n")
listHero['hero2'].serang(listHero['hero1'])
print("\n")
    
# for key, val in listHero.items():
#     loop += 1
#     if val.name is 'sniper':
#         val.serang()
#     val.healthUp(10)
#     print(val.getHealth())


value_at_index = listHero.values()
value_list = list(value_at_index)

# for val in value_list:
#     print(val)
#     print(f'ini valuenya  {val.name} dan {val.health}')
