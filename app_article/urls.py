from django.urls import path
from app_article import views

urlpatterns = [
    path('articles/', views.get_articles, name='all-article'),
    path('categories/', views.get_news_category, name='all-category'),
    path('videos/', views.get_videos, name='all-video'),
]


