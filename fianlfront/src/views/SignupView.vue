<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    
    <!-- 본격 회원가입 폼 -->
    <!-- Section: Design Block -->
    <section class="text-center">
      <!-- Background image -->
      <div class="p-5 bg-image" style="
            background-image: url('https://www.newzealand.com/assets/Tourism-NZ/Auckland/084dca2730/img-1536865296-2286-7334-p-061901E5-B79C-1239-158550691CA9A466-2544003__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJwbmciXQ.png');
            height: 300px;
            "></div>
      <!-- Background image -->

      <div class="card signup-div mx-4 mx-md-5 shadow-5-strong" style="
            margin-top: -100px;
            background: hsla(0, 0%, 100%, 0.8);
            backdrop-filter: blur(30px);
            ">

        <div class="signup-card-body py-5 px-md-5">

          <!-- css ; 여기가 문제인 것 같음 .. div가 너무 큼 .... -->
          <div class="signup-div row d-flex justify-content-center">
            <div class="col-6">
              <h2 class="fw-bold mb-5">지금 <span style="color:goldenrod">회원</span>이 되어보세요!</h2>
              <form @submit.prevent="signup(credentials)">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="username" style="font-size:1.3rem;">아이디</label>
                      <input v-model="credentials.username" type="text" id="username" class="form-control" />
                      
                    </div>
                  </div>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="password1" style="font-size:1.3rem;">비밀번호</label>
                  <input v-model="credentials.password1" type="password" id="password1" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="password2" style="font-size:1.3rem;">비밀번호를 다시 한번 입력해주세요.</label>
                  <input v-model="credentials.password2" type="password" id="password2" class="form-control" />
                </div>
                <br>
                <!-- Submit button -->
                <div class="d-flex justify-content-between">
                  <div class="align-items: center;">
                    <p class="mt-2" style="text-align:center;color:blanchedalmond;font-size:1rem;" ><a href="/">회원 안할래요</a></p>
                  </div>
                  <div>
                    <button style="background: goldenrod; border:none;color:black;" class="btn btn-primary btn-block mb-4">
                      회원가입
                    </button>                    
                  </div>

                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/Account/AccountErrorList.vue'


export default {
  name: 'SignupView',
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: '',
        password1: '',
        password2: '',
      }
    }
  },
  computed: {
    ...mapGetters(['authError'])
  },
  methods: {
    ...mapActions(['signup'])
  }
}
</script>

<style>
/* .signup-div{
  width: 80%;
} */
</style>