import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Company from './views/Company.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/companies/:id',
    name: 'Companies',
    component: Company,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
