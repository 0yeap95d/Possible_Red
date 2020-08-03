<template>
  <div class="user" id="findpwd">
    <div class="wrapC">
      <h1>
        비밀번호 찾기
      </h1>

      <div class="input-with-label">
        <input
          v-model="email"
          v-bind:class="{error : error.email, complete:!error.email&&email.length!==0}"
          @keyup.enter="Login"
          id="email"
          placeholder="이메일을 입력하세요."
          type="text"
        />
        <label for="email">이메일</label>
        <div class="error-text" v-if="error.email">{{error.email}}</div>
      </div>

      <button
        class="btn btn--back btn--submit"
        @click="onSubmit"
        :disabled="!isSubmit"
        :class="{disabled : !isSubmit}"
      >확인</button>

    </div>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import * as EmailValidator from "email-validator";

export default {
 name: "FindPwd",

 watch: {
    email: function(v) {
      this.checkForm();
    }
  },

  methods: {
    checkForm() {
      if (this.email.length >= 0 && !EmailValidator.validate(this.email))
        this.error.email = "이메일 형식이 아닙니다.";
      else this.error.email = false;

      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
    },

    onSubmit() {
      
      this.$router.push("/changepwd");

    },
  },

 data() {
   return {
      email: "",
      error: {
        email: false,
      },
      isSubmit: false,
   };
 },

};
</script>

<style>

</style>