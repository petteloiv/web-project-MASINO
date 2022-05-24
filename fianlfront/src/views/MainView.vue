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
    <h3>판타지</h3>
    <!-- <div class="movieitem" v-if="filteredFantasyMovies" key="new_a">
      <carousel :autoplay="true" :nav="false" :dots="true" class="marginTop50 movieitem" :number="4" >
        <div v-for="movie in filteredFantasyMovies" :key="movie.pk" >
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </div>
      </carousel> -->
    <!-- </div> -->
    <br>
    <h3>범죄</h3>
    <!-- <carousel v-if="filteredCrimeMovies" key="new_b" :autoplay="true" :nav="false" :dots="true" class="marginTop50 movieitem" :number="4" >
      <div v-for="movie in filteredCrimeMovies" :key="movie.pk" >
        <a :href="`/movie/${movie.pk}`">
          <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
        </a>
      </div>
    </carousel> -->
    <br>
    <h3>코미디</h3>
    <button @click="[putComedyMovies()]">되냐</button>
    <carousel  :autoplay="true" :nav="false" :dots="true" class="marginTop50 movieitem" :number="4" >
      <div v-for="movie in comedyMovies" :key="movie.pk" >
        <a :href="`/movie/${movie.pk}`">
          <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
        </a>
      </div>
    </carousel>
    <br>
    <h3>SF</h3>
    <!-- <carousel v-if="filteredSFMovies" key="new_d" :autoplay="true" :nav="false" :dots="true" class="marginTop50 movieitem" :number="4" >
      <div v-for="movie in filteredSFMovies" :key="movie.pk" >
        <a :href="`/movie/${movie.pk}`">
          <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
        </a>
      </div>
    </carousel> -->
    
  </div>
</template>

<script>

import NavbarItem from '@/components/Common/NavbarItem.vue'
import MovieSearchForm from '@/components/Movie/MovieSearchForm.vue'

import _ from 'lodash'
import carousel from 'vue-owl-carousel'

import { mapActions, mapGetters } from 'vuex'



export default {
  name: 'MainView',
  components: {
    NavbarItem,
    MovieSearchForm,
    carousel,
  },
  data(){
    return {
      comedyMovies: [],
    }
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
    putComedyMovies() {
        this.comedyMovies = this.filteredComedyMovies
    },
  },
  created() {
    this.fetchCurrentUser()
    this.fetchMovies()
    // this.putComedyMovies()
  },
}
</script>

<style>

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