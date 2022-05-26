<template>
  <div>
    <!-- <div v-if="isLoggedIn">
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>로그아웃 되었습니다!</strong> 다시 방문하시기를 기다리겠습니다. 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>잘못된 접근입니다.</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import swal from 'sweetalert';

  export default {
    methods: {
      ...mapActions(['logout']),

    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    mounted() {
      if (this.isLoggedIn) {
        // swal("다시 방문하시기를 기다리겠습니다 -MASINO-", {
        //   title: "로그아웃 완료",
        //   icon: "success",
        //   buttons: false,
        //   timer: 2000,
        // })
        // swal({
        //   title: "로그아웃 되셨습니다!",
        //   text: "다시 방문하시기를 기다리겠습니다 -MASINO-",
        //   icon: "success",
        //   customClass: swal-size-sm,
        // })
        this.logout()
      } else {
        swal("이전 페이지로 돌아갑니다.", {
          title: "잘못된 접근입니다!",
          icon: "warning",
          buttons: false,
          timer: 1000,
        })
        this.$router.back()
      }
    }
  }
</script>

<style>

</style>