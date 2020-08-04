<template>
  <div class="user" id="changePwd">
    <div class="wrapC">
      <h1>
        새 비밀번호
      </h1>

      <div class="input-with-label">
        <input
          v-model="password"
          type="password"
          v-bind:class="{error : error.password, complete:!error.password&&password.length!==0}"
          id="password"
          @keyup.enter="Login"
          placeholder="비밀번호를 입력하세요."
        />
        <label for="password">비밀번호</label>
        <div class="error-text" v-if="error.password">{{error.password}}</div>
      </div>

      <div class="input-with-label">
        <input
          v-model="passwordChk"
          type="password"
          v-bind:class="{error : error.password, complete:!error.password&&passwordChk.length!==0}"
          id="password"
          @keyup.enter="Login"
          placeholder="비밀번호를 한번 더 입력하세요."
        />
        <label for="password">비밀번호 확인</label>
        <div class="error-text" v-if="error.password">{{error.password}}</div>
      </div>

      <button
        class="btn btn--back btn--submit"
        @click="pwdchanged"
        :disabled="!isSubmit"
        :class="{disabled : !isSubmit}"
      >확인</button>

    </div>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import * as EmailValidator from "email-validator";
import PV from "password-validator";

export default {
  name: "ChangePwd",

  created() {
  this.component = this;

  this.passwordSchema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .digits()
      .has()
      .letters();
  },

  
  watch: {
      email: function(v) {
        this.checkForm();
      }
    },


  methods: {
    checkForm() {

     if (
        this.password.length >= 0 &&
        !this.passwordSchema.validate(this.password)
      )
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다.";
      else this.error.password = false;

      if (
        this.password.length >= 0 && this.passwordChk != this.password
      )
        this.error.password = "비밀번호가 일치하지 않습니다.";
      else this.error.password = false;


      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
    },
    pwdchanged(){
      //console.log("안녕")
      this.$router.push("/");
    }
  },

 data() {
   return {
      password: "",
      passwordChk: "",
      passwordSchema: new PV(),
      error: {
        passowrd: false
      },
      isSubmit: false,
      component: this
   };
 },

};
</script>

<style>

</style>
