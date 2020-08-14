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
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" style="font-family: 'Jua', sans-serif;"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">{{ icons.mdiAccount }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-tab-item>

        <v-tab-item :key="item2">
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" style="font-family: 'Jua', sans-serif;"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-tab-item>

      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { mdiAccount } from '@mdi/js';
import FollowApi from "../../api/FollowApi";

export default {
  name: "ProfileFollow",
  components: {
  },
  created() {
    this.user = this.$session.get('user');
    this.getFollowing(this.user.memberNo)
    
  },
  methods: {
    getFollower(num) {
      FollowApi.requestAllFollowerByNo(
        num,
        (res) => {
          console.log(res.data)
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
        },
        (error) =>{
          console.log(error)
        }

      )
    }
  },
  data() {
    return {
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
    }  
  },
}
</script>

<style>
</style>