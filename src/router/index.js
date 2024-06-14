import { createRouter, createWebHistory } from 'vue-router'
import FundsList from '../components/FundsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fund',
      component: FundsList
    },
    {
      path: '/fund/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/FundDetails.vue')
    }
  ]
})

export default router
