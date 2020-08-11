<template>
  <div>
      <ProfileHeader />
      <ProfileInfo headerTitle="상태 메세지" />
      <ProfileBody />
      <button @click="kakaoLogout">로그아웃</button>
      <Footer />
  </div>
</template>

<script>
import ProfileBody from "../../components/profile/ProfileBody.vue";
import ProfileHeader from "../../components/profile/ProfileHeader.vue";
import ProfileInfo from "../../components/profile/ProfileInfo.vue";
import Footer from "../../components/common/Footer.vue";
import "../../assets/css/components.scss";

export default {    
    name: "UserProfile",
    components: {
        ProfileHeader,
        ProfileInfo,
        ProfileBody,
        Footer,
    },
    created() {
        this.user = this.$session.get('user');
    },
    methods: {
        kakaoLogout() {
          this.$session.destroy();
          window.Kakao.API.request({
              url: '/v1/user/unlink',
              success: function(res) { console.log(res) },
              fail: function(err) { console.log(err) },
          })
          window.Kakao.Auth.logout(function() {
            alert('로그아웃 완료!')
          })
          this.$router.push("/");
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
        }
    }
} 
</script>

<style scoped>

</style>