<template>
  <div>
    <br><br><br><br><br>
    <div class="d-flex justify-content-center">
      <br><br>
      <span style="color:white;font-size:10rem;">4</span><img class="mt-100" style="height:10rem;vertical-align:middle; " src="@/images/chip.png" alt="">
      <span style="color:white;font-size:10rem;">4</span><p class="text-center" style="color:white;font-size:5rem;vertical-align: middle; }">ERROR</p>
    </div>
    

    <div class="text-center" style="color:white;font-size:1.5rem;">
      <p style="font-family: 'GowunDodum-Regular';">찾을 수 없는 페이지 입니다.</p>
      <p style="font-family: 'GowunDodum-Regular';"> 요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다.</p>
    </div>

    <div class="text-center">
      <a href="#" class="btn btn-xs ">
        <router-link style="text-decoration:none;font-size:1.5rem;>" class="link-update" :to="{ name: 'main' }">> 메인으로 돌아가기</router-link>
      </a>
    </div>
    <!-- <div class="text-center" style="color:white;font-size:2rem;">
      <a @click="$router.go(-1)">돌아가기</a>
    </div>
     -->
  <br><br><br><br><br><br>

  </div>
</template>

<script>
export default {
  name: "NotFound404",
}
</script>

<style>

</style>