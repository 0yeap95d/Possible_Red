<template>
  <div>
      <div class="instabox">
        <div class="pictures">
          <img src="https://picsum.photos/200" alt="">
        </div>
        <br>
        <p>Misson Title</p>
        <p>{{this.posts.postContent}}</p>
        <p>Hashtag</p>
        <div>
          <h4 @click="good" v-show="like"><i class="fas fa-heart" style="color:crimson;"></i></h4>
          <h4 @click="good" v-show="!like"><i class="fas fa-heart" style="color:palegoldenrod;"></i></h4>
          <p style="text-align:right">좋아요 : 30</p>
        </div>
        <p>댓글 : 3</p>
        <button @click="comment" class="morecomment">댓글 더보기</button>
        <p>작성자 : </p>
        <p>작성일 : {{this.posts.postDate}}</p>
        <hr>
      </div>
    <!-- <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>   -->
  </div>
</template>

<script>
// import InfiniteLoading from 'vue-infinite-loading'

export default {
    name:'post',
    props: {
      posts:Array,
    },
    data(){
      return{
        like:false,
        // limit:0,
      }
    },
    methods:{
      good(){
        this.like=!this.like
        console.log(this.posts)
      },
      comment(){
          this.$router.push('/Comments')
      },
      // infiniteHandler($state){
      //   this.$http.get("http://localhost:8080/sns201/post/all"+(this.limit+10)) //api에 url삽입
      //     .then(response=>{
      //       setTimeout(()=>{ //스크롤을 페이징을 띄우기 위한 시간 지연(1초)
      //         if(response.data.length){
      //           this.users=this.users.concat(response.data);
      //           $state.loaded(); //데이터 로딩
      //           this.limit +=10
      //           if(this.users.length/10==0){
      //             $state.complete(); //데이터가 없으면 로딩 끝
      //           }
      //         } else{
      //           $state.complete();
      //         }
      //       },1000)
          
      //   }).catch(error => {
      //     console.error(error);
      //   })
      // }
    },
    components:{
      // InfiniteLoading,
    },
    // created(){
    //   this.$http.get("http://localhost:8080/sns201/post/all"+this.limit)
    //     .then((response)=>{
    //       this.users=response.data
    //     })
    // }
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