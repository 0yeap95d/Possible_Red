<template>
  <div>
    <SearchBar />
    <SearchCategoryBar />
    <Footer />
  </div>
</template>

<script>
import SearchBar from "../../components/search/Searchbar.vue";
import SearchCategoryBar from "../../components/search/SearchCategoryBar.vue";
import Footer from "../../components/common/Footer.vue";
import "../../components/css/user.scss";

export default {
  name: "Search",
  data() {
    return {};
  },
  components: {
    SearchBar,
    SearchCategoryBar,
    Footer,
  },
};
</script>

<style>
</style>