import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollmagic from 'vue-scrollmagic'
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(VueScrollmagic)
Vue.use(VuePlyr, {
    plyr: {
        autoplay: true,
        loop: { active: true },
        resetOnEnd: true
    }
})

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')