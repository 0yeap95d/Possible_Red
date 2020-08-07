<template>
  <div class="text-center">
    <v-btn small v-for="item in items" :key="item.tab" class="ma-2 mx-1" outlined color="indigo">{{item.tab}}</v-btn>
  </div>
</template>

<script>
export default {
  data () {
  return {
    items: [
      { tab: 'One', content: 'Tab 1 Content' },
      { tab: 'Two', content: 'Tab 2 Content' },
      { tab: 'Three', content: 'Tab 3 Content' },
      { tab: 'Four', content: 'Tab 4 Content' },
      { tab: 'Five', content: 'Tab 5 Content' },
      ],
    }
  }
};
</script>

<style>
</style>