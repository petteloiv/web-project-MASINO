<template>
<!-- 
  <div class="container-fluid">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a id="len1" class="hoverable" :href="/main/">Home</a></li>
          <li><a id="len2" class="hoverable" href="/community/">About</a></li>
          <li><a id="len3" class="hoverable" href="/casino/">Portfolio</a></li>
          <li><a id="len4" class="hoverable" href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div id="what-the-hell-is-this">
      <div class="page-title">
        <h2>Simple Navigation</h2>
        <p class="lead">
          Based on Hover.css, the goal of this pen
          is to create a simple navigation bar <br />
          that can be easily reused in both mobile and native displays. Mouse over the nav text for animation!
        </p>
      </div>
    </div>
  </div> -->

  <div>
    <nav class="navbar navbar-light bg-light">
      <!-- <img src="" alt=""> -->
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