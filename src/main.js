import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueFullPage);

// const routes = [
//   {
//     path: '/'
//   }
// ]

new Vue({
  render: h => h(App),
}).$mount('#app')
