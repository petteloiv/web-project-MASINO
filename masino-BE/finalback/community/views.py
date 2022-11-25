from django.shortcuts import render, get_list_or_404, get_object_or_404
from django.db.models import Count
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article, Comment
# Create your views here.
from .serializers.article import ArticleListSerializer,ArticleSerializer
from .serializers.comment import CommentSerializer
from casino.serializers.quiz import UserChangeSerializerForPoint



@api_view(['GET', 'POST'])
def article_list_or_create(request):

    def article_list():
        articles = Article.objects.annotate(
            comment_count=Count('comments', distinct=True),
            like_count=Count('like_users', distinct=True)
        ).order_by('-pk')
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create_article():
        request.user.casino_points += 3000
        serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    if request.method == 'GET':
        return article_list()
    elif request.method == 'POST':
        return create_article()

@api_view(['GET', 'DELETE', 'PUT'])
def article_detail_or_update_or_delete(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    
    def article_detail():
        serializer = ArticleSerializer(article)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete_article():
        if request.user == article.user:
            article.delete()
            data = {
                'delete': f'데이터 {article_pk}번이 삭제되었습니다.'
            }
            return Response(data, status=status.HTTP_204_NO_CONTENT)

    def update_article():
        if request.user == article.user:
            serializer = ArticleSerializer(instance=article, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)

    if request.method == 'GET':
        return article_detail()
    elif request.method == 'DELETE':
        return delete_article()
    elif request.method == 'PUT':
        return update_article()

@api_view(['POST'])
def like_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    user = request.user
    if article.like_users.filter(pk=user.pk).exists():
        article.like_users.remove(user)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    else:
        article.like_users.add(user)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)


@api_view(['POST'])
def create_comment(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    request.user.casino_points += 1000

    serializer = UserChangeSerializerForPoint(instance=request.user, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()

    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user, article=article)
    
    comments = article.comments.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE', 'PUT'])
def update_comment_or_delete_comment(request, article_pk,comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)
    article = get_object_or_404(Article, pk=article_pk)

    def delete_comment():
        if request.user == comment.user:
            comment.delete()
            comments = article.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)
    
    def update_comment():
        if request.user == comment.user:
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = article.comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)
    
    if request.method == 'DELETE':
        return delete_comment()
    elif request.method == 'PUT':
        return update_comment()

@api_view(['POST'])
def like_comment(request, article_pk, comment_pk):
    article = get_object_or_404(Article, pk=article_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)
    user = request.user
    if comment.like_users.filter(pk=user.pk).exists():
        comment.like_users.remove(user)
        comments = Comment.objects.annotate(
            like_count=Count('like_users', distinct=True)
        )
        comments = article.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    else:
        comment.like_users.add(user)
        comments = Comment.objects.annotate(
            like_count=Count('like_users', distinct=True)
        )
        comments = article.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)



