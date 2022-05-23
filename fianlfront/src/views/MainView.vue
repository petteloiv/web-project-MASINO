<template>
  <div>
    <navbar-item></navbar-item>

    <h1>main</h1>
    <a href="/logout">logout</a>
    <br>
    <router-link :to="{path: `/profile`}">
      <button>Profile</button>
    </router-link> | 
    <router-link :to="{ name: 'community' }">
      <button>Community</button>
    </router-link>
    <br>
    <h1>movies</h1>
    <br>
    <ul>
      <h3>코미디</h3>
      <b-carousel
        fade
        indicators
        img-width="300"
        img-height="500"
        :interval="200000">
      <b-carousel-slide 
      v-for="movie in filteredComedyMovies" 
      :key="movie.title"
      :img-src='`http://image.tmdb.org/t/p/original${movie.poster_path}`'>
      <!-- {{ movie.title }} -->
      </b-carousel-slide>
      </b-carousel>
      <br>
      <h3>범죄</h3>
      <li 
      v-for="movie in filteredCrimeMovies" 
      :key="movie.pk">
        {{ movie.title }}
        {{ movie.genre_ids }}
      </li>
      <br>
      <h3>SF</h3>
      <li 
      v-for="movie in filteredSFMovies" 
      :key="movie.pk">
        {{ movie.title }}
        {{ movie.genre_ids }}
      </li>
      <br>
      <h3>공포</h3>
      <li 
      v-for="movie in filteredHorrorMovies" 
      :key="movie.pk">
        {{ movie.title }}
        {{ movie.genre_ids }}
      </li>
      <br>
      <h3>판타지</h3>
      <li 
      v-for="movie in filteredFantasyMovies" 
      :key="movie.pk">
        {{ movie.title }}
        {{ movie.genre_ids }}
      </li>
      <br>
    </ul>

    
  </div>
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'

import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'MainView',
  components: {
    NavbarItem,
  },
  computed:{
    ...mapGetters(['currentUser', 'movies']),
    userPk(){
      return this.currentUser.pk
    },
    filteredComedyMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(35)
        }), 10)
      },
    filteredCrimeMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(80)
        }), 10)
      },
    filteredSFMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(878)
        }), 10)
      },
    filteredHorrorMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(27)
        }), 10)
      },
    filteredFantasyMovies() {
        return _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(14)
        }), 10)
      },
  },
  methods: {
    ...mapActions(['fetchCurrentUser','fetchProfile','fetchMovies']),
    },
  created() {
    this.fetchCurrentUser()
    this.fetchMovies()
  }
}
</script>

<style>

</style>