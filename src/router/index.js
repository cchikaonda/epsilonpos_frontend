import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../Login.vue'
import DashBoard from '../views/components/DashBoard.vue'

import Customers from '../views/components/modules/customers/CustomerList.vue'
import PosDashBoard from '../views/components/modules/pos/PosDashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    title: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    title: 'dashboard',
    component: DashBoard,
    children:[
      {
        path: '/customers',
        name: 'customers',
        component: Customers,
        props: {}
      },

    ]
  },
  {
    path: '/pos',
    name: 'posdashboard',
    component: PosDashBoard,
    props: {}
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

