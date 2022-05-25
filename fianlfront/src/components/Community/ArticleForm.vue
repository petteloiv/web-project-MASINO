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
            <button class="article-button">완료</button>         
          </form>
          <button class="btn"><router-link class="link-navbar" :to="{ name: 'community' }">목록으로 돌아가기</router-link></button>
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

.article-button{
  background-color: goldenrod;
  color: blanchedalmond;
  font-size: 16px;
}
</style>