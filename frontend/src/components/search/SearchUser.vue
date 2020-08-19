<template>
  <div>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-avatar>
          <v-img :src="memberList.memberPhoto"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="font-family: 'Jua', sans-serif;">{{memberList.nickname}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">{{ icons.mdiAccount }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <!-- <p>검색되는 사용자 닉네임 : {{this.memberList.nickname}}</p>
    <hr> -->
  </div>
</template>

<script>
import HeaderComponent from "../common/Header";
import { mdiAccount } from '@mdi/js';
export default {
  name: "SearchUser",
  props:{
    memberList:Array,
  },
  created(){
    console.log(this.list.memberNo)
    console.log(this.memberList);
    if (this.memberList.pwd != "") {
      this.imageSplit = this.memberList.memberPhoto.split("/");
      this.index = this.imageSplit.length - 1;
      this.memberList.memberPhoto = this.imagePath + this.imageSplit[this.index];
    }
  },
  components: {
  },
  data() {
    return {
      items: [
        { active: true, title: 'Jason Oner', avatar: 'http://i3d201.p.ssafy.io:8080/profile/' },
        // { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        // { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        // { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
      ],
      icons: {
        mdiAccount,
      },
      imagePath: "http://i3d201.p.ssafy.io:8080/profile/",
      index: 0,
      imageSplit: [],
    }  
  },
}
</script>

<style>

</style>