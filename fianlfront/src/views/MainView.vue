<template>
  <div>
    <navbar-item></navbar-item>
    <h1>main</h1>
    <a href="/logout">logout</a>
    <br>
    <router-link :to="{ path: `/profile` }">
      <button>Profile</button>
    </router-link> | 
    <router-link :to="{ name: 'community' }">
      <button>Community</button>
    </router-link>
    <br>
    <movie-search-form></movie-search-form>
    
    <h1>추천영화</h1>

    <br>
    <h3>SF</h3>
    <div class="container">
      <div class="row">
        <div class="col-2 movie-img" v-for="movie in filteredSFMovies" :key="movie.pk">
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </div>
      </div>
    </div>

    
    <br>
    <h3>범죄</h3>
    <div class="container">
      <div class="row">
        <div class="col-2 movie-img" v-for="movie in filteredCrimeMovies" :key="movie.pk">
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </div>
      </div>
    </div>

    <br>
    <h3>코미디</h3>
    <div class="container">
      <div class="row">
        <div class="col-2 movie-img" v-for="movie in filteredComedyMovies" :key="movie.pk">
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </div>
      </div>
    </div>

    <br>
    <h3>SF</h3>
    <div class="container">
      <div class="row">
        <div class="col-2 movie-img" v-for="movie in filteredSFMovies" :key="movie.pk">
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </div>
      </div>
    </div>
    
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

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movie-img{
  width: auto;
  height: 350px;
  object-fit: cover;
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
 object-fit: contain;
}

</style>