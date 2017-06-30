import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Osuna Portfolio Home Page',
      component: Home
    }
  ]
})
