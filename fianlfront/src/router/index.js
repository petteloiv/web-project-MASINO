import Vue from 'vue'
import VueRouter from 'vue-router'

import StartView from '@/views/StartView.vue'
import AccountView from '@/views/AccountView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import ArticleUpdateView from '@/views/ArticleUpdateView.vue'
import CasinoBackGachaView from '@/views/CasinoBackGachaView.vue'
import CasinoCardGachaView from '@/views/CasinoCardGachaView.vue'
import CasinoQuizView from '@/views/CasinoQuizView.vue'
import CasinoView from '@/views/CasinoView.vue'
import CommunityView from '@/views/CommunityView.vue'
import MainView from '@/views/MainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import SignupView from '@/views/SignupView.vue'
import UserUpdateView from '@/views/UserUpdateView'
import UserLogoutView from '@/views/UserLogoutView'

import NotFound404 from '@/views/NotFound404.vue'



Vue.use(VueRouter)

const routes = [
 
  /*
  routes 정리
  
  accounts
  - signup : SignupView / 회원가입 나오는 화면 
  - login : StartView / 첫 화면 ,, 로그인 or 회원가입 나오는 걔
  - logout
  - profile : AccountView / 

  movies
  - movie : MainView
  - movieDetail : MovieDetailView

  community
  - community : CommunityView
  - articleDetail : ArticleDetailView
  *- articleCreate : ArticleCreateView
  *- articleUpdate : ArticleUpdateView
  
  casino
  - casino : CasinoView
  - quiz : CasinoQuizView
  - CardGacha : CasinoCardGachaView
  - BackGacha : CasinoBackGachaView
   
  */

  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '',
    name: 'start',
    component: StartView
  },
  {
    path: '/profile/:userPk',
    name: 'profile',
    component: AccountView,
    // props : true
  },
  {
    path: '/main',
    name: 'main',
    component: MainView 
  },
  {
    path: '/movie/:moviePk',
    name: 'moviedetail',
    component: MovieDetailView 
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/article/:articlePk',
    name: 'articleDetail',
    component: ArticleDetailView
  },
  {
    path: '/article/create',
    name: 'articleCreate',
    component: ArticleCreateView
  },
  {
    path: '/article/:articlePk/update',
    name: 'articleUpdate',
    component: ArticleUpdateView
  },
  {
    path: '/casino',
    name: 'casino',
    component: CasinoView
  },
  {
    path: '/casino/quiz',
    name: 'quiz',
    component: CasinoQuizView
  },
  {
    path: '/casino/cardgacha',
    name: 'cardGacha',
    component: CasinoCardGachaView
  },
  {
    path: '/casino/backgacha',
    name: 'backGacha',
    component: CasinoBackGachaView
  },
  {
    path: '/:userPk/update',
    name: 'UserUpdateView',
    component: UserUpdateView
  },
  {
    path: '/logout',
    name: 'UserLogoutView',
    component: UserLogoutView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
router.beforeEach((to, from, next) => {
  나중에 작성할 부분 

  Navigation Guard 설정 

  - 로그인이 필요한 페이지인데 로그인이 되어있지않다면 
    로그인 페이지로 이동 
  - 우리 사이트는 모든 기능이 로그인이 필요해서
    이 기능을 쓸 지는 잘 모르겠다 ...
  - 로그인이 되어있는데 /login, /signup 페이지로 
    이동한다면 메인페이지로 이동 
})
*/


export default router
