<template>
  <div class="wrap">
    <v-app>
      <v-card class="mx-auto overflow-hidden missions" color="white">
        <v-app-bar color="deep-purlple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>{{user.nickname}}</v-toolbar-title>
        </v-app-bar>
        <br>

        <ProfileInfo headerTitle="상태 메세지" />
        <ProfileBody />
        <button @click="kakaoLogout">로그아웃</button>
        <br>
        
        <!--미션 props를 MissionItem으로 넘김-->

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
                <v-list-item-icon>
                  <i class="far fa-list-alt"></i>
                </v-list-item-icon>
                <v-list-item-title>내가 참여한 미션</v-list-item-title>
              </v-list-item>

              <v-list-item @click="mypost">
                <v-list-item-icon>
                  <i class="fas fa-user-edit"></i>
                </v-list-item-icon>
                <v-list-item-title>내가 쓴 글</v-list-item-title>
              </v-list-item>

              <v-list-item @click="mypoint">
                <v-list-item-icon>
                  <i class="fas fa-coins"></i>
                </v-list-item-icon>
                <v-list-item-title>내 포인트</v-list-item-title>
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
import ProfileBody from "../../components/profile/ProfileBody.vue";
import ProfileHeader from "../../components/profile/ProfileHeader.vue";
import ProfileInfo from "../../components/profile/ProfileInfo.vue";
import Footer from "../../components/common/Footer.vue";
import "../../assets/css/components.scss";

export default {    
    name: "UserProfile",
    components: {
        ProfileInfo,
        ProfileBody,
    },
    created() {
        this.user = this.$session.get('user');
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
        }
    },
    data() {
        return {
          drawer: false,
          activeBtn: 1,
          user: {
              email: "",
              memberNo: 0,
              nickname: "",
              point: 0,
              pwd: "",
              stateMent: ""
          }
        }
    },
    methods: {
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
    },
} 
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
.v-item-group.v-bottom-navigation {
  max-width: 440px;
  min-width: 100px;
  width: 100%;
  margin: 0 auto;
}.white{
  background-color:whitesmoke !important;
}
.v-toolbar__title{
  font-family: 'Luckiest Guy', 'D2Coding', cursive;
  font-size:x-large
}

</style>