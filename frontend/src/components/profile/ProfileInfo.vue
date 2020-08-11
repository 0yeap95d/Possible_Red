<template>
  <div style="background-color: white;">
    <div class="d-flex">
      <div class="box" style="background: #BDBDBD;">
        <img class="profile" :src="user.memberPhoto">
      </div>

      <div class=info>      
        <span class=info_num>게시글: 10</span>
        <span class=info_num>팔로워: {{follower}}</span>
        <span class=info_num>팔로잉: {{following}}</span>
      </div>
      
    
    </div>
    
    <p class="stat">
      상태메세지 입니다.
      {{user.email}},
      {{user.stateMent}},
      {{user.memberNo}},
      {{user.nickname}},
      {{user.point}},
      {{user.pwd}},
    </p>



    <!-- <button v-if="rightText" class="right-text" :class="{disabled:isDisabled}" :disabled="isDisabled">
      {{rightText}}
    </button> -->
    
  </div>
</template>

<script>

import FollowApi from "../../api/FollowApi";

export default {
    name: "ProfileInfo",

    created() {
      console.log("created")
        this.user = this.$session.get('user');
    },

    beforeMount(){
      console.log("beforMount")
      console.log(this.user);
      this.getCountFollower()
      this.getCountFollowing()
    },

    methods: {
      getCountFollower() {
        FollowApi.requestCountFollower(
          this.user.memberNo,
          res => {
            console.log(res);
            this.follower = res.data
          },
          error => {
            console.log(error);
          }
        );
      },
      getCountFollowing() {
        FollowApi.requestCountFollowing(
          this.user.memberNo,
          res => {
            console.log(res);
            this.following = res.data
          },
          error => {
            console.log(error);
          }
        )
      },
    },
    data() {
        return {
            user: Object,
            follower: 0,
            following: 0
        }
    }
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
.stat {
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