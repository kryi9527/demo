import Vue from 'vue'
import Router from 'vue-router'
// import svg from '@/views/svg'
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "login",
      component: () => import('@/pages/Login')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import("@/pages/main/Main"),
      children: [{
          path: "/",
          component: () => import("@/pages/room/Room1"),
        },
        {
          path: "/room1",
          component: () => import("@/pages/room/Room1"),
        },
        {
          path: "/room2",
          component: () => import("@/pages/room/Room2")
        },
        {
          path: "/room3",
          component: () => import("@/pages/room/Room3")
        },
        {
          path: "/mine1",
          component: () => import("@/pages/mine/Mine1")
        }, {
          path: "/mine2",
          component: () => import("@/pages/mine/Mine2")
        }, {
          path: "/mine3",
          component: () => import("@/pages/mine/Mine3")
        },
        {
          path: "/customer1",
          component: () => import("@/pages/customer/Customer1")
        }, {
          path: "/customer2",
          component: () => import("@/pages/customer/Customer2")
        }, {
          path: "/customer3",
          component: () => import("@/pages/customer/Customer3")
        },
        {
          path: "/open1",
          component: () => import("@/pages/open/Open1")
        }, {
          path: "/open2",
          component: () => import("@/pages/open/Open2")
        }, {
          path: "/open3",
          component: () => import("@/pages/open/Open3")
        },
        {
          path: "/vip1",
          component: () => import("@/pages/vip/Vip1")
        }, {
          path: "/vip2",
          component: () => import("@/pages/vip/Vip2")
        }, {
          path: "/vip3",
          component: () => import("@/pages/vip/Vip3")
        },
      ]
    },

  ]
})
