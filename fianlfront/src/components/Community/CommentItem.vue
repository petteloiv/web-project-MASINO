<template>
  <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    
    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button> |
      <button @click="switchIsEditing">Cancel</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteComment(payload)">Delete</button> |
      <button @click="likeComment(payload)">{{ comment.like_count }}</button> 

    </span>
  </li>

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

</style>