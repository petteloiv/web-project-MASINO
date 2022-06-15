### 오류가 키워 준 지식 :v: (BE - Django)

---

- url을 작성할 때, create/update/delete 등의 단어가 링크에 들어가지 않도록 restful 하게 수정

- ```python
  urlpatterns = [
      path('', views.article_list_or_create, name='article_list_or_create'),
      path('<int:article_pk>/', views.article_detail_or_update_or_delete, name='article_detail_or_update_or_delete'),
      # path('create/', views.create_article, name='create_article'),
      # path('<int:article_pk>/delete/', views.delete_article, name='delete_article'),
      # path('<int:article_pk>/update/', views.update_article, name='update_article'),
      path('<int:article_pk>/like/', views.like_article, name='like_article'),
      path('<int:article_pk>/comment/', views.create_comment, name='create_comment'),
      path('<int:article_pk>/comment/<int:comment_pk>/like/', views.like_comment, name='like_comment'),
      path('<int:article_pk>/comment/<int:comment_pk>/', views.update_comment_or_delete_comment, name='update_comment_or_delete_comment'),
  ]
  ```

------

- article을 작성한 user 정보를 찾아야 함
  - request.user에 들어있음

------

- Model에 null=True, blank=True 해놓지 않으면 update시 필수 값을 입력하라는 내용이 나옴, 사용자친화적이지 않음

  ```python
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
  ```

------

- serializer 2중 중첩, 어렵게 생각하지 말고 필요한 항목에 대해서 그냥 하면 됨

  ```python
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
  ```

  PersonSerializer에서 movie_ids 부분이 pk값만 나와서 사용하기 불편했음, 타이틀까지 나오게 하고 싶었는데 이를 위해 PersonSerializer 안에 MovieSerializer를 선언하고 movie_ids를 선언해준 다음에 밖에서 한번 더 같은 이름으로 선언해줌

------

- related name과 더불어 many=True 잘 체크해야 함

------

- Assertion Error
  - @api_view 까먹음

------

- fields를 fileds로 적어놓고 3시간 날림

------

- 받아온 데이터는 DateField 인데, Model에 DateTimeField 로 되어있어서 1977.05-25T00:00:00+090:00 이런식으로 되어있어서 모델 수정함

------

- fetchMovie 함수로 1800여개의 영화 데이터를 매번 프론트로 넘겨야 했기 때문에 너무 오래걸림, persisted Data를 사용하여 local storage에 저장하여 로딩 시간을 줄임

