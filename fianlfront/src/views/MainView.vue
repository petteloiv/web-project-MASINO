<template>
  <div>
    <div class="main-header">
      <navbar-item></navbar-item>
      <br>
      <div class="container">
        <div class="row">
        <!-- <movie-search-form class="movie-search-form"></movie-search-form> -->

        </div>
      </div>
      <br>
      <br>
      <h1 class="h1">마지노를 찾아주신 당신에게 장르별 영화를 추천드립니다.</h1>
      <br>
      <br>
      <div >
        <div class="d-flex justify-content-center" >
          <button class="movie-recommend-button p-10" style="font-family: 'GowunDodum-Regular';font-weight:bold;"
           @click="[filterWesternMovies(), filterActionMovies(), filterComedyMovies(), filterCrimeMovies(), filterFamilyMovies(), filterFantasyMovies(), filterHorrorMovies(), filterRomanceMovies(), filterSFMovies(),]">
            새로운 영화 추천받기
          </button>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
    </div>

    <br>
    <br>

    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">흥미진진한 범죄영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Crime" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
              <!-- </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">가벼운 기분전환 코미디영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Comedy" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">상상 속 나만의 세상 판타지영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Fantasy" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">늘 그랬듯 답을 찾을 SF영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in SF" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">달콤쌉싸름 로맨스영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Romance" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">속 시원하게 펑펑 액션영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Action" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">가족끼리 이러는거 아니야 가족영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Family" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">거칠지만 낭만있는 서부영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Western" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    <div class="container movie-border">
    <br>
    <br>
    <h2 class="h2">나 너무 무서워 공포영화</h2>
    <br>
    <br>
      <div class="movie-container">
        <div class="row" style="justify-content: space-around;">
          <div class="col-3 movie-item" style="width: 300px" v-for="movie in Horror" :key="movie.pk">
            <div class="movie-card" style="height: 300px">
              <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
              <!-- <a :href="`/movie/${movie.pk}`"> -->
                <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
                <div class="inner-content">
                  <span>{{ movie.title }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    
  </div>
</template>

<script>

import NavbarItem from '@/components/Common/NavbarItem.vue'
// import MovieSearchForm from '@/components/Movie/MovieSearchForm.vue'

import _ from 'lodash'

import { mapActions, mapGetters } from 'vuex'



export default {
  name: 'MainView',
  components: {
    NavbarItem,
    // MovieSearchForm,
  },
  data(){
    return {
      Comedy: [],
      Western: [],
      SF: [],
      Horror: [],
      Fantasy: [],
      Romance: [],
      Action: [],
      Family: [],
    }
  },
  computed:{
    ...mapGetters(['currentUser', 'movies']),
    userPk(){
      return this.currentUser.pk
    },
    // filteredComedyMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(35)
    //     }), 12)
    //   },
    // filteredCrimeMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(80)
    //     }), 12)
    //   },
    // filteredSFMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(878)
    //     }), 12)
    //   },
    // filteredHorrorMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(27)
    //     }), 12)
    //   },
    // filteredFantasyMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(14)
    //     }), 12)
    //   },
    // filteredRomanceMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(10749)
    //     }), 12)
    //   },
    // filteredActionMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(28)
    //     }), 12)
    //   },
    // filteredFamilyMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(10751)
    //     }), 12)
    //   },
    // filteredWesternMovies() {
    //     return _.sampleSize(this.movies.filter((movie) => {
    //       return movie.genre_ids.includes(37)
    //     }), 12)
    //   },
  },
  methods: {
    ...mapActions(['fetchCurrentUser','fetchProfile','fetchMovies']),
    
    filterComedyMovies() {
      this.Comedy = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(35)
        }), 12)
    },
    filterCrimeMovies() {
      this.Crime = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(80)
        }), 12)
    },
    filterSFMovies() {
      this.SF = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(878)
        }), 12)
    },
    filterHorrorMovies() {
      this.Horror = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(27)
        }), 12)
    },
    filterFantasyMovies() {
      this.Fantasy = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(14)
        }), 12)
    },
    filterRomanceMovies() {
      this.Romance = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(10749)
        }), 12)
    },
    filterActionMovies() {
      this.Action = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(28)
        }), 12)
    },
    filterFamilyMovies() {
      this.Family = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(10751)
        }), 12)
    },
    filterWesternMovies() {
      this.Western = _.sampleSize(this.movies.filter((movie) => {
          return movie.genre_ids.includes(37)
        }), 12)
    },
  },

  created() {
    // this.fetchCurrentUser()
    this.fetchMovies() 
    this.filterComedyMovies()
    this.filterCrimeMovies()
    this.filterSFMovies()
    this.filterHorrorMovies()
    this.filterFantasyMovies()
    this.filterRomanceMovies()
    this.filterActionMovies()
    this.filterFamilyMovies()
    this.filterWesternMovies()
  },
}
</script>

<style >

.main-header{
  background-image: url('@/images/Cinema.jpg');
}

.h1 {
  text-align: center;
  color:blanchedalmond;

}

.h2 {
  text-align: center;
  color: goldenrod;

}


/* .movie-recommend-button{
  border-radius: 10px;
  background-color: #26382B;
  border-color: goldenrod;
  color: goldenrod;
  font-size: 2rem;
} */


.movie-recommend-button {
	/* box-shadow: -1px 0px 0px 0px #ffffff; */
	background:linear-gradient(to bottom, #daa520 5%, #947326 100%);
	background-color:#daa520;
	border-radius:25px;
	border:1px solid #9e860c;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:19px;
	padding:12px 11px;
	text-decoration:none;
}
.movie-recommend-button:hover {
	background:linear-gradient(to bottom, #947326 5%, #daa520 100%);
	background-color:#947326;
}
.movie-recommend-button:active {
	position:relative;
	top:1px;
}


.movie-border{
  border-style: solid;
  border-color: #daa520;
  border-radius: 30px;
}

.movie-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.movie-search-form{
  display: flex;
  justify-content: center;
}


.recommend{
  padding-top: 160%;
}

/* .img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.25s linear;
} */

.movie-item{
  /* width: 250px; */
  height: 400px;
  display: flex;
  justify-content: center;
}

.movie-card {
  position: relative;
  background: linear-gradient(180deg, goldenrod 0%, goldenrod 100%);
  width: 13rem;
  overflow: cover;
  box-shadow: 15px 15px 25px black;
}
.movie-card img {
  width: 100%;
  height: auto;
  transform: scale(1.1);
  transition: all 0.25s linear;
}
.movie-card:hover img {
  opacity: 0.2;
  /* transform: scale(1.25); */
}
.movie-card .inner-content {
  width: 80%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 80%;
  left: 50%;
  transition: all 600ms ease;
  color: white;
  font-size: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.movie-card:hover .inner-content {
  opacity: 1;
  top: 50%;
  text-align: center;
}
.movie-card .inner-content .title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
}



</style>