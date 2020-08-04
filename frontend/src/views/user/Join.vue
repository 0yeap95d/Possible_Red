<!--
    가입하기는 기본적인 폼만 제공됩니다
    기능명세에 따라 개발을 진행하세요.
    Sub PJT I에서는 UX, 디자인 등을 포함하여 백엔드를 제외하여 개발합니다.
 -->
<template>
  <div class="user join wrapC">
    <Navbar />
    <h1>가입하기</h1>
    <div class="form-wrap">
      <div class="input-with-label">
        <input
          v-model="nickname"
          id="nickname"
          placeholder="닉네임을 입력하세요."
          type="text"
        />
        <label for="nickname">닉네임</label>
      </div>

      <div class="input-with-label">
        <input
          v-model="email"
          id="email"
          placeholder="이메일을 입력하세요."
          type="text"
        />
        <label for="email">이메일</label>
      </div>

      <div class="input-with-label">
        <input
          v-model="pwd"
          id="pwd"
          :type="passwordType"
          placeholder="비밀번호를 입력하세요."
        />
        <label for="pwd">비밀번호</label>
      </div>

      <div class="input-with-label">
        <input
          v-model="passwordConfirm"
          :type="passwordConfirmType"
          id="password-confirm"
          placeholder="비밀번호를 다시한번 입력하세요."
        />
        <label for="password-confirm">비밀번호 확인</label>
      </div>
    </div>

    <label>
      <input v-model="isTerm" type="checkbox" id="term" />
      <span>약관을 동의합니다.</span>
    </label>

    <br />
    <br />
    <router-link to="/terms" class="btn--text">약관보기</router-link>

    <button class="btn-bottom" @click="onRegister">가입하기</button>
    <Footer />
  </div>
</template>

<script>
import UserApi from "../../api/UserApi";
import "../../components/css/user.scss";
import Navbar from "../../components/common/Navbar.vue";
import Footer from "../../components/common/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  methods: {
    onRegister() {
      let { email, pwd, nickname } = this;
      let data = {
        email,
        pwd,
        nickname,
      };

      UserApi.requestRegister(
        data,
        (res) => {
          //통신을 통해 전달받은 값 콘솔에 출력
          //console.log(res);
          console.log(res.data);

          this.$router.push("/");
        },
        (error) => {}
      );
    },
  },
  data: () => {
    return {
      email: "",
      pwd: "",
      passwordConfirm: "",
      nickname: "",
      isTerm: false,
      isLoading: false,
      error: {
        email: false,
        pwd: false,
        nickname: false,
        passwordConfirm: false,
        term: false,
      },
      isSubmit: false,
      passwordType: "password",
      passwordConfirmType: "password",
      termPopup: false,
    };
  },
};
</script>
