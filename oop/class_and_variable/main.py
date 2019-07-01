class Hero(): #template atau class
    def __init__(self,dictionary):
        for k,v in dictionary.items():
            setattr(self,k,v)

heroes = [
    {"name":"mirana","health":100},
    {"name":"sven","health":200}
]

listHero={}
for i,hero in enumerate(heroes):
    listHero[f"hero{i}"] = Hero(hero)


value_at_index = listHero.values()
value_list = list(value_at_index)
print(value_list[0].health)
