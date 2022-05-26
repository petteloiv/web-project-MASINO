<template>
  <div>

    <account-error-list v-if="authError"></account-error-list>
    <br><br><br>
    <!-- Section: Design Block -->
    <section class="">
      <!-- Jumbotron -->
      <div class="px-4 py-5 px-md-5 text-center text-lg-start">
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight" style="font-size:3.5rem; color:goldenrod;">
                MASINO <br />
                <span style="font-size:2rem; color:blanchedalmond;">영화와 재미를 위한 최고의 선택</span>
              </h1>
              <p style="color: hsl(217, 10%, 50.8%)">
                당신을 위한 영화 카지노 페이지. 
                좀 많이 써둬야지 있어보일 것 같아서 고민중이다. <br> 
                이 모든 혜택은 회원에게만 제공됩니다. <br>
                정보와 재미, 모든 것이 있는 곳 마지노 <br>
                내가 좋아하는 영화의 포스터로 프로필을 꾸미고 싶지 않으세요? <br>
                원한다고 다 가질 수 있는게 아니다 .. <br>
                MASINO에서 여러분의 운을 시험해보세요. 
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="start-card">
                <br>
                <div class="card-body py-5 px-md-5">
                  <form @submit.prevent="login(credentials)">

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="username" style="color:blanchedalmond;"><span style="color:goldenrod;">아이디</span>를 입력하세요.</label>
                      <input v-model="credentials.username" type="text" id="username"  class="form-control" />
                      
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="password" style="color:blanchedalmond;"><span style="color:goldenrod;"> 비밀번호</span>를 입력하세요.</label>
                      <input v-model="credentials.password" type="password" id="password" class="form-control" />
                      
                    </div>

                    <br>

                    <!-- Submit button -->

                    <div class="d-flex justify-content-between">
                      <div class="align-items: center;">
                        <p class="mt-2" style="text-align:center;color:blanchedalmond;font-size:1rem;" >
                          회원이 아니신가요?  <a href="/signup">가입하기</a>
                        </p> 
                      </div>
                      <div>
                        <button type="submit" class="btn btn-primary btn-block mb-4">
                          로그인
                        </button>
                      </div>

                    </div>

                    

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Jumbotron -->
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

.start-card{
  border-style: solid;
  border-color: #daa520;
  border-radius: 30px;
}

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
