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
    <movie-search-form></movie-search-form>
    
    <h1>추천영화</h1>
    <br>
    <h3>범죄</h3>
    <slider animation="fade" class="recommend">
      <slider-item
        v-for="movie in filteredCrimeMovies" 
        :key="movie.pk"
      >
        <p>
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </p>
      </slider-item>
    </slider>      
    <h3>코미디</h3>
    <slider animation="fade" class="recommend">
      <slider-item
        v-for="movie in filteredComedyMovies" 
        :key="movie.pk"
      >
        <p>
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </p>
      </slider-item>
    </slider>
    <h3>SF</h3>
    <slider animation="fade" class="recommend">
      <slider-item
        v-for="movie in filteredSFMovies" 
        :key="movie.pk"
      >
        <p>
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </p>
      </slider-item>
    </slider>
    <h3>판타지</h3>
    <slider animation="fade" class="recommend">
      <slider-item
        v-for="movie in filteredFantasyMovies" 
        :key="movie.pk"
      >
        <p>
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </p>
      </slider-item>
    </slider>
    <slider animation="fade" class="recommend">
      <h3>공포</h3>
      <slider-item
        v-for="movie in filteredHorrorMovies" 
        :key="movie.pk"
      >
        <p>
          <a :href="`/movie/${movie.pk}`">
            <img :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          </a>
        </p>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import Vue from 'vue'
import NavbarItem from '@/components/Common/NavbarItem.vue'
import MovieSearchForm from '@/components/Movie/MovieSearchForm.vue'

import _ from 'lodash'
import EasySlider from 'vue-easy-slider'
import { mapActions, mapGetters } from 'vuex'

Vue.use(EasySlider)

export default {
  name: 'MainView',
  components: {
    NavbarItem,
    MovieSearchForm
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

.recommend{
    padding-top: 160%;
}


img {
 height: 100%;
 width: 100%;
 object-fit: contain;
}

</style>