import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import ReviewsPage from '@/components/ReviewsPage.vue'
import NotFound from '@/components/NotFound.vue'
import AboutUsPage from '@/components/AboutUsPage.vue'
const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/reviews', name: 'Reviews', component: ReviewsPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/aboutus', name: 'AboutUs', component: AboutUsPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
