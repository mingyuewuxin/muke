import Vue from 'vue'
import Router from 'vue-router'
import header from './../components/header/header.vue'
import menu from './../components/menu/menu.vue'
import presentation from './../components/presentation/presentation.vue'
import evaluation from './../components/evaluation/evaluation.vue'
import merchant from './../components/merchant/merchant.vue'

Vue.use(Router)
Vue.use(header)
Vue.use(menu)
Vue.use(presentation)
Vue.use(evaluation)
Vue.use(merchant)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/merchant',
      name: 'merchant',
      component: merchant
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: evaluation
    }
  ]
})
