<template>
    <aside
      :class="[
        'bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300 z-200',
        collapsed ? 'w-14' : 'w-64'
      ]"
    >
      <!-- Logo -->
      <div class="h-16 flex items-center justify-center px-2">
        <span v-if="!collapsed" class="ms-4 text-2xl w-100 font-bold text-blue-600 dark:text-blue-400">
          Laraddon
        </span>

        <button class="inline-flex items-center gap-2 rounded-sm px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-700" @click="toggleSidebar">
          <Bars3Icon class="size-5 text-gray-400" />
        </button>
      </div>

      <Navigation/>

      <!-- Footer -->
      <div class="flex flex-col shrink p-2 border-t border-gray-100 dark:border-gray-700 space-y-2">
        <ToggleDarkMode/>
      </div>
    </aside>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/16/solid'

import Navigation from './Navigation.vue';
import ToggleDarkMode from "../Components/Buttons/ToggleDarkMode.vue";
import { provide, ref, readonly } from 'vue';

const collapsed = ref(('collapsed' in localStorage) ? localStorage.collapsed : false);

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
  localStorage.collapsed = collapsed.value;
}

provide('collapsed', { collapsed, toggleSidebar});
</script>