<template>
  <div class="pt-0">
    <v-card
        color="red lighten-2"
        dark
    >
      <v-card-text>
      <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          label=""
          placeholder="검색 방법 : 포스트내용, @사용자, #해시태그"
          prepend-icon="mdi-database-search"
          return-object
      ></v-autocomplete>
      </v-card-text>
    </v-card>
    <SearchCategoryBar />
  </div>
</template>

<script>
import SearchCategoryBar from "./SearchCategoryBar.vue";

  export default {
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    components: {
    SearchCategoryBar,
  },
  }
</script>
<style scoped>
  .v-card__text{
    padding-top: 0;
    padding-bottom: 0;
  }
  .v-card__title.headline.red.lighten-3{
    color:white;
  }
  
  .v-card.v-sheet.theme--dark.red.lighten-2{
    background:linear-gradient(to bottom , #f48fb1, #3949ab) !important;
  }
  .v-text-field{
    margin-top: 0;
  }
  .search-space {
    margin: 0;
  }
  .jua{
    font-family: 'Jua', sans-serif;
  }
</style>