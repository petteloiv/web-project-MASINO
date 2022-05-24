<template>
  <div>
    <navbar-item></navbar-item>

    <h1>CASINO</h1>
    <br>
    <b-button 
    v-b-modal.modal-xl
    variant="primary"
    @click="[fetchQuiz(), putQuiz(), pickAnswer()]">
        QUIZ
    </b-button>
    <b-modal id="modal-xl" size="xl" title="Quiz">
    <img :src="`http://image.tmdb.org/t/p/original/${this.pickedAnswer.backdrop_path}`">
      <!-- {{ pickAnswer.backdrop_path }} -->
    <p 
    v-for="quiz in quizs" :key="quiz.pk">
      <b-button>
        {{ quiz.title }}
      </b-button>
    </p>
    </b-modal>
    <br>
    <router-link :to="{ name: 'backGacha'}">
      BACK GACHA
    </router-link>
    <br>
    <router-link :to="{ name: 'cardGacha' }">
      CARD GACHA
    </router-link>
    <br>
    <router-link :to="{ name: 'cardGachaTen' }">
      CARD GACHA TEN
    </router-link>


  </div>
  
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'

import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CasinoView',
  components: {
    NavbarItem,
  },
  data(){
    return {
      quizs: [],
      pickedAnswer: {}
    }
  },
  computed: {
    // ...mapGetters(['quiz', 'raisePoint', 'back', 'storeBack', 'card', 'cards', 'storeCard'])
    ...mapGetters(['quiz']),
  },
  methods: {
    // ...mapActions(['fetchQuiz', 'fetchRaisePoint', 'fetchBack', 'fetchStoreBack', 'fetchCard', 'fetchCards', 'fetchStoreCard'])
    ...mapActions(['fetchQuiz']),
    putQuiz() {
      this.quizs = this.quiz
    },
    pickAnswer() {
      this.pickedAnswer = _.sample(this.quizs)
    },


  },
  created() {
    // this.fetchQuiz()
    // this.fetchBack()
    // this.fetchCard()
    // this.fetchCards()
  }
}
</script>

<style>

</style>