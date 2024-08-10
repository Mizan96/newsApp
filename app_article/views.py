from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from app_article import models
from app_article import serializers

# Create your views here.

@api_view(['GET'])
def get_articles(request):
    articles = models.NewsModel.objects.all()
    serializer = serializers.ArticlesSerializer( articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_article_detail(request, pk):
    articles = models.NewsModel.objects.get(id=pk)
    serializer = serializers.ArticlesSerializer( articles, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_news_category(request, category_name):
    category = models.NewsCategoryModel.objects.get(category=category_name)
    articles = models.NewsModel.objects.filter(category=category.id)
    serializer = serializers.ArticlesSerializer(articles, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def get_videos(request):
    videos = models.VideosMododel.objects.all()
    serializer = serializers.VideosSerializer(videos, many=True)
    return Response(serializer.data)