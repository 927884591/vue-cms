import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
//导入组件
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
