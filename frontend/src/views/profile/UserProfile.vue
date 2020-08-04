<template>
  <div>
      <ProfileHeader />
      <ProfileInfo headerTitle="상태 메세지" />
      <ProfileBody />
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