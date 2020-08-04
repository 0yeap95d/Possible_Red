<template>
  <div class="user" id="findpwd">
    <div class="wrapC">
      <!-- header -->
      <div class="wrap components-page p-1">
        <HeaderComponent headerTitle="패스워드 찾기" :isBack="true" />
      </div>

      <!-- email input -->
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

      <!--  -->
      <div class="wrap components-page">
        <LargeButton 
          text="확인" 
          :isBackground="isSubmit"
          @click.native="onSubmit"
          :disabled="!isSubmit"
          :class="{disabled : !isSubmit}" />
      </div>

    </div>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import * as EmailValidator from "email-validator";
import HeaderComponent from "../../components/common/Header.vue";
import LargeButton from "../../components/common/ButtonLarge";
import UserApi from "../../api/UserApi";

export default {
 name: "FindPwd",

 components: {
   HeaderComponent,
   LargeButton
 },

 watch: {
    email: function(v) {
      this.checkForm();
    }
  },

  methods: {
    checkForm() {
      // email 유효성 검사
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
      UserApi.requestEmailCheck(
        this.email,
        res => {
          // console.log(res);
          // 입력된 이메일이 존재하지 않을 때
          if (res.data == 0) {
            console.log("Email does not exist")
            this.isSubmit = false;
            this.error.email = "일치하는 이메일이 없습니다."
            // 피드백 필요
          } 
          
          // 입력된 이메일 존재할 때
          else {
            console.log("Email check completed")
            // 반환받은 멤버정보를 전달
            this.$router.push({ 
              name: "ChangePwd", 
              params: { "member": res.data }
            });
          }
        },
        error => {
          console.log(error)
          // error page 이동 추가해야함
        }
      )

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