// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/auth/SignupView.vue"
import LoginView from "../views/auth/LoginView.vue"

const routes = [
  // home 
  {
    path: '/',
    component: HomeView,
    name: 'HomeView',
  },
  // sign up 
  {
    path: '/signup',
    component: SignupView,
    name: 'SignupView',
  },
  // sign in 
  {
    path: '/login',
    component: LoginView,
    name: 'LoginView',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
