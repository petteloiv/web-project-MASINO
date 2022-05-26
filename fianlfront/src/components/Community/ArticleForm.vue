<template>


  <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 article-form">
        <br>
          <form @submit.prevent="onSubmit" >
            <div class="form-group">
            
              <label for="title">제목: </label>
              <br>
              <input v-model="newArticle.title" type="text" id="title" required class="form-control" />
            </div>
            <br>
            <div class="form-group">
              
              <label for="content">내용: </label>
              <br>
              <textarea rows="10" cols="50" v-model="newArticle.content" type="text" id="content" class="form-control" required></textarea>
            </div>
            <br>

            <div class="d-flex justify-content-between">
              <div>
                <button class="article-back">
                    <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'community' }">목록으로 돌아가기</router-link>
                </button>  
              
              </div>

              <div>
              <button class="article-button submit">완료</button>                 
              </div>
            </div>
          </form>

          <br>
          <br>
      </div>
  </div>
 
  
</template>

<script>

import { mapActions } from 'vuex'


export default {
  name: "ArticleForm",
  props: {
    article : Object,
    action : String,
  },
  data(){
    return {
      newArticle: {
        title : this.article.title,
        content: this.article.content,
      }
    }
  },
  // computed: {
  //   ...mapGetters(['article']),
  // },
  methods: {
    ...mapActions(['createArticle', 'updateArticle']),
    onSubmit() {
      if (this.action === 'create') {
        this.createArticle(this.newArticle)
      } else if (this.action === 'update') {
        const payload = {
            articlePk : this.article.id,
            ...this.newArticle,
          }
        this.updateArticle(payload)

      }
    },
  },


}
</script>

<style>

.article-form{
  color: blanchedalmond;
}

.article-button {
	background-color:#daa520;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:16px;
	padding:7px 20px;
	text-decoration:none;
}

.article-button:hover {
	background-color: darkolivegreen;
}

.article-back {
  background-color:blanchedalmond;
	border-radius:20px;
	display:inline-block;
	/* cursor:pointer; */
	color:#ffffff;
	font-size:16px;
	padding:7px 20px;
	text-decoration:none;
}
</style>