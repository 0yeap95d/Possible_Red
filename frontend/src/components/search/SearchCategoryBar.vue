<template>
  <div class="text-center search-category">
    <v-btn small v-for="item in items" :key="item.categoryNo" class="ma-2 mx-1 jua" outlined color="indigo" @click="searchByCategory(item.categoryContent)">{{item.categoryContent}}</v-btn>
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
          //console.log(res.data)
          this.items = res.data
        },
        (error) => {
          console.error(error)
        }
      );
    },
    searchByCategory(category) {
      this.$router.push({
        name: "SearchByCategory",
        params: { category: category},
      });
    }
  },
  created() {
    this.getCategoryList()
  }
};
</script>

<style>
.search-category {
  margin: 0;
}
.jua{
    font-family: 'Jua', sans-serif;
}
.v-btn__content{
  color:black !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  border-color:black;
}
</style>