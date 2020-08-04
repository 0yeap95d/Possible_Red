<template>
  <div>
      <Navbar />
      <Posting />
      <Posting />
      <Posting />
      <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'
import Posting from '../../components/common/Posting.vue'
import Footer from '../../components/common/Footer.vue'

export default {
    name:'Posts',
    components:{
      Navbar,
      Posting,
      Footer,
    },
}
</script>

<style>

</style>