<template>
  <div>
    <SearchBar />
    <Footer />
  </div>
</template>

<script>
import SearchBar from "../../components/common/Searchbar.vue";
import Footer from "../../components/common/Footer.vue";
import "../../components/css/user.scss";

export default {
  name: 'Search',
  data() {
    return {
      
    }
  },
  components: {
    SearchBar,
    Footer,
  },
}
</script>

<style>

</style>