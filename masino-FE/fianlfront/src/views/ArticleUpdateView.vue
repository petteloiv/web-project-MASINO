<template>
  <div>
    <navbar-item></navbar-item>
    <div class="m-5 article-update">
      <br>
      <br>
      <h1 class="text-center" style="color:goldenrod;">글을 수정하세요.</h1>
      <!-- <p class="text-center" style="color:white;"></p> -->
      <br>
      <article-form v-if="isArticle" :article="article" action="update"></article-form>
    </div>
    
    
  </div>
  
</template>

<script>
import ArticleForm from '@/components/Community/ArticleForm.vue'
import NavbarItem from '@/components/Common/NavbarItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ArticleUpdateView',
  components: {
    ArticleForm,
    NavbarItem
  },
  computed: {
      ...mapGetters(['article', 'isArticle',])
    },
  methods: {
    ...mapActions(['fetchArticle'])
  },
  created() {
    this.fetchArticle(this.$route.params.articlePk)
  },

}
</script>

<style>

.article-update{
  border-style: solid;
  /* background-color: goldenrod; */
  border-color: goldenrod;
  border-radius: 20px;
}

</style>