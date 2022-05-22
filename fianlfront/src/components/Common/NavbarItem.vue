<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <img src="" alt="">
      <a class="navbar-brand" href="#"><router-link :to="{ name: 'main' }" class="text-white"><button>Main</button></router-link></a>
      <a class="navbar-brand" href="#"><router-link :to="{ name: 'community' }" class="text-white"><button>Community</button></router-link></a>
      <a class="navbar-brand" href="#"><router-link :to="{ name: 'casino' }" class="text-white"><button>Casino</button></router-link></a>
      <a class="navbar-brand" href="#"><router-link :to="{ name: 'profile' }" class="text-white"><button>Profile</button></router-link></a>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'NavbarItem',

}
</script>

<style>

</style>