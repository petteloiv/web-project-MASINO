<template>
  <div>
    <navbar-item></navbar-item>
    <h1>게시글 수정</h1>
    <article-form v-if="isArticle" :article="article" action="update">
    </article-form>
    
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

</style>