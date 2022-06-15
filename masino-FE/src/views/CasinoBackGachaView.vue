<template>
  <div>

    <h1>CASINO BACK GACHA</h1>
    <br>
    <p>
      {{ back }}
    </p>



  </div>
  
</template>

<script>


// import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CasinoBackGachaView',
  components: {
  },
  computed: {
    ...mapGetters(['back'])
  },
  methods: {
    ...mapActions(['fetchBack'])
  },
  created() {
    this.fetchBack()
    // this.fetchStoreBack()
  }
}
</script>

<style>

</style>