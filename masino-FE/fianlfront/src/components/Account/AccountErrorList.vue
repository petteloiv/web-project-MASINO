<template>

<div class="alert alert-danger account-error-list text-center" role="alert">
  <p>😰</p>
  <p class="text-center" v-for="(errors, field) in authError" :key="field">
    {{ field }} 발생!
    <ul>
      <li style=" list-style-type : none " v-for="(error, idx) in errors" :key="idx">
       {{ error }}
      </li>
    </ul>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </p>
</div>


</template>

<script>
import { mapGetters } from 'vuex' 

export default {
  name:"AccountErrorList",
  computed: {
    ...mapGetters(['authError'])
  },

}
</script>

<style>
  .account-error-list {
    color: red;
  }

</style>