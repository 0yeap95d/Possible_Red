<template>
  <div v-if="isPost">
    <p>포스트</p>
    <p>검색되는 포스트 내용이 뜹니다 -> {{list.postContent}}</p>
    <p>포스트를 작성한 memberNo가 뜹니다 -> {{list.memberNo}}</p>
    <p>해시태그 -> <span v-for="h in hashtagList" :key="h.hashtagNo">{{h.hashtagContent}}</span></p>
    <hr>
  </div>
  <div v-else-if="isHashtag">
    <p>해시태그</p>
    <p>검색되는 포스트 내용이 뜹니다 -> {{postList.postContent}}</p>
    <p>포스트를 작성한 memberNo가 뜹니다 -> {{postList.memberNo}}</p>
    <p>해시태그 -> {{list.hashtagContent}}</p>
  </div>
</template>

<script>
import PostApi from "../../api/PostApi";
import HashtagApi from "../../api/HashtagApi";

export default {
  name: 'SearchPost',
  props:{
    list:Object
  },
  data (){
    return {
      isPost: false,
      isHashtag: false,
      postList: [],
      hashtagList: []

    }
  },
  created(){
    //해시태그 기준 
    if (this.list.memberNo == null){
      this.isHashtag = true;
      this.isPost = false;
      PostApi.requestSelectPostByNo(
        this.list.postNo,
        (res) => {
          console.log(res.data)
          this.postList = res.data
        },
        (error) => {
          console.log("error")
        }
      )
    }
    // 포스트콘텐트 기준
    if (this.list.hashtagNo == null){
      this.isHashtag = false;
      this.isPost = true;
      HashtagApi.requestFindAllHastags(
        this.list.postNo,
        (res) => {
          console.log(res.data);
          this.hashtagList = res.data;
          console.log(this.hashtagList.hashtagContent)
        },
        (error) => {
          console.log("error")
        }
      )
    }
  }
}
</script>

<style>

</style>