import tkinter

root = tkinter.Tk()
label1 = tkinter.Label(root,text="label1")
label2 = tkinter.Label(root, text="label2")

tombol1 = tkinter.Button(root,text="tombol1")
tombol2 = tkinter.Button(root, text="tombol2")
#method positioning
label1.pack()
label2.pack()
tombol1.pack()
tombol2.pack()

#method menampilkan GUI
root.mainloop()
