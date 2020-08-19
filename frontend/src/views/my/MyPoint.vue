<template>
  <div class="wrap">
    <v-app>
      <v-card class="mx-auto overflow-hidden missions">
        <v-app-bar color="deep-purlple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>My Point</v-toolbar-title>
        </v-app-bar>
        <br />

        <!--넣고 싶은거 넣으세요~-->
        <div class="wrapC">
          <p class="jua" style="font-size:x-large;">
            {{user.nickname}}님의
            <br />
            잔여 포인트는 {{user.point}}P 입니다.
          </p>
          <v-text-field v-model="mypoint" readonly style="min-width:330px;">{{mypoint}}</v-text-field>
          <div>
            <button @click="plus50000()" class="jua" style="margin-right:10px">+50,000</button>
            <button @click="plus10000()" class="jua" style="margin-right:10px">+10,000</button>
            <button @click="plus5000()" class="jua" style="margin-right:10px">+5,000</button>
            <button @click="plus1000()" class="jua">+1,000</button>
            <br />
            <button @click="minus50000()" class="jua" style="margin-right:10px">-50,000</button>
            <button @click="minus10000()" class="jua" style="margin-right:10px">-10,000</button>
            <button @click="minus5000()" class="jua">-5,000</button>
            <button @click="minus1000()" class="jua">-1,000</button>
          </div>

          <button class="ma-2" @click="updatePointByKakao()">
            <img width="50px" src="../../assets/images/카카오페이.png" />
          </button>
          <button class="ma-2" @click="updatePointByPayco()">
            <img width="50px" src="../../assets/images/페이코.png" />
          </button>
          <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            @click="updatePointByInicis()"
          >이니시스</v-btn>
        </div>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
              <div class="px-3 py-2">
                <div class="thumbnail">
                  <div class="centered">
                    <img :src="profileImagePath" />
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


<script >
import "../../components/css/style.css";
import UserApi from "../../api/UserApi";

export default {
  created() {
    this.user = this.$session.get("user");

    this.profileImageSplit = this.user.memberPhoto.split("/");
    this.profileIndex = this.profileImageSplit.length - 1;
    this.profileImagePath += this.profileImageSplit[this.profileIndex];
  },
  data: () => ({
    mypoint: 0,
    drawer: false,
    activeBtn: 1,
    loader: null,
    loading: false,
    loading2: false,
    loading3: false,
    loading4: false,
    loading5: false,
    user: {
      // 현재 로그인한 유저 정보
      email: "",
      memberNo: 0,
      nickname: "",
      point: 0,
      pwd: "",
      stateMent: "",
    },

    profileImagePath: "http://i3d201.p.ssafy.io:8080/profile/",
    profileIndex: 0,
    profileImageSplit: [],
  }),
  methods: {
    mainMethod() {
      // 포인트 업데이트 + 새로운 포인트 보여주기위한 로그인 세션만료 + 로그인
      let memberNo = this.user.memberNo;
      let point = this.user.point + this.mypoint;
      let pointData = {
        memberNo,
        point,
      };
      UserApi.requestUpdatePoint(
        pointData,
        (res) => {
          this.$session.destroy();

          // 로그인 추가하기
          let email = this.user.email;
          let password = this.user.pwd;
          let data = {
            email,
            password,
          };
          UserApi.requestLogin(
            data,
            (res) => {
              // 로그인 성공
              if (res.status === 200) {
                // session에 로그인 회원 정보 저장
                this.$session.set("user", res.data);
                alert("충전이 완료되었습니다 새로고침을 눌러주세요!");
                // 결과페이지로 이동
              } else {
                return;
              }
            },
            (error) => {}
          ); // 로그인 끝
        },
        (error) => {}
      );
    },
    updatePointByKakao() {
      // this.user.point += this.mypoint;
      var IMP = window.IMP;
      IMP.init("imp33126269"); // 맞음
      IMP.request_pay(
        {
          pg: "kakao", // 결제방식
          /*
          'html5_inicis':이니시스(웹표준결제),
          'nice':나이스페이, 
          'jtnet':제이티넷,
          'uplus':LG유플러스, 
          'danal':다날,
          'payco':페이코,
          'syrup':시럽페이, 
          'paypal':페이팔
          */
          pay_method: "card",
          merchant_uid:
            "ORDER_POINT" + new Date().getTime() + this.user.nickname,
          name: "PR Team point payment",
          amount: this.mypoint,
          buyer_email: this.user.email,
          buyer_name: this.user.nickname,
        },
        (rsp) => {
          if (rsp.success) {
            this.mainMethod();
          } else {
            // 결제 실패 시 로직,
            // console.log("결제 완전 실패");
          }
        }
      );
    },
    updatePointByInicis() {
      // this.user.point += this.mypoint;
      var IMP = window.IMP;
      IMP.init("imp33126269"); // 맞음
      IMP.request_pay(
        {
          pg: "html5_inicis", // 결제방식
          /*
          'html5_inicis':이니시스(웹표준결제),
          'nice':나이스페이, 
          'jtnet':제이티넷,
          'uplus':LG유플러스, 
          'danal':다날,
          'payco':페이코,
          'syrup':시럽페이, 
          'paypal':페이팔
          */
          pay_method: "card",
          merchant_uid:
            "ORDER_POINT" + new Date().getTime() + this.user.nickname,
          name: "PR Team point payment",
          amount: this.mypoint,
          buyer_email: this.user.email,
          buyer_name: this.user.nickname,
        },
        (rsp) => {
          if (rsp.success) {
            this.mainMethod();
          } else {
            // 결제 실패 시 로직,
            // console.log("결제 완전 실패");
          }
        }
      );
    },
    updatePointByPayco() {
      // this.user.point += this.mypoint;
      var IMP = window.IMP;
      IMP.init("imp33126269"); // 맞음
      IMP.request_pay(
        {
          pg: "payco", // 결제방식
          /*
          'html5_inicis':이니시스(웹표준결제),
          'nice':나이스페이, 
          'jtnet':제이티넷,
          'uplus':LG유플러스, 
          'danal':다날,
          'payco':페이코,
          'syrup':시럽페이, 
          'paypal':페이팔
          */
          pay_method: "card",
          merchant_uid:
            "ORDER_POINT" + new Date().getTime() + this.user.nickname,
          name: "PR Team point payment",
          amount: this.mypoint,
          buyer_email: this.user.email,
          buyer_name: this.user.nickname,
        },
        (rsp) => {
          if (rsp.success) {
            this.mainMethod();
          } else {
            // 결제 실패 시 로직,
            // console.log("결제 완전 실패");
          }
        }
      );
    },
    plus50000() {
      this.mypoint += 50000;
    },
    plus10000() {
      this.mypoint += 10000;
    },
    plus5000() {
      this.mypoint += 5000;
    },
    plus1000() {
      this.mypoint += 1000;
    },
    minus50000() {
      this.mypoint -= 50000;
      if (this.mypoint < 0) {
        alert("음수로는 불가능합니다.");
        this.mypoint += 50000;
        return;
      }
    },
    minus10000() {
      this.mypoint -= 10000;
      if (this.mypoint < 0) {
        alert("음수로는 불가능합니다.");
        this.mypoint += 10000;
        return;
      }
    },
    minus5000() {
      this.mypoint -= 5000;
      if (this.mypoint < 0) {
        alert("음수로는 불가능합니다.");
        this.mypoint += 5000;
        return;
      }
    },
    minus1000() {
      this.mypoint -= 1000;
      if (this.mypoint < 0) {
        alert("음수로는 불가능합니다.");
        this.mypoint += 1000;
        return;
      }
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
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>

<style scoped>
.btn_kakao {
  background: url("../../assets/images/카카오페이.png") no-repeat;
  border: none;
}
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

.v-toolbar__title {
  font-family: "Luckiest Guy", cursive;
  font-size: x-large;
}
.jua {
  font-family: "Jua", sans-serif;
}
.v-icon.notranslate.mdi.mdi-menu.theme--dark {
  color: white;
}
.wrapC {
  min-height: 500px;
}
</style>