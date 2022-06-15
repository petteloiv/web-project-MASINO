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
    // profile: (userPk) => HOST + ACCOUNTS + 'profile/' + `${userPk}`,
    profile: () => HOST + ACCOUNTS + 'profile/',
    anotherProfile: (username) => HOST + ACCOUNTS + 'profile/' + `${username}`,

  },
  movies: {
    movie: () => HOST + MOVIES,
    movieDetail: (moviePk) => HOST + MOVIES + `${moviePk}`,
  },
  community: {
    community: () => HOST + COMMUNITY,
    articleDetail: (articlePk) => HOST + COMMUNITY + `${articlePk}/`,
    articleLike: (articlePk) => HOST + COMMUNITY + `${articlePk}/` + 'like/',
    commentCreate: (articlePk) => HOST + COMMUNITY + `${articlePk}/` + 'comment/',
    commentLike: (articlePk, commentPk) => HOST + COMMUNITY + `${articlePk}/` + 'comment/' + `${commentPk}/` +'like/',
    comment: (articlePk, commentPk) => HOST + COMMUNITY + `${articlePk}/` + 'comment/' + `${commentPk}/`,
  },
  casino: {
    quiz: () => HOST + CASINO + 'quiz/',
    raisePoint: () => HOST + CASINO + 'raise_point/',
    lowerPoint1000: () => HOST + CASINO + 'lower_point_1000/',
    lowerPoint10000: () => HOST + CASINO + 'lower_point_10000/',
    backGacha: () => HOST + CASINO + 'back_gacha/',
    storeBack: (moviePk) => HOST + CASINO + 'store_back/' + `${moviePk}/`,
    cardGacha: () => HOST + CASINO + 'card_gacha/',
    cardGachaTen: () => HOST + CASINO + 'card_gacha_ten/',
    storeCard: (personPk) => HOST + CASINO + 'store_card/' + `${personPk}/`,
  },
}