<template>
  <div class="wrapC p-0">
    <v-app>
      <v-card class="mx-0 overflow-hidden missions" color="white">
        <v-app-bar color="deep-purlple" dark>
          <HeaderComponent :isBack="true" />

          <v-toolbar-title>POST_DETAIL</v-toolbar-title>
        </v-app-bar>
        <br />

        <!--포스트 디테일 카드 여기있음!!-->
        <!-- <PostingDetailCard :propsPost="postOne" /> -->

        <div class="wrapC">
          <v-card class="mx-auto">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="profileImagePath"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">by {{member.nickname}}</v-list-item-title>
                <!--v-list-item-subtitle>by {{user.nickname}}</v-list-item-subtitle-->
              </v-list-item-content>
            </v-list-item>
            <div>
              <div class="thumbnail">
                <div class="centered">
                  <v-img :src="imagePath" class="min_size" ></v-img>
                </div>
              </div>
            </div>
            <!-- <img :src="imagePath" height="auto" style="min-width:100%"/> -->

            <v-card-text>
              <span class="jua">{{post.postContent}}</span>
              <br />
              <span class="jua">{{hashtag}}</span>
              <!--해시태그-->
            </v-card-text>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4">{{$moment(post.postDate).format('YYYY-MM-DD')}}</v-btn>
              <v-spacer></v-spacer>

              <!-- 여기부터 -->
              <h4 @click="good" v-show="like" class="jua_big">
                <i class="fas fa-heart" style="color:crimson;"></i>
                &nbsp;&nbsp;&nbsp;{{this.likeCnt}}&nbsp;&nbsp;&nbsp;
              </h4>
              <h4 @click="good" v-show="!like" class="jua_big">
                <i class="fas fa-heart" style="color:palegoldenrod;"></i>
                &nbsp;&nbsp;&nbsp;{{this.likeCnt}}&nbsp;&nbsp;&nbsp;
              </h4>
              <!-- 여기까지 -->

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
      </v-card>


      <v-bottom-navigation black shift>
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
import PostComment from "../../views/post/PostComment.vue";
import PostApi from "../../api/PostApi";
import FollowApi from "../../api/FollowApi";
import CommentApi from "../../api/CommentApi";
import UserApi from "../../api/UserApi";
import LikeApi from "../../api/LikeApi";
import HashtagApi from "../../api/HashtagApi";
import HeaderComponent from "../../components/common/Header.vue";

export default {
  data: () => ({
    drawer: false,
    activeBtn: 1,
    num: 0,
    member: [],
    postOne: {
      postNo: 0,
      memberNo: 0,
      postPhoto: "",
      postContent: "",
      missionNo: 0,
    },

    hashtag: "",
    like: false,
    likeCnt: 0,
    likeInfo: Array,
    likeData: {
      memberNo: 0,
      postNo: 0,
    },

    imagePath: "http://i3d201.p.ssafy.io:8080/",
    index: 0,
    imageSplit: [],
    comments: [],

    profileImagePath: "http://i3d201.p.ssafy.io:8080/profile/",
    profileIndex: 0,
    profileImageSplit: [],
  }),
  created() {
    this.user = this.$session.get("user");
    this.num = this.$route.params.num;

    this.profileImageSplit = this.user.memberPhoto.split("/");
    this.profileIndex = this.profileImageSplit.length - 1;
    this.profileImagePath += this.profileImageSplit[this.profileIndex];

    PostApi.requestSelectPostByNo(
      this.num,
      (res) => {
        this.postOne.postNo = res.data.postNo;
        this.postOne.memberNo = res.data.memberNo;
        this.postOne.postPhoto = res.data.postPhoto;
        this.postOne.postContent = res.data.postContent;
        this.postOne.mission = res.data.missionNo;

        this.imageSplit = this.postOne.postPhoto.split("/");
        this.index = this.imageSplit.length - 1;
        this.imagePath += this.imageSplit[this.index];
        
        UserApi.requestMemberByNo(
          this.postOne.memberNo,
          (res) => { this.member = res.data },
          (error) => { console.log("error") }
        );
      },
      (error) => {}
    );

    // 좋아요 개수
    LikeApi.requestLikeList(
      this.num,
      (res) => { this.likeCnt = res.data.length },
      (error) => { console.log(error) }
    );
    
    // 해시 태그
    HashtagApi.requestFindAllHastags(
      this.num,
      (res) => { 
        if (res.data.length != 0) 
          this.hashtag = res.data[0].hashtagContent
      },
      (error) => { console.log(error) }
    )
    
    this.getComments(this.num);
  },

  mounted() {
    // LikeApi에 보낼 params 설정
    this.likeData.memberNo = this.user.memberNo;
    this.likeData.postNo = this.num;

    // 좋아요 유무에 따라 버튼 활성/비활성
    LikeApi.requestIsLike(
      this.likeData,
      (res) => {
        if (res.status == 200) this.like = true;
        else this.like = false;
      },
      (error) => { console.log(error); }
    );
  },

  components: {
    PostComment,
    HeaderComponent,
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

    good() {
      // 사용자 반응을 우선시하기 때문에 프론트 변화 후 백엔드 통신
      // 통신에 실패했을때 원래 상태로 돌아와야함
      this.like = !this.like;

      if (this.like) { // like 삽입
        LikeApi.requestAddLike(
          this.likeData,
          (res) => { this.likeCnt++ },
          (error) => { this.like = !this.like }
        );
      } 
      
      else { // like 삭제
        LikeApi.requestRemoveLike(
          this.likeData,
          (res) => { this.likeCnt--; },
          (error) => { this.like = !this.like }
        );
      }
    },

    logout() {
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
  margin: 0 0 0 20px;
}
.min_size {
  min-width: 328px;
}

</style>