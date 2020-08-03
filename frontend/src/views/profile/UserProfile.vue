<template>
  <div>
      <ProfileHeader></ProfileHeader>
      <ProfileInfo></ProfileInfo>
      <ProfileBody></ProfileBody>
      <Footer></Footer>
  </div>
</template>

<script>
import ProfileBody from "../../components/profile/ProfileBody.vue";
import ProfileHeader from "../../components/profile/ProfileHeader.vue";
import ProfileInfo from "../../components/profile/ProfileInfo.vue";
import Footer from "../../components/common/footer.vue";

export default {    
    name: "UserProfile",
    components: {
        ProfileHeader,
        ProfileInfo,
        ProfileBody,
        Footer,
    }
} 
</script>

<style>

</style>