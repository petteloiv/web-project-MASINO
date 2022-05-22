<template>
  <div>

    <h1>프로필페이지</h1>
    <!-- <p>{{ profile.username }}</p> -->
        <!-- <h1>{{ profile.username }}</h1> -->
    <!-- <p>email : {{ profile.email }}</p>
    <p>{{ profile.casino_points }}를 가지고 계십니다.</p> -->
    <p>{{ userPk }}</p>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'AccountView',
  // props: {
  //   userPk : Number,
  // },
  // data(){
  //   return {
  //     userPk: this.userPk(),
  //   }
  // },
  computed:{
    ...mapGetters(['profile','currentUser']),
    userPk(){
      // const pk = parseInt(this.currentUser.pk)
      return this.currentUser.pk
    }
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    this.fetchProfile(this.userPk)
  }

}
</script>

<style>

</style>