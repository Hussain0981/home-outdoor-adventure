import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '@/views/about.vue'
import services from '@/views/services.vue'
import projects from '@/views/projects.vue'
import contactUs from '@/views/contact-us.vue'


  const routes = [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/services',
      name: 'services',
      component: services ,
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects ,
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs ,
    },
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to,from,savePosition) {
      return {top : 0, behavior : 'smooth'}
    }
  });
export default router
