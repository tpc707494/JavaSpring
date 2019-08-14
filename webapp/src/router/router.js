// import mobile from './model/mobile/index'
// import pc from './model/pc/index'
import pagesindex from '@/components/pages/index'
// const meta = { requiresAuth: true }

const frameIn = [
  {
    path: '/',
    name: 'pagesindex',
    component: pagesindex
    // meta: {meta, title: '首页'}
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/pages/common/error-page-404'),
    meta: {title: '404'}
  } // ,
  // mobile,
  // pc
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/components/pages/common/error-page-404')
  }
]
// 导出需要显示菜单的
export const frameInRoutes = frameIn
// 重新组织后导出
export default [
  ...frameIn,
  ...errorPage
]
