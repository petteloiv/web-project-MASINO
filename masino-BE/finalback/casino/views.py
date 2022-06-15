from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from movies.models import Movie, Person
# from ..movies.serializers.movie import MovieSerializer
from .serializers.quiz import QuizSerializer, UserChangeSerializerForPoint
from .serializers.gacha import BackgachaSerializer, CardgachaSerializer, UserChangeSerializerForBackgacha, UserSerializer
import random

User = get_user_model()

# Create your views here.
@api_view(['GET'])
def quiz(request):
    movies = Movie.objects.all()
    quizs = random.sample(list(movies), 3)
    serializer = QuizSerializer(quizs, many=True)
    return Response(serializer.data)

@api_view(['POST'])   
def raise_point(request):
    raised_point = 10000
    request.user.casino_points += raised_point
    serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data) 

@api_view(['POST']) 
def lower_point_1000(request):
    request.user.casino_points -= 1000
    serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)

@api_view(['POST']) 
def lower_point_10000(request):
    request.user.casino_points -= 10000
    serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)   

@api_view(['GET'])
def back_gacha(request):
    movies = Movie.objects.all()
    picked_movie = random.sample(list(movies), 1)
    serializer = BackgachaSerializer(picked_movie, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def store_back(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    if request.user.movie == movie:
        request.user.casino_points += 500
        serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    else:
        request.user.movie = movie
        serializer = UserChangeSerializerForBackgacha(instance=request.user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@api_view(['GET'])
def card_gacha(request):
    persons = Person.objects.all()
    picked_person = random.sample(list(persons), 1)
    serializer = CardgachaSerializer(picked_person, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def card_gacha_ten(request):
    persons = Person.objects.all()
    picked_person = random.sample(list(persons), 12)
    serializer = CardgachaSerializer(picked_person, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def store_card(request, person_pk):
    person = get_object_or_404(Person, pk=person_pk)
    if request.user.person_ids.filter(pk=person_pk).exists():
        request.user.casino_points += 500
        serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    else:
        request.user.person_ids.add(person)
        serializer = UserSerializer(request.user)
        return Response(serializer.data)