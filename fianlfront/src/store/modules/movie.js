import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


// import _ from 'lodash'

Vue.use(Vuex)

export default ({
  state: { //data
    movies: [],
    movie: {},
  },
  getters: { // state 여기서 불러다가 사용
    movies: state => state.movies,
    movie: state => state.movie,
  },
  mutations: { // state 변경
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
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
    fetchMovie({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movieDetail(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
  }
})