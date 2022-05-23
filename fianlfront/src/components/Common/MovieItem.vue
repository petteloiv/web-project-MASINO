<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" 
        :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" 
        alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><a :href="url" class="button">{{ movie.title }}</a></h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props:{
    movie:Object,
  },
  data(){
    return {
      url : '/movie/' + this.movie.pk
    }
    
  }

}
</script>

<style>

</style>