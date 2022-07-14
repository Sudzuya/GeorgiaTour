import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      layout: 'Home'
    }
  },
  {
    path: '/search-car',
    name: 'SearchCar',
    component: () => import('../views/SearchCar.vue'),
    meta:{
      layout: 'Home'
    }
  },
  {
    path: '/tour',
    name: 'Tour',
    component: () => import('../views/tour/Tour.vue'),
    meta:{
      layout: 'Tour'
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
