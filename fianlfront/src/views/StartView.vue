<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    <br>
    <br><br><br><br>
    <section class="text-left text-lg-start">
      
      <div class="card mb-3" id="login">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <img src='@/images/startlogo.png' alt="Masino logo"
              class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5" >

              <form @submit.prevent="login(credentials)">
                <!-- Id input -->
                <h2 class="text-center">영화 놀이터 MASINO에</h2>
                <h2 class="text-center">입장하시려면</h2>
                <h2 class="text-center">회원 인증이 필요합니다.</h2>
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
                <div style="display:inline-block ">
                  <button class="login-button mb-4">로그인</button>
                  <p style="text-align: center;">
                    회원이 아니신가요? <a href="/signup">가입하기</a>
                  </p>
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
    ...mapActions(['login', 'fetchMovies', 'fetchCurrentUser'])
  },
  created() {
    // this.fetchMovies()
    // this.fetchCurrentUser()
  }
}
</script>

<style lang="scss" scoped>

img {
 object-fit: cover;
}

#login {
  width: 55%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  margin: auto;
  padding: auto;
  background: whitesmoke;
}
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.form-label{
  font-size: 1.5rem;
}

.login-button{
  border-radius: 10px;
  // background-color: #26382B;
  border-color: black;
  color: black;
  font-size: 1.5rem;
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
