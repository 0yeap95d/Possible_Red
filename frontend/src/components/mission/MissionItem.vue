<template>
  <div class="wrapC">
    <v-card class="mx-auto" v-for="mission in missions" :key="mission.etag" :item="mission">
      <i
        v-if="getCookie(mission.startDate,mission.endDate,$moment().format('YYYY-MM-DD'))"
        class="fas fa-cookie"
      ></i>
      <i v-else-if="mission.start" class="fas fa-cookie-bite"></i>

      <v-img class="white--text align-end" height="200px" src="https://picsum.photos/400"></v-img>

      <v-card-text class="text--primary">
        <div class="jua">미션타이틀 : {{ mission.missionTitle }}</div>
        <div class="jua">미션 넘버 ㅅㅂ : {{ mission.missionNo }}</div>
        <div class="jua">참가할 멤버 : {{ mission.joinMem }}</div>
        <div
          class="jua"
        >{{ $moment(mission.startDate).format('YYYY-MM-DD') }} ~ {{ $moment(mission.endDate).format('YYYY-MM-DD') }}</div>
      </v-card-text>
      <v-card-subtitle class="pb-0">멤버넘버 : {{ mission.memberNo }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="#1A237E" text @click="gotomissiondetail(mission.missionNo)">자세히</v-btn>

        <v-btn
          v-if="getCookie(mission.startDate,mission.endDate,$moment().format('YYYY-MM-DD'))"
          color="pink"
          text
          @click="entryJoin(mission.memberNo, user.memberNo, mission.missionNo)"
        >신청하기</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { now } from "moment";
import EntryApi from "../../api/EntryApi.js";
export default {
  name: "MissionItem",
  props: {
    missions: Array, // 전체 미션 리스트
  },
  created() {
    this.user = this.$session.get("user");
  },
  data() {
    return {
      user: {
        // 현재 로그인한 유저 정보
        email: "",
        memberNo: 0,
        nickname: "",
        point: 0,
        pwd: "",
        stateMent: "",
      },
      start: "",
      end: "",
    };
  },
  methods: {
    entryJoin(mNo, uNo, mm) {
      // 미션만든사람 멤버넘버, 지금 로그인한 사람 멤버넘버
      // 만약에 내가 만든 미션일경우 신청x
      if (mNo === uNo) {
        alert("내가 만든 미션은 자동으로 참가되었습니다.");
        return;
      }
      let data = {
        memberNo: uNo,
        missionNo: mm,
      };
      EntryApi.reqeustCanIJoinThisMission(
        data,
        (res) => {
          if (res.data === "success") {
            let entry = {
              memberNo: 0,
              missionNo: 0,
              reward: 0,
              nonCnt: 0,
            };
            entry.memberNo = uNo;
            entry.missionNo = mm;
            entry.reward = 0;
            entry.nonCnt = 0;
            EntryApi.requestEntryRegister(
              entry,
              (resentry) => {
                console.log("엔트리 등록 완료");
                alert("미션에 참여합니다");
              },
              (error) => {
                console.log("엔트리 등록 안됐음");
              }
            );
            this.$router.push("/mymission");
          } else {
            alert("이미 참여하고있는 미션입니다.");
          }
        },
        (error) => {}
      );
    },
    getCookie(sDate, eDate, today) {
      /*
        1. 시작날짜가 오늘날짜보다 이후이다 => 쿠키 있음 true
        2. 끝나는 날짜가 오늘날짜보다 이전이다 => 쿠키 없음 false
      */
      if (today < sDate) {
        console.log("쿠키있음");
        return true;
      } else if (eDate < today) {
        console.log("쿠키없음");
        return false;
      }
    },
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