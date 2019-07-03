#untuk masuk ke enviroment dan membuat envronment yaitu python -m venv 'nama folder'
#untuk masuk ke virtual enviroment :
# menggunakan linux atau gitbash yaitu source ./'nama_folder'/Scripts/activate
# menggunakan windows atau cmd biasa yaitu ''nama_folder'\Scripts\activate.bat
# cara install package_list --> pip freeze --local > 'namafile.txt'
# pip install -r 'nama_file_package.txt'
# untuk keluar dari environment menggunakan deactivate
import numpy as np 
a = np.array([1,2,3,4])
b = np.array([5,6,7,8])

print(a+b)