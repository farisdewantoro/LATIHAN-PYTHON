from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'judul':'Ini blog',
        'nama':'fafafa',
        'nav':[
            ['/','Home'],
            [ '/blog','Blog'],
            [ '/about','About'],
        ]
    }
    return render(request,'index.html',context)


def cerita(request):
    context = {
        'judul': 'Ini cerita',
        'nama': 'fafafa'
    }
    return render(request, 'gg.html', context)

    
def news(request):
    context = {
        'judul': 'Ini news',
        'nama': 'fafafa'
    }
    return render(request, 'gg.html', context)
