<template>
  <div class="wrapC">
    <v-card class="mx-auto">
      <v-img class="white--text align-end" height="200px" src="../../assets/images/조깅.jpg">
        
      </v-img>

      <v-card-subtitle
        class="pb-0 jua"
      >{{$moment(mission.startDate).format('YYYY-MM-DD')}} ~ {{$moment(mission.endDate).format('YYYY-MM-DD')}}</v-card-subtitle>
      <v-card-text class="jua">참여인원 : {{mission.joinMem}}명 중 7명</v-card-text>

      <v-card-text class="text--primary">
        <div class="jua">커트라인 : {{mission.cutCnt}}</div>
        <div class="jua">배당 포인트 : {{mission.point}}</div>
        <div class="jua">차감 포인트 : {{mission.minusPoint}}</div>
        <div class="jua">방장 : {{mission.master}}</div>
      </v-card-text>

     
      <v-card-actions>
        <v-btn color="#FF4081" text style="font-size:medium" >신청하기</v-btn>
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
<style>

.jua{
  font-family: 'Jua', sans-serif;
  font-size:medium;
}

</style>
