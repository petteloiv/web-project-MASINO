import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import swal from 'sweetalert';
import _ from 'lodash'

/*
만들어야하는 것들 

1. 게시글 생성 
2. 게시글 수정
3. 게시글 삭제
2. 게시글 전체 목록 불러오기 
3. 게시글 좋아요
4. 댓글 달기 => 이거 안됨 
5. 댓글 전체 목록 불러오기
6. 댓글 좋아요


*/
Vue.use(Vuex)

export default ({
  state: { //data
    articles: [],
    article: {},
  },
  getters: { // state 여기서 불러다가 사용
    articles: state => state.articles,
    article: state => state.article,
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser.username
    },
    isArticle: state => !_.isEmpty(state.article),

  },
  mutations: { // state 변경
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
    SET_ARTICLE_COMMENTS: (state, comments) => state.article.comments = comments,

  },
  actions: { 
    // 전체 글 목록
    fetchArticles({ commit, getters }) {
      axios({
        url: drf.community.community(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_ARTICLES', res.data))
        .catch(err => console.error(err.response))
    },

    // article detail
    fetchArticle({ commit, getters }, articlePk) {
      axios({
        url: drf.community.articleDetail(articlePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_ARTICLE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    // article create -> article list 불러오는거랑 같은 url
    createArticle({ commit, getters }, article) {
      axios({
        url: drf.community.community(),
        method: 'post',
        data: article,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          swal("3000점이 적립되었습니다!", {
            title: "축하드립니다!",
            icon: "info",
            buttons: false,
            timer: 2000,
          })
          router.push({
            name: 'articleDetail',
            params: { articlePk: getters.article.id }
          })
        })
    },

    // article update
    updateArticle({ commit, getters }, { articlePk, title, content}) {
      /* 게시글 수정
      PUT: article URL (게시글 입력정보, token)
        성공하면
          응답으로 받은 게시글을 state.article에 저장
          ArticleDetailView 로 이동
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.community.articleDetail(articlePk),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          router.push({
            name: 'articleDetail',
            params: { articlePk: getters.article.id }
          })
        })
        
    },

    deleteArticle({ commit, getters }, articlePk) {
      if (confirm('정말 글을 삭제하시겠습니까?')) {
        axios({
          url: drf.community.articleDetail(articlePk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_ARTICLE', {})
            router.push({ name: 'community' })
          })
          .catch(err => console.error(err.response))
      }
    },

    likeArticle({ commit, getters }, articlePk) {
      /* 좋아요
      POST: likeArticle URL(token)
        성공하면
          state.article 갱신
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.community.articleLike(articlePk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_ARTICLE', res.data))
        .catch(err => console.error(err.response))
    },

		createComment({ commit, getters }, { articlePk, content }) {
      /* 댓글 생성
      POST: comments URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = { content }

      axios({
        url: drf.community.commentCreate(articlePk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
          swal("1000점이 적립되었습니다!", {
            title: "축하드립니다!",
            icon: "info",
            buttons: false,
            timer: 2000,
          })
        })
        .catch(err => console.error(err.response))
    },

    updateComment({ commit, getters }, { articlePk, commentPk, content }) {
      /* 댓글 수정
      PUT: comment URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      // const comment = { content }

      axios({
        url: drf.community.comment(articlePk, commentPk),
        method: 'put',
        data: { content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { articlePk, commentPk }) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: comment URL (token)
          성공하면
            응답으로 state.article의 comments 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 댓글을 삭제하시겠습니까?')) {
          axios({
            url: drf.community.comment(articlePk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_ARTICLE_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },

    likeComment({ commit, getters }, { articlePk, commentPk }) {
      axios({
        url: drf.community.commentLike(articlePk, commentPk),
        method: 'post',
        data: {},
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },
  },
})