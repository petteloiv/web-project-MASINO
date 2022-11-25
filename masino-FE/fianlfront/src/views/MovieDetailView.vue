<template>
<!-- Page Content -->
<div>
<navbar-item></navbar-item>
<div class="container movie-detail-border">
  <div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-5">
          <br>
					<img class="img-fluid movie-detail-poster" :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="">
				</div>
				<div class="col-md-7 movie-detail-contents">
          <br>
          <br>
					<h1 class="text-center">
						{{ movie.title }}
					</h1>
          <br>
          <!-- <hr style="height:4px; color:goldenrod;"> -->
            <dl>
              <dt style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">
                장르
                <span v-for="genre in movie.genre_ids" :key="genre.pk">
                <span style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">{{genre.name}} </span>
                </span>
              </dt>
              <dt style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">
                평점
                <span style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">{{movie.vote_average}} </span>
              </dt>
              <dt style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">
                개봉일
                <span style="font-family: 'GowunDodum-Regular';font-size:1.5rem;">{{movie.release_date}}</span>
              </dt>
            </dl>
            <br>
            <div class="row" style="justify-content: center;">
              <div class="col-md-1">
              </div>
              <div class="col-md-9">
                <p style="font-family: 'GowunDodum-Regular';">
                  {{movie.overview}}
                </p>
              </div>
              <div class="col-md-1">
              </div>
            </div>
				</div>
			</div>

      <br>
      <div>
        <div class="row">
          <div class="col-md-12">
            <br>
            <p style="text-align: center; color: goldenrod; font-size:2rem;" >스틸컷</p>
            <img style="border-radius: 10px;" class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="">
            <br>
            <br>
          </div>
        </div>
      </div>
      <br>

		</div>
	</div>
</div>
</div>
<br>
<br>
</div>
  
  
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

.movie-detail-border{
  border-style: solid;
  border-color: goldenrod;
  border-radius: 30px;
}

.movie-detail-poster {
  border-radius: 7px;
}

.movie-detail-contents dl {
  vertical-align: middle;
}

.movie-detail-contents h1 {
  color: goldenrod;
  font-size: 3rem;
}

.movie-detail-contents p {
  color: blanchedalmond;
  font-size: 1.2rem;
}

.movie-detail-contents dt {
  color: goldenrod;
  font-size: 2rem;
  text-align: center;
}

.movie-detail-contents span {
  color: blanchedalmond;
  font-size: 2rem;
  text-align: center;
}
</style>