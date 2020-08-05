<!-- https://www.it-swarm.dev/ko/javascript/vuejs%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%A9%EB%8B%88%EA%B9%8C/834852226/ -->
<template>
  <div>
    <div class="form-wrap">
      <!-- 여기에 v-for써서 미션리스트 셀렉트박스로 보여주기 -->
      <select v-model="post.missionNo" id="missionNo">
        <option disabled value>게시글을 올릴 미션을 선택하세요.</option>
        <option
          v-for="item in missionList"
          :key="item.etag"
          :value="item.missionNo"
        >{{item.missionTitle}}</option>
      </select>
      <br />
      <div>
        <!--input type="file" accept="image/*" @change="uploadImage($event)" id="file-input" /-->
        <img class="profile-image" :src="post.postPhoto" />

        <div v-if="!post.postPhoto">
          <input type="file" round class="change-profile-image" @change="onFileChange" />
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
import MemberApi from "../../api/MemberApi";
export default {
  created() {
    console.log("포스트 " + this.$session.get("user").memberNo);
    this.post.memberNo = this.$session.get("user").memberNo;

    //지금 접속해 있는 사람의 아이디를 기반으로 참여하고있는 미션 리스트 가져오기
    MemberApi.requestMissionByMember(
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
        postPhoto: "",
        postContent: "",
        missionNo: 0,
      },
      missionList: [],
    };
  },
  methods: {
    postRegister() {
      console.log(this.post);
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.post.postPhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style>
.submit_button {
  margin-bottom: 3rem;
}
</style>
