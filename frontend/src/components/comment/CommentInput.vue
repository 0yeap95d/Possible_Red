<template>
  <div class="inputBox shadow jua">
      <input type="text" v-model="newComment" placeholder="Tell me your thinking" v-on:keyup.enter="addComment">
      <span class="addContainer" v-on:click="addComment">
          <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>

      <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header" class="jua">경고</h3>
          <h5 slot="body" class="jua">댓글을 입력하세요!!!!! </h5>
          <span slot="footer" @click="showModal = false">
              <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
          </span> 
      </modal> 
  </div>
</template>

<script>
import Modal from '../../components/common/Modal.vue'

export default {
    data(){
        return{
            newComment:'',
            showModal:false
        }
    },
    methods:{
        addComment(){
            //console.log(this.newComment);
            if(this.newComment!=""){ //인풋 박스의 입력 값이 있을 때만 저장
                var value=this.newComment && this.newComment.trim(); //인풋 박스에 입력된 텍스트의 앞뒤 공백 문자열 제거
                this.$emit('addComment', value);
                this.clearInput(); //인풋 박스의 입력 값을 초기화
            }else{
                this.showModal=!this.showModal;
            }
           
        },
        clearInput(){
            this.newComment=''
        }
    },
    components:{
        Modal:Modal
    }
}
</script>

<style scoped>
    input:focus{
        outline:none;
    }
    .inputBox{
        background:white;
        height:50px;
        line-height:50px;
        border-radius:5px;
    }
    .inputBox input{
        border-style:none;
        font-size:0.9rem;
    }
    .addContainer{
        float:right;
        background:linear-gradient(to right, #6478FB, #8763FB);
        display:block;
        width:3rem;
        border-radius: 0 5px 5px 0;
        text-align:center;
    }
    .addBtn{
        color:white;
        vertical-align:middle;
    }
    .jua{
    font-family: 'Jua', sans-serif;
    font-size:x-large;
    }
</style>