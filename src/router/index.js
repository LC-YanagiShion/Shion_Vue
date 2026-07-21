import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/HomeView.vue'),
      redirect: { name: 'home-main' },
      children:[
        {
          path:'main',
          name:'home-main',
          component:()=>import('../components/HomeMain.vue'),
        },
        {
          path:'Nav1',
          name:'Nav1',
          component:()=>import('../components/nav/Nav1.vue'),
        },
        {
          path:'Nav2',
          name:'Nav2',
          component:()=>import('../components/nav/Nav2.vue'),
        },
        {
          path:'Nav3',
          name:'Nav3',
          component:()=>import('../components/nav/Nav3.vue'),
        },
        {
          path:'Nav4',
          name:'Nav4',
          component:()=>import('../components/nav/Nav4.vue'),
        },
      ]
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../views/RegisterView.vue'),
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginView.vue'),
    },

    
  ],
  
})

 

export default router
