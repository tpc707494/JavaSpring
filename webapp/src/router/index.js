// import Vue from 'vue'
// import Router from 'vue-router'
// import index from '@/components/index'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     }
//   ]
// })

import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import index from '@/components/pages/index'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

// console.log(router)

router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()

  next()
})
router.afterEach((to) => {
  // 进度条
  NProgress.done()
})
export default router
