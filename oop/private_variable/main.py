class Hero():  # template atau class
    #class variable
    jumlah_hero = 0
    __privateJumlah =0 #private variable
    def __init__(self, dictionary):
        self.name = 'name'
        self.health = 0
        self.power = 0
        self.armor = 0
        #variable instance private
        self.__private = 'private'
        #variable instance protected, mirip public tidak ada bedanya
        self._proctedted = 'protected'
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


loop = 0
for key,val in listHero.items():
    loop += 1
    val.siapa()
    val.healthUp(10)
    print(val.__dict__)

