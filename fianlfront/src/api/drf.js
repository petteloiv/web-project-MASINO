const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMUNITY = 'community/'
const CASINO = 'casino/'

export default {
  accounts: {
    signup: () => HOST + ACCOUNTS + 'signup/',
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // profile: () => HOST + ACCOUNTS + 'profile/' + username,

  },
  movies: {
    movie: () => HOST + MOVIES,
    // movieDetail: () => HOST + MOVIES + `${moviePk}`,
  },
  community: {
    community: () => HOST + COMMUNITY,
    // articleDetail: () => HOST + COMMUNITY + `${articlePk}`,
    // articleLike: () => HOST + COMMUNITY + `${articlePk}` + 'like/',
    // commentCreate: () => HOST + COMMUNITY + `${articlePk}` + 'comment/',
    // commentLike: () => HOST + COMMUNITY + `${articlePk}` + 'comment/like/',
    // comment: () => HOST + COMMUNITY + `${articlePk}` + 'comment/' + `${commentPk}`,
  },
  casino: {
    quiz: () => HOST + CASINO + 'quiz/',
    backGacha: () => HOST + CASINO + 'backGacha/',
    cardGacha: () => HOST + CASINO + 'cardGacha/',
  },
}