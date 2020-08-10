<template>
  <div>
    <v-btn small v-for="item in items" :key="item.missionNo" class="ma-2 mx-1" outlined color="indigo">{{item.missionTitle}}</v-btn>
  </div>
</template>

<script>
import SearchApi from "../../api/SearchApi.js";

export default {
    name: "SearchByCategory",
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