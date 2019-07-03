from abc import ABC,abstractclassmethod

class Button(ABC):

    def __init__(self,set_link):
        self.link = set_link                       
    @abstractclassmethod
    def click(self):
        pass

    @property
    @abstractclassmethod
    def link(self):
        pass
class PushButton(Button):
    def click(self):
        print(f"self button click go to : {self.link}")
    
    @Button.link.setter
    def link(self,set_link):
        self.__link = set_link
    @link.getter
    def link(self):
        return self.__link

tombol1 = PushButton("keren boy")
tombol1.click()
