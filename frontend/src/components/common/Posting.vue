<template>
  <div>
      <div class="instabox">
        <div class="pictures">
          <img src="https://picsum.photos/200" alt="">
        </div>
        <br>
        <p>Misson Title</p>
        <p>Content</p>
        <p>Hashtag</p>
        <div>
          <h4 @click="good" v-show="like"><i class="fas fa-heart" style="color:crimson;"></i></h4>
          <h4 @click="good" v-show="!like"><i class="fas fa-heart" style="color:palegoldenrod;"></i></h4>
          <p style="text-align:right">좋아요 : 30</p>
        </div>
        <p>댓글 : 3</p>
        <button @click="comment" class="morecomment">댓글 더보기</button>
        <p>작성자 : 해똘뜨</p>
        <p>작성일 : Date</p>
        <hr>
      </div>

  </div>
</template>

<script>
export default {
    name:'post',
    data(){
      return{
        like:false,
      }
    },
    methods:{
      good(){
        this.like=!this.like
      },
      comment(){
          this.$router.push('/Comments')
      }
    }
}
</script>

<style>
  .instabox{
    margin-left:10%;
    margin-right:10%;
    margin-top:10%;
    margin-bottom:10%;
  }
  .morecomment{
      background-color:black;
      color:white;
  }
</style>