import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import vuetify from './plugins/vuetify';
import router from './router'


Vue.config.productionTip = false
Vue.use(VueFullPage);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
