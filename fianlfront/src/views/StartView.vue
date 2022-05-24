<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    <br>

    <section class="text-left text-lg-start" >
      
      <div class="card mb-3" id="login">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img src='@/images/squarelogo.png' alt="Masino logo"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">

              <form @submit.prevent="login(credentials)">
                <!-- Id input -->
                <h3>영화 놀이터 MASINO에 입장하시려면</h3>
                <h3>회원 인증이 필요합니다.</h3>
                <br>
                <div class="form-outline mb-4">
                  <label class="form-label" for="username">아이디를 입력하세요.</label>
                  <input v-model="credentials.username" type="text" id="username" class="form-control" required/>  
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="password">비밀번호를 입력하세요.</label>
                  <input v-model="credentials.password" type="password" id="password" class="form-control" />
                </div>

                <!-- Submit button -->
                <div>
                  <button class="btn btn-primary btn-block mb-4">로그인</button>
                </div>

                <div class="text-center">
                  <p>회원이 아니신가요? <a href="/signup">가입하기</a></p>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- <form @submit.prevent="login(credentials)"> -->
      <!-- 아이디 input -->
      <!-- <div class="form-outline mb-4">
        <input v-model="credentials.username" type="text" id="username" class="form-control" required/>
        <label class="form-label" for="form2Example1">Email address</label>
      </div> -->

      <!-- Password input -->
      <!-- <div class="form-outline mb-4">
        <input  v-model="credentials.password" type="password" id="password" class="form-control" required/>
        <label class="form-label" for="form2Example2">Password</label>
      </div> -->

      <!-- Submit button -->
      <!-- <button type="button" class="btn btn-primary btn-block mb-4">로그인</button> -->

      <!-- Register buttons -->
      <!-- <div class="text-center">
        <p>회원이 아니신가요? <a href="/signup">가입하기</a></p>
      </div>
    </form> -->

    <!-- <h1>MASINO에 입장하시려면 로그인이 필요합니다.</h1>
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
    </div> -->
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

<style lang="scss" scoped>

#login {
  width: 55%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  margin: auto;
  background: #E5E5E5;
}
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
