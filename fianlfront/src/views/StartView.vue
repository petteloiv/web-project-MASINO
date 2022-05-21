<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    <br>
    <h1>MASINO에 입장하시려면 로그인이 필요합니다.</h1>
    <br>
    
    <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">아이디</label>
        <input v-model="credentials.username" type="text" id="username" placeholder="username" required />
      </div>
      <br>
      <div>
        <label for="password">비밀번호</label>
        <input v-model="credentials.password" type="password" id="password" placeholder="password" required />
      </div>

      <div>
        <button>Login</button>
      </div>
    </form>
  
    <div>
      회원이 아니신가요? 
      <a href="/signup" >회원가입하기</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/Account/AccountErrorList.vue'

export default {
  name: "StartView",
  components: {
    AccountErrorList,
  },
  data(){
    return {
        credentials: {
          username: '',
          password: '',
        }
    }
  },
  computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
}
</script>

<style>

</style>