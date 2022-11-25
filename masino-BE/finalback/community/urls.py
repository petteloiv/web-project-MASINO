from django.urls import path
from . import views

urlpatterns = [
    path('', views.article_list_or_create, name='article_list_or_create'),
    path('<int:article_pk>/', views.article_detail_or_update_or_delete, name='article_detail_or_update_or_delete'),
    # path('create/', views.create_article, name='create_article'),
    # path('<int:article_pk>/delete/', views.delete_article, name='delete_article'),
    # path('<int:article_pk>/update/', views.update_article, name='update_article'),
    path('<int:article_pk>/like/', views.like_article, name='like_article'),
    path('<int:article_pk>/comment/', views.create_comment, name='create_comment'),
    path('<int:article_pk>/comment/<int:comment_pk>/like/', views.like_comment, name='like_comment'),
    path('<int:article_pk>/comment/<int:comment_pk>/', views.update_comment_or_delete_comment, name='update_comment_or_delete_comment'),
    

    
]