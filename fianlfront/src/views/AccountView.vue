<template>
  <div>
    <navbar-item></navbar-item>
    <div class="container profile-body">
      <div class="row">
          <div class="col-md-12">
            <div id="content" class="content content-full-width">
                <!-- begin profile -->
                <div class="profile">
                  <div class="profile-header">

                      <div class="profile-header-content">
                        <!--프로필 헤더 이미지 (background) -->
                        <div class="profile-header-img">
                            <a :href="`/movie/${profile.movie.pk}`" >
                              <img :src="`https://image.tmdb.org/t/p/original/${profile.movie.backdrop_path}`" alt="banner">
                            </a>
                        </div>
                        <br>
                        <!-- 프로필 헤더 정보 : 이름, 개인정보 수정, 포인트 -->
                        <div class="profile-header-info">
                            <h2 class="m-t-10 m-b-5">{{ profile.username }}</h2>
                            <!-- 앞에 포인트 이모지 넣을 예정 -->
                            <p> {{profile.casino_points}} 포인트</p> 
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
                                <div class="card-deck container">
                                  <div class="row">
                                    <div class="casino-card col-3 p-12" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in profile.person_ids" :key="card.pk">
                                      <div class="card-header">
                                      </div>
                                      <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
                                      <div class="casino-card-body">
                                        <h5 class="card-title">{{ card.name }}</h5>
                                      </div>
                                  </div>
                                  </div>

                                </div>     
                              </b-card-text>
                            </b-tab>
                          </b-tabs>
                        </b-card>
                      </div>
                  </div>                        
                </div>
                <!-- end profile-content -->
            </div>
          </div>
      </div>

    </div>
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

<style>

.profile-body{
  background-color: #fff!important;
}

.profile-header-content {
  margin: 5% auto;
}

/* .profile-header-img{
  width: 100%;
  height: auto;
  max-width: 50vw;
} */

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
    width: 10rem;
    height: 20rem;
    padding: 1px;
  }

  .casino-card {
    height: 8rem;
    width: 18rem;
  }

  .casino-card-img{
    height: 100%;
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