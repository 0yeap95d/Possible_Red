<!-- https://kanetami.tistory.com/97 -->
<template>
  <div>
    <div class="form-wrap post-adds">
      <!-- 여기에 v-for써서 미션리스트 셀렉트박스로 보여주기 -->
      <p>
        게시글을 올릴 미션을 선택하세요 →
        <select v-model="post.missionNo" id="missionNo">
          <option disabled selected>게시글을 올릴 미션을 선택하세요.</option>
          <option
            v-for="item in missionList"
            :key="item.etag"
            :value="item.missionNo"
          >{{item.missionTitle}}</option>
        </select>
      </p>
      <br />

      <div>
        <input v-on:change="fileSelect()" type="file" ref="postImg" />
        <div v-if="postImg">
          <img :src="preView" />
        </div>
      </div>

      <br />
      <div class="input-with-label">
        <textarea
          v-model="post.postContent"
          id="postContent"
          placeholder="내용을 입력하세요"
          type="text"
          cols="80%"
          rows="10"
        />
      </div>
      <div>
        <button class="submit_button btn-bottom" @click="postRegister">인증하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import MissionApi from "../../api/MissionApi"; // 멤버넘버별 포스트 받아오기
import PostApi from "../../api/PostApi";
export default {
  created() {
    console.log("포스트Add 유저 넘버 : " + this.$session.get("user").memberNo);
    this.post.memberNo = this.$session.get("user").memberNo;

    //지금 접속해 있는 사람의 아이디를 기반으로 참여하고있는 미션 리스트 가져오기
    MissionApi.requestMissionByMember(
      this.post.memberNo,
      (res) => {
        // 연결 성공하면 여기로 와서 리스트 뽑아냄
        console.log(res.data);
        this.missionList = res.data;
        console.log(this.missionList);
      },
      (error) => {}
    );
  },
  data() {
    return {
      post: {
        postNo: 0,
        memberNo: 0,
        // postDate: Object,
        postPhoto: "",
        postContent: "",
        missionNo: 0,
        postImg: "",
      },
      postImg: "",
      missionList: [],
      preView: "",
    };
  },
  methods: {
    postRegister() {
      console.log("이미지 " + this.postImg);
      this.post.postImg = this.postImg;
      var formData = new FormData();
      formData.append("postImg", this.postImg);
      // formData.append("postPhoto", this.postImg);
      formData.append("memberNo", this.post.memberNo);
      formData.append("postContent", this.post.postContent);
      formData.append("missionNo", this.post.missionNo);

      console.log("널이냐 ? " + this.post.postContent);
      PostApi.requestInsertPost(
        formData,
        (res) => {
          console.log("포스트 등록완료!");
          this.$router.push("/posts");
        },
        (error) => {}
      );
    },

    fileSelect() {
      this.postImg = this.$refs.postImg.files[0];
      // 미리보기
      this.preView = URL.createObjectURL(this.$refs.postImg.files[0]);
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
</style>
