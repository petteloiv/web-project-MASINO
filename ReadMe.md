# :clapper: 2022 Movie Website Project :slot_machine:

SSAFY 1학기 최종 프로젝트 : 커뮤니티 기능을 갖춘 영화 추천 웹 서비스를 구현하며 작성하였습니다. 

- 사용법

  - 데이터를 새로 가져오기 위해서는 back 레포지토리의 data 폴더 안의 FetchGenreData, FetchMovieData, FetchPersonData의 tmdb api key만 바꾸어서 사용하시면 됩니다. 약 1시간~2시간이 소요 됩니다.

  - 이미 받아놓은 데이터가 server 폴더의 movies 폴더의 fixtures 안에 들어있습니다.

  - 데이터베이스도 함께 레포지토리에 올라가 있기 때문에 굳이 해주실 필요는 없지만, loaddata는 genredata, moviedata, persondata순으로 해주시면 됩니다.

    

[TOC]



### 1. 프로젝트 기간 및 목표

---

- 2022.05.17(화) ~ 2022.05.26(목)
- 영화 추천 알고리즘을 적용한 영화 커뮤니티 사이트 구현 



### 2. 팀 정보 및 업무 분담 내역

---

#### 눈물 날 정도로 약한 서`상`균 박지`현의` `4`조 

<img src="ReadMe.assets/팀이미지.png" alt="팀이미지" style="zoom: 67%;" />

| 이름                  | 역할         | 업무 분담 내역                                     |
| --------------------- | ------------ | -------------------------------------------------- |
| 서상균 :feet:         | 팀장         | Back-end / Django 서버 구현 / Vue 클라이언트 구현  |
| 박지현 :purple_heart: | 팀원, 젼버덕 | Front-end / Vue 클라이언트 구현 / Django 서버 수정 |



### 3. 개발일지

---

| 날짜       | 진행                    | 내용                                                         |
| ---------- | ----------------------- | ------------------------------------------------------------ |
| 2022-05-16 | 기획                    | 기능 기획                                                    |
| 2022-05-17 | 기획                    | 기능 구체화, 디자인 컨셉 선정, 수집 필요한 데이터 정리       |
| 2022-05-18 | 기획                    | API docs 구성, 목업 작성, 컴포넌트 구조 작성, 영화 데이터 수집 |
| 2022-05-19 | 기획                    | 목업, DB 모델링, ERD 작성 완료, 영화 데이터 수집, Django 프로젝트 설정 |
| 2022-05-20 | 개발                    | **Front**<br />- 프론트 프로젝트 생성<br />- 컴포넌트 생성, router 링크 작성<br />- vuex store 모듈화<br />**Back**<br />- API url 정리<br />- 데이터 가공 및 전송 로직 작성 |
| 2022-05-21 | 개발                    | **Front**<br />- Account login, logout, signup<br />**Back**<br />- Front 개발 단계에 맞춰 로직 수정<br />- 데이터 가공 및 전송 로직 작성 |
| 2022-05-22 | 개발                    | **Front**<br />- Account profile, user update<br />- Community  create<br />**Back**<br />- Front 개발 단계에 맞춰 로직 수정<br />- 영화 추천 알고리즘 작성 |
| 2022-05-23 | 개발                    | **Front**<br />- Community comment, article 전체 완성<br />- Movie search, detail (박지현)<br />- Movie recommend (서상균)<br />**Back**<br />- Front 개발 단계에 맞춰 로직 수정 |
| 2022-05-24 | 개발                    | **Front**<br />- Casino quiz, back gacha, card gacha (서상균)<br />-  개발 완료된 기능 스타일링<br />**Back**<br />- Front 기능 수정에 맞춰 로직 수정 |
| 2022-05-25 | 개발, 디버깅            | **Front**<br />- 개발 완료된 기능 스타일링<br />- 추가 기능 구현 : <br />[완성]<br />Profile 페이지 배우 카드 정렬, Alert 수정 <br />[미완성] <br />Article에 카드 첨부 |
| 2022-05-26 | 개발, 디버깅, 발표 준비 | **Front**<br />- 개발 완료된 기능 스타일링<br />- 추가 기능 구현 <br />[완성]<br />Profile 배우 카드 누르면 배우 정보 나오게 설정 (서상균) |



### 4.  개발 툴

---

- Git을 통한 소스코드 버전 관리 및 협업 
- Jira를 통한 프로젝트 일정 및 자료 관리
  - ![image-20220520095952368](ReadMe.assets/image-20220520095952368.png)

- Figma를 통한 목업 작성
  - ![image-20220520104813792](ReadMe.assets/image-20220520104813792.png)

- Python Web Framework
  - Django 2.1.x
  - Python 3.6.x
- JavaScript Framework 
  - Vue 2.x



### 5. 프로젝트 컨셉 및 주요 기능 

---

#### 5-1. 컨셉

- 카지노 컨셉의 영화 커뮤니티 사이트 
- 글, 댓글 작성, 영화 퀴즈를 통해 포인트를 벌어서 배경, 배우 카드 뽑기를 진행할 수 있다! 
  - 소비자의 수집욕구를 겨냥해 활발한 커뮤니티 기능 사용 유도  




#### 5-2. 영화 추천 알고리즘과 기능 요약

- 추천 알고리즘

  - 영화 장르별 추천 알고리즘
  - 다양한 장르의 유명 영화들을 랜덤으로 12개씩 제공
  - 평점 필터링 / 장르 필터링

   

- 주요 기능

  - 영화 : 영화 추천 및 검색, 간단한 정보 제공
  - 커뮤니티 : 게시글 작성 및 게시글 안에 댓글 작성 기능
  - 카지노 : 포인트 획득할 수 있는 퀴즈, 배경 및 카드 뽑기
  - 프로필 : 현재 포인트, 뽑은 배경, 작성한 글, 보유 카드 확인 가능




### 6. 컴포넌트 구조

---

![VK4-18 컴포넌트 구조 v.2](ReadMe.assets/VK4-18 컴포넌트 구조 v.2.jpg)

### 7. 데이터베이스 모델링

---

![VK4-33 ERD](ReadMe.assets/VK4-33 ERD.png)



#### 7-1. Accounts 모델 클래스 user

- (1:N)
- (M:M)

```
상균님 이 부분 작성 원하시면 작성해주시면 댑니다 ... 안쓸건데? 하면 그냥 지워주세요
```



### 8. 구현한 기능

---



#### 8-1. 시작 화면 

![image-20220531161012615](ReadMe.assets/image-20220531161012615.png)

- 로그인 화면
  - 로그인 해야만 모든 서비스를 이용할 수 있다.
  - 완성 전 버전이어서 글이 이상하게 들어가있음
  - 회원이 아니라면 가입창 링크로 연결 
  - 일치하지 않는 항목 / 로그인 오류가 나는 경우에 alert가 뜬다



![image-20220531161039319](ReadMe.assets/image-20220531161039319.png)

- 회원가입
  - 일치하지 않는 항목이 있으면 alert가 뜬다.



#### 8-2. 메인 페이지

![image-20220531161111034](ReadMe.assets/image-20220531161111034.png)

- 영화 추천 페이지, 새롭게 추천 받기 버튼이 메인에 위치
  - 각 영화의 포스터를 누르면 영화 세부 정보로 이동
  - 오른쪽의 스페이드는 Back to Top 버튼 : 누르면 페이지의 가장 위로 이동한다
  - navbar의 검색창을 통해 언제든지 영화 검색이 가능하다 

- 영화 추천 알고리즘
  - 1차로 평점 순으로 영화를 받아온다 
  - 2차로 보여줄 때 장르로 분류해 추천한다.



![image-20220531161143593](ReadMe.assets/image-20220531161143593.png)

- 영화 디테일 페이지 
  - 포스터, 제목, 장르, 평점, 개봉일, 줄거리, 썸네일이 포함된 영화 세부 정보 페이지 



![image-20220531161212604](ReadMe.assets/image-20220531161212604.png) 

![image-20220531161256553](ReadMe.assets/image-20220531161256553.png)

- navbar의 검색창으로 검색했을 때의 결과
  - 검색결과가 없을 경우에 알리는 문구가 표시된다.
  - 검색된 영화를 누르면 영화 세부 정보로 이동 



#### 8-3. Community

![image-20220531161332450](ReadMe.assets/image-20220531161332450.png)

- 게시판 메인
  - 글 작성 페이지, 작성된 글들이 표시된다.
  - 제목 => 글 디테일, 작성자 => 해당 작성자의 프로필로 이동한다.



![image-20220531161359157](ReadMe.assets/image-20220531161359157.png)

- 글 디테일
  - 작성자 (누르면 프로필로 이동), 작성일, 공감, 댓글 수, 글 내용, 댓글과 댓글 작성폼이 포함된다.
  - 글 내용 부분은 스크롤 설정해둬서 일정 크기보다 커지면 자동 스크롤 



![image-20220531161420942](ReadMe.assets/image-20220531161420942.png)

- 글 작성 / 수정 페이지 (같은 폼을 사용한다)
  - 제목, 내용 입력
  - 작성시 완료를 누르면 포인트가 들어왔다는 창이 뜬다.



#### 8-4. 카지노

![image-20220531161448398](ReadMe.assets/image-20220531161448398.png)

- 포인트 획득 퀴즈 / 뽑기 3 종류로 이루어짐
  - 영화 맞추기 -> 스틸컷을 보고 영화 제목을 맞추면 10,000 포인트 획득 가능 
  - 배경 뽑기 => 랜덤으로 배경을 뽑아 나의 프로필에 설정할 수 있다
  - 카드 뽑기 (1장, 12장) => 배우 카드를 뽑을 수 있다. 총 4가지 등급(유명도 순)으로 나뉘어진다.

- 영화배우 카드 확률표

  - | 1806명   |                       |               |
    | -------- | --------------------- | ------------- |
    | Platinum | popularity >= 40      | 33명, 약 1.8% |
    | Gold     | 40 > popularity >= 21 | 292명, 약 16% |
    | Silver   | 21 > popularity >= 14 | 605명, 약 33% |
    | Bronze   | 14 > popularity >= 10 | 876명, 약 48% |

    




![image-20220531161517572](ReadMe.assets/image-20220531161517572.png)

- 예시는 배경 뽑기 ..
  - 퀴즈 맞추거나 뽑을 때마다 획득 알림이 뜬다 



#### 8-5. 프로필

![image-20220531161543367](ReadMe.assets/image-20220531161543367.png)

- 내가 뽑아서 설정한 배경화면
  - 배경화면이 없는 경우에는 안내문구와 카지노로 가는 링크 연결 
- 아이디, 현재 가지고 있는 포인트, 개인정보수정 (이메일 하나), 작성글, 가지고 있는 카드들 포함
  - 글 제목을 누르면 글 디테일로 이동한다.

![image-20220531161609004](ReadMe.assets/image-20220531161609004.png)

- 내 배우 카드 
  - 등급 순서대로 정렬 (기본)
  - 위의 버튼을 통해서 등급별로 볼 수 있다
  - 카드를 누르면 해당 배우의 정보가 담긴 모달창 



### 9. 아쉬웠던 점 ..

---

- article에 배우 카드 넣는거 꼭 하고 싶었는데 구현하지 못했다 ㅜㅜ 
  - MTM POST 요청 보내기
- article pagination 적용 못한 점 
- article 좋아요 유무에 따른 버튼 다르게 보이기
  - 빈하트 / 꽉찬하트 
- error 창이 자꾸 localstorage에 저장되는지 alert가 계속 발생하는 문제 해결 못한 점



### 10. 추가하고 싶은 부분

------

- 현재 접속해 있는 접속자가 만약에 플래티넘 카드를 뽑았을 경우 모든 사용자가 알 수 있도록 alert가 뜰 수 있게
- 현재 접속자 리스트
- 커뮤니티에 자기 카드를 첨부해서 자랑할 수 있는 기능
- 모든 부분에 그리드를 적용하여 반응형으로 구축 ( 스마트폰에서도 접속할 수 있게 )
- 카드를 뽑았을 때, 카드가 뒤집어져있다가 눌렀을 때 카드가 보이는 방식으로 변경



### 오류가 키워 준 지식 :v:

---

- module을 나눠서 사용하면 다른 파일들은 `new Vuex.Store` 붙일 필요 없이 그냥 `export default ({})` 로 작성하면 된다! 이미 index가 생성해뒀기 때문! 
  - <img src="ReadMe.assets/unknown.png" alt="img" style="zoom:80%;" />
  - Uncaught Error가 뜬다!

---

- template 부터 위에서 아래로 렌더링 된다 .. props 데이터를 템플릿에서 쓰려고해서 문제가 생겼다 .... 큰 문제가 .. 
  - 이전 코드 : getters를 써서 state에 있는 pk 값을 data에 집어넣어서 사용하려고 함. 
    - undefined 오류가 뜸
    -  ![뷰에 선언되지 않은 데이터를 화면에 표시하려고 했을 때의 오류](ReadMe.assets/error1.png)
    - 이름만 다르고 같은 오류가 뜸
    - **속성이 선언되지 않았는데 화면에 렌더링 되려고 했습니다**
  - 해결 방법 
    - 1. props에 userPk 값을 넣어서 받아올 수 있나 확인
      2. main view 에서 router-link params를 1번에서 성공한 값으로 넣어서 path가 문제인지 데이터 값이 문제인지 체크
      3. 데이터가 문제였다 ... 
      4. data에 담아서 넘기던 코드를 computed를 사용해 넘겨줌! 
      5. params값이 string으로 들어가는 문제 발생 ...
    - **코드 싹 지우고 .... profile 페이지에서 userPk 싹 빼서 처리**
      - **dj-rest-auth  사용해서 request에 이미 정보가 담겨있었다.** 

---

- Pk 값에 대체 무슨 문제가 있던 걸까요 
  - ![image-20220523001458779](ReadMe.assets/image-20220523001458779.png)
  - article 작성 됨 => article Detail로 이동해야하는데 articlePk값이 없다고 한다 ,,, 하지만 getters.article.id 에 분명 값이 잘 들어있고요? 
  - 모든 코드에서 pk값이 말썽을 부리는 문제가 발생합니다 ......
  - 이거.. 아마 router.params에서 꺼내서 해결 했던 것 같습니다.

---

- 댓글이 생성은 되는데요? 이게 좀 이상합니다
  - ![image-20220523125351623](ReadMe.assets/image-20220523125351623.png)
  - 1. 댓글을 새로 작성하면 위처럼 댓글들이 다 뜬다 (방금 새로 작성한 댓글은 제외....)
    2. 새고하면 다른 댓글들은 다 지워지고 => 해당 article에 속한 댓글만 잘 뜬다... 
    3. 생성 / 수정 / 좋아요에서 같은 문제 발생
  - 수정이 진행되면 수정된 정보를 보내줘야하는데 시리얼라이저 맨 앞에서 받아온 애들을 넘겨주면 수정이 반영이 안된다... 그래서 return 해주기 전에 수정된 정보들을 다시 받아서 serialize 시킨 후 반환!
  - ![image-20220523133913996](ReadMe.assets/image-20220523133913996.png)

---

- Pk값을 찾지 못할 때는 내가 값을 제대로 찾아서 넣어줬는지 확인하자... 

---

- 새로고침 할 때 NavigationDuplicated 오류가 뜬다.. 

  - 기능은 작동하지만 자꾸 오류가 나서 ..... 이런식으로 catch err => err 해줬다... (aka 비둘기코드)
  - Error Handling
    - 에러 핸들링 미들웨어라고한다 .. 

  ```js
          router.push({
            name: "moviesearchview",
            params: {
              keyword: getters.keyword,
            },
          }).catch(err => err)
  ```




---

- 기타 스타일링 하면서 알게 된 여러 사실들
  - 버튼 테두리 border - 0
  - background-color 대신 background 써볼 것
    - navbar 색 설정하면서 알게됨
  - 어디서 어디로 어느 데이터 보내주는지 먼저 잘 파악할 것!

------

- url을 작성할 때, create/update/delete 등의 단어가 링크에 들어가지 않도록 restful 하게 수정

  ```python
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

------

- 프로필에 본인 카드 목록을 페이지네이션으로 구현, 등급별로 구분해서 보여줄 수 있도록 구현

  ```vue
  <template>
    <div>
  
      <div class="card-deck container">
        <div class="row" style="justify-content: normal;">
  
  
          <div style="border-radius: 10px;" v-b-modal.modal-card @click="[storePerson(card)]" class="card profile-card col-2 m-3 mx-3.5" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in paginatedData" :key="card.pk">
            <div class="card-header">
            </div>
            <img  style="border-radius: 10px;" class="profile-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
            <div class="card-body profile-card-body" style="text-align: center;">
              <div style="vertical-align: middle;" class="card-title">{{ card.name }}</div>
  
            </div>
          </div>
  
          <b-modal id="modal-card" hide-footer hide-header size="lg" title="BACKGACHA" no-close-on-backdrop body-bg-variant="dark">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                  <div style="border-radius: 10px;" class="card modal-card" :class="{'platinum': personInfo.popularity >= 40, 'gold': personInfo.popularity < 40, 'silver': personInfo.popularity < 21, 'bronze': personInfo.popularity < 14}">
                    <img class="modal-card-img p-3" :src="`http://image.tmdb.org/t/p/original/${personInfo.profile_path}`">
                    <div class="card-body modal-card-body">
                      <div style="vertical-align: middle; text-align: center; font-size: 1.5rem;" class="card-title">{{ personInfo.name }}</div>
                    </div>
                    </div>
                </div>
                <div class="col-md-8 infoText text-align: center;">
                  <h2 class="modal-card-text">
                    <span class='modal-card-title'>이름 : </span>{{ personInfo.name }}
                  </h2>
                  <h3 class="modal-card-text">
                    <span class='modal-card-title'>생일 : </span>{{ personInfo.birthday }}
                  </h3>
                  <h3 class="modal-card-text">
                    <span class='modal-card-title'>출생지 : </span>{{ personInfo.place_of_birth }}
                  </h3>
                    <h3 class="modal-card-title">출연작</h3>
                  <div class='modal-movie-list'>
                    <div class='modal-movie-list-box' v-for="movie in personInfo.movie_ids" :key="movie.pk">
                      <br>
                      <router-link class="modal-card-text-movie" style="text-decoration: none;"  :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
                        {{ movie.title }}
                      </router-link>
                      
  
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div class="modal-button-box">
              <button class="mt-3 modal-stash-button" block @click="[$bvModal.hide('modal-card'),]">
                  닫기
              </button>
              
            </div> 
          </b-modal>
            
        </div>
      </div>
  
      
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          이전
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          다음
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'paginated-list',
    data () {
      return {
        pageNum: 0,
        personInfo: {}
      }
    },
    props: {
      listArray: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        required: false,
        default: 10
      },
      pageNumber: {
        type: Number,
        required: false,
        default: 0
      }
    },
    methods: {
      nextPage () {
        this.pageNum += 1;
      },
      prevPage () {
        this.pageNum -= 1;
      },
      goFirstPage () {
        this.pageNum = 0
      },
      storePerson(a) {
        this.personInfo = a
      }
    },
    computed: {
      pageCount () {
        let listLeng = this.listArray.length,
            listSize = this.pageSize,
            page = Math.floor(listLeng / listSize);
        if (listLeng % listSize > 0) page += 1;
        
        /*
        아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
        이런식으로 if 문 없이 고칠 수도 있다!
        */
        return page;
      },
      paginatedData () {
        const start = this.pageNum * this.pageSize,
              end = start + this.pageSize;
        return this.listArray.slice(start, end);
      }
    }
  }
  </script>
  ```

  - 이 때, 만약 Silver 페이지에서 7/10을 보고 있다가 Platinum 버튼을 누를 경우 7/2 이런식의 사용자 비친화적인 현상이 발생, 따라서 등급 버튼을 눌렀을 때 Pagenum이 0이 될 수 있도록 처리함

  ```javascript
  data () {
      return {
        pageNum: 0,
        personInfo: {}
      }
    },
    props: {
      listArray: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        required: false,
        default: 10
      },
      pageNumber: {
        type: Number,
        required: false,
        default: 0
      }
    },
  ```

  

  ```javascript
  methods: {
      nextPage () {
        this.pageNum += 1;
      },
      prevPage () {
        this.pageNum -= 1;
      },
      goFirstPage () {
        this.pageNum = 0
      },
      storePerson(a) {
        this.personInfo = a
      }
    },
  ```

   goFirstPage()는 PaginatedList라는 하위 컴포넌트에서 정의된 함수이고, 이를 AccountView라는 상위 컴포넌트에서 사용하기 위해선 조치가 필요함

  ```javascript
  methods: {
      ...mapActions(['fetchProfile']),
      sortPageArray() {
        this.pageArray = this.profile.person_ids.sort(function (a,b) {
          return b.popularity - a.popularity;
        })
      },
      platinumPageArray() {
        this.pageArray = this.profile.person_ids.filter(function(a){
          return a.popularity >= 40
        })
      },
      goldPageArray() {
        this.pageArray = this.profile.person_ids.filter(function(a){
          return a.popularity < 40 && a.popularity >= 21
        })
      },
      silverPageArray() {
        this.pageArray = this.profile.person_ids.filter(function(a){
          return a.popularity < 21 && a.popularity >= 14
        })
      },
      bronzePageArray() {
        this.pageArray = this.profile.person_ids.filter(function(a){
          return a.popularity < 14 && a.popularity >= 10
        })
      },
      goToFirstPage() {
        this.$refs.PaginatedList.goFirstPage()
      }
    },
  ```

  ```vue
  <div v-else>
                                    <button class="profile-card-button" @click="[platinumPageArray(), goToFirstPage()]">Platinum</button><span>|</span>
                                    <button class="profile-card-button" @click="[goldPageArray(), goToFirstPage()]">Gold</button><span>|</span>
                                    <button class="profile-card-button" @click="[silverPageArray(), goToFirstPage()]">Silver</button><span>|</span>
                                    <button class="profile-card-button" @click="[bronzePageArray(), goToFirstPage()]">Bronze</button>
                                    <paginated-list
                                    ref="PaginatedList" 
                                    :list-array="pageArray" />
                                  </div>
  ```

  

