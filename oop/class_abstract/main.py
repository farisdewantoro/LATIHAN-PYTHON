#membuat class abstract

#abc = abstract base class

#kelas abstract tidak bisa di instancekan --> tombol = Button() <-- ga bisa
from abc import ABC,abstractclassmethod

#abstractnya membuat method lainnya dipaksakan harus memiliki method yang di abstract
class Button(ABC):
    @abstractclassmethod
    def click(self):
        print("button click")

class PushButton(Button):
       def click(self):
        print("push button click")


# ga akan jalan --> harus pakai method click
# class RadioButton(Button):
#     def select(self):
#         print("select button click")


tombol1 = PushButton()
tombol1.click()
