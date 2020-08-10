<template>
  <div>
    <div class="wrapC">
      <div class="wrap components-page p-1">
        <HeaderComponent :headerTitle="category" :isBack="true" />
      </div>
    </div>
    <!-- <v-btn small v-for="item in items" :key="item.missionNo" class="ma-2 mx-1" outlined color="indigo">{{item.missionTitle}}</v-btn> -->
    <MissionCards />
  </div>
</template>

<script>
import "../../components/css/user.scss";
import HeaderComponent from "../../components/common/Header.vue";
import MissionCards from "../../components/search/SearchMissionCard.vue";
import SearchApi from "../../api/SearchApi.js";

export default {
    name: "SearchByCategory",
    components : {
      HeaderComponent,
      MissionCards,
    },
    data() {
      return {
        category: String,
        items: [],
      }
    },
    method: {

    },
    created() {
      this.category = this.$route.params.category;
      console.log(this.category)

      SearchApi.requestMissionByCategory(
        this.category,
        (res) => {
          this.items = res.data
        },
        (error) => {
          console.error(error)
        })
    },
}
</script>

<style>

</style>