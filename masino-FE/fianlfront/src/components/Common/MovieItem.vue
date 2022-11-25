<template>
    <div class="col-3 movie-item" style="width: 300px">
      <div class="movie-card" style="height: 300px">
        <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
        <!-- <a :href="`/movie/${movie.pk}`"> -->
          <img class="img" style="border-radius: 7px;" :src='`http://image.tmdb.org/t/p/original${movie.poster_path}`' alt="movieposter">
          <div class="inner-content">
            <span>{{ movie.title }}</span>
          </div>
        </router-link>
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

.movie-item{
  /* width: 250px; */
  height: 400px;
  display: flex;
  justify-content: center;
}

.movie-card {
  position: relative;
  background: linear-gradient(180deg, goldenrod 0%, goldenrod 100%);
  width: 13rem;
  overflow: cover;
  box-shadow: 15px 15px 25px black;
}
.movie-card img {
  width: 100%;
  height: auto;
  transform: scale(1.1);
  transition: all 0.25s linear;
}
.movie-card:hover img {
  opacity: 0.2;
  /* transform: scale(1.25); */
}
.movie-card .inner-content {
  width: 80%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 80%;
  left: 50%;
  transition: all 600ms ease;
  color: white;
  font-size: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.movie-card:hover .inner-content {
  opacity: 1;
  top: 50%;
  text-align: center;
}
.movie-card .inner-content .title {
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
}

</style>