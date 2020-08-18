<template>
  <div class="wrapC p-0">
    <v-card style="box-shadow: none; padding-top:3%">
      <v-tabs
        background-color="white"
        color="deep-purple accent-4"
        centered
      >
        <v-tab :key="item1" style="font-family: 'Jua', sans-serif;">
          팔로워
        </v-tab>

        <v-tab
          :key="item2" style="font-family: 'Jua', sans-serif;">
          팔로잉
        </v-tab>

        <v-tab-item :key="item1">
          <v-list>
            <v-list-item
              v-for="item in followers"
              :key="item.nickname"
              @click="toProfile(item.memberNo)"
            >
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.nickname" style="font-family: 'Jua', sans-serif;"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-tab-item>

        <v-tab-item :key="item2">
          <v-list>
            <v-list-item
              v-for="item in followings"
              :key="item.nickname"
            >
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.nickname" style="font-family: 'Jua', sans-serif;"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-bottom-navigation v-model="bottomNav" black shift>
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
  </div>
</template>

<script>
import { mdiAccount } from '@mdi/js';
import FollowApi from "../../api/FollowApi";
import UserApi from "../../api/UserApi";

export default {
  name: "ProfileFollow",
  created() {
    this.user = this.$session.get('user');
    this.getFollowing(this.user.memberNo);
    this.getFollower(this.user.memberNo);
  },
  methods: {
    getFollower(num) {
      FollowApi.requestAllFollowerByNo(
        num,
        (res) => {
          console.log(res.data)
          for ( let i in res.data ){ 
            UserApi.requestMemberByNo(
              res.data[i].me,
              (res) => {
                console.log(res.data)
                this.followers.push(res.data)
              },
              (error) => {
                console.log(error)
              }
            )
          }
        },
        (error) =>{
          console.log(error)
        }

      )
    },
    getFollowing(num) {
      FollowApi.requestAllFollowingByNo(
        num,
        (res) => {
          console.log(res.data)
          for ( let i in res.data ){
            UserApi.requestMemberByNo(
              res.data[i].you,
              (res) => {
                console.log(res.data)
                this.followings.push(res.data)
              },
              (error) => {
                console.log(error)
              }
            )
          }
        },
        (error) =>{
          console.log(error)
        }

      )
    },
    toProfile(num){
      this.$router.push({
        name: "OtherProfile",
        params: { 
          num: num, 
        },
      });
    },
    post() {
      this.$router.push("/posts");
    },
    mission() {
      this.$router.push("/missionmain");
    },
    writing() {
      this.$router.push("/add");
    },
    search() {
      this.$router.push("/search");
    },
    profile() {
      this.$router.push("/profile");
    },
  },
  data() {
    return {
      active_tab : "",
      user: {
        email: "",
        memberNo: 0,
        memberPhoto: "",
        nickname: "",
        point: 0,
        pwd: "",
        stateMent: ""
      },
      items: [
        { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
      ],
      icons: {
        mdiAccount,
      },
      followers: [],
      followings: []
    }  
  },
}
</script>

<style>
</style>