from django.db import models
from django.conf import settings
# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100, null=True)
    content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='articles')
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name='like_articles')


class Comment(models.Model):
    content = models.TextField(null=True, blank=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, null=True, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='comments')
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name='like_comments', null=True)