<template>
  <div>
    <navbar-item></navbar-item>

    <h1>CASINO</h1>
    <br>

    <button 
    v-b-modal.modal-quiz
    class="quiz-button"
    @click="[fetchQuiz(), putQuiz(), pickAnswer(), notificate('1000 포인트를 사용하여 퀴즈를 시작합니다!')]">
        QUIZ
    </button>
    <b-modal id="modal-quiz" hide-footer hide-header size="xl" title="QUIZ" no-close-on-backdrop body-bg-variant="dark">
    <img class="quiz-img" :src="`http://image.tmdb.org/t/p/original/${this.pickedAnswer.backdrop_path}`">
      <!-- {{ pickAnswer.backdrop_path }} -->
    <div class="quiz-choice quiz-choice-box m-2" 
    v-for="quiz in quizs" :key="quiz.pk">
      <div v-if="quiz.pk === pickedAnswer.pk">
        <button class="m-2" block @click="[fetchRaisePoint(), $bvModal.hide('modal-quiz'), notificate('정답입니다! 10000포인트 추가!')]">
          {{ quiz.title }}
        </button>
      </div>
      <div v-else>
        <button  class="m-2" block @click="[$bvModal.hide('modal-quiz'), notificate('오답ㅠㅠ')]">
          {{ quiz.title }}
        </button>
      </div>
    </div>
    </b-modal>
    <br>

    <b-button 
    v-b-modal.modal-back
    variant="success"
    @click="[fetchBack(), pickBack(), notificate('1000 포인트를 사용하여 배경화면을 뽑았습니다!')]">
        BACK GACHA
    </b-button>
    <b-modal id="modal-back" hide-footer hide-header size="xl" title="BACKGACHA" no-close-on-backdrop body-bg-variant="dark">
    <img class="backGacha-img" :src="`http://image.tmdb.org/t/p/original/${this.pickedBack.backdrop_path}`">
    <br>
    <br>
      <div class="backGacha-title">
        {{ pickedBack.title }}
      </div>
      <div class="backGacha-choice">
        <b-button class="mt-3" variant="primary" block @click="[fetchStoreBack(pickedBack.pk), $bvModal.hide('modal-back'), notificate('프로필 배경사진이 바뀌었어요!')]">
          내 프로필 배경 바꾸기
        </b-button>
        <b-button class="mt-3" variant="danger" block @click="[$bvModal.hide('modal-back'), notificate('이걸 버리네!')]">
          갖다 버리기
        </b-button>
      </div>
      
    </b-modal>

    <br>

    <b-button 
    v-b-modal.modal-card
    variant="warning"
    @click="[fetchCard(), pickCard(), fetchStoreCard(pickedCard.pk), notificate('1000포인트를 사용하여 카드 1장을 뽑았습니다!')]">
        CARD GACHA
    </b-button>
    <b-modal id="modal-card" hide-footer hide-header size="sm" title="CARDGACHA" no-close-on-backdrop body-bg-variant="dark">
      <div style="border-radius: 10px;" class="card casino-card" :class="{'platinum': pickedCard.popularity >= 40, 'gold': pickedCard.popularity < 40, 'silver': pickedCard.popularity < 21, 'bronze': pickedCard.popularity < 14}">
        <div class="card-header">
            </div>
            <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${pickedCard.profile_path}`">
            <div class="card-body casino-card-body">
              <div style="vertical-align: middle;" class="card-title">{{ pickedCard.name }}</div>
            </div>
      </div>
      <div class="card-gacha-button-box">
      <button class="mt-3 card-gacha-button" block @click="[$bvModal.hide('modal-card')]">
          확인
      </button>
      </div>
    </b-modal>

    <br>

    <b-button 
    v-b-modal.modal-card-ten
    variant="danger"
    @click="[fetchCards(), pickCards(), fetchStoreCard(pickedCards[0].pk), fetchStoreCard(pickedCards[1].pk), fetchStoreCard(pickedCards[2].pk), fetchStoreCard(pickedCards[3].pk), fetchStoreCard(pickedCards[4].pk), fetchStoreCard(pickedCards[5].pk), fetchStoreCard(pickedCards[6].pk), fetchStoreCard(pickedCards[7].pk), fetchStoreCard(pickedCards[8].pk), fetchStoreCard(pickedCards[9].pk), fetchStoreCard(pickedCards[10].pk),fetchStoreCard(pickedCards[11].pk),notificate('10000포인트를 사용하여 카드 12장을 뽑았습니다!')]">
        CARD GACHA TEN
    </b-button>
    <b-modal id="modal-card-ten" hide-footer hide-header size="lg" title="CARDGACHATEN" no-close-on-backdrop body-bg-variant="dark">
      <div class="card-deck container">
        <div class="row">
          <div style="border-radius: 10px;" class="card casino-card col-3 p-12" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in pickedCards" :key="card.pk">
            <div class="card-header">
            </div>
            <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
            <div class="card-body casino-card-body">
              <div style="vertical-align: middle;" class="card-title">{{ card.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-gacha-button-box">
      <button class="mt-3 card-gacha-button" block @click="[$bvModal.hide('modal-card-ten')]">
          확인
      </button>
      </div>
      
    </b-modal>


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
      pickedAnswer: {},
      pickedBack: {},
      pickedCard: {},
      pickedCards: [],
    }
  },
  computed: {
    ...mapGetters(['quiz', 'raisePoint', 'back', 'storeBack', 'card', 'cards', 'storeCard']),
  },
  methods: {
    ...mapActions(['fetchQuiz', 'fetchRaisePoint', 'fetchBack', 'fetchStoreBack', 'fetchCard', 'fetchCards', 'fetchStoreCard']),
    notificate(message) {
      alert(message)
    },
    storecards(personPk){
      this.fetchStoreCard(personPk)
    },
    putQuiz() {
      this.quizs = this.quiz
    },
    pickAnswer() {
      this.pickedAnswer = _.sample(this.quizs)
    },
    pickBack() {
      this.pickedBack = this.back[0]
    },
    pickCard() {
      this.pickedCard = this.card[0]
    },
    pickCards() {
      this.pickedCards = this.cards
    }


  },
  created() {
    this.fetchQuiz()
    this.fetchBack()
    this.fetchCard()
    this.fetchCards()
  }
}
</script>

<style>

  .casino-card-body {
    text-align: center;
  }

  .card-title {
    font-size: 1.2rem;
  }
  /* .casino-card {
    height: 350px;
    width: 150px;
  } */

  /* .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  } */

  .quiz-img {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .quiz-choice {
    text-align: center;
    vertical-align: middle;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 10px;
  }

  .quiz-choice button {
    border-radius: 10px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
  }

  .quiz-choice-box {
    display: flex;
    justify-content: space-evenly;
  }

  .backGacha-img {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .backGacha-title{
    text-align: center;
    background-color: rgb(41, 59, 11);
    color:goldenrod;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 10px;
  }

  .backGacha-choice{
    display: flex;
    justify-content: space-evenly;
  }

  .card-gacha-button{
    border-radius: 10px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
  }

  .card-gacha-button-box{
    display: flex;
    justify-content: center;
  }



  .platinum {
    background: rgb(248,255,160);
    background: linear-gradient(0deg, rgba(248,255,160,1) 0%, rgba(181,251,255,1) 19%, rgba(255,158,253,1) 80%, rgba(253,255,199,1) 100%);
  }
  .gold {
    background: rgb(249,242,149);
    background: linear-gradient(0deg, rgba(249,242,149,1) 0%, rgba(224,170,62,1) 23%, rgba(249,242,149,1) 79%, rgba(184,138,68,1) 100%);
  }
  .silver {
    background: rgb(232,232,232);
    background: linear-gradient(0deg, rgba(232,232,232,1) 0%, rgba(175,175,175,1) 23%, rgba(236,236,236,1) 79%, rgba(159,159,159,1) 100%);
  }
  .bronze {
    background: rgb(255,220,180);
    background: linear-gradient(0deg, rgba(255,220,180,1) 0%, rgba(120,61,12,1) 23%, rgba(255,222,161,1) 79%, rgba(120,61,12,1) 100%);
  }
  .modal-backdrop {
   background-color: darkolivegreen;
}

</style>