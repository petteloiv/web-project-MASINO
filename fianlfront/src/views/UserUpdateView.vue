<template>
  <div>
    <account-error-list></account-error-list>
    <h1>회원정보수정</h1>
    <user-update-form></user-update-form>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/Account/AccountErrorList.vue'
import UserUpdateForm from '@/components/Account/UserUpdateForm.vue'

export default {
  name: "UserUpdateView",
  components:{
    AccountErrorList, 
    UserUpdateForm,
  },
  data() {
    return {
      credentials: {
        email: '',
        // serializer 보면 username, email 리턴 하길래 
        // 이메일만 수정 가능하게 했습니다.
        // password: '',
        // password2: '',
      }
    }
  },
  computed: {
    ...mapGetters(['authError'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created(){
    this.fetchProfile(this.$)
  }

}
</script>

<style>

</style>