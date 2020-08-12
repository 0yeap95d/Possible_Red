<template>
  <div style="background-color: white;">
    <div class="d-flex">
      <!-- <div class="box my-auto" style="background: #BDBDBD; margin-right: 20%">
        <img v-if="user.memberPhoto" class="profile" :src="user.memberPhoto">
        <img v-else class="profile" src="../../assets/images/profile_default.png">
      </div> -->

      <div class="thumbnail-wrapper my-auto">
        <div class="thumbnail">
          <div class="centered">
            <img v-if="user.memberPhoto" class="profile" :src="user.memberPhoto">
            <img v-else class="profile" src="../../assets/images/profile_default.png">
          </div>
        </div>
      </div>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="d-flex justify-content-around"
        >
          <v-list-item class="mb-0 mx-1">
            <div>
              <p>10</p>
              <p>포스트</p>
            </div>
          </v-list-item>

          <v-list-item class="mb-0 mx-1">
            <div>
              <p>{{follower}}</p>
              <p>팔로우</p>
            </div>
          </v-list-item>

          <v-list-item class="mb-0 mx-1">
            <div>
              <p>{{following}}</p>
              <p>팔로잉</p>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    <p
      v-if="user.stateMent"
      class="stat"
      style="font-family: 'Jua', sans-serif; text-align: left;"
    >{{user.stateMent}}</p>
    <p v-else class="stat" style="font-family: 'Jua', sans-serif; text-align: left;">상태 메세지 입니다.</p>
  </div>
</template>

<script>
import FollowApi from "../../api/FollowApi";

export default {
  name: "ProfileInfo",

  created() {
    console.log("created");
    this.user = this.$session.get("user");
  },

  beforeMount() {
    console.log("beforMount");
    console.log(this.user);
    this.getCountFollower();
    this.getCountFollowing();
  },

  methods: {
    getCountFollower() {
      FollowApi.requestCountFollower(
        this.user.memberNo,
        (res) => {
          console.log(res);
          this.follower = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getCountFollowing() {
      FollowApi.requestCountFollowing(
        this.user.memberNo,
        (res) => {
          console.log(res);
          this.following = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  data() {
    return {
      user: Object,
      follower: 0,
      following: 0,
    };
  },
};
</script>

<style scoped>
.thumbnail-wrapper {
  width:25%;
  margin-left: 5%;
  margin-right: 15%;
}
.thumbnail {
  position: relative;
  padding-top: 100%;
  border-radius: 80%;
  overflow: hidden;
}
.thumbnail .centered {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%,50%); 
  -ms-transform: translate(50%,50%); 
  transform: translate(50%,50%); 
  }
.thumbnail .centered img { 
  position: absolute; 
  top: 0; 
  left: 0; 
  max-width: 100%; 
  height: auto; 
  -webkit-transform: translate(-50%,-50%); 
  -ms-transform: translate(-50%,-50%); 
  transform: translate(-50%,-50%); 
}
/* 
.box {
  width: 15%;
  height: 15%; 
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5%;
}
.profile {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
.stat {
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.info {
  width: 80%;
  text-align: center;
  margin: auto;
}

.v-application p {
  margin-bottom: 0;
  text-align: center;
  font-family: "Jua", sans-serif;
}
</style>