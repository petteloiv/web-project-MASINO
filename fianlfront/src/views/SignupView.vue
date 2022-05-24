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

      <div class="card mx-4 mx-md-5 shadow-5-strong" style="
            margin-top: -100px;
            background: hsla(0, 0%, 100%, 0.8);
            backdrop-filter: blur(30px);
            ">
        <div class="card-body py-5 px-md-5">

          <!-- css ; 여기가 문제인 것 같음 .. div가 너무 큼 .... -->
          <div class="row d-flex justify-content-center">
            <div class="col-6">
              <h2 class="fw-bold mb-5">지금 회원이 되어보세요!</h2>
              <form @submit.prevent="signup(credentials)">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="username">아이디</label>
                      <input v-model="credentials.username" type="text" id="username" class="form-control" />
                      
                    </div>
                  </div>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="password1">비밀번호</label>
                  <input v-model="credentials.password1" type="password" id="password1" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="password2">비밀번호를 다시 한번 입력해주세요.</label>
                  <input v-model="credentials.password2" type="password" id="password2" class="form-control" />
                </div>

                <!-- Submit button -->
                <button class="btn btn-primary btn-block mb-4">
                  가입
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
    <!-- <form @submit.prevent="signup(credentials)" class="mx-1 mx-md-4">

      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="username">아이디</label>
        <input v-model="credentials.username" type="text" id="username" class="form-control" required />  
      </div> -->
<!-- 
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="casino_points">좋아하는 숫자를 입력하세요.</label>
        <input v-model="credentials.casino_points" type="number" id="casino_points" class="form-control" required />  
      </div> -->

<!-- 
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="password1">비밀번호</label>
        <input v-model="credentials.password1" type="password" id="password1" class="form-control" required/>
      </div>


      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="password2">비밀번호 확인</label>
        <input v-model="credentials.password2" type="password" id="password2" class="form-control" required />
      </div>
      <br>

      <div>
        <button>회원가입</button>
      </div>


    </form> -->
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
        // casino_points: '',
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

</style>