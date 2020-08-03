<template>
  <div class="user" id="findpwd">
    <div class="wrapC">
      <h1>
        계정 설정
      </h1>

      <div class="input-with-label">
        <input
          id="email"
          v-model="user.email"
          placeholder="이메일을 입력하세요."
          type="text"
        />
        <label for="email">이메일</label>

        <!-- 이메일 변경 불가 -->
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
          placeholder="패스워드"
          type="password"
        />
        <label for="password">패스워드</label>
        
        <!-- 패스워드 유효성체크 -->
        <!-- <div class="error-text" v-if="error.email">{{error.email}}</div> -->
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

      <div class="text-center">
        <button class="btn btn-warning" @click="updateUser">수정하기</button>
        <button class="btn btn-primary">돌아가기</button>
      </div>

    </div>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import * as EmailValidator from "email-validator";
import UserApi from "../../api/UserApi";


export default {
 name: "ChangeUser",

 created() {
   this.user = this.$session.get('user');
 },

 watch: {
    email: function(v) {
      this.checkForm();
    }
  },

  methods: {
    updateUser() {
      console.log(this.user);
      UserApi.requestUpdate(
        this.user,
        res => {
          console.log(res);
          if (res.data === "success") {
            console.log("modify user success");
          } else {
            console.log("modify user fail")
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
      }
   };
 },

};
</script>

<style>

</style>