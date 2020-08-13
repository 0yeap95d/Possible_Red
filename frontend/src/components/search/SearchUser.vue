<template>
  <div>
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
  </div>
</template>

<script>
import HeaderComponent from "../common/Header";
import { mdiAccount } from '@mdi/js';
export default {
  name: "SearchUser",
  components: {
  },
  data() {
    return {
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