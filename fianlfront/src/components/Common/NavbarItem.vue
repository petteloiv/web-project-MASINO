<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
     
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

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ currentUser.username }}님</em>
            </template>
            <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'profile' }">Profile </router-link></b-dropdown-item>
            <b-dropdown-item><router-link class="link-dropdown" :to="{ name: 'UserLogoutView' }">Logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavbarItem',
  computed:{
    ...mapGetters(['currentUser'])
  }
  

}
</script>

<style>

 .navbar.navbar-dark.bg-dark{
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;
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
   width: 200px;
   height: 200px;
   object-fit: cover;
 }
</style>