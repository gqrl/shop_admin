import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
