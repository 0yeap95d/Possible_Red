<template>
    <div>
        <v-app>
            <v-col cols="12" sm="6" offset-sm="3">
                <v-card>
                <v-subheader :inset="inset">희정님의 Mission_list</v-subheader>

                <v-list>
                    <template v-for="(item, index) in items">
                    <v-list-item
                        v-if="item.action"
                        :key="item.title"
                        @click="gotomission"
                    >
                        <v-list-item-action>
                        <v-icon>{{ item.action }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
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
        </v-app>
    </div>
</template>

<script>
  export default {
    data: () => ({
      inset: true,
      items: [
        {
          action: 'Mission1',
          title: '조깅 30분이상',
        },
        {
          divider: true,
        },
        {
          action: 'Mission2',
          title: '야식 안 먹기',
        },
        {
          divider: true,
        },
        {
          action: 'Mission3',
          title: '알고리즘 문제 3개씩',
        },
      ],
    }),
    methods:{
        gotomission(){
            this.$router.push("/missionmain");
        }
    }
  }
</script>