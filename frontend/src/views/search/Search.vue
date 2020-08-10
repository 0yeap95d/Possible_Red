<template>
  <div class="wrap search-pg">
    <v-app>
      <SearchBar2 class="search-bar"/>
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
    </v-app>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import "../../components/css/style.css";
import SearchBar2 from "../../components/search/Searchbar2.vue";

export default {
  name: "Search",
  data() {
    return {};
  },
  components: {
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
.search-bar {
  margin-bottom: 3rem;
}

.v-bottom-navigation{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
}
</style>