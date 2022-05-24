<template>
  <div>
    <navbar-item></navbar-item>
    <account-error-list></account-error-list>
    <h1>회원정보수정</h1>

    <form @submit.prevent="update(credentials)" class="mx-1 mx-md-4">

      <div class="form-outline flex-fill mb-0">
        <label class="form-label" for="email">이메일</label>
        <input v-model="credentials.email" type="text" id="email" class="form-control" :placeholder="this.currentUser.email" required />  
      </div>

      <br>

      <div>
        <button>수정 완료</button>
      </div>


    </form>
    

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/Account/AccountErrorList.vue'
import NavbarItem from '@/components/Common/NavbarItem.vue'


export default {
  name: "UserUpdateView",
  components:{
    AccountErrorList,
    NavbarItem 
  },
  data() {
    return {
      credentials: {
        email: '',
      }
    }
  },
  computed: {
    ...mapGetters(['authError','currentUser'])
  },
  methods: {
    ...mapActions(['update'])
  }

}
</script>

<style>

</style>