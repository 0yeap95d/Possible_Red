<template>
  <div>
      <header>
          <h2 style="color:#2f3b52; font-weight:400; margin:2.5rem 0 1.5rem; text-align:center" class="lucky">Comments</h2>
      </header>
      <!--기존에 있는 댓글 보여주게하기 -->
      <CommentInput @addComment="addComment" />
      <!-- <CommentList class="foot" :comment-list="commentLists" @removeComment="removeComment" /> -->
      <CommentList class="foot" :comments="commentLists" />
      
  </div>
</template>

<script>
import CommentList from '../../components/comment/CommentList.vue'
import CommentInput from '../../components/comment/CommentInput.vue'
import CommentApi from '../../api/CommentApi.js';

export default {
    name:'PostComment',
    props: {
      commentLists : Array,
      postNo: Number,
    },
    components:{
        CommentList,
        CommentInput,
    },
    data(){
        return{
          comments:{
            commentContent: "",
            memberNo: 0,
            postNo: 0,
          },
          user: {
              email: "",
              memberNo: 0,
              memberPhoto: "",
              nickname: "",
              point: 0,
              pwd: "",
              stateMent: ""
          },
        }
    },
    methods:{
      addComment(comment){
        console.log("댓글내용: " + comment)
        this.comments.commentContent = comment
        this.comments.memberNo = this.user.memberNo
        this.comments.postNo = this.postNo
        CommentApi.requestAddComment(
          this.comments,
          (res)=>{
            console.log("add 했다:" + res)
          },
          (error)=>{
            console.log("에러남:" + error)
          }
        )
      },
    },
    created(){
      this.user = this.$session.get('user');
      if (localStorage.length>0){
          for (var i=0; i<localStorage.length;i++){
              this.comments.push(localStorage.key(i));
          }
      }
    },
}
</script>

<style scoped>
body{
    text-align:center;
    background-color:#F6F6F8;
}
input{
    border-style:groove;
    width:200px;
}
button{
    border-style:groove;
}
.shadow{
    box-shadow:5px 10px 10px rgba(0,0,0,0.03)
}
.lucky{
    font-family: 'Luckiest Guy', cursive ;
}
.foot{
    margin-bottom:5rem;
}
</style>