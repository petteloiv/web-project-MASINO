<template>
  <div>
    <navbar-item></navbar-item>
    <div class="container profile-body">
      <div class="row">
          <div class="col-md-12 p-12">
            <div id="content" class="content content-full-width">
                <!-- begin profile -->
                <div class="profile">
                  <div class="profile-header">
                    <!-- containoer profile-body -->
                      <div class="profile-header-content m-0">
                        <!--프로필 헤더 이미지 (background) -->
                        <div class="nopoint" v-show="profile.casino_points < 0">
                          <img src="@/images/geoji.png" alt="">  
                        </div>
                        <br>
                        <div class="text-center" v-show="profile.casino_points < 0">
                          <img style="border-radius: 20px;" src="@/images/dont_be_geoji.png" alt="">  
                        </div>
                        
                          <div style="text-align: center;" v-if="!profile.movie && profile.casino_points >= 0">
                            <div class="profile-header-no-image">
                              <h2>현재 보유한 배경이 없습니다.</h2>                    
                            </div>
                            <router-link class="text-center" :to="{ name: 'casino' }">
                                <button class="back-gacha-button">
                                 배경 뽑으러 가기
                                </button>
                              </router-link>    
                          </div>

                          <div v-if="profile.movie && profile.casino_points >= 0">
                            <div class="profile-header-img">
                                <a :href="`/movie/${profile.movie.pk}`" >
                                  <img :src="`https://image.tmdb.org/t/p/original/${profile.movie.backdrop_path}`" alt="banner"
                                    width="100%" style="border-radius: 30px;">
                                </a>
                            </div>
                          </div>
                        <br>
                        <!-- 프로필 헤더 정보 : 이름, 개인정보 수정, 포인트 -->
                        <div class="profile-header-info text-center">
                            <h2 class="m-t-10 m-b-5" style="color: goldenrod;font-size: 3rem;"> {{ profile.username }}
                              <small style="color: blanchedalmond;">님 안녕하세요! 🙋‍♂️</small></h2>
                            <!-- 앞에 포인트 이모지 넣을 예정 -->
                            <h3 style="color : blanchedalmond; font-size: 2rem"> 💰 내 지갑  <span style="color: goldenrod;">{{profile.casino_points}}</span> 포인트</h3>
                            <p style="color: red; font-size: 1.5rem" v-show="profile.casino_points < 0">
                              신용등급이 불량하여 보유하신 카드를 압류합니다.
                            </p>

                        </div>
                        
                          <router-link style=text-decoration:none; class="link-update" :to="{ name: 'UserUpdateView' }">
                            <button class="update-profile"> 개인정보수정
                            </button>
                          </router-link>
                        
                      </div>
                      

                      

                      <div>
                        <b-card no-body class="profile-card">
                          <b-tabs card class="profile-tab">
                            <b-tab title="MY ARTICLES" active class="profile-tab">
                              <b-card-text>
                                <div class="tab-pane fade in active show" id="profile-article">
                                  <!-- begin table -->
                                  <div class="table-responsive table-profile" >
                                      <table class="table p-0">
                                        <thead>
                                            <tr>
                                              <th></th>
                                              <!-- <th>
                                                <h4>나의 게시글</h4>
                                              </th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="highlight" v-for="(article, index) in profile.articles" :key="article.pk">
                                              <td class="field" >{{ index + 1}}</td>
                                              <td >
                                                <router-link :to="{ name: 'articleDetail', params: { articlePk: article.pk } }"
                                                class="article-route"
                                                style="text-decoration: none; color:black;">
                                                  {{ article.title }}
                                                </router-link>
                                              </td>
                                            </tr>                                  
                                        </tbody>
                                      </table>
                                  </div>
                                  <!-- end table -->
                                </div>                                
                              </b-card-text>
                            </b-tab>
                            <b-tab @click="sortPageArray()" title="MY CARDS" class="profile-tab">
                              <b-card-text class="text-center">
                                <h4>나의 배우 카드</h4>
                                
                                <div  class="text-center" v-if="profile.casino_points < 0">
                                  <br>
                                  <h1 style="color:red;">압 류</h1>
                                  <br>
                                  <h2>포인트를 상환하시어 압류를 해제하세요.</h2>
                                </div>
                                
                                  
                                    
                                <!-- <div class="card-deck container">
                                  <div class="row" style="justify-content: normal;">
                                    <div style="border-radius: 10px;" class="card profile-card col-2 m-3 mx-3.5" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in profile.person_ids" :key="card.pk">
                                      <div class="card-header">
                                      </div>
                                      <img style="border-radius: 10px;" class="profile-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
                                      <div class="card-body profile-card-body">
                                        <h5 style="vertical-align: middle;" class="card-title">{{ card.name }}</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div> -->
                                <div v-else>
                                  <button class="profile-card-button" @click="[platinumPageArray(), goToFirstPage()]">Platinum</button><span>|</span>
                                  <button class="profile-card-button" @click="[goldPageArray(), goToFirstPage()]">Gold</button><span>|</span>
                                  <button class="profile-card-button" @click="[silverPageArray(), goToFirstPage()]">Silver</button><span>|</span>
                                  <button class="profile-card-button" @click="[bronzePageArray(), goToFirstPage()]">Bronze</button>
                                  <paginated-list
                                  ref="PaginatedList" 
                                  :list-array="pageArray" />
                                </div>

                                    
                                  

                                     
                              </b-card-text>
                            </b-tab>
                          </b-tabs>
                        </b-card>
                        <br>
                      </div>
                  </div>                        
                </div>
                <!-- end profile-content -->
                
            </div>
          </div>
      </div>

    </div>
    <br><br>
  </div>
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'
// import CardItem from '@/components/Common/CardItem.vue'
import { mapActions, mapGetters } from 'vuex'
import PaginatedList from '@/components/Account/PaginatedList.vue'


export default {
  name: 'AccountView',
  components:{
    NavbarItem,
    PaginatedList
    // CardItem
  },
  // data(){
  //   return {
  //     image : `https://image.tmdb.org/t/p/original/' + ${this.profile.movie.backdrop_path}`
  //   }
  // },
  // props: {
  //   userPk : Number,
  // },
  // data(){
  //   return {
  //     userPk: this.userPk(),
  //   }
  // },
  data () {
    return {
      pageArray: [],
    }
  },
  computed:{
    ...mapGetters(['profile']),
    // userPk(){
    //   // const pk = parseInt(this.currentUser.pk)
    //   return this.currentUser.pk
    // }
  },
  methods: {
    ...mapActions(['fetchProfile']),
    sortPageArray() {
      this.pageArray = this.profile.person_ids.sort(function (a,b) {
        return b.popularity - a.popularity;
      })
    },
    platinumPageArray() {
      this.pageArray = this.profile.person_ids.filter(function(a){
        return a.popularity >= 40
      })
    },
    goldPageArray() {
      this.pageArray = this.profile.person_ids.filter(function(a){
        return a.popularity < 40 && a.popularity >= 21
      })
    },
    silverPageArray() {
      this.pageArray = this.profile.person_ids.filter(function(a){
        return a.popularity < 21 && a.popularity >= 14
      })
    },
    bronzePageArray() {
      this.pageArray = this.profile.person_ids.filter(function(a){
        return a.popularity < 14 && a.popularity >= 10
      })
    },
    goToFirstPage() {
      this.$refs.PaginatedList.goFirstPage()
    }
  },
  created() {
    this.fetchProfile()
    // this.sortPageArray()
  }

}
</script>

<style scoped>
.profile-card{
  background-color: #FFE2A4
}

.profile-tab{
  border-radius: 20px;
}

.profile-tab.active{
  background-color: blanchedalmond;
  border-radius: 20px;
}

.profile-article {
  border-radius: 20px;
}

.table-profile{
  border-radius: 20px;
}

.profile-body{
    border-style: solid;
    border-color: goldenrod;
    border-radius: 30px;
  
}

/* .profile-header{
  width: 100%;
} */

.profile-header-content {
  margin: 2% auto;
}



.profile-header-img{
  width: 100%;
  height: auto;
  /* max-width: 50vw; */
}

/* profile-header-info {
  color: whitesmoke;
} */

.nopoint{
  background-image: url("https://img.freepik.com/free-photo/rainbow-color-background-abstract-blurred-gradient-background-banner-template_335640-598.jpg");
  text-align: center;
  color: white;
  border-radius: 20px;
  margin-top: 10px;
}

.profile-header-no-image {
  /* background-image: url("https://img.freepik.com/free-photo/rainbow-color-background-abstract-blurred-gradient-background-banner-template_335640-598.jpg"); */
  background-color: #FFE2A4;
  text-align: center;
  border-radius: 20px;
}

.profile-header-img > img {
  width: 100%;
  height: auto;
  max-width: 10vw;

}

.link-update {
  color : whitesmoke;
}

/* 카드 css 이게 지금 픽셀처리가 돼서 이상해보임.. */
.profile-card-body {
    /* height: 70px;
    width: 165.5px; */
    text-align: center;
  }

  .profile-card {
    border-radius: 20px;
    box-shadow: 15px 15px 25px black;
  }

  .profile-card-img{
    height: 280px;
    width: 180px;
  }

  .profile-card-button{
    margin: 3px;
    border-radius: 20px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
    font-size: 1.2rem;
  }

  .back-gacha-button{
    margin: 3px;
    border-radius: 20px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
    font-size: 1.2rem;
  }

  .update-profile{
    margin: 15px;
    border-radius: 20px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
    font-size: 1.2rem;
  }

  .platinum {
    background: rgb(248,255,160);
    background: linear-gradient(0deg, rgba(248,255,160,1) 0%, rgba(181,251,255,1) 19%, rgba(255,158,253,1) 80%, rgba(253,255,199,1) 100%);
  }
  .gold {
    background: rgb(249,242,149);
    background: linear-gradient(0deg, rgba(249,242,149,1) 0%, rgba(224,170,62,1) 23%, rgba(249,242,149,1) 79%, rgba(184,138,68,1) 100%);
  }
  .silver {
    background: rgb(232,232,232);
    background: linear-gradient(0deg, rgba(232,232,232,1) 0%, rgba(175,175,175,1) 23%, rgba(236,236,236,1) 79%, rgba(159,159,159,1) 100%);
  }
  .bronze {
    background: rgb(255,220,180);
    background: linear-gradient(0deg, rgba(255,220,180,1) 0%, rgba(120,61,12,1) 23%, rgba(255,222,161,1) 79%, rgba(120,61,12,1) 100%);
  }
  .modal-backdrop {
   background-color: darkolivegreen;
  }
</style>