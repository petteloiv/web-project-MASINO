<template>
  <div>

    <div class="card-deck container">
      <div class="row" style="justify-content: normal;">


        <div style="border-radius: 10px;" v-b-modal.modal-card @click="[storePerson(card)]" class="card profile-card col-2 m-3 mx-3.5" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in paginatedData" :key="card.pk">
          <div class="card-header">
          </div>
          <img  style="border-radius: 10px;" class="profile-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
          <div class="card-body profile-card-body" style="text-align: center;">
            <div style="vertical-align: middle;" class="card-title">{{ card.name }}</div>

          </div>
        </div>

        <b-modal id="modal-card" hide-footer hide-header size="lg" title="BACKGACHA" no-close-on-backdrop body-bg-variant="dark">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <div style="border-radius: 10px;" class="card modal-card" :class="{'platinum': personInfo.popularity >= 40, 'gold': personInfo.popularity < 40, 'silver': personInfo.popularity < 21, 'bronze': personInfo.popularity < 14}">
                  <img class="modal-card-img p-3" :src="`http://image.tmdb.org/t/p/original/${personInfo.profile_path}`">
                  <div class="card-body modal-card-body">
                    <div style="vertical-align: middle; text-align: center; font-size: 1.5rem;" class="card-title">{{ personInfo.name }}</div>
                  </div>
                  </div>
              </div>
              <div class="col-md-8 infoText text-align: center;">
                <h2 class="modal-card-text">
                  <span class='modal-card-title'>이름 : </span>{{ personInfo.name }}
                </h2>
                <h3 class="modal-card-text">
                  <span class='modal-card-title'>생일 : </span>{{ personInfo.birthday }}
                </h3>
                <h3 class="modal-card-text">
                  <span class='modal-card-title'>출생지 : </span>{{ personInfo.place_of_birth }}
                </h3>
                  <h3 class="modal-card-title">출연작</h3>
                <div class='modal-movie-list'>
                  <div class='modal-movie-list-box' v-for="movie in personInfo.movie_ids" :key="movie.pk">
                    <br>
                    <router-link class="modal-card-text-movie" style="text-decoration: none;"  :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
                      {{ movie.title }}
                    </router-link>
                    

                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          
          <div class="modal-button-box">
            <button class="mt-3 modal-stash-button" block @click="[$bvModal.hide('modal-card'),]">
                닫기
            </button>
            
          </div> 
        </b-modal>
          
      </div>
    </div>

    
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paginated-list',
  data () {
    return {
      pageNum: 0,
      personInfo: {}
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    },
    pageNumber: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    goFirstPage () {
      this.pageNum = 0
    },
    storePerson(a) {
      this.personInfo = a
    }
  },
  computed: {
    pageCount () {
      let listLeng = this.listArray.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
}
</script>

<style>

.card img {
  transition: all 0.25s linear;
}

.page-btn{
  margin: 3px;
  border: 0px;
  border-radius: 20px;
  background-color: #26382B;
  /* border-color: goldenrod; */
  color: goldenrod;
  font-size: 1.2rem;
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}

.profile-card {
  box-shadow: 15px 15px 25px black;
}

.modal-card-body {
    /* height: 70px;
    width: 165.5px; */
    text-align: center;
  }

  .modal-card {
    border-radius: 20px;
    box-shadow: 15px 15px 25px black;
  }

  .modal-card-img {
    border-radius: 30px;
  }

  .modal-card-title{
    color: goldenrod;
    text-align: center;
  }

  .modal-card-text {
    color: blanchedalmond;
    text-align: center;
  }

  .modal-movie-list{
    border-style: solid;
    border-color: goldenrod;
    border-radius: 30px;
    /* display: flex; */
    /* justify-content: center; */
  }

  .modal-movie-list-box{
    display: flex;
    justify-content: center;
  }

  .modal-card-text-movie {
    color: blanchedalmond;
    font-size: 20px;
    text-align: center;
  }

  .modal-button-box{
    justify-content: center;
    text-align: center;
  }

  .modal-stash-button{
    border-radius: 20px;
    background-color: #26382B;
    border-color: goldenrod;
    color: goldenrod;
    font-size: 1.2rem;
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