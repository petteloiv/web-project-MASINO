<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">제목: </label>
      <input v-model="newArticle.title" type="text" id="title" required/>
    </div>
    <div>
      <label for="content">내용: </label>
      <textarea v-model="newArticle.content" type="text" id="content" required></textarea>
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form> 
  
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

</style>