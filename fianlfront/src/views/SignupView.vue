<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    
    <h1>회원가입</h1>
    <!-- 본격 회원가입 폼 -->

    <form @submit.prevent="signup(credentials)" class="mx-1 mx-md-4">

      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="username">이름</label>
        <input v-model="credentials.username" type="text" id="username" class="form-control" required />  
      </div>
<!-- 
      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="casino_points">좋아하는 숫자를 입력하세요.</label>
        <input v-model="credentials.casino_points" type="number" id="casino_points" class="form-control" required />  
      </div> -->


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


    </form>
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