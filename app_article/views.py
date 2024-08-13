from rest_framework.decorators import api_view
from rest_framework.response import Response
# from django.http import JsonResponse
from app_article import models
from app_article import serializers

# Create your views here.

# get all articles
@api_view(['GET'])
def get_articles(request):
    articles = models.NewsModel.objects.all()
    serializer = serializers.ArticlesSerializer( articles, many=True)
    return Response(serializer.data)

# get article details
@api_view(['GET'])
def get_article_detail(request, pk):
    articles = models.NewsModel.objects.get(id=pk)
    print('Category: ',articles.author.first_name)
    serializer = serializers.ArticlesSerializer( articles, many=False)
    return Response(serializer.data)

# get all artticle category
@api_view(['get'])
def get_all_category(request):
    categories = models.NewsCategoryModel.objects.all()
    serializer = serializers.CategorySerializer(categories, many=True)
    return Response(serializer.data)

# category wise access in the frontend
@api_view(['GET'])
def get_news_category(request, category_name):
    category = models.NewsCategoryModel.objects.get(category=category_name)
    articles = models.NewsModel.objects.filter(category=category.id)
    serializer = serializers.ArticlesSerializer(articles, many=True)
    return Response(serializer.data)
 
# get all videos   
@api_view(['GET'])
def get_videos(request):
    videos = models.VideosMododel.objects.all()
    serializer = serializers.VideosSerializer(videos, many=True)
    return Response(serializer.data)