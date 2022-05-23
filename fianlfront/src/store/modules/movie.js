import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


// import _ from 'lodash'

Vue.use(Vuex)

/* 
영화

1. 영화 검색 기능 
2. 영화 추천 기능 
- 
3. 영화 디테일 불러오기 
*/

export default ({
  state: { 
    movies: [],
    movie: {},
    keyword: "",
    searchedmovies: [],
  },
  getters: { 
    movies: state => state.movies,
    movie: state => state.movie,
    keyword: state => state.keyword,
    searchedmovies: state => state.searchedmovies
  },
  mutations: { 
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_KEYWORD: (state, keyword) => state.keyword = keyword,
    SET_SEARCHEDMOVIES: (state, searchedmovies) => state.searchedmovies = searchedmovies,
  },
  actions: { 
    // 전체 영화 목록
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movie(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },

    // 영화 디테일
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

    // 검색창에 키워드 들어왔을 경우에만 state keyword에 keyword 입력하고
    // 결과창으로 이동..
    searchResult ( {commit, getters }, keyword ){
      
      if (keyword !== ''){ 
        commit('SET_KEYWORD', keyword)
        // dispatch('searchMovies', keyword)
        router.push({
          name: "moviesearchview",
          params: {
            keyword: getters.keyword,
          },
        }).catch(err => err)
      } else {
        alert('검색어를 입력해주세요!')  
      }
    },
    
    searchMovies ( {commit}, searchedmovies){
      commit('SET_SEARCHEDMOVIES', searchedmovies)
    }
  }
})