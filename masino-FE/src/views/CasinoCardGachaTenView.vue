<template>
  <div>

    <h1>CASINO CARD GACHA TEN</h1>
    
    <br>
    <p>
      {{ cards }}
    </p>
  


  </div>
  
</template>

<script>

// import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CasinoCardGachaTenView',
  components: {
  },
  computed: {
    ...mapGetters(['cards'])
  },
  methods: {
    ...mapActions(['fetchCards'])
  },
  created() {
    this.fetchCards()
    // this.fetchStoreCard()
  }
}
</script>

<style>

</style>