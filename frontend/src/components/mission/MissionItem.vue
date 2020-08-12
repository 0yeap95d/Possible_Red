<template>
  <div class="wrapC">
    <v-card class="mx-auto" v-for="mission in missions" :key="mission.etag" :item="mission">
      <!-- 머여 : {{mission.start}} -->
      <i v-if="mission.start" class="fas fa-cookie">🍪</i>
      <i v-else class="fas fa-cookie-bite">{{mission.isStart}}</i>

      <v-img class="white--text align-end" height="200px" src="https://picsum.photos/400"></v-img>

      <v-card-text class="text--primary">
        <div class="jua">미션타이틀 : {{ mission.missionTitle }}</div>
        <div class="jua">참가할 멤버 : {{ mission.joinMem }}</div>
        <div
          class="jua"
        >{{ $moment(mission.startDate).format('YYYY-MM-DD') }} ~ {{ $moment(mission.endDate).format('YYYY-MM-DD') }}</div>
      </v-card-text>
      <v-card-subtitle class="pb-0">멤버넘버 : {{ mission.memberNo }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="#1A237E" text @click="gotomissiondetail(mission.missionNo)">자세히</v-btn>

        <v-btn color="pink" text>신청하기</v-btn>
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
<style >
.mx-auto.v-card.v-sheet.theme--light {
  margin-bottom: 30px;
}
.jua {
  font-family: "Jua", sans-serif;
}
.v-btn__content {
  font-family: "Jua", sans-serif;
}
.v-responsive__content {
  background: transparent !important;
}
</style>