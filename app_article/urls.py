from django.urls import path
from app_article import views

urlpatterns = [
    path('articles/', views.get_articles, name='all-article'),
    path('articles/<int:pk>/', views.get_article_detail, name='detail-article'),
    path('categories/', views.get_all_category, name='all-category'),
    path('categories/<str:category_name>/', views.get_news_category, name='specific-category'),
    path('videos/', views.get_videos, name='all-video'),
]


