<template>

    <!-- Menu -->
    <nav class="flex flex-col flex-1 grow gap-1 h-100 p-2 truncate">
        <RouterLink v-for="route in result" :to="route.path" class="flex px-2 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <div class="flex w-100 space-x-3 justify-between items-center">
                <div class="inline-flex items-center gap-2">
                    <component :is="route.meta.icon" class="size-6 text-gray-400" /> <!-- render icon -->
                    <span v-if="!collapsed">{{ route.name }}</span>
                </div>
                <span class="text-xs font-semibold bg-gray-200 dark:bg-gray-700 rounded-full px-2"
                    v-if="!collapsed">{{ route.meta.unread }}</span>
            </div>
        </RouterLink>
    </nav>

</template>

<script setup lang="ts">
import { onBeforeMount, inject, ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

const collapsed = inject('collapsed', false);
const rootRoutes:RouteRecordRaw[] = inject('routes', []);

// Semua route yang sudah di-register
const result = ref(null)

const pathRegex = new RegExp('\/', 'g');

onBeforeMount(() => {
    // Sort after filter happend
    rootRoutes.sort((a, b) => {
        if(!a.meta || !b.meta) {
            return -1;
        }
        return a.meta?.index - b.meta?.index;
    });

    result.value = rootRoutes;
})

</script>