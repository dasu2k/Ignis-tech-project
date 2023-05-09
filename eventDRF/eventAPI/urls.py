from django.urls import path
from . import views

urlpatterns = [
    path('', views.viewAllData),
    path('createEvent',views.createEvent),
]

