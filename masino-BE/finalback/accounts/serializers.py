from rest_framework import serializers
from django.contrib.auth import get_user_model
from community.models import Article
from movies.models import Movie, Person

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):
    class ArticleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = ('pk', 'title', 'content')
    
    like_articles = ArticleSerializer(many=True)
    articles = ArticleSerializer(many=True)

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('pk', 'backdrop_path')

    movie = MovieSerializer(read_only=True)

    class PersonSerializer(serializers.ModelSerializer):
        class MovieSerializer(serializers.ModelSerializer):
            class Meta:
                model = Movie
                fields = ('pk','title',)

        movie_ids = MovieSerializer(many=True, read_only=True)

        class Meta:
            model = Person
            fields = ('__all__')

    person_ids = PersonSerializer(many=True, read_only=True)
    movie_ids = MovieSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'casino_points', 'person_ids', 'movie', 'movie_ids', 'like_articles', 'articles', )

class ProfileChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)