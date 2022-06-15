from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Article, Comment

User = get_user_model()

class CommentSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    like_users = UserSerializer(many=True, read_only=True)
    like_count = serializers.IntegerField(source='like_users.count', read_only=True)

    class Meta:
        model = Comment
        fields = ('pk', 'user', 'content', 'article', 'like_users', 'like_count')
        read_only_fields = ('article',)



