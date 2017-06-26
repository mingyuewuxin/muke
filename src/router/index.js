import Vue from 'vue'
import Router from 'vue-router'
import commodity from './../components/commodity/commodity.vue'
import menu from './../components/menu/menu.vue'

Vue.use(Router)
Vue.use(commodity)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    }
  ]
})
