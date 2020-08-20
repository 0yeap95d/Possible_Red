<template>
    <div class="wrapC">
      <v-app>
        <v-row justify="center">
          <v-col >
            <v-card>
              <v-list two-line>
                <template v-for="item in items">
                  <v-subheader
                    :key="item.missionTitle"
                    inset
                  >
                    {{ item.missionTitle }}
                  </v-subheader>
                    
                  <!--여기서 부터는 그 미션에 대한 포스터들  그래서 지우고 다시-->
                  <div v-for="(post, i) in item.post" :key="i">
                    <div v-if="item.post[i].memberNo == user.memberNo">
                      <v-list-item
                        ripple
                        @click="postdetail(item.post[i].postNo)"
                      >
                        
                        <v-list-item-avatar>
                          <img :src="item.post[i].postPhoto">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title v-html="item.post[i].postContent" class="jua"></v-list-item-title>
                        </v-list-item-content>
                        
                      </v-list-item>
                      <hr>
                      <br>
                    </div>
                  </div>
                    
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-app>
    </div>
</template>

<script>

  import PostApi from '../../api/PostApi'

  export default {
    name:"Post",
    props:{
      missions:Array,
    },
    created(){
      this.user = this.$session.get("user");

      for (var i in this.missions) {
        PostApi.requestPostByMission(
          this.missions[i].missionNo,
          (res) => {
            let item = {
              missionTitle: this.missions[i].missionTitle,
              post: res.data,
            }
            
            for (var j in item.post) {
              this.imageSplit = item.post[j].postPhoto.split("/");
              this.index = this.imageSplit.length - 1;
              item.post[j].postPhoto = this.imagePath + this.imageSplit[this.index];
            }

            this.items.push(item);
            console.log(this.items);
          },
          (error) => { console.log(error) }
        )
      }

      
    },
    data () {
      return {
        user:Object,
        items: [],

        imagePath: "http://i3d201.p.ssafy.io:8080/",
        index: 0,
        imageSplit: [],
      }
    },
    methods:{
      postdetail(num) {
        this.$router.push({
          name: "PostDetail",
          params: {
            num: num,
          },
        });
      },
    }
  }
</script>
<style>
.jua{
  font-family: 'Jua', sans-serif;
  font-size:large;
}
.v-list-item.v-list-item--link.theme--light{
  text-align:center;
}

</style>