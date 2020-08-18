<template>
  <div>
    <section>
      <transition-group name="list" tag="ul">
        <li v-for="comment in comments" :key="comment.commentNo" class="shadow jua">
          <i class="checkBtn fas fa-check" aria-hidden="true"></i>
          {{ comment.commentContent }}
          <span v-if="comment.memberNo==user.memberNo" class="removeBtn" type="button" @click="removeComment(comment.commentNo)">
              <i class="far fa-trash-alt" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
    </section>
  </div>
</template>

<script>
import CommentApi from "../../api/CommentApi"

export default {
    props:{
      comments: Array,
    },
    created() {
      this.user = this.$session.get('user');
    },
    methods:{
      removeComment(num){
        this.$emit('removeComment', num)
      },
    },
    data() {
      return {
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
}
</script>

<style scoped>
    ul{
        list-style-type:none;
        padding-left:0px;
        margin-top:0;
        text-align:left;
    }
    li{
        display:flex;
        min-height:50px;
        height:50px;
        list-style: 50px;
        margin:0.5rem 0;
        padding:0 0.9rem;
        background:white;
        border-radius:5px;
    }
    .checkBtn{
        line-height:45px;
        color:#62acde;
        margin-right:5px;
    }
    .removeBtn{
        margin-left:auto;
        color:#de4343;
    }
    .list-enter-active, .list-leave-active{
        transition:all 1s;
    }
    .list-enter, .list-leave-to{
        opacity:0;
        transform:translateY(30px);
    }
    .jua{
    font-family: 'Jua', sans-serif;
    }
</style>