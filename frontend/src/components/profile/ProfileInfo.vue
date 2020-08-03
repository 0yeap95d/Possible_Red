<template>
  <div class>
    <div class="d-flex">
      <div class="box" style="background: #BDBDBD;">
        <img class="profile" src="../../assets/images/profile_default.png">
      </div>

      <div class=info>      
        <span class=info_num>게시글: nn</span>
        <span class=info_num>팔로워: nn</span>
        <span class=info_num>팔로잉: nn</span>
      </div>
    
    </div>
    
    <p class="title">
      {{headerTitle}}
    </p>



    <button v-if="rightText" class="right-text" :class="{disabled:isDisabled}" :disabled="isDisabled">
      {{rightText}}
    </button>
  </div>
</template>

<script>

export default {
    name: "ProfileInfo",
    props : ['headerTitle', 'isBack', 'isSearch', 'rightText', 'isDisabled'],
}
</script>

<style>
.box {
    margin-top: 5%;
    margin-left: 5%;
    width: 15%;
    height: 15%; 
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title {
  margin-left: 3%;
  margin-top: 5%;
}
.info {
  width: 80%;
  text-align: center;
  margin: auto;
}
.info_num {
  margin-left: 5%;
}
</style>