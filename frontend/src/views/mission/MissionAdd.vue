<!-- https://vuejsexamples.com/simple-and-clean-calendar-written-in-vue-js/ -->
<template>
  <div>
    <Navbar />
    <h1>create mission</h1>
    <div class="form-wrap">
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

      <label for="joinMem">참여 인원</label>
      <div class="input-with-label">
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
        <button class="btn-bottom" @click="missionRegister">미션 등록하기</button>
      </div>
      <div>{{ this.range.start }}</div>
      <div>{{ this.range.end }}</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/common/Navbar.vue";
import Footer from "../../components/common/Footer.vue";
import VRangeSelector from "../../components/common/vl-range-selector";
import "../../components/css/vuelendar.scss";

export default {
  components: {
    Navbar,
    Footer,
    VRangeSelector,
  },
  created() {
    console.log(this.$session.get("user").memberNo);
    this.mission.memberNo = this.$session.get("user").memberNo;
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
      },
      range: {},
    };
  },
  methods: {
    missionRegister() {
      this.mission.startDate = this.range.start;
      this.mission.endDate = this.range.end;
      console.log(this.mission);
    },
  },
};
</script>

<style></style>
