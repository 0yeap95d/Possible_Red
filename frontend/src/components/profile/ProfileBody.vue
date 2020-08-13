<template>
  <div>
    <v-card style="box-shadow: none; padding-top:3%">
      <v-tabs
        background-color="white"
        color="deep-purple accent-4"
        centered
      >
        <v-tab :key="item1" style="font-family: 'Jua', sans-serif;">
          포스트
        </v-tab>

        <v-tab
          :key="item2" style="font-family: 'Jua', sans-serif;">
          미션
        </v-tab>

        <v-tab-item :key="item1">
          <v-row style="padding:0 2%">
            <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-container fluid>
                <v-row style="padding: 0;">
                    <v-col
                    v-for="n in 10"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                    style="padding:1%;"
                    >
                    <v-card flat tile class="d-flex">
                        <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        >
                        <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item :key="item2">
          <v-row style="padding:0 2%">
            <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-container fluid>
                <v-row style="padding: 0;">
                    <v-col
                    v-for="n in 12"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                    style="padding:1%;"
                    >
                    <v-card flat tile class="d-flex">
                        <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 1 + 15}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 1 + 15}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        >
                        <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                    </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-col>
          </v-row>
        </v-tab-item>

      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
    name: "ProfileBody",
}
</script>

<style >
.v-slide-group__content{
  background:white;

}
.v-tab.v-tab--active{
  color:#8E24AA;
}
.v-tab{
  color:#CE93D8;
}
.v-tabs-slider{
  color:#CE93D8;
}
</style>