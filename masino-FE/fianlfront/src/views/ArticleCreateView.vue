<template>
  <div>
    <navbar-item></navbar-item>
    <div class="m-5 article-create">
      <br><br>
      <h1 class="text-center" style="color:goldenrod;">글을 작성하세요.</h1>
      <p class="text-center" style="color: blanchedalmond;">글을 작성하시면 3,000포인트가 지급됩니다.</p>
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

.article-create{
  border-style: solid;
  /* background-color: goldenrod; */
  border-color: goldenrod;
  border-radius: 20px;
}

</style>