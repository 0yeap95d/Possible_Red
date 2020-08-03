<template>
  <div>
      <Navbar />
      <h1>댓글 창</h1>
      <button class="createcomment">댓글 생성</button>
      <Comment />
      <Comment />
      <Comment />
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar.vue'
import Comment from '../../components/common/Comment.vue'

export default {
    name:'Comments',
    components:{
        Navbar,
        Comment
    }
}
</script>

<style>
.createcomment{
    background-color:black;
    color:white;
}
</style>