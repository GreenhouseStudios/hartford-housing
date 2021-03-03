import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import router from './router'
import VueScrollmagic from 'vue-scrollmagic'

Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(VueScrollmagic)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
