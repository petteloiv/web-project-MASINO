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
                      <div class="profile-header-content">
                        <!--프로필 헤더 이미지 (background) -->
                        <div class="nopoint" v-show="profile.casino_points < 0">
                          <h2>신❈용ங불량</h2>  
                        </div>
                        <div v-if="!profile.movie">
                          <div class="profile-header-no-image">
                            <span>현재 보유한 </span> 
                            <span><router-link :to="{ name: 'casino' }">배경</router-link> </span> 
                            <span>이 없습니다.</span>
                            <p>카지노 입장 시 입장료 13,000 포인트가 차감됩니다.</p>                        
                          </div>   
                          
                        </div>
                        <div v-else>
                          <div class="profile-header-img">
                              <a :href="`/movie/${profile.movie.pk}`" >
                                <img :src="`https://image.tmdb.org/t/p/original/${profile.movie.backdrop_path}`" alt="banner"
                                  width="100%" style="border-radius: 30px;">
                              </a>
                          </div>
                        </div>
                        <br>
                        <!-- 프로필 헤더 정보 : 이름, 개인정보 수정, 포인트 -->
                        <div class="profile-header-info">
                            <h2 class="m-t-10 m-b-5" style="color : blanchedalmond;"> {{ profile.username }} 🙋‍♂️
                              <small>님 안녕하세요!</small></h2>
                            <!-- 앞에 포인트 이모지 넣을 예정 -->
                            <h3 style="color : blanchedalmond;"> 💰 내 지갑  {{profile.casino_points}} 포인트</h3>
                            <p style="color:red;" v-show="profile.casino_points < 0">
                              카드 압류 후 상환 독촉장이 발송되오니 조속한 처리 바랍니다.
                            </p>

                            <a href="#" class="btn btn-xs btn-success">
                              <router-link style=text-decoration:none; class="link-update" :to="{ name: 'UserUpdateView' }">개인정보수정 </router-link>
                            </a>
                        </div>
                      </div>
                      <br>

                      

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
                                  <button class="profile-card-button" @click="platinumPageArray()">Platinum</button><span>|</span>
                                  <button class="profile-card-button" @click="goldPageArray()">Gold</button><span>|</span>
                                  <button class="profile-card-button" @click="silverPageArray()">Silver</button><span>|</span>
                                  <button class="profile-card-button" @click="bronzePageArray()">Bronze</button>
                                  <paginated-list :list-array="pageArray" />
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
  //     url : '/movie/' + this.profile.movie.pk
  //   }
    
  // },
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
      pageArray: []
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
}

.profile-header-no-image {
  background-image: url("https://img.freepik.com/free-photo/rainbow-color-background-abstract-blurred-gradient-background-banner-template_335640-598.jpg");
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