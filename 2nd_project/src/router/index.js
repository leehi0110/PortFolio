import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingPage/LandingPage.vue'
import Login from '../components/LoginComponent/Login.vue'
import SignUp from '../components/SignUpComponent/SignUp.vue'
import FindPassword from '../components/FindPasswordComponent/FindPassword.vue'
import Main from '../views/MainPage/MainPage.vue'
import Page1 from '../components/Page1/Page1.vue'
import Page2 from '../components/Page2/Page2.vue'
import Page3 from '../components/Page3/Page3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'signup',
        component: SignUp
      },
      {
        path: 'findpassword',
        component: FindPassword,
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: Page2
      },
      {
        path: 'page3',
        component: Page3
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
