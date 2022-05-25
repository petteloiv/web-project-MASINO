<template>
  <div>
    <navbar-item></navbar-item>
    <br>
    <div class="container">
      <div class="row">
      <movie-search-form class="movie-search-form"></movie-search-form>

      </div>
    </div>
    <br>
    <br>
    <h1 class="h1">마지노를 찾아주신 당신에게 장르별 영화를 추천드립니다.</h1>
    <br>
    <br>
    <br>

    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">흥미진진한 범죄영화</h2>
    <br>
    <br>
      <div class="container">
        <div class="row">
          <div class="col-2 movie-img" v-for="movie in filteredCrimeMovies" :key="movie.pk">
            <div class="img">
              <a :href="`/movie/${movie.pk}`">
                <img style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">가벼운 기분전환 코미디영화</h2>
    <br>
    <br>
      <div class="container">
        <div class="row">
          <div class="col-2 movie-img" v-for="movie in filteredComedyMovies" :key="movie.pk">
            <div class="img">
              <a :href="`/movie/${movie.pk}`">
                <img style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">상상속 나만의 세상 판타지영화</h2>
    <br>
    <br>
      <div class="container">
        <div class="row">
          <div class="col-2 movie-img" v-for="movie in filteredFantasyMovies" :key="movie.pk">
            <div class="img">
              <a :href="`/movie/${movie.pk}`">
                <img style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">나 이런거 잘 못봐 공포영화</h2>
    <br>
    <br>
      <div class="container">
        <div class="row">
          <div class="col-2 movie-img" v-for="movie in filteredHorrorMovies" :key="movie.pk">
            <div class="img">
              <a :href="`/movie/${movie.pk}`">
                <img style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">늘 그랬듯 답을 찾을 SF영화</h2>
    <br>
    <br>
      <div class="container">
        <div class="row">
          <div class="col-2 movie-img" v-for="movie in filteredSFMovies" :key="movie.pk">
            <div class="img">
              <a :href="`/movie/${movie.pk}`">
                <img style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    
  </div>
</template>

<script>

import NavbarItem from '@/components/Common/NavbarItem.vue'
import MovieSearchForm from '@/components/Movie/MovieSearchForm.vue'

import _ from 'lodash'

import { mapActions, mapGetters } from 'vuex'



export default {
  name: 'MainView',
  components: {
    NavbarItem,
    MovieSearchForm,
  },
  computed:{
    ...mapGetters(['currentUser', 'movies']),
    userPk(){
      return this.currentUser.pk
    },
    filteredComedyMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(35)
        }), 12)
      },
    filteredCrimeMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(80)
        }), 12)
      },
    filteredSFMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(878)
        }), 12)
      },
    filteredHorrorMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(27)
        }), 12)
      },
    filteredFantasyMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(14)
        }), 12)
      },
  },
  methods: {
    ...mapActions(['fetchCurrentUser','fetchProfile','fetchMovies']),
  },

  created() {
    // this.fetchCurrentUser()
    // this.fetchMovies() 
  },
}
</script>

<style>

.h1 {
  text-align: center;
  color:blanchedalmond;
}

.h2 {
  text-align: center;
  color: goldenrod;
}

.movie-border{
  border-style: solid;
  border-color: goldenrod;
  border-radius: 30px;
}

.movie-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movie-search-form{
  display: flex;
  justify-content: center;
}

.movie-img{
  width: auto;
  height: 350px;
  border-radius: 30%;
}

.movieitem{
  height: 10%;
  width: 100;
}

.recommend{
    padding-top: 160%;
}

img {
 height: 100%;
 width: 100%;
 object-fit: cover;
}

</style>