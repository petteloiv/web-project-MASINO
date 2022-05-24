<template>
  <div class="card-deck container">
        <div class="row">
          <div class="casino-card col-3 p-12" :class="{'platinum': person.popularity >= 40, 'gold': person.popularity < 40, 'silver': person.popularity < 21, 'bronze': person.popularity < 14}">
            <div class="card-header">
            </div>
            <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${person.profile_path}`">
            <div class="casino-card-body">
              <h5 class="card-title">{{ person.name }}</h5>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'CardItem',
  props:{
    person:Object,
  },

}
</script>

<style>
  .casino-card-body {
    width: 165.5px;
    height: 100px;
    padding: 1px;
  }

  .casino-card {
    height: 350px;
    width: 150px;
  }

  .casino-card-img{
    height: 100%;
    width: 100%;
  }

  .platinum {
    background: rgb(248,255,160);
    background: linear-gradient(0deg, rgba(248,255,160,1) 0%, rgba(181,251,255,1) 19%, rgba(255,158,253,1) 80%, rgba(253,255,199,1) 100%);
  }
  .gold {
    background: rgb(249,242,149);
    background: linear-gradient(0deg, rgba(249,242,149,1) 0%, rgba(224,170,62,1) 23%, rgba(249,242,149,1) 79%, rgba(184,138,68,1) 100%);
  }
  .silver {
    background: rgb(232,232,232);
    background: linear-gradient(0deg, rgba(232,232,232,1) 0%, rgba(175,175,175,1) 23%, rgba(236,236,236,1) 79%, rgba(159,159,159,1) 100%);
  }
  .bronze {
    background: rgb(255,220,180);
    background: linear-gradient(0deg, rgba(255,220,180,1) 0%, rgba(120,61,12,1) 23%, rgba(255,222,161,1) 79%, rgba(120,61,12,1) 100%);
  }
</style>