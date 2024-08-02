from rest_framework import serializers
from app_article.models import * 

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsModel
        fields = '__all__'
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategoryModel
        fields = '__all__' 
        
        
class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideosMododel
        fields = '__all__' 
        