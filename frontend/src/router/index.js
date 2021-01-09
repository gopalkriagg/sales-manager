import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Product from '../pages/Products.vue';
import ClientSummary from '../pages/ClientSummary.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/client/:id',
    name: 'ClientSummary',
    component: ClientSummary,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
