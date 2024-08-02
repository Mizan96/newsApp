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
def get_news_category(request):
    categories = models.NewsCategoryModel.objects.all()
    serializer = serializers.CategorySerializer(categories, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def get_videos(request):
    videos = models.VideosMododel.objects.all()
    serializer = serializers.CategorySerializer(videos, many=True)
    return Response(serializer.data)