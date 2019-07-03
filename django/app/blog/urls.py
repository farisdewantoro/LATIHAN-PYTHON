
from django.urls import path
from django.http import HttpResponse
from . import views
def test(request):
    return HttpResponse('test')
urlpatterns = [
    path('', views.index),
    path('test',test)
]
