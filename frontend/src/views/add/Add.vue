<template>
  <v-app>
    <v-card style="margin-bottom: 10rem; box-shadow: none;">
      <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab :key="item1">
        미션
      </v-tab>

      <v-tab
        :key="item2">
        인증
      </v-tab>

      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          :key="item1"
        >
          <v-card flat>
          <v-card-text>
              <MissionAdd />
          </v-card-text>
          </v-card>
      </v-tab-item>

        <v-tab-item
          :key="item2"
        >
          <v-card flat>
          <v-card-text>
              <PostAdd />
          </v-card-text>
          </v-card>
        </v-tab-item>


      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
import MissionAdd from '../../components/add/MissionAdd.vue'
import PostAdd from '../../components/add/PostAdd.vue'

export default {
    data () {
        return {
        tab: null,
        }
    },
    components:{
        MissionAdd,
        PostAdd,
    }
}
</script>

<style>
</style>
