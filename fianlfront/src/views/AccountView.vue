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
                          <div class="profile-header-no-image" >
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
                        <b-card no-body>
                          <b-tabs card>
                            <b-tab title="MY ARTICLES" active>
                              <b-card-text>
                                <div class="tab-pane fade in active show" id="profile-article">
                                  <!-- begin table -->
                                  <div class="table-responsive">
                                      <table class="table table-profile">
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
                                                <router-link :to="{ name: 'articleDetail', params: { articlePk: article.pk } }">
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
                            <b-tab title="MY CARDS">
                              <b-card-text>
                                <h4>나의 배우 카드</h4>
                                <br>
                                <div v-if="profile.casino_points < 0">
                                  <h1 style="color:red;">압 류</h1>
                                  <h2>포인트를 상환하시어 압류를 해제하세요.</h2>
                                </div>
                                <div v-else class="card-deck container">
                                  <div class="row">
                                    <div class="card casino-card col-2" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in profile.person_ids" :key="card.pk">
                                    
                                      <img class="casino-card-img" style="height: 250px;" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
                                      <div class="casino-card-body" style="width:150px; height: 10px;">
                                        <h5 class="card-title">
                                          {{ card.name }}
                                        </h5>
                                      </div>
                                  </div>
                                  </div>

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


export default {
  name: 'AccountView',
  components:{
    NavbarItem,
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
  computed:{
    ...mapGetters(['profile']),
    // userPk(){
    //   // const pk = parseInt(this.currentUser.pk)
    //   return this.currentUser.pk
    // }
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    this.fetchProfile()
  }

}
</script>

<style scoped>

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
.casino-card-body {
    text-align: center;
  }

  .casino-card {
    height: 8rem;
    width: 18rem;
  }

  .casino-card-img{
    height: 250px;
    width: 100%;
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