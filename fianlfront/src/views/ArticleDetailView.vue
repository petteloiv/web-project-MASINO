<template>
  <div>
    <navbar-item></navbar-item>
    <div></div>
    <div>
      <div class="m-5 article-detail">
        <br><br>
        <div class="px-5">
          <h1 class="text-center" style="color:goldenrod;">{{article.title}}</h1>
          <!-- <hr class="article-line" style="text-align:center;height:4px;color:blanchedalmond;"> -->
          <br>
        </div>

        <!-- <hr class="article-line" style="text-align:center;height:4px;color:goldenrod;"> -->

        <!-- article 정보 / 여기다가 d-flex -->
        <div class="px-5 ">
          <div class="article-info d-flex" style="font-size:1.2rem; color:blanchedalmond;">
            <div class="p-2 flex-grow-1 bd-highlight">
              <p> 작성자 : 
                <router-link style="text-decoration:none; color: goldenrod;" :to="{ name: 'anotherProfile', params: { username: article.user.username} }">
                  <span>{{ article.user.username }}</span>
                </router-link>
              </p>
              <p>
                작성일: {{ articleDate }}
              </p>              
            </div>

            <div class="">
              <p>
                <button class="heart-btn" @click="likeArticle(articlePk)">🧡</button><span class="">{{ likeCount }}</span>
              </p>              
            </div>
            <div class="p-2 bd-highlight">
              <p > 📝 {{ article.comment_count }} </p>
            </div>



          </div>
         <hr class="article-line" style="text-align:center;height:2px;color:blanchedalmond;">
        </div>

        <div class="px-5">
          <!-- article 내용 -->
          <div class="article-content" style="font-size:1.6rem; color:blanchedalmond;height:200px;overflow: auto;">
            {{ article.content }}
          </div> 
        </div>

        <!-- 수정 삭제 버튼  -->
        <div class="px-5">
          <div v-if="isAuthor" class="d-flex flex-row-reverse">
            <br>

              <div class="px-1">
                <button class="article-del" @click="deleteArticle(articlePk)">삭제</button>
              </div>    

              <div class="px-1">
                <button class="article-edit">
                  <router-link style="text-decoration:none;color:white;" :to="{ name: 'articleUpdate', params: { articlePk } }">수정</router-link>
                </button>                
              </div>

            </div>
        </div>

        <div class="px-5 pb-5">
        <!-- 댓글 -->
          <hr class="article-line" style="text-align:center;height:4px;color:blanchedalmond;">
          <!-- <p style="font-size:1.5rem; color:blanchedalmond;">댓글</p> -->
          <comment-list :comments="article.comments"></comment-list>


          <br>
          <!-- 가장 끝 부분 (돌아가기) -->
          <div class="pb-4">
            <button class="article-back " style="float: right;">
              <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'community' }">목록으로 돌아가기</router-link>
            </button>
          </div>

        </div>







      </div>

      <!-- <br>
      <hr class="article-line" style="height:4px; color:goldenrod;">
      <p style="font-size:1.5rem; color:blanchedalmond;">댓글</p>
      <comment-list :comments="article.comments"></comment-list>


      <br>
      <button class="article-back">
        <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'community' }">목록으로 돌아가기</router-link>
      </button> -->

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
    },
    articleDate(){
      return this.article.created_at.substr(0, 10);
    },
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

.article-detail{
  border-style: solid;
  border-color: #daa520;
  border-radius: 30px;
}

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