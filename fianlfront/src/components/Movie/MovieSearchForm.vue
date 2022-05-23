<template>
  <form @submit.prevent="onSearch">
    <label>영화를 검색하세요</label>
    <br>
    <input class="border-black" v-model="keyword" placeholder="영화 제목을 입력하세요.">
    <span>
      <button>검색</button>
    </span>
  </form>
</template>

<script>
// import MovieResultList from '@/components/Movie/MovieResultList.vue'
import {  mapActions } from 'vuex'

export default {
  name: 'MovieSearchForm',
  // components: { MovieResultList },
  data() {
    return {
      keyword: "",
    }
  },
  // computed:{
  //   ...mapGetters(['keyword']),
  // },
  methods:{
    ...mapActions(['searchResult']),
    onSearch(){
      this.searchResult(this.keyword)
      // this.keyword = ''
    },
  }

}
</script>

<style>

</style>