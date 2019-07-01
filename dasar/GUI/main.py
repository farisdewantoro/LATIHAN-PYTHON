import tkinter

root = tkinter.Tk()

def event_tekan():
    label2 = tkinter.Label(root,text="wadaw ditekan")
    label2.pack()


label = tkinter.Label(root,text="halo,broooo \n testing weh")



button = tkinter.Button(root,text="tekan atuh",command = event_tekan) 
label.pack()
button.pack()
root.mainloop()
