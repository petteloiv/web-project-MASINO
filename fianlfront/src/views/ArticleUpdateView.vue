<template>
  <div>
    <h1>게시글 수정</h1>
    <article-form v-if="isArticle" :article="article" action="update">
    </article-form>
    
  </div>
  
</template>

<script>
import ArticleForm from '@/components/Community/ArticleForm.vue'

export default {
  name: 'ArticleUpdateView',
  components: {
    ArticleForm
  }
}
</script>

<style>

</style>