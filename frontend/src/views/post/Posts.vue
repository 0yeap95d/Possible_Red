<template>
  <div>
      <Navbar />
      <Posting 
        v-for="posts in posts"
        :key="posts"
        :posts="posts"
      />
      <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
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
                // for (let i = this.posts.length + 1; i <= this.posts.length + 5; i++) {
                //   console.log(i)
                  // temp.push(i);
                // }
          if(temp.length){
            console.log(temp.length)
            this.posts = this.posts.concat(temp);
            console.log(this.posts)
            $state.loaded();
            console.log(this.posts.length/10)
            if(this.posts.length/10==0){
              $state.complete(); //데이터가 없으면 로딩 끝
            }
          } else {
            $state.complete();
          }
        }, 4000);
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
      console.log(this.$session.get("user"));

      console.log(this.data);
      PostApi.requestSelectPostByNo(
        res => {
          console.log(res);
          console.log("success");
          this.post=res.data;
        },
        error => {
          console.log("error");
        }
      )
      console.log(this.$session.get("user"));
    },
    data() {
      return {
        // link:"",
        // postContent:"",
        // postDate:"",
        posts: [],
        post: []
        // limit: 0
      }
    }
}
</script>

<style>

</style>