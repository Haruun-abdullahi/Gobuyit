import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('../views/Homeview.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/shop',
      name: 'shop',
      component: ()=> import ('../views/ShopView.vue')
    },
    {
      path: '/Detailsshop',
      name: 'Details',
      component: ()=> import ('../views/DetailsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=> import ('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: ()=> import ('../views/CheckoutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ()=> import ('../views/ContactsView.vue')
    },
    {
      path: '/Login',
      name: 'login',
      component: ()=> import ('../views/LoginView.vue')
    },
    {
      path: '/Register',
      name: 'register',
      component: ()=> import ('../views/RegisterView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: ()=> import ('../views/AboutView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: ()=> import ('../views/404View.vue')
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: ()=> import ('../views/ForgetView.vue')
    },
   
  ]
})

export default router
