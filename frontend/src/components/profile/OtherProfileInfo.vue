<template>
  <div style="background-color: white;">
    <div class="d-flex">
      <div class="thumbnail-wrapper my-auto">
        <div class="thumbnail">
          <div class="centered">
            <img v-if="other.memberPhoto" class="profile" :src="other.memberPhoto" alt="안뜸" />
          </div>
        </div>
      </div>

      <v-list nav dense>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
          class="d-flex justify-content-around"
        >
          <v-list-item class="mb-0 mx-1">
            <div>
              <p>{{postNum}}</p>
              <p>포스트</p>
            </div>
          </v-list-item>

          <v-list-item class="mb-0 mx-1">
            <div @click="toFollower">
              <p>{{follower}}</p>
              <p>팔로워</p>
            </div>
          </v-list-item>

          <v-list-item class="mb-0 mx-1">
            <div @click="toFollowing">
              <p>{{following}}</p>
              <p>팔로잉</p>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    <p
      v-if="other.stateMent"
      class="stat"
      style="font-family: 'Jua', sans-serif; text-align: left;"
    >{{other.stateMent}}</p>
    <p v-else class="stat" style="font-family: 'Jua', sans-serif; text-align: left;">상태 메세지가 없습니다.</p>

    <v-btn class="follow-btn" block color="primary" dark>Block Button</v-btn>
  </div>
</template>

<script>
import FollowApi from "../../api/FollowApi";
import UserApi from "../../api/UserApi";
import PostApi from "../../api/PostApi";

export default {
  name: "OtherProfileInfo",
  props: {
    other: {},
  },
  created() {
    this.user = this.$session.get("user");
    if (this.other.pwd != "") {
      this.imageSplit = this.other.memberPhoto.split("/");
      this.index = this.imageSplit.length - 1;
      this.other.memberPhoto = this.imagePath + this.imageSplit[this.index];
    }
  },

  beforeMount() {
    this.getCountPost(this.other.memberNo);
    this.getCountFollower(this.other.memberNo);
    this.getCountFollowing(this.other.memberNo);
  },

  methods: {
    getCountPost(num) {
      PostApi.requestSelectPostByMember(
        num,
        (res) => {
          this.postNum = res.data.length;
        },
        (error) => {}
      );
    },
    getCountFollower(num) {
      FollowApi.requestCountFollower(
        num,
        (res) => {
          this.follower = res.data;
        },
        (error) => {}
      );
    },
    getCountFollowing(num) {
      FollowApi.requestCountFollowing(
        num,
        (res) => {
          this.following = res.data;
        },
        (error) => {}
      );
    },
    toFollower() {
      this.$router.push({
        name: "ProfileFollow",
        params: { user: this.other },
      });
    },
    toFollowing() {
      this.$router.push({
        name: "ProfileFollow",
        params: { user: this.other },
      });
    },
  },
  data() {
    return {
      user: Object,
      postNum: 0,
      follower: 0,
      following: 0,
      imagePath: "http://i3d201.p.ssafy.io:8080/profile/",
      index: 0,
      imageSplit: [],
    };
  },
};
</script>

<style scoped>
.thumbnail-wrapper {
  width: 25%;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
}
.thumbnail .centered img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
.follow-btn {
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-bottom: 5%;
}

.v-application p {
  margin-bottom: 0;
  text-align: center;
  font-family: "Jua", sans-serif;
}
</style>