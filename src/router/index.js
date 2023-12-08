import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/Pages/Login.vue";
import All_pages from "@/Pages/All_pages.vue";
import AboutView from "@/views/AboutView.vue";
import Author from "@/Pages/Author.vue";
import Self from "@/Pages/Self.vue";
import Help from "@/Pages/Help.vue";
import Calendar_self from "@/Pages/Calendar_self.vue";
import Menu from "@/components/Menu.vue";
import Sayings from "@/Pages/Sayings.vue";
import Library from "@/Pages/Library.vue";
import Review from "@/Pages/Review.vue";
import Introduction from "@/Pages/Introduction.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/login'
  },
  {
    path: '/introduction',
    name: Introduction,
    component: Introduction,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sayings',
    name: 'Sayings',
    component: Sayings,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/test',
    name: 'test',
    component: Calendar_self
  },
  {
    path: '/Menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    component: All_pages,
    redirect:'/admin/overview',
    children:[
        {
          path:'overview',
          name:'Overview',
          component:HomeView
        },
      {
        path: 'library',
        name:'Library',
        component: Library
      },
      {
        path: 'author',
        name: 'Author',
        component: Author
      },
      {
        path:'self',
        name:'Self',
        component: Self
      },
      {
        path: 'help',
        name: 'Help',
        component: Help
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
