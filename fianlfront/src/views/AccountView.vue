<template>
  <div>
    <navbar-item></navbar-item>
    <h1>프로필페이지</h1>
    <p> username : {{profile.username}}</p>
    <p> point : {{ profile.casino_points }} </p> 

    <h2>작성한 글</h2>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link :to="{ name: 'articleDetail', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <router-link :to="{ name: 'UserUpdateView' }">
      개인정보수정
    </router-link>




  </div>
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'AccountView',
  components:{
    NavbarItem
  },
  // props: {
  //   userPk : Number,
  // },
  // data(){
  //   return {
  //     userPk: this.userPk(),
  //   }
  // },
  computed:{
    ...mapGetters(['profile']),
    // userPk(){
    //   // const pk = parseInt(this.currentUser.pk)
    //   return this.currentUser.pk
    // }
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    this.fetchProfile()
  }

}
</script>

<style>

</style>