<template>
  <div id="app">
    <router-view></router-view>
    <a style="display:scroll;position:fixed;bottom:10px;right:10px;font-size:3rem;text-decoration: none;color:goldenrod;" href="#" title="맨위로">♠</a>
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

@font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SunBatang-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
	font-family:  'Eulyoo1945-SemiBold';
}

/* #app {
  background: #26382B
} */

</style>