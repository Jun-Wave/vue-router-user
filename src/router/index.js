import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title:"首页"
    },
    redirect:'/home',
    component: () => import('@/views/homePage/HomePage.vue'),
    //子路由
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/homePage/home/Home.vue')
      },
      {
        path: '/product/:app_data',
        name: 'Product',
        component: () => import('@/views/homePage/product/Product.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/homePage/profile/Profile.vue')
      }
    ]
  },
  
  
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('@/views/course/Course.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
