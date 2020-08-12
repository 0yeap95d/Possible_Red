<template>
    <div class="wrapC">
        
            <v-col cols="12" sm="6" offset-sm="3">
                <v-card>
                <v-subheader :inset="inset" >희정's</v-subheader>

                <v-list>
                    <template v-for="(item, index) in items">
                    <v-list-item
                        v-if="item.active"
                        :key="item.title"
                        @click="gotomission"
                    >
                        <v-list-item-action class="mx-auto">
                          <v-img src= 'https://picsum.photos/400' alt="" ></v-img>
                          <br>
                          <v-list-item-title class="jua">{{ item.title }}</v-list-item-title>
                          <v-card-actions class="white justify-center">
                          <v-btn
                            v-for="(social, i) in socials"
                            :key="i"
                            :color="social.color"
                            class="white--text"
                            fab
                            icon
                            small
                          >
                            <v-icon>{{ social.icon }}</v-icon>
                          </v-btn>
                        </v-card-actions>
                        </v-list-item-action>

                        
                    </v-list-item>
                    
                    <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="inset"
                    ></v-divider>
                    </template>
                </v-list>

                
              </v-card>
            </v-col>
        
    </div>
</template>

<script>
  export default {
    data: () => ({
      inset: true,
      items: [
        {
          active: 'https://picsum.photos/400',
          title: '조깅 30분이상',
          not_participation_count: '1',
        },
        {
          divider: true,
        },
        {
          active: 'https://picsum.photos/400',
          title: '야식 안 먹기',
          not_participation_count:'0',
        },
        {
          divider: true,
        },
        {
          active: 'https://picsum.photos/400',
          title: '알고리즘 문제 3개씩',
          not_participation_count:'2',
        },
      ],
       socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],
    }),
    methods:{
        gotomission(){
            this.$router.push("/missiondetail");
        }
    }
  }
</script>
<style>
.v-subheader.v-subheader--inset.theme--light{
  font-size:xx-large;
  font-family:'Nanum Pen Script', cursive;
  margin:0;
  padding: 0 20px;
}
.v-list-item.v-list-item--link--theme--light{
  display:block;
  margin:0px auto;
}

</style>