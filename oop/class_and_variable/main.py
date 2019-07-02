class Hero(): #template atau class
    #class variable
    jumlah = 0 
    def __init__(self,dictionary):
        for k,v in dictionary.items():
            setattr(self,k,v)
            Hero.jumlah +=1

heroes = [
    {"name":"mirana","health":100},
    {"name":"sven","health":200}
]

listHero={}
for i,hero in enumerate(heroes):
    listHero[f"hero{i}"] = Hero(hero)

# akses class variable dari hero1
print('akses class variable dari hero : ', Hero.jumlah)
value_at_index = listHero.values()
value_list = list(value_at_index)
for val in value_list:
    print(f'ini valuenya  {val.name} dan {val.health}')
