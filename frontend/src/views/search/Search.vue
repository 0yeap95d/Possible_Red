<template>
  <div class="wrap search-pg">
    <v-app>
      <SearchBar class="search-bar" @search-items="searching" :isSearching="isSearching"/>
      <SearchPost v-show="isPost" 
                
                 v-for="list in list"
                  :key="list"
                  :list="list"/>

      <SearchUser v-show="isUser" 
      
                 v-for="memberList in memberList"
                  :key="memberList"
                  :memberList="memberList"
                  />

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
    </v-app>
  </div>
</template>

<script>
import "../../components/css/user.scss";
import "../../components/css/style.css";
import SearchBar from "../../components/search/Searchbar.vue";
import SearchPost from "../../components/search/SearchPost.vue";
import SearchUser from "../../components/search/SearchUser.vue";
import SearchApi from "../../api/SearchApi";

export default {
  name: "Search",
  data() {
    return {
      isPost:false,
      isUser:false,
      isSearching:false,
      searchItem: {
        type: null,
        keyword: null,
      },
      list : [],
      memberList: []
    };
  },
  components: {
    SearchBar,
    SearchPost,
    SearchUser,
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
    searching(data){
      console.log(data)
      this.searchItem = data
      if ((this.searchItem.type=="post") | (this.searchItem.type=="hashtag") ){
        this.isPost = true;
        this.isUser = false;
        this.isSearching = true;
        // console.log(this.searchItem);
        SearchApi.requestPostBySearch(
              this.searchItem.keyword,
              (res) => {
                console.log("post!")
                this.list = res.data;
                console.log(this.list)
              },
              (error) => {
                console.log("error!")
              }
            )
      } else if (this.searchItem.type == "user") {
        this.isPost = false;
        this.isUser = true;
        this.isSearching = true;
        SearchApi.requestMemberBySearch(
              this.searchItem.keyword,
              (res) => {
                console.log("user!")
                this.memberList = res.data;
                console.log(this.memberList)
              },
              (error) => {
                console.log("error!")
              }
        )
      } else if (this.searchItem.type == "none") {
        this.isPost = false;
        this.isUser = false;
        this.isSearching = false;
      } else {
        this.isPost = false;
        this.isUser = false;
        this.isSearching = false;
      }      
    },
  }
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 1%;
}

.v-bottom-navigation{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
}
</style>