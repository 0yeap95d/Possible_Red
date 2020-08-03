import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import VueRouter from 'vue-router';
import routes from './routes'
import store from './vuex/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSession from 'vue-session'

var sessionOptions = {
    persist: true
  }

Vue.use(VueMomentJS, moment);
Vue.use(VueSession, sessionOptions)
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const router = new VueRouter({
    routes,
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


