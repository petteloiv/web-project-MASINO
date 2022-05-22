<template>
  <div>
    <h1>main</h1>
    <a href="/logout">logout</a>
    <br>
    <router-link :to="{path: `/profile/${userPk}`}">
      <button>Profile</button>
    </router-link> | 
    <router-link :to="{ name: 'community' }">
      <button>Community</button>
    </router-link>

    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainView',
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
    ...mapActions(['fetchCurrentUser','fetchProfile'])
  },
  created() {
    this.fetchCurrentUser()
  }
} 
</script>

<style>

</style>