from rest_framework import serializers
from app_article.models import * 
from django.contrib.auth.models import User

class ArticlesSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    timesince = serializers.DateTimeField()
    
    def get_author(self, obj):
        return {'name': obj.author.first_name + ' ' + obj.author.last_name}
    def get_category(self, obj):
        return {'category': obj.category.category}
        
    class Meta:
        model = NewsModel
        # fields = ['id', 'title', 'description', 'article', 'image', 'permit', 'trending_news',
        #           'featured_news', 'breaking_news', 'pub_date', 'update_date', 'author'
        #          ]
        fields = '__all__'
    # def get_author(self,obj):
    #     return obj.author.first_name + obj.author.last_name
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategoryModel
        fields = '__all__' 
        
        
class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideosMododel
        fields = '__all__' 
        