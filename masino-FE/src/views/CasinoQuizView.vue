<template>
  <div>

  <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>
  
</template>

<script>

// import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CasinoQuizView',
  components: {
  },
  computed: {
    ...mapGetters(['quiz', 'raisePoint'])
  },
  methods: {
    ...mapActions(['fetchQuiz', 'fetchRaisePoint'])
  },
  created() {
    this.fetchQuiz()
    this.fetchRaisePoint()
  }
}
</script>

<style>

</style>