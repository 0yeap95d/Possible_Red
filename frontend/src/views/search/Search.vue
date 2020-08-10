<template>
  <div class="wrap">
    <SearchCategoryBar />
    <div class="wrapC">
      <SearchBar2 />
    </div>
    <v-bottom-navigation
        v-model="bottomNav"
        black
        shift
    >
        <v-btn @click="post">
        <span>POST</span>
        <v-icon>mdi-text</v-icon>
        </v-btn>

        <v-btn @click="mission">
        <span>Mission</span>
        <v-icon>mdi-clipboard</v-icon>
        </v-btn>

        <v-btn @click="writing">
        <span>Writing</span>
        <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn @click="search">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn @click="profile">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-bottom-navigation>

    
    <Footer />
  </div>
</template>

<script>
import SearchBar from "../../components/search/Searchbar.vue";
import SearchCategoryBar from "../../components/search/SearchCategoryBar.vue";
import "../../components/css/user.scss";
import "../../components/css/style.css";
import SearchBar2 from "../../components/search/Searchbar2.vue";

export default {
  name: "Search",
  data() {
    return {};
  },
  components: {
    SearchCategoryBar,
    SearchBar2,
  },
  methods:{
    post(){
        this.$router.push("/posts");
    },
    mission(){
        this.$router.push("/missionmain");
    },
    writing(){
        this.$router.push("/add");
    },
    search() {
        this.$router.push("/search");
    },
    profile(){
        this.$router.push("/profile");
    },
  }
};
</script>

<style scoped>
.v-bottom-navigation{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3rem;
}
</style>