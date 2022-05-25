<template>

  <form class="comment-form" @submit.prevent="onSubmit">
    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
      <div class="input-group">
        <label class="m-1 p-1 ms-2" style="border-radius: 15px;" for="comment"> 📝 </label>
        <input  style="border-radius: 15px;" type="text" id="comment"
         v-model="content" placeholder="댓글을 남겨주세요." required 
         aria-describedby="button-addon1" class="form-control border-0 bg-light">
        <div class="input-group-append">
          <button id="button-addon1" type="submit" class="btn btn-link text-primary">✔</button>
        </div>
      </div>
    </div>
  </form>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "CommentForm",
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ articlePk: this.article.id, content: this.content, })
      this.content = ''
    }
  }

}
</script>

<style>
.comment-form{
  position: relative;
}

</style>