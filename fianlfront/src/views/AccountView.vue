<template>
  <div>

    <h1>프로필페이지</h1>
        <!-- <h1>{{ profile.username }}</h1> -->
    <!-- <p>email : {{ profile.email }}</p>
    <p>{{ profile.casino_points }}를 가지고 계십니다.</p> -->
    
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'AccountView',
  data(){
    return {
      userPk: this.$route.params.userPk,
    }
  },
  computed:{
    ...mapGetters['profile','currentUser']
  },
  methods: {
    ...mapActions['fetchProfile']
  },
  created() {
    this.fetchProfile(this.userPk)
  }

}
</script>

<style>

</style>