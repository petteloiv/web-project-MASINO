<template>
  <div>
    <navbar-item></navbar-item>
    <br>
    <br>
    <h1 class="movie-search-result-text">"<span class="movie-search-text">{{this.keyword}}</span>" 검색 결과입니다.</h1>
    <br>
    <br>
    <!-- <movie-result-list :movieList="movieList"></movie-result-list> -->
    <div class="container movie-border">
      <br>
      <br>
      <br>
      <br>
      <div class="movie-container mx-5">
        <div class="row" style="justify-content: flex-start; mx-2">
          <movie-item v-for="movie in searchedmovies" :movie="movie" :key="movie.pk"></movie-item>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MovieItem from '@/components/Common/MovieItem.vue'
import NavbarItem from '@/components/Common/NavbarItem.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MovieSearchView',
  components:{
    MovieItem,
    NavbarItem
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

.movie-search-result-text{
  color: goldenrod;
  font-size: 2rem;
  text-align: center;
}

.movie-search-text{
  color:blanchedalmond;
  font-size: 2rem;
  text-align: center;
}

.movie-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>