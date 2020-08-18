<template>
  <div class="wrapC p-0">
    <v-app>
      <v-card class="mx-0 overflow-hidden missions" color="white">
        <v-app-bar color="deep-purlple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>POST_DETAIL</v-toolbar-title>
        </v-app-bar>
        <br />

        <!--포스트 디테일 카드 여기있음!!-->
        <!-- <PostingDetailCard :propsPost="postOne" /> -->

        <div class="wrapC">
          <v-card class="mx-auto">
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="../../assets/images/background1.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">by {{user.nickname}}</v-list-item-title>
                <!--v-list-item-subtitle>by {{user.nickname}}</v-list-item-subtitle-->
              </v-list-item-content>
            </v-list-item>
            <div>
              <div class="thumbnail">
                <div class="centered">
                  <img :src="imagePath" />
                </div>
              </div>
            </div>
            <!-- <img :src="imagePath" height="auto" style="min-width:100%"/> -->

            <v-card-text>
              <span class="jua">{{post.postContent}}</span>
              <br />
              <span class="jua">#풍경 #운동</span>
              <!--해시태그-->
            </v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">{{$moment(post.postDate).format('YYYY-MM-DD')}}</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
            <div v-if="isSame(user.memberNo, post.memberNo)">
              <v-btn
                color="#FF4081"
                text
                style="font-size:medium"
                @click="gotomodify(post.postNo)"
              >수정하기</v-btn>

              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#FF4081" text style="font-size:medium" v-bind="attrs" v-on="on">삭제하기</v-btn>
                </template>
                <v-card>
                  <v-card-title color="#FF4081" text style="font-size:medium">정말로 삭제하시겠습니까?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="gotodelete(post.postNo)">네</v-btn>
                    <v-btn color="green darken-1" text @click="returnpost()">니요</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card>

        <!-- <img :src="imagePath" height="auto" /> -->

        
          <PostComment @removeComment="updateComment" @updateComment="updateComment" :postNo="postOne.postNo" :comment-lists="comments" />
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
                <v-list-item-icon>
                  <i class="far fa-list-alt"></i>
                </v-list-item-icon>
                <p class="jua">내가 참여한 미션</p>
              </v-list-item>

              <v-list-item @click="mypost">
                <v-list-item-icon>
                  <i class="fas fa-user-edit"></i>
                </v-list-item-icon>
                <p class="jua">내가 쓴 글</p>
              </v-list-item>

              <v-list-item @click="mypoint">
                <v-list-item-icon>
                  <i class="fas fa-coins"></i>
                </v-list-item-icon>
                <p class="jua">내 포인트</p>
              </v-list-item>

              <v-list-item @click="myaccount">
                <v-list-item-icon>
                  <i class="fas fa-users-cog"></i>
                </v-list-item-icon>
                <p class="jua">내 계정설정</p>
              </v-list-item>

              <v-list-item @click="kakaologout">
                <v-list-item-icon>
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
import PostComment from "../../views/post/PostComment.vue";
import PostApi from "../../api/PostApi";
import FollowApi from "../../api/FollowApi";
import CommentApi from "../../api/CommentApi"

export default {
  created() {
    this.user = this.$session.get("user");
    this.num = this.$route.params.num;
    PostApi.requestSelectPostByNo(
      this.num,
      (res) => {
        this.postOne.postNo = res.data.postNo;
        this.postOne.memberNo = res.data.memberNo;
        this.postOne.postPhoto = res.data.postPhoto;
        this.postOne.postContent = res.data.postContent;
        this.postOne.mission = res.data.missionNo;

        console.log(this.postOne.postPhoto);
        this.imageSplit = this.postOne.postPhoto.split("/");
        this.index = this.imageSplit.length - 1;
        this.imagePath += this.imageSplit[this.index];
        console.log(this.imagePath);
      },
      (error) => {}
    );
    this.getComments(this.num);
  },
  data: () => ({
    drawer: false,
    activeBtn: 1,
    num: 0,
    postOne: {
      postNo: 0,
      memberNo: 0,
      postPhoto: "",
      postContent: "",
      missionNo: 0,
    },
    imagePath: "http://i3d201.p.ssafy.io:8080/",
    index: 0,
    imageSplit: [],
    comments: [],
  }),
  components: {
    // PostingDetailCard,
    PostComment,
  },
  methods: {
    returnpost() {
      this.$router.push("/posts");
    },
    isSame(itsMe, writer) {
      if (itsMe == writer) {
        // console.log("내가 쓴 글입니다.");
        return true;
      } else {
        // console.log("내가 쓴 글이 아닙니다");
        return false;
      }
    },
    gotomodify(num) {
      this.$router.push({
        name: "PostModify",
        params: {
          // 포스트 넘버 넘기기
          num: num,
          nickname: this.user.nickname,
        },
      });
    },
    gotodelete(num) {
      PostApi.requestPostDelete(num);
      this.$router.push("/posts");
    },
    insertFollow() {
      FollowApi.requestFollowRegister(
        {
          me: this.$session.get("user").memberNo,
          you: this.post.memberNo,
        },
        (res) => {},
        (error) => {}
      );
    },
    kakaoLogout() {
      this.$session.destroy();
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (res) {
          console.log(res);
        },
        fail: function (err) {
          console.log(err);
        },
      });
      window.Kakao.Auth.logout(function () {
        alert("로그아웃 완료!");
      });
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
    myaccount() {
      this.$router.push("/changeuser");
    },
    getComments(num) {
      CommentApi.requestGetAllComment(
        num,
        (res) => {
          console.log(res.data)
          this.comments = res.data
        },
        (error) => {
          console.log(error)
        },
      )
    },
    updateComment(){
      console.log("업데이트한다.")
      this.getComments(this.num)
    },
  },
};
</script>

<style scoped>
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background: linear-gradient(to left, #f48fb1, #3949ab);
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
.jua {
  font-family: "Jua", sans-serif;
}
.v-icon.notranslate.mdi.mdi-menu.theme--dark {
  color: white;
}
.v-toolbar__title {
  font-family: "Luckiest Guy", cursive;
  font-size: x-large;
}


</style>