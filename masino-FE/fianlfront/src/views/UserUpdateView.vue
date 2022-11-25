<template>
  <div>
    <navbar-item></navbar-item>
    <account-error-list></account-error-list>

    <div class="m-5 profile-edit">
      <br>
      <h1 class="text-center" style="color:goldenrod;">회원정보수정</h1>

      <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 profile-form">
            <br>
              <form @submit.prevent="update(credentials)" >
                <div class="form-group" style="color:">
                  <label for="email">이메일을 수정하세요.</label>
                  <br>
                  <input v-model="credentials.email" type="text" id="email" class="form-control" :placeholder="this.currentUser.email" required />
                </div>
                <br>
                
                <br>
                <button class="profile-back">
                    <router-link style="text-decoration:none; color: #26382B;" :to="{ name: 'profile' }">수정 취소</router-link>
                </button>  
                          
                <span>
                  <button class="profile-button submit">완료</button> 
                </span> 
              </form>

              <br>
              <br>
          </div>
      </div>
    </div>
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

.profile-edit{
  border-style: solid;
  /* background-color: goldenrod; */
  border-color: goldenrod;
  border-radius: 20px;
}

.profile-form{
  color: blanchedalmond;
}

.profile-button {
	background-color:#daa520;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:16px;
	padding:7px 20px;
	text-decoration:none;
}

.profile-button:hover {
	background-color: darkolivegreen;
}

.profile-back {
  background-color:blanchedalmond;
	border-radius:20px;
	display:inline-block;
	/* cursor:pointer; */
	color:#ffffff;
	font-size:16px;
	padding:7px 20px;
	text-decoration:none;
}

</style>