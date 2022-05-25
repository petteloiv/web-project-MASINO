<template>
<!-- Page Content -->
<div>
<navbar-item></navbar-item>
  <div class="container ">

      <!-- Portfolio Item Heading -->
      <h1 class="my-4">{{ movie.title }}</h1>
    
      <!-- Portfolio Item Row -->
      <div class="row">
    
        <div class="col-md-8">
          <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="">
        </div>
    
        <div class="col-md-4">
          <h3 class="my-3">{{movie.title}}이 궁금하신가요?</h3>
          <p>{{ movie.overview }}</p>
          <h3 class="my-3">기타 정보</h3>
          <p> 장르 : 
            <span v-for="genre in movie.genre_ids" :key="genre.pk">
              <span>{{genre.name}} </span>
            </span></p>
          <p> 평점 : {{movie.vote_average}}</p>
          <p> 개봉일 : {{movie.release_date}}</p>
          
        </div>
    
      </div>

      <h3 class="my-4">영화 사진</h3>
    
      <div class="row">
    
        <div class="col">
          <a href="#">
            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="">
          </a>
        </div>
    
      </div>
      <!-- /.row -->
    
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavbarItem from '@/components/Common/NavbarItem.vue'

export default {
  name: 'MovieDetailView',
  components:{
    NavbarItem
  },
  data(){
    return {
      moviePk : this.$route.params.moviePk,
    }
  },
  computed: {
    ...mapGetters(['movie'])

  }, 
  methods: {
    ...mapActions(['fetchMovie'])
  },
  created() {
    this.fetchMovie(this.moviePk)
  }
}
</script>

<style>

</style>