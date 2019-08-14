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
import util from '@/libs/util/until.js'
// import index from '@/components/pages/index'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes
})

// console.log(router)

router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')
    if (token && token !== 'undefined') {
      next()
    } else {
      // 将当前预计打开的页面完整地址临时存储 登录后继续跳转
      // 这个 cookie(redirect) 会在登录后自动删除
      util.cookies.set('redirect', to.fullPath)
      // 没有登录的时候跳转到登录界面
      next({
        name: '404'
      })
    }
  } else {
    const token = util.cookies.get('token')
    console.log(token)
    // 不需要身份校验 直接通过
    next()
  }
})
router.afterEach((to) => {
  // 进度条
  NProgress.done()
  util.title(to.meta.title)
})
export default router
