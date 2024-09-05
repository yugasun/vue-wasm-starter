import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { getToken } from '@/utils/token';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: 'Home Page',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      title: 'Detail Page',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/Detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const token = getToken();
  if (!token && to.name !== 'Index') {
    return { name: 'Index' };
  }
});

export { router };
