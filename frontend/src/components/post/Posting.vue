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
          <p style="text-align:right">좋아요 : {{this.likeCnt}}</p>
        </div>
        <p>댓글 : 3</p>
        <v-btn class="mx-2" fab dark color="indigo" @click="postdetail(lists.postNo)">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <p>작성자 : {{this.writer.nickname}}</p>
        <p>작성일 : {{this.lists.postDate}}</p>
        <hr>
      </div>
  </div>
</template>

<script>

import UserApi from '../../api/UserApi'
import LikeApi from '../../api/LikeApi'

export default {
    name:'Posting',
    props: {
      lists:Array,
    },
    created() {
      // 사용자 정보 불러오기
      this.user = this.$session.get('user');

      // 작성자 정보 불러오기
      UserApi.requestMemberByNo(
        this.lists.memberNo,
        (res) => { this.writer = res.data; },
        (error) => { console.log("Posting Error") }
      ),

      // 좋아요 개수 
      LikeApi.requestLikeList(
        this.lists.postNo,
        (res) => { this.likeCnt = res.data.length },
        (error) => { console.log("Posting Error"); }
      )
    },

    mounted() {
      // LikeApi에 보낼 params 설정
      this.likeData.memberNo = this.user.memberNo;
      this.likeData.postNo = this.lists.postNo;

      // 좋아요 유무에 따라 버튼 활성/비활성
      LikeApi.requestIsLike(
        this.likeData,
        (res) => { 
          if (res.status == 200) this.like = true;
          else this.like = false;
        },
        (error) => { console.log(error) },
      )
    },

    data(){
      return{
        like: false,
        likeCnt: 0,
        writer: Object,
        user: Object,
        likeInfo: Array,
        likeData: {
          memberNo: 0,
          postNo: 0,
        }
      }
    },

    methods:{
      good(){
        // 사용자 반응을 우선시하기 때문에 프론트 변화 후 백엔드 통신
        // 통신에 실패했을때 원래 상태로 돌아와야함
        this.like = !this.like
        
        if (this.like) {  // like 삽입
          LikeApi.requestAddLike(
            this.likeData,
            (res) => { this.likeCnt++ },
            (error) => { this.like = !this.like }
          )
        } else {  // like 삭제
          LikeApi.requestRemoveLike(
            this.likeData,
            (res) => { this.likeCnt-- },
            (error) => { this.like = !this.like }
          )
        }
      },
      
      postdetail(num){
        this.$router.push({
          name: "PostDetail",
          params: {
            num: num,
          }
        })
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