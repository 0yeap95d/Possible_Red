<template>
  <div class="text-center search-category">
    <v-btn small v-for="item in items" :key="item.categoryNo" class="ma-2 mx-1" outlined color="indigo">{{item.categoryContent}}</v-btn>
  </div>
</template>

<script>
import SearchApi from "../../api/SearchApi.js";

export default {
  data () {
  return {
    items: [],
    }
  },
  methods: {
    getCategoryList() {
      SearchApi.requestCategory(
        (res) => {
          console.log(res.data)
          this.items = res.data
        },
        (error) => {
          console.error(error)
        }
      );
    },
  },
  created() {
    this.getCategoryList()
  }
};
</script>

<style>
.search-category {
  margin-top: 1rem;
  margin-bottom: 5rem;
}
</style>