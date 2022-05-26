<template>



<div class="container m-2">

  <li class="comment-list-item">
    <router-link style="text-decoration:none; color: goldenrod;" :to="{ name: 'anotherProfile', params: { username: comment.user.username} }">
      <span class="comment"> {{ comment.user.username }}  </span>
    </router-link>
    <!-- <span class="comment"> {{ comment.user.username }} :</span> -->
    
    <span v-if="!isEditing" class="comment">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button class="comment-edit" @click="onUpdate">완료</button> |
      <button class="comment-del" @click="switchIsEditing">취소</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button class="comment-edit" @click="switchIsEditing">수정</button> |
      <button class="comment-del" @click="deleteComment(payload)">삭제</button> |
      <!-- <button class="heart-btn" @click="likeComment(payload)">👍{{ comment.like_count }}</button>  -->
    </span>

    <span>
      <button class="heart-btn" @click="likeComment(payload)">👍{{ comment.like_count }}</button> 
    </span>
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
  list-style-type: decimal;
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