<template>
  <div class>
    <div class="box" style="background: #BDBDBD;">
      <img class="profile" src="../../assets/images/profile_default.png">
    </div>

    <button class="menu" v-if="!isBack"></button>
    <h4 class="title">
      {{headerTitle}}
    </h4>
    <button v-if="isBack" class="back">
      <i class="fas fa-chevron-left"></i>
    </button>

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
</style>