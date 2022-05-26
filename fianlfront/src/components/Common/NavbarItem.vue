<template>
  <div class="navbar-div sticky-top">
    <nav class="my-nav navbar navbar-expand-lg sticky-top">
      <div class="container-fluid p-0">
        <a class="navbar-logo" href="/main">
          <img class="img-navbar" src="@/images/logo.png" alt="Masino">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page">
                <router-link class="link-navbar" :to="{ name: 'main' }">HOME </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="link-navbar" :to="{ name: 'community' }">Community</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="link-navbar" :to="{ name: 'casino' }">Casino</router-link>
              </a>
            </li>

          </ul>
          <form class="d-flex p-1" role="search" @submit.prevent="onSearch">
            <input v-model="keyword" class="form-control me-2" type="search" placeholder="영화를 검색하세요" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
          </form>
          <ul>
            <li class="nav-item dropdown mt-2 ">
              <a style="color:white;font-size:1.2rem;" class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ currentUser.username }}님
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown" style="background-color:gainsboro;">
                <li><a class="dropdown-item"><router-link style="font-size:1.1rem; text-decoration: none; color:black;" sclass="link-dropdown" :to="{ name: 'profile' }">Profile </router-link></a></li>
                <!-- <li><hr class="dropdown-divider"></li> -->
                <li><a class="dropdown-item"><router-link style="font-size:1.1rem;" class="link-dropdown" :to="{ name: 'UserLogoutView' }">Logout</router-link></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: 'NavbarItem',
  computed:{
    ...mapGetters(['currentUser'])
  },
  data() {
    return {
      keyword: "",
    }
  },
  methods:{
    ...mapActions(['searchResult']),
    onSearch(){
      this.searchResult(this.keyword)
      // this.keyword = ''
    },
  }
}
</script>

<style>

 /* .navbar-div{
   background-color: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;
 } */

 .my-nav{
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;
  position: sticky;
  top: 0;
  
  }


 .link-navbar {
   color: gainsboro;
   text-decoration:none;
   font-size: x-large;
 }

  .link-dropdown {
   color: #26382B;
   text-decoration:none;
   font-size: x-large;
  }
 .img-navbar{
   width: 120px;
   height: 120px;
   object-fit: cover;
 }
</style>