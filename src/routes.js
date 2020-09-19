import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Hive from './components/Hive'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Home },
    { path: '/hives/:id', component: Hive }
  ]
})
