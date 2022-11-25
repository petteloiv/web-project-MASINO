from rest_framework import serializers
from ..models import Genre, Movie


class MovieListSerializer(serializers.ModelSerializer):
    # class GenreSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Genre
    #         fields = ('pk', 'name')

    # genre_ids = GenreSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ('pk', 'title', 'popularity', 'poster_path', 'genre_ids')


class MovieSerializer(serializers.ModelSerializer):

    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = ('pk', 'name')

    genre_ids = GenreSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'

