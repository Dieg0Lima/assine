import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlackNovember from '../views/BlackNovember.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blacknovember',
    name: 'black',
    component: BlackNovember
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
