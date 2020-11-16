import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../Pages/LandingPage/Landing.vue'
import Main from '../Pages/MainPage/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '/',
        name: 'Profile',
        component: () => import ('../components/LandingComponent/ProfileComponent/Profile.vue')
      }
    ]
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/main',
        name: 'navigation',
        component: () => import ('../components/MainComponent/NavigationComponent/Navigation.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
