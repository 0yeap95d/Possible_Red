<!-- https://vuejsexamples.com/simple-and-clean-calendar-written-in-vue-js/ -->
<template>
  <div>
    <div class="form-wrap mission-adds">
      <div class="input-with-label">
        <v-btn
          small
          v-for="cat in category"
          :key="cat.categoryNo"
          @click="toggleSwitch(cat.categoryNo)"
          class="ma-2 mx-1"
          color="indigo"
          outlined
        >
          <!-- 여기 밑에 버튼들 true/false 각각 색 다르게 해줘 -->
          <p v-if="isOn[cat.categoryNo]" text-color="red">{{cat.categoryContent}}</p>
          <p v-else background="red">{{cat.categoryContent}}</p>
        </v-btn>
      </div>

      <div class="input-with-label">
        <label for="missionTitle">미션 이름</label>
        <input
          v-model="mission.missionTitle"
          id="missionTitle"
          placeholder="미션 제목을 입력하세요."
          type="text"
        />
      </div>

      <div class="input-with-label">
        <label for="description">설명</label>
        <input
          v-model="mission.description"
          id="description"
          placeholder="미션을 간단하게 설명해주세요."
          type="text"
        />
      </div>

      <div class="input-with-label">
        <label>미션 수행 기간</label>
        <v-range-selector :start-date.sync="range.start" :end-date.sync="range.end" />
      </div>

      <div class="input-with-label">
        <label for="point">배당 포인트</label>
        <input v-model="mission.point" id="point" placeholder="미션 입장 포인트를 입력하세요." type="text" />
      </div>

      <div class="input-with-label">
        <label for="minusPoint">차감 포인트</label>
        <input
          v-model="mission.minusPoint"
          id="minusPoint"
          placeholder="미션 미수행시 차감될 포인트를 입력하세요."
          type="text"
        />
      </div>

      <div class="input-with-label">
        <label for="cutCnt">커트라인</label>
        <input v-model="mission.cutCnt" id="cutCnt" placeholder="최소 미션 미수행 숫자를 입력하세요." type="text" />
      </div>

      <div class="input-with-label">
        <label for="joinMem">참여 인원</label>
        <select v-model="mission.joinMem" id="joinMem">
          <option disabled value>미션 침여 인원을 설정하세요.</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <br />
      <br />
      <div>
        <button class="submit_button btn-bottom" @click="missionRegister">미션 등록하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import VRangeSelector from "../common/vl-range-selector";
import "../css/vuelendar.scss";
import MissionApi from "../../api/MissionApi.js";
import SearchApi from "../../api/SearchApi.js";

export default {
  components: {
    VRangeSelector,
  },
  created() {
    console.log(this.$session.get("user").memberNo);
    this.mission.memberNo = this.$session.get("user").memberNo;
    this.getCategoryList();
  },
  data() {
    return {
      mission: {
        missionTitle: "",
        startDate: "",
        endDate: "",
        isStart: false,
        memberNo: 0,
        point: 0,
        minusPoint: 0,
        cutCnt: 0,
        joinMem: 0,
        missionPhoto: "",
        missionCat: "",
        description: "",
      },
      range: {},
      category: [],
      isOn: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    toggleSwitch(num) {
      this.isOn[num] = !this.isOn[num];
      console.log(this.isOn);
    },
    getCategoryList() {
      SearchApi.requestCategory(
        (res) => {
          // console.log(res.data);
          this.category = res.data;
        },
        (error) => {
          console.error(error);
        }
      );
    },
    getDateFullString() {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate(); // 날짜
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      return year + "-" + month + "-" + date;
    },
    missionRegister() {
      this.mission.startDate = this.range.start;
      this.mission.endDate = this.range.end;
      console.log(this.mission);
      // 여기서 시작 날짜랑 오늘 날짜 비교해서 시작 == 오늘이면 isStart는 바로 true로 해주기
      let today = this.getDateFullString();
      console.log(today);
      console.log(this.mission.startDate);
      if (today == this.mission.startDate) {
        this.mission.isStart = true;
      }
      for (var i = 0; i < 10; i++) {
        if (this.isOn[i]) {
          this.mission.missionCat += i;
        }
      }
      console.log(this.mission.missionCat);
      MissionApi.requestMissionRegister(
        this.mission,
        (res) => {
          console.log("미션 등록 완료!");
          this.$router.push("/mymission");
        },
        (error) => {}
      );
    },
  },
};
</script>

<style>
.submit_button {
  margin-bottom: 3rem;
}
.mission-adds {
  margin-bottom: 7.5rem;
}
</style>
