<template>

    <!-- Menu -->
    <nav class="flex flex-col flex-1 grow gap-1 h-100 p-2 truncate">
        <RouterLink v-for="route in listRoutes" :to="route.path" class="flex px-2 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <div class="flex w-100 space-x-3 justify-between items-center">
                <div class="inline-flex items-center gap-2">
                    <component :is="route.icon" class="size-6 text-gray-400" /> <!-- render icon -->
                    <span v-if="!collapsed">{{ route.name }}</span>
                </div>
                <span class="text-xs font-semibold text-gray-700 bg-gray-200 dark:text-gray-400 dark:bg-gray-700 rounded-full px-2"
                    v-if="!collapsed && route.unread && route.unread > 0">{{ route.unread }}</span>
            </div>
        </RouterLink>
    </nav>

</template>

<script setup lang="ts">
import { onBeforeMount, inject, ref, type Ref } from 'vue';
import type { RouteRecord } from 'vue-router';
import type RouteType from '@addons/WebModule/types/RouteType';

const collapsed = inject('collapsed');
const rootRoutes:Ref<RouteRecord[]> = ref(inject('routes', []));

const listRoutes: RouteType[] = [];

onBeforeMount(() => {
    // Sort after filter happend
    rootRoutes.value.sort((a, b) => {
        return a.meta.index - b.meta.index;
    });

    rootRoutes.value.map((route, i) => {
        listRoutes.push({
            name: route.name ? route.name : route.children[0]?.name,
            path: route.path,
            icon: route.meta.icon,
            unread: 100
        });
    })
})

</script>