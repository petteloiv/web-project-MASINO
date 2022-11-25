from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProfileSerializer, ProfileChangeSerializer
# Create your views here.

User = get_user_model()

def signup(request):
    pass

def login(request):
    pass

def logout(request):
    pass

@api_view(['GET', 'PUT'])
def profile_detail_or_update(request):
    def profile_detail():
        serializer = ProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update_profile():
        serializer = ProfileChangeSerializer(instance=request.user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    if request.method == 'GET':
        return profile_detail()
    elif request.method == 'PUT':
        return update_profile()

@api_view(['GET'])
def another_profile(request, username):
    another_user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(another_user)
    return Response(serializer.data, status=status.HTTP_200_OK)
