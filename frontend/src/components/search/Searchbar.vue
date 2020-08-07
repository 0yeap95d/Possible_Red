<!--
  구현해야 할 작업
    1. 서치 바 클릭하면 카탈로그 없어지기 => search.vue에서 하면 됨
    2. 서치바에 들어온 단어 search API로 보내기
-->
<template>
  <div>
    <b-form-tags no-outer-focus class="mb-2">
      <!--template v-slot="{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }"-->
      <b-input-group class="mb-2">
        <b-form-input
          @keyup.enter="searchByKeyword()"
          v-model="keyword"
          placeholder="검색 방법 : 포스트내용, @사용자, #해시태그"
          class="form-control"
        ></b-form-input>
        <b-input-group-append>
          <b-button class="btn-search" @click="searchByKeyword()" variant="primary">🔍</b-button>
        </b-input-group-append>
      </b-input-group>
      <!--div class="d-inline-block" style="font-size: 1.5rem;">
            <b-form-tag
              v-for="tag in tags"
              @remove="removeTag(tag)"
              :key="tag"
              :title="tag"
              :variant="tagVariant"
              class="mr-1"
            >{{ tag }}</b-form-tag>
      </div-->
      <!--/template-->
    </b-form-tags>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchByKeyword() {
      if (!this.keyword) {
        alert("검색할 단어를 입력해주세요!");
        return;
      }
      console.log(this.keyword);
      //Api 만든걸로 바로 넣어주면됨!
    },
  },
};
</script>

<style>
.btn-search {
  height: 100%;
  box-shadow: none;
}
</style>