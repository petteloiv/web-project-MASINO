<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleUpdate', params: { articlePk } }">
        <button>수정</button>
      </router-link>
      |
      <button @click="deleteArticle(articlePk)">삭제</button>
    </div>

    <!-- Article Like UI -->
    <div>
      좋아요:
      <button
        @click="likeArticle(articlePk)"
      >{{ likeCount }}</button>
    </div>

    <hr />
    <!-- Comment UI -->
    <comment-list :comments="article.comments"></comment-list>

    <br>
    <router-link :to="{ name: 'community' }">
      <button>목록으로 돌아가기</button>
    </router-link>

  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentList from '@/components/Community/CommentList.vue'

export default {
  name: 'ArticleDetailView',
  components: {
    CommentList
  },
  data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
  computed: {
    ...mapGetters(['isAuthor', 'article']),
    likeCount() {
      return this.article.like_users?.length
    }
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

<style>

</style>