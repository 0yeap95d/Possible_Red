<template>
  <div class="wrapC">
    <v-app>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-subheader :inset="inset">{{user.nickname}}'s</v-subheader>

          <v-list>
            <template v-for="mission in missions">
              <v-list-item :item="mission" :key="mission.etag" @click="gotomissiondetail(mission.missionNo)">
                <v-list-item-action class="mx-auto">
                  <v-img src="https://picsum.photos/400" alt></v-img>
                  <br />
                  <v-list-item-title class="jua">{{ mission.missionTitle }}</v-list-item-title>


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
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Mission",
  props: {
    missions: Array,
  },
  created() {
    this.user = this.$session.get("user");
  },
  data: () => ({
    user: Object,
    inset: true,

    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
  }),

  methods:{
    gotomissiondetail(num){
      this.$router.push({
        name:"MissionDetail",
        params:{
          num:num,
        },
      });
    },
  },
}

</script>

<style>
.v-subheader.v-subheader--inset.theme--light {
  font-size: xx-large;
  font-family: "Nanum Pen Script", cursive;
  margin: 0;
  padding: 0 20px;
}
.v-list-item.v-list-item--link--theme--light {
  display: block;
  margin: 0px auto;
}
.col-sm-6.offset-sm-3.col-12 {
  padding: 0;
}
.v-icon.notranslate.mdi.mdi-facebook.theme--light{
  color:indigo;
}
.v-icon.notranslate.mdi.mdi-linkedin.theme--light{
  color:skyblue;
}
.v-icon.notranslate.mdi.mdi-instagram.theme--light{
  color:palevioletred;
}
</style>