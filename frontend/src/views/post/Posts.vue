<template>
  <div>
      <Navbar />
      <Posting 
        v-for="lists in lists"
        :key="lists"
        :lists="lists"
      />
      <infinite-loading @infinite="infiniteHandler" spinner="default"></infinite-loading>
      <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'
import Posting from '../../components/post/Posting.vue'
import Footer from '../../components/common/Footer.vue'
import PostApi from '../../api/PostApi'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    name:'Posts',
    components:{
      Navbar,
      Posting,
      Footer,
      InfiniteLoading,
    },
    methods: {
      infiniteHandler($state){
        setTimeout(() => {
          const temp = [];
                for (let i = this.limit; i < this.limit + 5; i++) {
                  console.log(i)
                  temp.push(this.posts[i]);

                }
                this.limit += 5;
                this.lists = this.lists.concat(temp);
                console.log(this.lists)
                $state.loaded();
                if(this.lists[this.limit-1] == null){
                  $state.complete();
                }
        }, 2000);
      },
    },
    created() {
      console.log(this.data);
      PostApi.requestSelectPost(
        res => {
          console.log(res);
          console.log("success");
          this.posts=res.data;
        },
        error => {
          console.log("error");
        }
      )
    },
    data() {
      return {
        posts: [],
        lists: [],
        limit: 0
      }
    }
}
</script>

<style>

</style>