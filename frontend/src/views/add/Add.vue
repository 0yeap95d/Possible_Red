<template>
  <div>
    <Navbar />
    <b-tabs content-class="mt-3">
        <b-tab title="미션">
            <MissionAdd class="p-3"></MissionAdd>
        </b-tab>
        <b-tab title="인증" active>
            <p>I'm the second tab</p>
            <PostAdd></PostAdd>
        </b-tab>
    </b-tabs>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/common/Navbar.vue";
import Footer from "../../components/common/Footer.vue";
import MissionAdd from "../../components/add/MissionAdd.vue";
import PostAdd from "../../components/add/PostAdd.vue";

export default {
    name: "Add",
    components: {
        Navbar,
        Footer,
        MissionAdd,
        PostAdd,
    },
}
</script>

<style>

</style>