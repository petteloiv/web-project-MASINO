import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import swal from 'sweetalert';

Vue.use(Vuex)

export default ({
  // state는 직접 접근 XXXX ! getters 통해 접근!
  state: { 
    token: localStorage.getItem('token') || '',
    currentUser: {},
    profile: {},
    authError: null,
    background: {},
    anotherProfile: {},
  },
  getters: {
    // !! 뒤집고 뒤집으면 t/f로 바뀐다
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({Authorization: `Token ${state.token}`}),
    anotherProfile: state => state.anotherProfile,
  },
  mutations: { 
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
    SET_ANOTHER_PROFILE: (state, anotherProfile) => state.anotherProfile = anotherProfile

  },
  actions: {
    saveToken({ commit }, token) {
      // 토큰 state에 저장, localStorage에도 저장
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },
    removeToken({ commit }) {
      // 토큰 state 상태, localStorage 상태 reset (삭제)
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },
    // 로그인!!!!!!!!!!!!
    login({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          // 응답 토큰 저장
          dispatch('saveToken', token)
          // 현재 사용자 정보 받기
          dispatch('fetchCurrentUser')
          // 로그인 됐으면 main 화면으로 이동시키기
          router.push({ name: 'main' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    signup({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          // 성공하면! 토큰 저장, 사용자 정보 넣기, 이동
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          swal("MASINO 회원이 되신 것을 기념해 100,000포인트를 드립니다!", {
            title: "축하드립니다!",
            icon: "info",
            buttons: false,
            timer: 4000,
          })
          router.push({ name: 'main' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    update({ commit, getters, dispatch }, credentials) {
      axios({
        url: drf.accounts.profile(),
        method: 'put',
        data: credentials,
        headers: getters.authHeader,
      })
        .then(()=> {
          // 얘는 그냥 수정이니까 ... 토큰 수정 XX 
          // 성공하면! 사용자 정보 넣기, 프로필로 이동
          dispatch('fetchCurrentUser')
          router.push({ name: 'profile' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    logout({ getters, dispatch }) {
      axios({
        url: drf.accounts.logout(),
        method: 'post',
        // 지금 사용자의 토큰값 넣어서 보내기
        headers: getters.authHeader,
      })
        .then(() => {
          // 토큰 삭제, 로그아웃 알림, start 페이지로 다시 보내기
          dispatch('removeToken')
          swal("다시 방문하시기를 기다리겠습니다.", {
            title: "MASINO",
            icon: "success",
            buttons: false,
            timer: 2000,
          })
          router.push({ name: 'start' })
        })
        .catch (err => {
          console.error(err.response)
        })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {

      // 토큰값 있으면 loggedin => true
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          // 토큰값 넣어서 정보 요청 합니다~ 
          headers: getters.authHeader,
        })
          // current user에 정보 저장
          .then(res => commit('SET_CURRENT_USER', res.data))
          // 실패하면 (토큰 오류임)
          .catch(err => {
            if (err.response.status === 401) {
              dispatch('removeToken')
              swal("다시 로그인해주세요!", {
                title: "오류",
                icon: "error",
                buttons: false,
                timer: 2000,
              })
              router.push({ name: 'start' })
            }
          })
      }
    },

    // 프로필 정보 받아오기 어쩌구 저쩌구 
    fetchProfile({ commit, getters }) {
      axios({
        url: drf.accounts.profile(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_PROFILE', res.data)
        })
    },

    fetchAnotherProfile({ commit, getters }, username) {
      axios({
        url: drf.accounts.anotherProfile(username),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ANOTHER_PROFILE', res.data)
        })
    }
  },
})