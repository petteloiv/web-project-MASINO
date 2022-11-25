from django.urls import path
from . import views

urlpatterns = [
    # path('signup/', views.signup, name='signup'),
    # path('login/', views.login, name='login'),
    # path('logout/', views.logout, name='logout'),
    path('profile/', views.profile_detail_or_update, name='profile_detail_or_update'),
    path('profile/<str:username>/', views.another_profile, name='another_profile'),
]
