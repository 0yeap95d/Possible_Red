<template>
  <div>
      <Navbar />
      <Posting />
      <Posting />
      <Posting />
  </div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'
import Posting from '../../components/common/Posting.vue'

export default {
    name:'Posts',
    components:{
      Navbar,
      Posting,
    },
}
</script>

<style>

</style>