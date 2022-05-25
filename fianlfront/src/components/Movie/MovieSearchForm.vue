<template>

<div>
  <form @submit.prevent="onSearch">
    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
      <div class="input-group">
        <input  style="border-radius: 70%;" v-model="keyword" placeholder="무슨 영화를 찾고 계세요?" type="search" aria-describedby="button-addon1" class="form-control border-0 bg-light">
        <div class="input-group-append">
          <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>
  </form>  
</div>

  <!-- <div class="input-group rounded" >

    
    <form @submit.prevent="onSearch">
      <input v-model="keyword" placeholder="영화 제목을 입력하세요." type="search" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" />
      <span class="input-group-text border-0" id="search-addon">
        <button>🔍</button>
      </span>
    </form>
  </div> -->

  <!-- <form @submit.prevent="onSearch">
    <label>영화를 검색하세요</label>
    <br>
    <input class="border-black" v-model="keyword" placeholder="영화 제목을 입력하세요.">
    <span>
      <button>검색</button>
    </span>
  </form> -->
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

.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}

</style>