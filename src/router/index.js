// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/auth/SignupView.vue";
import LoginView from "../views/auth/LoginView.vue";
import AddToCartView from "../views/products/AddToCartView.vue";
import ProductDetailsView from "../views/products/ProductDetailsView.vue";

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
  // products routes
  // add to cart
  {
    path: '/products/addcart/:id',
    component: AddToCartView,
    name: 'AddToCartView',
  },
  // product details
  {
    path: '/products/details/:id',
    component: ProductDetailsView,
    name: 'ProductDetailsView',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
