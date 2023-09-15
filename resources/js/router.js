import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Employees from './views/Employees.vue';

const routes = [
  {
    path: '/',
    name: 'Companies',
    component: Home,
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
