import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import account from './modules/account'
import casino from './modules/casino'
import community from './modules/community'
import movie from './modules/movie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
  },
  getters: { // state 여기서 불러다가 사용
  },
  mutations: { // state 변경
  },
  actions: { // mutations 소환
  },
  modules: {
    account,
    casino,
    community,
    movie,
  },
  plugins: [createPersistedState()],
})
