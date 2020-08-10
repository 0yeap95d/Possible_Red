<template>
  <div>
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
      <SearchCategoryBar />
      </v-card-text>
        <v-divider></v-divider>
        <v-expand-transition>
        <v-list v-if="model" class="red lighten-3">
            <v-list-item
            v-for="(field, i) in fields"
            :key="i"
            >
            <v-list-item-content>
                <v-list-item-title v-text="field.value"></v-list-item-title>
                <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-expand-transition>
        <v-card-actions class="search-space">
        <v-spacer></v-spacer>
        <v-btn
            :disabled="!model"
            color="grey darken-3"
            @click="model = null"
        >
            Clear
            <v-icon right>mdi-close-circle</v-icon>
        </v-btn>
        </v-card-actions>
    </v-card>
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
    computed: {
      fields () {
        if (!this.model) return []
        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description
          return Object.assign({}, entry, { Description })
        })
      },
    },
    watch: {
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return
        // Items have already been requested
        if (this.isLoading) return
        this.isLoading = true
        // Lazily load input items
        fetch('https://api.publicapis.org/entries')
          .then(res => res.json())
          .then(res => {
            const { count, entries } = res
            this.count = count
            this.entries = entries
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
    components: {
    SearchCategoryBar,
  },
  }
</script>
<style scoped>
  .v-card__title.headline.red.lighten-3{
    color:white;
  }
  .v-application .red.lighten-3{
      background-color:#80DEEA !important;
  }
  .v-card.v-sheet.theme--dark.red.lighten-2{
      background-color:#26C6DA !important;
  }
  .search-space {
    margin: 0;
  }
</style>