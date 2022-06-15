<template>

<!-- <div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Third flex item</div>
</div> -->


<div class="container p-0">

  <li class="comment-list-item">
    <div class="d-flex bd-highlight">

      <div class="p-2 flex-grow-1 bd-highlight" >
        <router-link class="mx-3 align-items: center;" style="text-decoration:none; color: goldenrod;" :to="{ name: 'anotherProfile', params: { username: comment.user.username} }">
          <span class="comment"> {{ comment.user.username }}  </span>
        </router-link>
        <span v-if="!isEditing" class="comment align-items: center;">{{ payload.content }}</span>
        <hr>
      </div>

      <div class="p-2 bd-highlight">
        <button class="heart-btn align-items: center; mt-1.6" @click="likeComment(payload)">👍{{ comment.like_count }}</button> 
      </div>

      <hr>
      <div class="p-2 bd-highlight">
        <span v-if="isEditing">
          <input type="text" v-model="payload.content">
          <button class="comment-edit mx-2" @click="onUpdate">완료</button>
          <button class="comment-del" @click="switchIsEditing">취소</button>
        </span>

        <span v-if="currentUser.username === comment.user.username && !isEditing">
          <button class="comment-edit mx-2" @click="switchIsEditing">수정</button> 
          <button class="comment-del" @click="deleteComment(payload)">삭제</button>
          <!-- <button class="heart-btn" @click="likeComment(payload)">👍{{ comment.like_count }}</button>  -->
        </span>        
      </div>


    </div>
    

  </li>

</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "CommentItem",
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        // articlePk가 comment 안에 없어서 여기서 못뽑음 .. 
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser','article']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment','likeComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },



}
</script>

<style>

.comment{
  font-size:1.2rem;
}

.comment-list-item{
  list-style-type: none;
  color: whitesmoke
}
.heart-btn{
  border: none;
	background-color:#26382b;
	border-radius:42px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:1.3rem;
	padding:0px 0px;
	text-decoration:none;
}
.comment-edit {
  border: none;
	background-color: goldenrod;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:12px;
	padding:6px 20px;
	text-decoration:none;
}
.comment-edit:hover {
  border: none;
	background-color:#bec77a;
}

.comment-del {
  border: none;
	background-color:#676b51;
	border-radius:20px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:12px;
	padding:6px 20px;
	text-decoration:none;
}
.comment-del:hover {
  border: none;
	background-color:#bec77a;
}

</style>