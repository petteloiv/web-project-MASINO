from django.db import models
from django.conf import settings
# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=100)


class Movie(models.Model):
    title = models.CharField(max_length=100)
    popularity = models.FloatField()
    release_date = models.DateField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.TextField()
    backdrop_path = models.CharField(max_length=200)
    genre_ids = models.ManyToManyField(Genre, related_name='movie_genre')


class Person(models.Model):
    name = models.CharField(max_length=100)
    gender = models.IntegerField()
    profile_path = models.CharField(max_length=200, null=True, blank=True)
    popularity = models.FloatField()
    birthday = models.DateField(null=True)
    place_of_birth = models.CharField(max_length=200, null=True, blank=True)
    movie_ids = models.ManyToManyField(Movie, related_name='person_movie')
    


# class Review(models.Model):
#     title = models.CharField(max_length=100)
#     rank = models.IntegerField()
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

