import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import store from '@/store/main'
import cache from '@/utils/cache'
import { mapMenu } from '@/utils/map-menu'
//导入组件
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/components/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      return '/login'
    }
    const userMenus = (store.state as any).loginState.userMenus
    console.log(userMenus)
    const routers = mapMenu(userMenus)
    routers.forEach((route) => {
      router.addRoute('main', route)
    })
  }
})
export default router
