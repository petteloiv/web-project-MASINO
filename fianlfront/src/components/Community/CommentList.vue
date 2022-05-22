<template>
  <div>
    <ul>
      <comment-item 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.pk">
      </comment-item>

      <comment-form></comment-form>        
    </ul>



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

</style>