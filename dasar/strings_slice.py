text = 'data string'
text2 = 'jalan-jalan dihari jum\'at'
text3 = "jalan-jalan dihari jum'at"
text4 = 'mahmuy berkata, "lo kemana aja bro?"'
text5 = """
ntap:"asdasd"
"""

text6 = r'C:\nyoto' # raw string
text7 = 5*"wk" #print wk sebanyak 5x
# print({
#     text,
#     text2,
#     text3,
#     text4,
#     text5,
#     text6,
#     text7
# })

text8 = "pisang goreng"
a1 = text8[0]
a2 = text8[0:6]
a3 = text8[-2]
a4 = text8[2:] #ngambil dari index ke 2
print({
   'a1 =>' + a1,
    'a2 =>' + a2,
    'a3 =>' +a3,
    'a4 =>' +a4
}) #ngurut berdasarkan karakter alfabet

text9 = f'{text8} tes bro' #using f-string
print('add variable ke string menggunakan using f-string',text9)