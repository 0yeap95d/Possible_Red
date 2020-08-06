<template>
    <div class="wrap">
        <v-card
            class="mx-auto overflow-hidden"
            
            color="white"
        >
            <v-app-bar
            color="deep-purlple"
            dark
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Mission</v-toolbar-title>
            </v-app-bar>
            <br>

            <MissionItem />
            <br>
            <MissionItem />
            <br>
            <MissionItem />

            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account</v-list-item-title>
                </v-list-item>

                </v-list-item-group>
            </v-list>
            </v-navigation-drawer>
        </v-card>
        
    </div>
    
</template>


<script>
import MissionItem from '../../components/mission/MissionItem.vue'

export default {
    data: () => ({
        drawer: false,
    }),
    components:{
        MissionItem,
    }
}
</script>

<style scoped>
    
</style>