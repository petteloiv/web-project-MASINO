<template>

    <form @submit.prevent="update(updateProfile)" class="mx-1 mx-md-4">

      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="email">이메일</label>
        <input v-model="updateProfile.email" type="text" id="email" class="form-control" required />  
      </div>


      <!-- <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="password">비밀번호</label>
        <input v-model="credentials.password1" type="password" id="password" class="form-control" required/>
      </div> -->

      <div>
        <button>정보 수정</button>
      </div>


    </form>

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