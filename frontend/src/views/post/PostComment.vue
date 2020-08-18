<template>
  <div>
      <header>
          <h2 style="color:#2f3b52; font-weight:400; margin:2.5rem 0 1.5rem; text-align:center" class="lucky">Comments</h2>
      </header>
      <!--기존에 있는 댓글 보여주게하기 -->
      <CommentInput @addComment="addComment" />
      <!-- <CommentList class="foot" :comment-list="commentLists" @removeComment="removeComment" /> -->
      <CommentList class="foot" :comments="commentLists" />
      <!-- <p v-for="comment in commentLists" :key="comment.commentNo">{{comment.commentContent}}</p> -->
      
  </div>
</template>

<script>
import CommentList from '../../components/comment/CommentList.vue'
import CommentInput from '../../components/comment/CommentInput.vue'

export default {
    name:'PostComment',
    props: {
      commentLists : Array,
    },
    components:{
        CommentList,
        CommentInput,
    },
    data(){
        return{
            comments:[]
        }
    },
    methods:{
        addComment(comment){
            //로컬 스토리지에 데이터를 추가하는 로직
            localStorage.setItem(comment,comment);
            this.comments.push(comment);
        },
        clearAll(){
            localStorage.clear();
            this.comments=[];
        },
        // removeComment(comment, index){
        //     console.log(comment, index)
        //     localStorage.removeItem(comment);
        //     this.comments.splice(index,1);
    
        // },
    },
    created(){
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