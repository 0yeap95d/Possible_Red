<template>
  <div>
      <ProfileHeader></ProfileHeader>
      <ProfileInfo headerTitle="user.nickname"></ProfileInfo>
      <ProfileBody></ProfileBody>
      <Footer></Footer>
  </div>
</template>

<script>
import ProfileBody from "../../components/profile/ProfileBody.vue";
import ProfileHeader from "../../components/profile/ProfileHeader.vue";
import ProfileInfo from "../../components/profile/ProfileInfo.vue";
import Footer from "../../components/common/footer.vue";
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