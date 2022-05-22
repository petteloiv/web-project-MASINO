<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  // components: { NavBar },
  methods: {
    ...mapActions(['fetchCurrentUser'])
  },
  created() {
    this.fetchCurrentUser()
  },
}

</script>

<style>

</style>