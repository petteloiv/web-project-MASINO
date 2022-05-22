<template>
  <div>
    <b-navbar-nav>
      <b-nav-item href="#"><router-link :to="{ name: 'main' }" class="text-white"></router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'community' }" class="text-white"></router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'casino' }" class="text-white"></router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{ name: 'profile' }" class="text-white"></router-link></b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>