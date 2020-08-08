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
        <input v-on:change="$fileSelect()" type="file" ref="postImg" />
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
    console.log("포스트 " + this.$session.get("user").memberNo);
    this.post.memberNo = this.$session.get("user").memberNo;

    //지금 접속해 있는 사람의 아이디를 기반으로 참여하고있는 미션 리스트 가져오기
    MissionApi.requestMissionByMember(
      this.post.memberNo,
      (res) => {
        // 연결 성공하면 여기로 와서 리스트 뽑아냄
        this.missionList = res.data;
        //console.log(this.missionList);
      },
      (error) => {}
    );
  },
  data() {
    return {
      post: {
        memberNo: 0,
        postContent: "",
        missionNo: 0,
      },
      postImg: "",
      missionList: [],
      preView: "",
    };
  },
  methods: {
    postRegister() {
      var formData = new FormData();

      //  if (this.post.missionNo === 0) {
      //   alert("미션을 입력하세요!");
      //   return;
      // } else if (!this.post.postPhoto) {
      //   alert("사진을 입력하세요!");
      //   return;
      // } else if (!this.post.postContent) {
      //   alert("내용을 입력하세요!");
      //   return;
      // }

      formData.append("postImg", this.postImg);
      formData.append("post", this.post);
      console.log(this.post);

      PostApi.requestInsertPost(
        formData,
        (res) => {
          console.log("포스트 등록완료!");
          //this.$router.push("/add");
        },
        (error) => {}
      );
    },

    $fileSelect: function fileSelect() {
      this.postImg = this.$refs.postImg.files[0];
      // 미리보기
      this.preView = URL.createObjectURL(this.$refs.postImg.files[0]);
    },

    // $executeSave: function $executeSave() {
    //   var formData = new FormData();
    //   formData.append(""); // 컨트롤러 넘길 정보

    //   //  if (this.post.missionNo === 0) {
    //   //   alert("미션을 입력하세요!");
    //   //   return;
    //   // } else if (!this.post.postPhoto) {
    //   //   alert("사진을 입력하세요!");
    //   //   return;
    //   // } else if (!this.post.postContent) {
    //   //   alert("내용을 입력하세요!");
    //   //   return;
    //   // }

    //   formData.append("postImg", this.postImg);
    //   formData.append("post", this.post);
    //   console.log("where");

    //   PostApi.requestInsertPost(
    //     formData,
    //     (res) => {
    //       console.log("포스트 등록완료!");
    //       //this.$router.push("/add");
    //     },
    //     (error) => {}
    //   );
      
    // },
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
