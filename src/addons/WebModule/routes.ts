import { HomeIcon } from '@heroicons/vue/16/solid';
import type { RouteRecordRaw } from 'vue-router';
import WebPage from './pages/index.vue';

export const routes: RouteRecordRaw[] = [
  {
    meta: {
        id: 'webmodule.index',
        index: 1,
        icon: HomeIcon
    },
    path: '/',
    name: 'Home',
    component: WebPage,
    props: {
      search: null
    }
  }
];