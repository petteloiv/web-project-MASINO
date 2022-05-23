<template>
  <div>
    <h1>"{{this.keyword}}"검색 결과입니다.</h1>
    <!-- <movie-result-list :movieList="movieList"></movie-result-list> -->
    <movie-item v-for="movie in searchedmovies" :movie="movie" :key="movie.pk"></movie-item>

  </div>
</template>

<script>
import MovieItem from '@/components/Common/MovieItem.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MovieSearchView',
  components:{
    MovieItem,
  },
  // data(){
  //   return {
  //     keyword : this.$route.params.keyword
  //   }
  // },
  computed: {
    ...mapGetters(['keyword','movies','searchedmovies']),
    // 여기서 keyword 기준으로 필터링 돌리기 
    searchedmovies(){
      return this.movies.filter((movie) => { 
        return movie.title.includes(this.keyword)
      })
    },
  },
  methods: {
    ...mapActions(['searchMovies','searchResult','fetchMovies'])
    // searchedmovies에 값 저장

  },
  created(){
    // 키워드 집어넣음! 
    this.fetchMovies()
    this.searchResult(this.$route.params.keyword)
    this.searchMovies(this.searchedmovies)
  }

}
</script>

<style>

</style>