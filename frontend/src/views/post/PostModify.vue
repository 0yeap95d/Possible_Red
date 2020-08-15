<template>
  <div class="wrapC">
    <v-app>
      <v-card class="mx-auto">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../../assets/images/background1.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">by {{nickname}}</v-list-item-title>
            <!--v-list-item-subtitle>by {{user.nickname}}</v-list-item-subtitle-->
          </v-list-item-content>
        </v-list-item>

        <v-img src="https://picsum.photos/400" height="194"></v-img>

        <div class="input-with-label jua">
          <textarea
            v-model="post.postContent"
            id="postContent"
            placeholder="내용을 입력하세요"
            type="text"
            cols="35%"
            rows="7"
          />
        </div>
        <div>
          <v-btn color="#FF4081" text style="font-size:medium" @click="gotomodify(post.postNo)">저장하기</v-btn>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import PostApi from "../../api/PostApi";
export default {
  created() {
    this.num = this.$route.params.num;
    this.nickname = this.$route.params.nickname;
    PostApi.requestSelectPostByNo(
      this.num,
      (res) => {
        this.post = res.data;
      },
      (error) => {}
    );
  },
  data() {
    return {
      post: {
        postNo: 0,
        memberNo: 0,
        postPhoto: "",
        postContent: "",
        missionNo: 0,
        postImg: "",
      },
      num: 0,
      postImg: "",
      nickname: "",
    };
  },
  methods: {
    gotomodify(postNo) {
      PostApi.requestPostUpdate(
        this.post,
        (res) => {
          this.$router.push({
            name: "PostDetail",
            params: {
              num: this.post.postNo,
            },
          });
        },
        (error) => {}
      );
    },
  },
};
</script>

<style>
.submit_button {
  margin-bottom: 3rem;
}
.post-adds {
  margin-bottom: 7.5rem;
}
.jua {
  font-family: "Jua", sans-serif;
}
.jua_small {
  font-size: medium;
  font-family: "Jua", sans-serif;
}
#postContent {
  text-align: center;
  float: left;
  margin: 10% 10%;
}
</style>
