<template>
  <div>
      <div class="instabox">
        <div class="pictures">
          <img src="https://picsum.photos/200" alt="">
        </div>
        <br>
        <p>Misson Title</p>
        <p>{{this.lists.postContent}}</p>
        <p>Hashtag</p>
        <div>
          <h4 @click="good" v-show="like"><i class="fas fa-heart" style="color:crimson;"></i></h4>
          <h4 @click="good" v-show="!like"><i class="fas fa-heart" style="color:palegoldenrod;"></i></h4>
          <p style="text-align:right">좋아요 : 30</p>
        </div>
        <p>댓글 : 3</p>
        <v-btn class="mx-2" fab dark color="indigo" @click="postdetail">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <p>작성자 : </p>
        <p>작성일 : {{this.lists.postDate}}</p>
        <hr>
      </div>
  </div>
</template>

<script>

export default {
    name:'post',
    props: {
      lists:Array,
    },
    data(){
      return{
        like:false,
      }
    },
    methods:{
      good(){
        this.like=!this.like
        console.log(this.posts)
      },
      
      postdetail(){
        this.$router.push('/PostDetail')
      },
    },
    components:{
    },
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