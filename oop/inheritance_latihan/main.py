from Hero import *

lina = HeroIntelligent('lina')
sladar = HeroStrength('sladar')
lina.show_info()
sladar.show_info()

print(50*"=")
lina.gainExp = 200
sladar.gainExp = 250
lina.show_info()
sladar.show_info()
