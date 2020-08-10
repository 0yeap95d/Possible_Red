<template>
  <div class="wrapC">
    <v-card class="mx-auto">
      <v-img class="white--text align-end" height="200px" src="../../assets/images/조깅.jpg">
        <v-card-title>{{mission.missionTitle}}</v-card-title>
      </v-img>

      <v-card-subtitle
        class="pb-0"
      >{{$moment(mission.startDate).format('YYYY-MM-DD')}} ~ {{$moment(mission.endDate).format('YYYY-MM-DD')}}</v-card-subtitle>
      <v-card-text>참여인원 : {{mission.joinMem}}명 중 7명</v-card-text>

      <v-card-text class="text--primary">
        <div></div>

        <div>커트라인 :{{mission.cutCnt}}</div>
        <div>배당 포인트 :{{mission.point}}</div>
        <div>차감 포인트 :{{mission.minusPoint}}</div>
        <div>방장 :{{mission.memberNo}}</div>
        <div>방장 :{{mission.master}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>신청하기</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "MissionDetailCard",
  props: {
    mission: Object,
  },
};
</script>