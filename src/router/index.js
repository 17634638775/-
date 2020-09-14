import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login.vue'),
    beforeEnter: (to, form, next) => {
      if (store.state.token == '') {
        next()
      } else {
        next('/home')
      }
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ '../views/home.vue'),
    beforeEnter: (to, form, next) => {
      setTimeout(function () {
        if (store.state.token == '') {
          next('/')
        } else {
          next()
        }
      }, 500)

    },
    children: [

      {
        path: '/',
        name: 'list',
        component: () => import( /* webpackChunkName: "about" */ '../views/list.vue'),
        meta: {
          is: true
        }
      },
      {
        path: '/fen',
        name: 'fen',
        component: () => import( /* webpackChunkName: "about" */ '../views/fen.vue'),
        meta: {
          is: true
        }
      },
      {
        path: '/wo',
        name: 'wo',
        component: () => import( /* webpackChunkName: "about" */ '../views/wode.vue'),
        meta: {
          is: true
        }
      },
      {
        path: '/gou',
        name: 'gou',
        component: () => import( /* webpackChunkName: "about" */ '../views/gou.vue'),
        meta: {
          is: true
        }
      },
      

    ]
  },
  {
    path: '/xiang',
    name: 'xiang',
    component: () => import( /* webpackChunkName: "about" */ '../views/xiang.vue')
  },
  {
    path: '/ding',
    name: 'ding',
    component: () => import( /* webpackChunkName: "about" */ '../views/ding.vue')
  },
  {
    path: '/dizhi',
    name: 'dizhi',
    component: () => import( /* webpackChunkName: "about" */ '../views/dizhi.vue')
  },
  {
    path: '/zhifu',
    name: 'zhifu',
    component: () => import( /* webpackChunkName: "about" */ '../views/zhifu.vue')
  },
  {
    path: '/zhifubao',
    name: 'zhifubao',
    component: () => import( /* webpackChunkName: "about" */ '../views/zhifubao.vue')
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: () => import( /* webpackChunkName: "about" */ '../views/sousuo.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router