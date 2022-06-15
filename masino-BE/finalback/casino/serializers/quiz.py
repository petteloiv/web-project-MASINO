from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie, Person

User = get_user_model()

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('pk','title','backdrop_path')

class UserChangeSerializerForPoint(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'casino_points')