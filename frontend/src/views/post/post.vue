<template>
  <div>
      <Navbar />
      <br>
      <br>
      <div class="instabox">
        <div class="pictures">
          <img src="https://picsum.photos/200" alt="">
        </div>
        <br>
        <p>Misson Title</p>
        <p>Content</p>
        <p>Hashtag</p>
        <p style="text-align:right">좋아요 : 30</p>
        <p>댓글 : 3</p>
        <p>작성자 : 해똘뜨</p>
        <p>작성일 : Date</p>
      </div>

  </div>
</template>

<script>
import Navbar from '../../components/common/navbar.vue'

export default {
    name:'post',
    components:{
      Navbar,
    }
}
</script>

<style>
  .instabox{
    margin-left:10%;
    margin-right:10%;
  }
  .pictures{
    
  }
</style>