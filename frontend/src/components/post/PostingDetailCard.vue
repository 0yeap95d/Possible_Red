<template>
    <div class="wrapC">
        <v-app>
            <v-card
                class="mx-auto"
            >
                <v-list-item>
                <v-list-item-avatar><v-img src="../../assets/images/background1.jpg"></v-img></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">조깅_3일차!</v-list-item-title>
                    <v-list-item-subtitle>by 희정</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                src="https://picsum.photos/400"
                height="194"
                ></v-img>

                <v-card-text>
                    <span>이제 4일 남아따~~~</span>
                    <br>
                    <span>#풍경 #운동</span>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    text
                    color="deep-purple accent-4"
                >
                    Follow
                </v-btn>
                <v-btn
                    text
                    color="deep-purple accent-4"
                >
                    2020-08-08
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-app>
    </div>
</template>

<style>
    .v-application--wrap{
        height:auto
    }
</style>