<template>
  <div class="wrapC">
    <v-card class="mx-auto" v-for="mission in missions" :key="mission.etag" :item="mission">
      <v-img class="white--text align-end" height="200px" src="../../assets/images/조깅.jpg"></v-img>

      <v-card-subtitle
        class="pb-0"
      >{{$moment(mission.startDate).format('YYYY-MM-DD')}} ~ {{$moment(mission.endDate).format('YYYY-MM-DD')}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{mission.missionTitle}}</div>

        <div>{{mission.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="gotomissiondetail(mission.missionNo)">자세히</v-btn>

        <v-btn color="orange" text>신청하기</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "MissionItem",
  props: {
    missions: Array,
  },
  data() {
    return {
      start: "",
      end: "",
    };
  },
  methods: {
    gotomissiondetail(num) {
      this.$router.push({
        name: "MissionDetail",
        params: {
          // 미션 넘버 넘기기
          num: num,
        },
      });
    },
  },
};
</script>
<style>
.mx-auto.v-card.v-sheet.theme--light {
  margin-bottom: 30px;
}
</style>