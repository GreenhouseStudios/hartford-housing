import Vue from 'vue'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import Home from '@/components/Home'
Vue.use(
  Router
)

export default new Router({
  base: '/hartford-housing/',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
