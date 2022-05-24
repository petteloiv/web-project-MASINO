<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
     
      <b-navbar-brand href="/main">
        <img src="#" alt="Masino">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/main' }">HOME</b-nav-item>
          <b-nav-item :to="{ path: '/community' }">Community</b-nav-item>
          <b-nav-item :to="{ path: '/casino' }">Casino</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item :to="{ path: '/profile' }">Profile</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/logout' }">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',

}
</script>

<style>

 .navbar.navbar-dark.bg-dark{
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)!important;
 }
</style>