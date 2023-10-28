import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardLayout from '../layout/DashboardLayout.vue';
import NotFound from '../pages/NotFoundPage.vue';
import Overview from '@/pages/Overview.vue';
import UserProfile from '@/pages/UserProfile.vue';
import TableList from '@/pages/TableList.vue';
import Typography from '@/pages/Typography.vue';
import Icons from '@/pages/Icons.vue';
import Maps from '@/pages/Maps.vue';
import Notifications from '@/pages/Notifications.vue';
import Upgrade from '@/pages/Upgrade.vue';
import Login from "@/pages/Login/Login.vue";
import { Message } from "element-ui";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/Login',
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = !!sessionStorage.getItem('userInfo');
  if (to.path !== '/Login' && to.path !== '/Register' && !isAuthenticated) {
    next({ path: '/Login' });
    Message({
      message: '请先登录！',
      type: "warning",
    });
  } else {
    next();
  }
});

export default routes
