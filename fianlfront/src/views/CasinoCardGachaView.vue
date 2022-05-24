<template>
  <div>

    <h1>CASINO CARD GACHA</h1>
    
    <br>
    <p>
      {{ card }}
    </p>

  
  


  </div>
  
</template>

<script>

// import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CasinoCardGachaView',
  components: {
  },
  computed: {
    ...mapGetters(['card'])
  },
  methods: {
    ...mapActions(['fetchCard'])
  },
  created() {
    this.fetchCard()
    // this.fetchStoreCard()
  }
}
</script>

<style>

</style>