import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import add from '@/components/add'
import detail from '@/components/detail'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail/:category/:month',
      name: 'detail',
      component: detail
    },
    {
      path: '/add/:category/:month',
      name: 'add',
      component: add
    },
    {
      path: '/edit/:description/:date/:price/:category',
      name: 'edit',
      component: edit
    }
  ]
})
