<template>
  <div>
    <ul class="comment-list p-0">
      <comment-item 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.pk">
      </comment-item>
      <br>     
    </ul>

    <comment-form></comment-form>   



  </div>
</template>

<script>
import CommentItem from '@/components/Community/CommentItem.vue'
import CommentForm from '@/components/Community/CommentForm.vue'



export default {
  name: "CommentList",
  components: { 
    CommentItem,
    CommentForm
  },
  props: {
    comments : Array
  }
}
</script>

<style>
.comment-list{
  line-height: 1em;
  /* float: left; */
}
</style>