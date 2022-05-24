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

@font-face {
    font-family: 'Eulyoo1945-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Eulyoo1945-SemiBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
	font-family: 'Eulyoo1945-SemiBold';
}

/* #app {
  background: #26382B
} */

</style>