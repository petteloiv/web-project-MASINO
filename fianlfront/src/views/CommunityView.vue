<template>
  <div class="community-bg">
    <navbar-item></navbar-item>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="page-header">
            <h1>
              MASINO 게시판
            </h1>
            <p>
              영화와 가챠를 좋아하는 사람들이 모인 MASINO에서 이야기를 나눠보세요!
            </p>
            <p>
              <router-link 
                style="text-decoration:none; color:blanchedalmond;"
              :to="{ name: 'articleCreate' }">글 작성하기 »</router-link>
            </p>
          </div>

          <div class="community">
            <table class="table table-hover table-striped">
              <thead>
                <tr style="color:whitesmoke">
                  <th>
                    #
                  </th>
                  <th>
                    제목
                  </th>
                  <th>
                    작성자
                  </th>
                  <th>
                    공감
                  </th>
                </tr>
              </thead>
              <tbody>
                
                <tr class="highlight" v-for="(article, index) in articles" :key="article.pk">
                  <!-- 글 pk -->
                  <td style="color:whitesmoke" >{{ index + 1}}</td>

                  <!-- 글 제목 -->
                  <td >
                    <router-link style="text-decoration:none; color: goldenrod;" :to="{ name: 'articleDetail', params: { articlePk: article.id } }">
                      {{ article.title }}
                    </router-link>
                  </td>

                  <!-- 작성자 -->
                  <td style="color:whitesmoke">
                    {{article.user.username}}
                  </td>

                  <!-- 좋아요 개수 -->
                  <td style="color:whitesmoke">
                    ❤ {{ article.like_count }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import NavbarItem from '@/components/Common/NavbarItem.vue'

export default {
  name: 'CommunityView',
  components:{
    NavbarItem
  },
  computed: {
      ...mapGetters(['articles'])
    },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  },
}
</script>

<style>


.page-header{
  color: white;
}

.community {
  border-style: solid;
  /* border-color: goldenrod; */
  border-radius: 20px;
  background-color: #4c5f51; 
}
</style>