from django.db import models
from django.contrib.auth.models import AbstractUser
from movies.models import Person, Movie
# from django.contrib.auth.models import BaseUserManager

# Create your models here.

# class UserManager(BaseUserManager):

#     def create_user(self, email, password=None, **kwargs):
#         user = self.model(email=email, **kwargs)
#         user.set_password(password)
#         user.card_album = Person.objects.all()
#         user.save()
#         return user

#     def create_superuser(self, email, password, **kwargs):
#         user = self.model(
#             email=email, is_staff=True, is_superuser=True, **kwargs)
#         user.set_password(password)
#         user.card_album = Person.objects.all()
#         user.save()
#         return user

class User(AbstractUser):
    # objects = UserManager()
    # background_img_path = models.CharField(max_length=200, blank=True)
    casino_points = models.IntegerField(null=True, default=100000)
    # card_album = models.ForeignKey(Person, on_delete=models.CASCADE, null=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=True)
    person_ids = models.ManyToManyField(Person, related_name='user_card')


