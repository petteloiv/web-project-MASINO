<template>
  <div>
    <h1>글을 작성하세요~~</h1>
    <article-form :article="article" action="create"></article-form>
  </div>

</template>

<script>
import ArticleForm from '@/components/Community/ArticleForm.vue'

export default {
  name: 'ArticleCreateView',
  components: {
    ArticleForm
  },
  data() {
    return {
      article : {
        pk : null,
        title: '',
        content : '',
      }
    }
  }
}
</script>

<style>

</style>