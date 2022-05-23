import Vue from 'vue'
import Vuex from 'vuex'

// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

// import _ from 'lodash'

Vue.use(Vuex)

export default ({
  state: { //data
    movies: [],
  },
  getters: { // state 여기서 불러다가 사용
    movies: state => state.movies,
  },
  mutations: { // state 변경
    SET_MOVIES: (state, movies) => state.movies = movies,
  },
  actions: { // mutations 소환
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movie(),
        method:'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },
  }
})