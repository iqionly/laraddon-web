import { Cog6ToothIcon } from '@heroicons/vue/16/solid';
import type { RouteRecordRaw } from 'vue-router';
import SettingsModule from './index.vue';
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';

export const routes: RouteRecordRaw[] = [
  {
    meta: {
        id: 'settingsmodule.index',
        index: 2,
        icon: Cog6ToothIcon
    },
    path: '/settings',
    children: [
      {
        name: 'Settings',
        path: '',
        component: SettingsModule,
      },
      {
        path: 'first-page',
        children: [
          {
            path: '',
            name: 'First Page',
            component: FirstPage
          },
          {
            path: 'fourth-page',
            name: 'Fouth Page',
            component: FourthPage
          }
        ]
      },
      {
        name: 'Second Page',
        path: 'second-page',
        component: SecondPage
      },
      {
        name: 'Third Page',
        path: 'third-page',
        component: ThirdPage
      }
    ]
  }
];