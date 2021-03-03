import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollmagic from 'vue-scrollmagic'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(VueYouTubeEmbed)
Vue.use(VueScrollmagic)
Vue.use(BootstrapVue)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
