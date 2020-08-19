<template>
  <div>
    <v-list>
      <v-list-item
        :member="memberList"
        @click="toProfile"
      >
        <v-list-item-avatar>
          <v-img :src="memberList.memberPhoto"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="font-family: 'Jua', sans-serif;">{{memberList.nickname}}</v-list-item-title>
        </v-list-item-content>

        <!-- <v-list-item-icon>
          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">{{ icons.mdiAccount }}</v-icon>
        </v-list-item-icon> -->
      </v-list-item>
    </v-list>
    <!-- <p>검색되는 사용자 닉네임 : {{this.memberList.nickname}}</p>
    <hr> -->
  </div>
</template>

<script>
import HeaderComponent from "../common/Header";
// import { mdiAccount } from '@mdi/js';
import UserApi from '../../api/UserApi';
export default {
  name: "SearchUser",
  props:{
    memberList:Object,
  },
  created(){
    this.user = this.$route.params.user;
    this.getMember(this.user.memberNo);
    if (this.memberList.pwd != "") {
      this.imageSplit = this.memberList.memberPhoto.split("/");
      this.index = this.imageSplit.length - 1;
      this.memberList.memberPhoto = this.imagePath + this.imageSplit[this.index];
    }
  },
  components: {
  },
  methods:{
    toProfile(other){
      console.log(this.memberList)
      this.$router.push({
        name: "OtherProfile",
        params: { 
          other: other, 
        },
      });
    },
  },
  data() {
    return {
      // items: [
      //   { active: true, title: 'Jason Oner', avatar: 'http://i3d201.p.ssafy.io:8080/profile/' },
        // { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        // { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        // { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      // ],
      // items2: [
      //     { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
      // ],
      // icons: {
      //   mdiAccount,
      // },
      imagePath: "http://i3d201.p.ssafy.io:8080/profile/",
      index: 0,
      imageSplit: [],
      // members: []
     
    }  
  },
}
</script>

<style>

</style>