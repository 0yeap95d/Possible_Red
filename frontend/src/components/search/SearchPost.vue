<template>
  <div>
    <p>지금은 포스트를 작성한 memberNo가 뜹니다 -> {{this.list.memberNo}}</p>
    <p>포스트 내용도 뜹니다 -> {{this.list.postContent}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'SearchPost',
  props:{
    list:Array
  },
  created(){
    console.log(this.list.memberNo)
  }
}
</script>

<style>

</style>