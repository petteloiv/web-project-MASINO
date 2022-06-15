<template>


  <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 article-form">
        <br>
          <form @submit.prevent="update(updateProfile)" >
            <div class="form-group">
            
              <label for="email">이메일을 수정하세요.</label>
              <br>
              <input v-model="updateProfile.email" type="text" id="email" required class="form-control" />
           </div>
            
            <br>
            <button class="article-back">
                <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'profile' }">수정 취소</router-link>
             </button>  
                      
            
            <span>
              <button class="article-button submit">완료</button> 
            </span> 
          </form>

          <br>
          <br>
      </div>
  </div>


    <!-- <form @submit.prevent="update(updateProfile)" class="mx-1 mx-md-4">

      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="email">이메일</label>
        <input v-model="updateProfile.email" type="text" id="email" class="form-control" required />  
      </div> -->


      <!-- <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="password">비밀번호</label>
        <input v-model="credentials.password1" type="password" id="password" class="form-control" required/>
      </div> -->

      <!-- <div>
        <button>정보 수정</button>
      </div>


    </form> -->

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "UserUpdateForm",
  // props: {
  //   credentials: Object,
  //   action: String,
  // },
  data(){
    return {
      updateProfile: {
        email: this.credentials.email,
      }
    }
  },
  methods: {
    ...mapActions['update'],
  }

}
</script>

<style>

</style>