<template>
  <div class="wrapC">
    <v-app>
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

        <v-img src="https://picsum.photos/400" height=auto></v-img>

        <v-card-text>
          <span class="jua">{{post.postContent}}</span>
          <br />
          <span class="jua">#풍경 #운동</span>
          <!--해시태그-->
        </v-card-text>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="insertFollow()" >Follow</v-btn>
          <v-btn text color="deep-purple accent-4" >{{$moment(post.postDate).format('YYYY-MM-DD')}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
        <!--button @click="test">test</button-->
        <div v-if="isSame(user.memberNo, post.memberNo)">
          <v-btn color="#FF4081" text style="font-size:medium" @click="gotomodify(post.postNo)">수정하기</v-btn>

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

          <!--v-btn
          v-if="isSame(user.memberNo, post.memberNo)"
          color="#FF4081"
          text
          style="font-size:medium"
          @click="gotodelete(post.postNo)"
          >삭제하기</v-btn-->
        </div>
      </v-card>
    </v-app>
    <hr>
  </div>
</template>
<script>
import FollowApi from "../../api/FollowApi";
import PostApi from "../../api/PostApi";

export default {
  name: "PostingDetailCard",
  props: {
    post: Object,
  },
  data() {
    return {
      user: {
        // 현재 로그인한 유저 정보
        email: "",
        memberNo: 0,
        nickname: "",
        point: 0,
        pwd: "",
        stateMent: "",
      },
    };
  },
  created() {
    this.user = this.$session.get("user");
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
  },
};
</script>
<style>
.v-application--wrap {
  min-height:400px;
}
.jua{
  font-family: 'Jua', sans-serif;
}
.v-list-item__title.headline{
  font-family: 'Jua', sans-serif !important;
}
</style>