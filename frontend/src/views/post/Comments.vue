<template>
  <div>
      <Navbar />
      <header>
          <h1 style="color:#2f3b52; font-weight:900; margin:2.5rem 0 1.5rem; text-align:center">댓글 창</h1>
      </header>
      <!--기존에 있는 댓글 보여주게하기 -->
      <CommentInput v-on:addComment="addComment" />
      <CommentList v-bind:propsdata="comments" @removeComment="removeComment" />
      <CommentFooter v-on:removeAll="clearAll" />
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar.vue'
import CommentFooter from '../../components/common/comment/CommentFooter.vue'
import CommentList from '../../components/common/comment/CommentList.vue'
import CommentInput from '../../components/common/comment/CommentInput.vue'

export default {
    name:'Comments',
    components:{
        Navbar,
        CommentFooter,
        CommentList,
        CommentInput
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
        removeComment(comment, index){
            //console.log(comment, index)
            localStorage.removeItem(comment);
            this.comments.splice(index,1);
        },
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

<style>
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
</style>