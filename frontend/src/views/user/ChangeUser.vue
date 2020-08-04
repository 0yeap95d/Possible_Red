<template>
  <div class="user" id="changeUser">
    
    <div class="wrap components-page p-1">
      <HeaderComponent headerTitle="계정설정" :isBack="true" />
    </div>
    
    <div class="wrapC">
      <div class="input-with-label">
        <input
          disabled
          id="email"
          v-model="user.email"
          placeholder="이메일을 입력하세요."
          type="text"
        />
        <label for="email">이메일</label>
      </div>

      <div class="input-with-label">
        <input
          id="nickname"
          v-model="user.nickname"
          placeholder="닉네임"
          type="text"
        />
        <label for="nickname">닉네임</label>
        <!-- 닉네임 중복체크 -->
        <!-- <div class="error-text" v-if="error.email">{{error.email}}</div> -->
      </div>

      <div class="input-with-label">
        <input
          id="password"
          v-model="user.pwd"
          v-bind:class="{error : error.password, complete:!error.password&&user.pwd.length!==0}"
          placeholder="비밀번호"
          type="password"
        />
        <label for="password">비밀번호</label>
        
        <!-- 패스워드 유효성체크 -->
        <div class="error-text" v-if="error.password">{{error.password}}</div>
      </div>

      <div class="input-with-label">
        <input
          id="stateMent"
          v-model="user.stateMent"
          placeholder="상태메세지"
          type="text"
        />
        <label for="stateMent">상태메세지</label>
      </div>

      <div class="wrap components-page">
        <LargeButton 
          text="수정하기" 
          :isBackground="isSubmit"
          @click.native="updateUser"
          :disabled="!isSubmit"
          :class="{disabled : !isSubmit}" />
      </div>

    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import * as EmailValidator from "email-validator";
import PV from "password-validator";
import UserApi from "../../api/UserApi";
import HeaderComponent from "../../components/common/Header.vue";
import Footer from "../../components/common/Footer.vue";
import LargeButton from "../../components/common/ButtonLarge";

export default {
 name: "ChangeUser",
 components: {
   HeaderComponent,
   Footer,
   LargeButton
 },
 created() {
   this.user = this.$session.get('user');

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
    'user.pwd': function(v) {
      this.checkForm();
    }
  },

  methods: {
    checkForm() {
      if (
        this.user.pwd.length >= 0 &&
        !this.passwordSchema.validate(this.user.pwd)
      )
      this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다.";
      else this.error.password = false;

      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
      console.log(isSubmit);
    },

    updateUser() {
      console.log(this.user);
      UserApi.requestUpdate(
        this.user,
        res => {
          console.log(res);
          if (res.data === "success") {
            console.log("modify user success");
            
            this.isSubmit = false;
            // 결과페이지로 이동 

          } else {
            console.log("modify user fail");
            // 에러페이지로 이동
          }
        },
        error => {

        }
      )
    }
  },

 data() {
   return {
      user: {
        email: "",
        memberNo: 0,
        nickname: "",
        point: 0,
        pwd: "",
        stateMent: ""
      },
      passwordSchema: new PV(),
      error: {
        password: false
      },
      isSubmit: false
   };
 },

};
</script>

<style>

</style>