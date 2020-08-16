<template> 
  <div class="clearAllContainer">
      <span class="clearAllBtn jua" @click="clearComment">Clear All</span>
  </div>
</template>

<script>
export default {
    methods:{
        clearComment(){
            this.$emit('removeAll');
        }
    }
}
</script>

<style scoped>
    .clearAllContainer{
        width:8.5rem;
        height:50px;
        line-height:50px;
        background-color:white;
        border-radius:5px;
        margin: 0 auto;
        text-align:center;
    }
    .clearAllBtn{
        color:#e20303;
        display:black;
        
    }
</style>