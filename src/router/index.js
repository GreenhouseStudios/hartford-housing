import Vue from 'vue'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Contact from '@/components/Contact'
import Funders from '@/components/Funders'
import People from '@/components/People'
Vue.use(
  Router
)

export default new Router({
  base: '/hartford-housing/',
  routes: [
    {
      path:'/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Funders',
      name: 'Funders',
      component: Funders
    },
    {
      path: '/People',
      name: 'People',
      component: People
    }
  ]
})
