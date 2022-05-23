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

    
  </div>
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'
import MovieSearchForm from '@/components/Movie/MovieSearchForm.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainView',
  components: {
    NavbarItem,
    MovieSearchForm
  },
  // data(){
  //   return {
  //     userPk()
  //   }
  // },
  computed:{
    ...mapGetters(['currentUser']),
    userPk(){
      // const pk = parseInt(this.currentUser.pk)
      return this.currentUser.pk
    }
  },
  methods: {
    ...mapActions(['fetchCurrentUser','fetchProfile','fetchMovies'])
  },
  created() {
    this.fetchCurrentUser()
    this.fetchMovies()
  }
} 
</script>

<style>

</style>