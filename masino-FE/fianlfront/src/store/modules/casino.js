import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

Vue.use(Vuex)

export default ({
  state: { //data
    quiz: [],
    raisePoint: {},
    lowerPoint: {},
    back: {},
    storeBack: {},
    card: {},
    cards: [],
    storeCard: {},
  },
  getters: { // state 여기서 불러다가 사용
    quiz: state => state.quiz,
    raisePoint: state => state.raisePoint,
    lowerPoint: state => state.lowerPoint,
    back: state => state.back,
    storeBack: state => state.storeBack,
    card: state => state.card,
    cards: state => state.cards,
    storeCard: state => state.storeCard,
  },
  mutations: { // state 변경
    SET_QUIZ: (state, quiz) => state.quiz = quiz,
    SET_RAISE_POINT: (state, raisePoint) => state.raisePoint = raisePoint,
    SET_LOWER_POINT: (state, lowerPoint) => state.lowerPoint = lowerPoint,
    SET_BACK: (state, back) => state.back = back,
    SET_STORE_BACK: (state, storeBack) => state.storeBack = storeBack,
    SET_CARD: (state, card) => state.card = card,
    SET_CARDS: (state, cards) => state.cards = cards,
    SET_STORE_CARD: (state, storeCard) => state.storeCard = storeCard,
  },
  actions: { // mutations 소환
    fetchQuiz({ commit, getters }){
      axios({
        url: drf.casino.quiz(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_QUIZ', res.data))
        .catch(err => console.error(err.response))
    },
    fetchRaisePoint({ commit, getters }){
      axios({
        url: drf.casino.raisePoint(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_RAISE_POINT', res.data))
        .catch(err => console.error(err.response))
    },
    fetchLowerPoint1000({ commit, getters }){
      axios({
        url: drf.casino.lowerPoint1000(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_LOWER_POINT', res.data))
        .catch(err => console.error(err.response))
    },
    fetchLowerPoint10000({ commit, getters }){
      axios({
        url: drf.casino.lowerPoint10000(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_LOWER_POINT', res.data))
        .catch(err => console.error(err.response))
    },
    fetchBack({ commit, getters }){
      axios({
        url: drf.casino.backGacha(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_BACK', res.data))
        .catch(err => console.error(err.response))
    },
    fetchStoreBack({ commit, getters }, moviePk) {
      axios({
        url: drf.casino.storeBack(moviePk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_STORE_BACK', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    fetchCard({ commit, getters }){
      axios({
        url: drf.casino.cardGacha(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_CARD', res.data))
        .catch(err => console.error(err.response))
    },
    fetchCards({ commit, getters }){
      axios({
        url: drf.casino.cardGachaTen(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_CARDS', res.data))
        .catch(err => console.error(err.response))
    },
    fetchStoreCard({ commit, getters }, personPk) {
      axios({
        url: drf.casino.storeCard(personPk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_STORE_CARD', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
  }
})