<template>
  <div class="wrapC">
    <v-app>
      <v-card class="mx-auto">
        <v-img class="white--text align-end" height="200px" src="../../assets/images/조깅.jpg"></v-img>
      
        <v-card-subtitle
          class="pb-0 jua"
        >{{$moment(mission.startDate).format('YYYY-MM-DD')}} ~ {{$moment(mission.endDate).format('YYYY-MM-DD')}}</v-card-subtitle>
        <v-card-text class="jua">참여인원 : {{mission.joinMem}}명 중 {{entryNum}}명</v-card-text>

        <v-card-text class="text--primary">
          <div class="jua">커트라인 : {{mission.cutCnt}}</div>
          <div class="jua">배당 포인트 : {{mission.point}}</div>
          <div class="jua">차감 포인트 : {{mission.minusPoint}}</div>
          <div class="jua">방장 : {{mission.master}}</div>
        </v-card-text>

        <v-card-actions
          v-if="getCookie(mission.startDate,mission.endDate,$moment().format('YYYY-MM-DD'))"
        >
          <v-btn
            color="#FF4081"
            text
            style="font-size:medium"
            @click="entryJoin(mission.memberNo, user.memberNo, mission.missionNo)"
          >신청하기</v-btn>

          <v-btn
            v-if="isSame(user.memberNo, mission.memberNo)"
            color="#FF4081"
            text
            style="font-size:medium"
            @click="gotomodify(mission.missionNo)"
          >수정하기</v-btn>
         
        </v-card-actions>
      </v-card>
    
      <!-- 미션에 해당하는 post 불러오기 --> 
      <p class="jua" style="text-align:center;">{{mission.missionTitle}}'s POST</p>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="post in posts"
          :key="post.etag"
          class="jua"
        >
          <v-expansion-panel-header>
           {{$moment(post.postDate).format("YYYY-MM-DD")}}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{  post.postContent }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      
    </v-app>
  </div>  
</template>
<script>
import EntryApi from "../../api/EntryApi.js";
import PostApi from "../../api/PostApi";


export default {
  name: "MissionDetailCard",
  props: {
    mission: Object,
    num: Number,
  },
  created() {
    this.user = this.$session.get("user");
    

    PostApi.requestPostByMission(
          this.num,
          (res) => { this.posts = res.data; console.log(this.posts) },
          
          (error) => { console.log("error") }
        );
    console.log("제바아아아아앙아아알")
    
  },
  beforeMount() {
    EntryApi.requestEntryCountByMissionNo(
      this.mission.missionNo,
      (res) => {
        this.entryNum = res.data;
        console.log(this.entryNum);
      },
      (error) => {}
    );
    //console.log("==============="+this.posts)
  },
  data() {
    return {
      posts: [],
      user: {
        // 현재 로그인한 유저 정보
        email: "",
        memberNo: 0,
        nickname: "",
        point: 0,
        pwd: "",
        stateMent: "",
      },
      entryNum: 0,
      
    };
  },
  methods: {
    gotomodify(num) {
      this.$router.push({
        name: "MissionModify",
        params: {
          // 미션 넘버 넘기기
          num: num,
        },
      });
    },
    isSame(itsMe, writer) {
      // console.log("잇츠미 : " + itsMe + " writer : " + writer);
      if (itsMe == writer) {
        // console.log("내가 쓴 글입니다.");
        return true;
      } else {
        // console.log("내가 쓴 글이 아닙니다");
        return false;
      }
    },
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
                // console.log("엔트리 등록 완료");
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
        //console.log("쿠키있음");
        return true;
      } else if (eDate < today) {
        //console.log("쿠키없음");
        return false;
      }
    },
  },
};
</script>
<style>
.jua {
  font-family: "Jua", sans-serif;
  font-size: medium;
}
.v-expansion-panel{
  margin-bottom:30px;
}
.v-application--wrap{
  background-color:whitesmoke;
}
.v-expansion-panel-content__wrap{
  font-family: "Jua", sans-serif;
  color:rebeccapurple
}
</style>
