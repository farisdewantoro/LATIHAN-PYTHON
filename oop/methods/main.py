class Hero():  # template atau class
    #class variable
    jumlah_hero = 0

    def __init__(self, dictionary):
        self.name = 'name'
        self.health = 0
        self.power = 0
        self.armor = 0
        for k, v in dictionary.items():
            if k in self.__dict__:
                setattr(self, k, v)
            Hero.jumlah_hero += 1
    # void function atau method        
    def siapa(self):
        print("namaku adalah " + self.name)
    def healthUp(self,up):
        self.health +=up
    def getHealth(self):
        return self.health

heroes = [
    {"name": "mirana", "health": 100},
    {"name": "sven", "health": 200}
]

listHero = {}
for i, hero in enumerate(heroes):
    listHero[f"hero{i}"] = Hero(hero)


# akses class variable dari hero1
print('akses class variable dari hero : ', Hero.jumlah_hero)
loop = 0
for key,val in listHero.items():
    loop += 1
    val.siapa()
    val.healthUp(10)
    print(val.getHealth())


value_at_index = listHero.values()
value_list = list(value_at_index)

# for val in value_list:
#     print(val)
#     print(f'ini valuenya  {val.name} dan {val.health}')
