<template>
  <div>
    <navbar-item></navbar-item>
    <div class="m-5 article-detail">
      <br><br>
      <h1 class="text-center" style="color:goldenrod;">{{article.title}}</h1>
      <br>
      <hr class="article-line" style="text-align:center;height:4px;color:goldenrod;">

      <!-- article 정보 / 여기다가 d-flex -->
      <div class="d-flex ">
        <div class="article-info" style="font-size:1.2rem; color:blanchedalmond;">
          <p> 작성자 : 
            <router-link style="text-decoration:none; color: goldenrod;" :to="{ name: 'anotherProfile', params: { username: article.user.username} }">
              <span>{{ article.user.username }}</span>
            </router-link>
            </p>
          <p> 작성 시간 : {{ article.created_at }}</p>
          <span>
            <button class="heart-btn" @click="likeArticle(articlePk)">💛</button><span>{{ likeCount }}</span>
          </span>
          <div v-if="isAuthor">
            <button class="article-edit">
              <router-link style="text-decoration:none;color:white;" :to="{ name: 'articleUpdate', params: { articlePk } }">수정</router-link>
            </button> 
            <span>
              <button class="article-del" @click="deleteArticle(articlePk)">삭제</button>
            </span>          
          </div>
        </div>
      </div>
      <hr class="article-line" style="height:4px; color:goldenrod;">
      <!-- article 내용 -->
      <div class="article-content" style="font-size:1.5rem; color:goldenrod;">
        {{ article.content }}
      </div>
      <br>
      <hr class="article-line" style="height:4px; color:goldenrod;">
      <!-- 댓글 -->
      <p style="font-size:1.5rem; color:blanchedalmond;">댓글</p>
      <comment-list :comments="article.comments"></comment-list>


      <br>
      <!-- 가장 끝 부분 (돌아가기) -->
      <button class="article-back">
        <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'community' }">목록으로 돌아가기</router-link>
      </button>

    </div>
 
    


  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentList from '@/components/Community/CommentList.vue'
import NavbarItem from '@/components/Common/NavbarItem.vue'

export default {
  name: 'ArticleDetailView',
  components: {
    CommentList,
    NavbarItem
  },
  data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
  computed: {
    ...mapGetters(['isAuthor', 'article','currentUser']),
    likeCount() {
      return this.article.like_users?.length
    }
  },
  methods: {
    ...mapActions([
      'fetchArticle',
      'likeArticle',
      'deleteArticle',
    ])
  },
  created() {
    this.fetchArticle(this.articlePk)
  },


}
</script>

<style scoped>

/* .article-detail{
  border-style: solid;
  border-color: goldenrod;
  border-radius: 20px;
} */

.article-info{
  color: blanchedalmond;
}

.article-content{
  color: blanchedalmond;
}


.article-edit {
  border: none;
	background-color: goldenrod;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:16px;
	padding:6px 20px;
	text-decoration:none;
}
.article-edit:hover {
  border: none;
	background-color:#bec77a;
}



.article-del {
  border: none;
	background-color:#676b51;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:16px;
	padding:6px 20px;
	text-decoration:none;
}
.article-del:hover {
  border: none;
	background-color:#bec77a;
}
/* .article-del:active {
	position:relative;
	top:1px;
} */

.heart-btn{
  border: none;
	border-radius:42px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:27px;
	padding:0px 0px;
	text-decoration:none;
}

</style>