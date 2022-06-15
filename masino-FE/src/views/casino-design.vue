<template>
  
  <div class="container-fluid">
    <navbar-item></navbar-item>
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center">
          CASINO에 오신 것을 환영합니다.
        </h3>
        <div class="row">
          <!-- 영화 퀴즈 -->
          <div class="col-md-3">
            <div class="jumbotron">
              <h2>
                영화 맞추기
              </h2>
              <p>
                1,000 포인트를 내고 참여할 수 있는 영화 맞추기입니다. 
                정답을 맞추시면 10배의 상금 포인트를 드립니다! 
              </p>
              <p>
                <b-button 
                v-b-modal.modal-quiz
                variant="primary"
                @click="[fetchQuiz(), putQuiz(), pickAnswer(), notificate('1000 포인트를 사용하여 퀴즈를 시작합니다!')]">
                    지금 참여하기
                </b-button>
                <b-modal id="modal-quiz" hide-footer hide-header size="xl" title="QUIZ">
                <img class="quiz-img" :src="`http://image.tmdb.org/t/p/original/${this.pickedAnswer.backdrop_path}`">
                <div
                v-for="quiz in quizs" :key="quiz.pk">
                  <div v-if="quiz.pk === pickedAnswer.pk">
                    <b-button class="mt-3" variant="outline-danger" block @click="[fetchRaisePoint(), $bvModal.hide('modal-quiz'), notificate('정답입니다! 10000포인트 추가!')]">
                      {{ quiz.title }}
                    </b-button>
                  </div>
                  <div v-else>
                    <b-button  class="mt-3" variant="outline-danger" block @click="[$bvModal.hide('modal-quiz'), notificate('오답ㅠㅠ')]">
                      {{ quiz.title }}
                    </b-button>
                  </div>
                </div>
                </b-modal>                
              </p>
            </div>
          </div>

          
          <!-- 프로필 배경 뽑기 -->
          <div class="col-md-3">
            <div class="jumbotron">
              <h2>
                배경 가챠
              </h2>
              <p>
                1,000 포인트를 내고 프로필 배경화면을 뽑을 수 있습니다. 
                원하는 영화가 나올 때까지 도전해보세요. 
              </p>
              <p>
                <b-button 
                v-b-modal.modal-back
                variant="success"
                @click="[fetchBack(), pickBack(), notificate('1000 포인트를 사용하여 배경화면을 뽑았습니다!')]">
                    BACK GACHA
                </b-button>
                <b-modal id="modal-back" hide-footer hide-header size="xl" title="BACKGACHA">
                <img :src="`http://image.tmdb.org/t/p/original/${this.pickedBack.backdrop_path}`">
                  <p>
                    {{ pickedBack.title }}
                  </p>
                  <b-button class="mt-3" variant="primary" block @click="[fetchStoreBack(pickedBack.pk), $bvModal.hide('modal-back'), notificate('프로필 배경사진이 바뀌었어요!')]">
                      내 프로필 배경 바꾸기
                  </b-button>
                  <b-button class="mt-3" variant="danger" block @click="[$bvModal.hide('modal-back'), notificate('이걸 버리네!')]">
                      갖다 버리기
                  </b-button>
                </b-modal>                                
              </p>
            </div>
          </div>
          
          <!-- 카드 단챠 -->
          <div class="col-md-3">
            <div class="jumbotron">
              <h2>
                영화배우 카드 뽑기
              </h2>
              <p>
                1,000 포인트를 내고 한 장의 영화배우 카드를 뽑을 수 있습니다.
                세부 확률 : Platinum Gold Silver Bronze 
                 
              </p>
              <p>
                <b-button 
                v-b-modal.modal-card
                variant="warning"
                @click="[fetchCard(), pickCard(), fetchStoreCard(pickedCard.pk), notificate('1000포인트를 사용하여 카드 1장을 뽑았습니다!')]">
                    1회 뽑기
                </b-button>
                <b-modal id="modal-card" hide-footer hide-header size="sm" title="CARDGACHA">
                  <div style="border-radius: 10px;" class="card casino-card" :class="{'platinum': pickedCard.popularity >= 40, 'gold': pickedCard.popularity < 40, 'silver': pickedCard.popularity < 21, 'bronze': pickedCard.popularity < 14}">
                    <div class="card-header">
                        </div>
                        <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${pickedCard.profile_path}`">
                        <div class="card-body casino-card-body">
                          <div style="vertical-align: middle;" class="card-title">{{ pickedCard.name }}</div>
                        </div>
                  </div>
                </b-modal>                                
              </p>
            </div>
          </div>

          <!-- 카드 10회 -->
          <div class="col-md-3">
            <div class="jumbotron">
              <h2>
                영화배우 카드 뽑기
              </h2>
              <p>
                10,000 포인트를 내고 한 장의 영화배우 카드를 뽑을 수 있습니다.
                세부 확률 : Platinum Gold Silver Bronze 
                 
              </p>
              <p>
                <b-button 
                v-b-modal.modal-card-ten
                variant="danger"
                @click="[fetchCards(), pickCards(), fetchStoreCard(pickedCards[0].pk), fetchStoreCard(pickedCards[1].pk), fetchStoreCard(pickedCards[2].pk), fetchStoreCard(pickedCards[3].pk), fetchStoreCard(pickedCards[4].pk), fetchStoreCard(pickedCards[5].pk), fetchStoreCard(pickedCards[6].pk), fetchStoreCard(pickedCards[7].pk), fetchStoreCard(pickedCards[8].pk), fetchStoreCard(pickedCards[9].pk), fetchStoreCard(pickedCards[10].pk),fetchStoreCard(pickedCards[11].pk),notificate('10000포인트를 사용하여 카드 12장을 뽑았습니다!')]">
                    12회 뽑기
                </b-button>
                <b-modal id="modal-card-ten" hide-footer hide-header size="lg" title="CARDGACHATEN">
                  <div class="card-deck container">
                    <div class="row">
                      <div style="border-radius: 10px;" class="card casino-card col-3 p-12" :class="{'platinum': card.popularity >= 40, 'gold': card.popularity < 40, 'silver': card.popularity < 21, 'bronze': card.popularity < 14}" v-for="card in pickedCards" :key="card.pk">
                        <div class="card-header">
                        </div>
                        <img class="casino-card-img" :src="`http://image.tmdb.org/t/p/original/${card.profile_path}`">
                        <div class="card-body casino-card-body">
                          <div style="vertical-align: middle;" class="card-title">{{ card.name }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-modal>                               
              </p>
            </div>
          </div>          
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>