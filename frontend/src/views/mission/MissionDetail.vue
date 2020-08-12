<template>
  <div class="wrap">
    <v-app>
      <v-card class="mx-auto overflow-hidden missions" color="white">
        <v-app-bar color="deep-purlple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>{{mission.missionTitle}}</v-toolbar-title>
        </v-app-bar>
        <br />

        <!--넣고 싶은거 넣으세요~-->
        <div v-if="this.mission">
          <MissionDetailCard :mission="mission" />
        </div>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
              <div class="px-3 py-2">
                <div class="thumbnail">
                  <div class="centered">
                    <img src="../../assets/images/펭수프로필.jpg" />
                  </div>
                </div>
              </div>
              <hr />
              <v-list-item @click="mymission">
                  <v-list-item-icon >
                      <i class="far fa-list-alt"></i>
                  </v-list-item-icon>
                  <p class="jua">내가 참여한 미션</p>
              </v-list-item>

              <v-list-item @click="mypost">
                  <v-list-item-icon >
                      <i class="fas fa-user-edit"></i>
                  </v-list-item-icon>
                  <p class="jua">내가 쓴 글</p>
              </v-list-item>

              <v-list-item @click="mypoint">
                  <v-list-item-icon >
                      <i class="fas fa-coins"></i>
                  </v-list-item-icon>
                  <p class="jua">내 포인트</p>
              </v-list-item>

              <v-list-item @click="myaccount">
                  <v-list-item-icon >
                      <i class="fas fa-users-cog"></i>
                  </v-list-item-icon>
                  <p class="jua">내 계정설정</p>
              </v-list-item>

              <v-list-item @click="kakaologout">
                  <v-list-item-icon >
                      <i class="fas fa-sign-out-alt"></i>
                  </v-list-item-icon>
                  <p class="jua">로그아웃</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-bottom-navigation v-model="bottomNav" black shift>
        <v-btn @click="post">
          <span>POST</span>
          <v-icon>mdi-text</v-icon>
        </v-btn>

        <v-btn @click="mission">
          <span>Mission</span>
          <v-icon>mdi-clipboard</v-icon>
        </v-btn>

        <v-btn @click="writing">
          <span>Writing</span>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn @click="search">
          <span>Search</span>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn @click="profile">
          <span>Profile</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>


<script>
import "../../components/css/style.css";
import PostingDetailCard from "../../components/post/PostingDetailCard.vue";
import MissionDetailCard from "../../components/mission/MissionDetailCard.vue";
import MissionApi from "../../api/MissionApi";
import UserApi from "../../api/UserApi";

export default {
  data: () => ({
    drawer: false,
    activeBtn: 1,
    num: 0,
    mission: {
      missionTitle: "",
      startDate: "",
      endDate: "",
      isStart: false,
      memberNo: 0,
      point: 0,
      minusPoint: 0,
      cutCnt: 0,
      joinMem: 0,
      missionPhoto: "",
      missionCat: "",
      master: "",
    },
  }),
  created() {
    this.num = this.$route.params.num;

    UserApi.requestMemberByNo(
      this.num,
      (res) => {
        console.log(res.data);
        console.log(res.data.nickname); // 찍혔어
        this.mission.master = res.data.nickname;
      },
      (error) => {}
    );

    MissionApi.requestMissionDetail(
      this.num,
      (res) => {
        this.mission.missionTitle = res.data.missionTitle;
        this.mission.startDate = res.data.startDate;
        this.mission.endDate = res.data.endDate;
        this.mission.isStart = res.data.isStart;
        this.mission.memberNo = res.data.memberNo;
        this.mission.point = res.data.point;
        this.mission.minusPoint = res.data.minusPoint;
        this.mission.cutCnt = res.data.cutCnt;
        this.mission.joinMem = res.data.joinMem;
        this.mission.missionPhoto = res.data.missionPhoto;
        this.mission.missionCat = res.data.missionCat;
      },
      (error) => {}
    );
  },
  components: {
    MissionDetailCard,
  },
  methods: {
    kakaoLogout() {
        this.$session.destroy();
        window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(res) { console.log(res) },
            fail: function(err) { console.log(err) },
        })
        window.Kakao.Auth.logout(function() {
          alert('로그아웃 완료!')
        })
        this.$router.push("/");
    },
    post() {
      this.$router.push("/posts");
    },
    mission() {
      this.$router.push("/missionmain");
    },
    writing() {
      this.$router.push("/add");
    },
    search() {
      this.$router.push("/search");
    },
    profile() {
      this.$router.push("/profile");
    },
    mymission() {
      this.$router.push("/mymission");
    },
    mypost() {
      this.$router.push("/mypost");
    },
    mypoint() {
      this.$router.push("/mypoint");
    },
    myaccount(){
      this.$router.push("/changeuser");
    },
  },
};
</script>

<style scoped>
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background:linear-gradient(to left , #f48fb1, #3949ab);
}
.thumbnail {
  position: relative;
  padding-top: 100%; /*1:1 ratio */
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
  height: 90%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}
.v-bottom-navigation {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
}
.missions {
  margin-bottom: 3.5rem;
}
.v-item-group.v-bottom-navigation {
  max-width: 440px;
  min-width: 100px;
  width: 100%;
  margin: 0 auto;
}
.v-application--wrap {
  height: auto;
}
.white{
  background-color:whitesmoke !important;
}
.v-toolbar__title{
  font-family: 'Jua', sans-serif;
  font-size:x-large;
}
.jua{
  font-family: 'Jua', sans-serif;
}
.v-application .deep-purple--text.text--accent-4{
  color:white !important;
  background: navy !important;
}
</style>