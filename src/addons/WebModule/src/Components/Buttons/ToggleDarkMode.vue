<template>
    <div class="flex items-center truncate">
        <button class="inline-flex items-center gap-2 rounded-sm border px-2 py-2 w-100 border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden transition-colors" @click="toggleDarkMode">
            <MoonIcon class="size-5 shadow-sm rtl:rotate-180"/>
            <span class="text-sm font-medium" v-if="!collapsed">Toggle Dark Mode</span>
        </button>
    </div>
</template>

<script setup>
import { MoonIcon } from '@heroicons/vue/16/solid'

import { inject } from 'vue';

const { collapsed } = inject('collapsed', false);

if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.theme = "dark";
    document.documentElement.dataset.theme = localStorage.theme;
} else if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches) {
    localStorage.theme = "light";
    document.documentElement.dataset.theme = localStorage.theme;
} else {
    document.documentElement.dataset.theme = localStorage.theme;
}

const toggleDarkMode = () => {
    if (("theme" in localStorage) && localStorage.theme == 'dark') {
        document.documentElement.dataset.theme = localStorage.theme = 'light';
    } else {
        document.documentElement.dataset.theme = localStorage.theme = 'dark'
    }
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";
// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
</script>