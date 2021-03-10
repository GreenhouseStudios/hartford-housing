import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollmagic from 'vue-scrollmagic'
import vuePositionSticky from 'vue-position-sticky'

Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(VueScrollmagic)
Vue.use(vuePositionSticky)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
