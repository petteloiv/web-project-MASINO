from django.urls import path
from . import views


urlpatterns = [
    path('quiz/', views.quiz, name='quiz'),
    path('raise_point/', views.raise_point, name='raise_point'),
    path('lower_point_1000/', views.lower_point_1000, name='lower_point_1000'),
    path('lower_point_10000/', views.lower_point_10000, name='lower_point_10000'),
    path('back_gacha/', views.back_gacha, name='back_gacha'),
    path('store_back/<int:movie_pk>/', views.store_back, name='store_back'),
    path('card_gacha/', views.card_gacha, name='card_gacha'),
    path('card_gacha_ten/', views.card_gacha_ten, name='card_gacha_ten'),
    path('store_card/<int:person_pk>/', views.store_card, name='store_card'),
    
    
]