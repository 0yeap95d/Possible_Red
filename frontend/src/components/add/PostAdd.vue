<!-- https://kanetami.tistory.com/97 -->
<template>
  <div class="wrapC">

    <div class="form-wrap post-adds">
      <div class="wrap components-page p-0">
        <select class="select-component jua">
          <option :value="null" disabled selected>게시글을 올릴 미션을 선택하세요</option>
          <option v-for="target in options" :value="target" :key="target.value">
            {{target.title}}
          </option>
        </select>
      </div>

      <div class="filebox jua"> 
        <input class="upload-name" :value="postImg.name" disabled="disabled"> 
        <label for="ex_filename">업로드</label> 
        <input id="ex_filename" class="upload-hidden" v-on:change="fileSelect()" type="file" ref="postImg"> 
        <div v-if="postImg">
          <img :src="preView" class="pre_view"/>
        </div>
      </div>

      <div class="wrap components-page p-0">
        <div class="textarea-wrap jua">
          <h4 class="jua">게시글 작성하기</h4>
          <span class="jua">{{post.postContent.length}}/{{this.maxLength}}</span>
          <textarea v-model="post.postContent" placeholder="내용을 입력하세요"/>
        </div>
      </div>
      
      <div>
        <button class="submit_button btn-bottom" @click="postRegister">인증하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import MissionApi from "../../api/MissionApi"; // 멤버넘버별 포스트 받아오기
import PostApi from "../../api/PostApi";

export default {

  watch:{
    'post.postContent' : function(value){
      let length = this.maxLength;
      value = value.length > length ? value.substr(0, length) : value;
      this.post.postContent = value;
    }
  },

  created() {
    console.log("포스트Add 유저 넘버 : " + this.$session.get("user").memberNo);
    this.post.memberNo = this.$session.get("user").memberNo;

    //지금 접속해 있는 사람의 아이디를 기반으로 참여하고있는 미션 리스트 가져오기
    MissionApi.requestMissionByMember(
      this.post.memberNo,
      (res) => {
        // 연결 성공하면 여기로 와서 리스트 뽑아냄
        this.missionList = res.data;

        for (let i in this.missionList) {
          let option = {
            value: this.missionList[i].missionNo,
            title: this.missionList[i].missionTitle
          }
          this.options.push(option);
        }
      },
      (error) => {}
    );
  },
  data() {
    return {
      post: {
        postNo: 0,
        memberNo: 0,
        // postDate: Object,
        postPhoto: "",
        postContent: "",
        missionNo: 0,
        postImg: "",
      },
      postImg: "",
      missionList: [],
      preView: "",

      maxLength: 25,

      options: [],
    };
  },
  methods: {
    postRegister() {
      console.log("이미지 " + this.postImg);
      this.post.postImg = this.postImg;
      var formData = new FormData();

      formData.append("postImg", this.postImg);
      formData.append("memberNo", this.post.memberNo);
      formData.append("postContent", this.post.postContent);
      formData.append("missionNo", this.post.missionNo);


      console.log(this.post.postContent);

      // PostApi.requestInsertPost(
      //   formData,
      //   (res) => { this.$router.push("/posts"); },
      //   (error) => {}
      // );
    },

    fileSelect() {
      
      this.postImg = this.$refs.postImg.files[0];
      console.log("here");
      console.log(this.postImg);
      // 미리보기
      this.preView = URL.createObjectURL(this.$refs.postImg.files[0]);
    },
  },
};
</script>

<style>
.submit_button {
  margin-bottom: 3rem;
}
.post-adds {
  margin-bottom: 7.5rem;
}
.jua{
  font-family: 'Jua', sans-serif;
}
.jua_small{
  font-size:medium;
  font-family: 'Jua', sans-serif;
}
#postContent{
  text-align:center;
  float:left;
  margin:10% 10%;
}

.filebox {
  margin-bottom: 10px;
}

.filebox input[type="file"] { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip:rect(0,0,0,0); 
  border: 0; 
} 

.filebox label { 
  height: 100%; 
  margin-left: 5px; 
  margin-bottom: 0;
  display: inline-block; 
  padding: .5em .75em; 
  color: rgb(255, 255, 255); 
  font-size: inherit; 
  line-height: normal; 
  vertical-align: middle; 
  background-color: #8e5dff; 
  cursor: pointer; 
  border: 1px solid #ebebeb; 
  border-bottom-color: #e2e2e2; 
  border-radius: .25em; 
} /* named upload */ 

.filebox .upload-name { 
  width: 70%;
  display: inline-block; 
  padding: .5em .75em; /* label의 패딩값과 일치 */ 
  font-size: inherit; 
  font-family: inherit; 
  line-height: normal; 
  vertical-align: middle; 
  background-color: #ebebeb; 
  border: 1px solid #ebebeb; 
  border-bottom-color: #e2e2e2; 
  border-radius: .25em; 
  -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
  -moz-appearance: none; 
  appearance: none; 
  }

  .pre_view {
    width: 100%;
    height: 100%;
  }

</style>
