<template>
  <div>
    <h1>게시판입니당</h1>
    <br>
    <!-- 여기에 article list 들어갑니다. -->
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <!-- 작성자 -->
        {{ article.user.username }} : 

        <!-- 글 이동 링크 (제목) -->
        <span v-if="article.id">
          <router-link 
            :to="{ name: 'articleDetail', params: {articlePk: article.id} }">
            {{ article.title }}
          </router-link>
        </span>

        좋아요 : {{ article.like_count }}

      </li>
    </ul>

    <!-- 새 글 쓰기 눌러서 => ArticleCreateView로 넘길 것 --> 
    <router-link 
      :to="{ name: 'articleCreate' }">글 작성하기</router-link>
  </div>
  
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CommunityView',
  computed: {
      ...mapGetters(['articles'])
    },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  },
}
</script>

<style>

</style>