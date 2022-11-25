from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie, Person

User = get_user_model()

class BackgachaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('pk', 'title', 'backdrop_path')


class CardgachaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('pk', 'name', 'profile_path', 'popularity')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'person_ids', 'casino_points')


class UserChangeSerializerForBackgacha(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'movie', 'casino_points')

