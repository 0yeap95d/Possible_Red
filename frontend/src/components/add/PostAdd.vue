<template>
  <div>
    <div class="form-wrap">
      <div class="input-with-label">
        <input
          v-model="post.postContent"
          id="postContent"
          placeholder="내용을 입력하세요"
          type="text"
        />
      </div>
      <div>
        <button class="btn-bottom" @click="postRegister">인증하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$session.get("user").memberNo);
    this.mission.memberNo = this.$session.get("user").memberNo;
  },
  data() {
    return {
      post: {
        memberNo: 0,
        postPhoto: "",
        postContent: "",
        missionNo: 0,
      },
    };
  },
  methods: {
    postRegister() {},
  },
};
</script>

<style></style>
