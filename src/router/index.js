import Vue from 'vue'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import Main from '@/components/Main'
import Contact from '@/components/Contact'
import Funders from '@/components/Funders'
import People from '@/components/People'
import Permissions from '@/components/Permissions'
import Booklet from '@/components/Booklet'
Vue.use(
  VueRouter
)

const router = new VueRouter({
  base: '/hartford-housing/',
  routes: [
    {
      path:'/',
      name: 'Main',
      component: Main,
      alias: ['/About','Introduction/:id','/Housing/:id','/Home', '/Settlement/:id','/Timeline','/Profiles','/Maps']
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
    },
    {
      path: '/Permissions',
      name: 'Permissions',
      component: Permissions
    },
    {
      path: '/Booklet',
      name: 'Booklet',
      component: Booklet
    }
  ]
})

// router.afterEach((to,from) =>{

// })

export default router;