<template>
    <div class="wrapC">
        
            <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-list two-line>
                    <template v-for="(item, index) in items">
                        <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        inset
                        >
                        {{ item.header }}
                        </v-subheader>

                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        inset
                        ></v-divider>

                        <v-list-item
                        v-else
                        :key="item.title"
                        ripple
                        @click="gotopostdetail"
                        >
                        <v-list-item-avatar>
                            <img :src="item.avatar">
                        </v-list-item-avatar>
                        <v-list-item-content>
                          
                            <v-list-item-title v-html="item.title" class="jua"></v-list-item-title>
                        </v-list-item-content>
                        
                        </v-list-item>
                        
                    </template>
                    </v-list>
                </v-card>
                </v-col>
            </v-row>
        
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            header: '조깅 매일 30분씩!',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: '조깅 3일차',
            
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: '조깅 2일차',
            
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: '조깅 1일차',
            
          },
          {
            header: '알고리즘 문제 매일 풀기!',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: '알고리즘 4일차',
            
          },
          {
            avatar: 'https://picsum.photos/250/300?image=146',
            title: '알고리즘 3일차',
            
          },
          {
            header: '금연 한달동안!',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: '금연 25일차',
            
          },
          {
            avatar: 'https://picsum.photos/250/300?image=839',
            title:
              '금연 24일차',
           
          },
          {
            avatar: 'https://picsum.photos/250/300?image=145',
            title: '금연 23일차',
            
          },
        ],
      }
    },
    methods:{
        gotopostdetail(){
            this.$router.push('/postdetail')
        }
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