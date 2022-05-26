<template>
  <div>
    <nav class="my-nav navbar navbar-expand-lg bg-dark" style="background-color: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;">
      <div class="container-fluid p-0" style="background-color: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;">
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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ currentUser.username }}님
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a class="dropdown-item"><router-link class="link-dropdown" :to="{ name: 'profile' }">Profile </router-link></a></li>
                <!-- <li><hr class="dropdown-divider"></li> -->
                <li><a class="dropdown-item"><router-link class="link-dropdown" :to="{ name: 'UserLogoutView' }">Logout</router-link></a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex p-2" role="search" @submit.prevent="onSearch">
            <input v-model="keyword" class="form-control me-2" type="search" placeholder="영화를 검색하세요" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </div>
<!-- <div>
  <b-nav pills class="d-flex justify-content-between">
    <div class="d-flex justify-content-between">
      <b-nav-item>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
    </div>
    <div class="d-flex justify-content-between">
      <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
          <b-form-input aria-label="Input" class="mr-1"></b-form-input>
          <span><b-button type="submit">Ok</b-button></span>
          
        </b-nav-form>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Dropdown"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
      
    </div>
  </b-nav>
</div> -->
<!-- <div>
  <b-navbar class="navbar justify-content-end" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/main">
      <img class="img-navbar" src="@/images/logo.png" alt="Masino">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'main' }">HOME </router-link></b-nav-item>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'community' }">Community</router-link></b-nav-item>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'casino' }">Casino</router-link></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="me-auto">
        <b-nav-form @submit.prevent="onSearch">
          <b-form-input v-model="keyword" style="border-radius: 15px;"
          size="md" class="mr-sm-2 border-0" placeholder="영화를 검색하세요."></b-form-input>
          <b-button style="border-radius: 15px;" size="sm" class="my-2 my-sm-0" type="submit">검색</b-button>
        </b-nav-form>


        <b-nav-item-dropdown right class="me-auto">
          <template #button-content>
            <p>{{ currentUser.username }}님</p>
          </template>
          <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'profile' }">Profile </router-link></b-dropdown-item>
          <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'UserLogoutView' }">Logout</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div> -->
  <!-- <div > -->


    <!-- fixed top 넣으면 그 아래가 겹친다.. -->
    <!-- <b-navbar class="header" toggleable="lg" type="dark" variant="dark">
     
      <b-navbar-brand href="/main">
        <img class="img-navbar" src="@/images/logo.png" alt="Masino">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'main' }">HOME </router-link></b-nav-item>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'community' }">Community</router-link></b-nav-item>
          <b-nav-item><router-link class="link-navbar" :to="{ name: 'casino' }">Casino</router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right> -->
            <!-- Using 'button-content' slot -->
            <!-- <template #button-content>
              <em>{{ currentUser.username }}님</em>
            </template>
            <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'profile' }">Profile </router-link></b-dropdown-item>
            <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'UserLogoutView' }">Logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> -->
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

 .my-nav{
  position: sticky;
  top: 0;
  background-color: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;
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
   width: 100px;
   height: 100px;
   object-fit: cover;
 }
</style>