<template>
  <div>
    <navbar-item></navbar-item>
    <div class="m-5">
      <h3 class="text-center" style="color:white;">글을 작성하세요.</h3>
      <p class="text-center" style="color:white;">글을 작성하시면 1,000포인트가 지급됩니다.</p>
      <br>
      <article-form :article="article" action="create"></article-form>
    </div>
  </div>

</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'
import ArticleForm from '@/components/Community/ArticleForm.vue'

export default {
  name: 'ArticleCreateView',
  components: {
    ArticleForm,
    NavbarItem
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