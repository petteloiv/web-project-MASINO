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
                    
                      <!-- 프로필 헤더 탭! 누르면 각 ... item 들로 이동인데 ,, 그럼 새로 만들어줘야하나 view를  -->
                      <ul class="profile-header-tab nav nav-tabs">
                        <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
                        <li class="nav-item"><a href="#profile-about" class="nav-link active show" data-toggle="tab">ABOUT</a></li>
                        <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
                        <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
                        <li class="nav-item"><a href="#profile-friends" class="nav-link" data-toggle="tab">FRIENDS</a></li>
                      </ul>
                      <!-- END profile-header-tab -->
                  </div>
                </div>
                <!-- end profile -->
                <!-- begin profile-content -->
                <div class="profile-content">
                  <!-- begin tab-content -->
                  <div class="tab-content p-0">

                      <!-- begin #profile-about tab -->
                      <div class="tab-pane fade in active show" id="profile-about">
                        <!-- begin table -->
                        <div class="table-responsive">
                            <table class="table table-profile">
                              <thead>
                                  <tr>
                                    <th></th>
                                    <th>
                                        <h4>Micheal    Meyer <small>Lorraine Stokes</small></h4>
                                    </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="highlight">
                                    <td class="field">Mood</td>
                                    <td><a href="javascript:;">Add Mood Message</a></td>
                                  </tr>
                                  <tr class="divider">
                                    <td colspan="2"></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Mobile</td>
                                    <td><i class="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924 <a href="javascript:;" class="m-l-5">Edit</a></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Home</td>
                                    <td><a href="javascript:;">Add Number</a></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Office</td>
                                    <td><a href="javascript:;">Add Number</a></td>
                                  </tr>
                                  <tr class="divider">
                                    <td colspan="2"></td>
                                  </tr>
                                  <tr class="highlight">
                                    <td class="field">About Me</td>
                                    <td><a href="javascript:;">Add Description</a></td>
                                  </tr>
                                  <tr class="divider">
                                    <td colspan="2"></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Country/Region</td>
                                    <td>
                                        <select class="form-control input-inline input-xs" name="region">
                                          <option value="US" selected="">United State</option>
                                          <option value="AF">Afghanistan</option>
                                          <option value="AL">Albania</option>
                                          <option value="DZ">Algeria</option>
                                          <option value="AS">American Samoa</option>
                                          <option value="AD">Andorra</option>
                                          <option value="AO">Angola</option>
                                          <option value="AI">Anguilla</option>
                                          <option value="AQ">Antarctica</option>
                                          <option value="AG">Antigua and Barbuda</option>
                                        </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="field">City</td>
                                    <td>Los Angeles</td>
                                  </tr>
                                  <tr>
                                    <td class="field">State</td>
                                    <td><a href="javascript:;">Add State</a></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Website</td>
                                    <td><a href="javascript:;">Add Webpage</a></td>
                                  </tr>
                                  <tr>
                                    <td class="field">Gender</td>
                                    <td>
                                        <select class="form-control input-inline input-xs" name="gender">
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                        </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="field">Birthdate</td>
                                    <td>
                                        <select class="form-control input-inline input-xs" name="day">
                                          <option value="04" selected="">04</option>
                                        </select>
                                        -
                                        <select class="form-control input-inline input-xs" name="month">
                                          <option value="11" selected="">11</option>
                                        </select>
                                        -
                                        <select class="form-control input-inline input-xs" name="year">
                                          <option value="1989" selected="">1989</option>
                                        </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="field">Language</td>
                                    <td>
                                        <select class="form-control input-inline input-xs" name="language">
                                          <option value="" selected="">English</option>
                                        </select>
                                    </td>
                                  </tr>
                                  <tr class="divider">
                                    <td colspan="2"></td>
                                  </tr>
                                  <tr class="highlight">
                                    <td class="field">&nbsp;</td>
                                    <td class="p-t-10 p-b-10">
                                        <button type="submit" class="btn btn-primary width-150">Update</button>
                                        <button type="submit" class="btn btn-white btn-white-without-border width-150 m-l-5">Cancel</button>
                                    </td>
                                  </tr>
                              </tbody>
                            </table>
                        </div>
                        <!-- end table -->
                      </div>
                      <!-- end #profile-about tab -->
                  </div>
                  <!-- end tab-content -->
                </div>
                <!-- end profile-content -->
            </div>
          </div>
      </div>
    <!-- </div>
          </div>
      </div> -->
</div>

<!-- 쓸 애들  -->
            <router-link :to="{ name: 'UserUpdateView' }">
              개인정보수정
            </router-link>
            
      <h2>작성한 글</h2>
            <ul>
              <li v-for="article in profile.articles" :key="article.pk">
                <router-link :to="{ name: 'articleDetail', params: { articlePk: article.pk } }">
                  {{ article.title }}
                </router-link>
              </li></ul>

           <a :href="`/movie/${profile.movie.pk}`" >
              <img :src="`https://image.tmdb.org/t/p/original/${profile.movie.backdrop_path}`" alt="banner">
            </a>



  </div>
</template>

<script>
import NavbarItem from '@/components/Common/NavbarItem.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'AccountView',
  components:{
    NavbarItem
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

.profile-header-img{
  height: 10%;
  width: 100%;
}

.link-update {
  color : whitesmoke
}
</style>