<template>
    <!-- Breadcumb -->
    <div class="text-sm px-6 pt-6 items-center">
        <div class="inline-flex gap-x-1.5 items-center">
            <RouterLink class="inline-flex items-center text-gray-400 hover:text-gray-700" v-for="(route, i) in listData" :to="route.path">
                <component class="size-4 mr-1" v-if="route.icon" :is="route.icon"/>
                <span class="mr-1.5">{{ route.name }}</span>
                <ChevronRightIcon class="size-4" v-if="i < listData.length - 1"/>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { ChevronRightIcon } from '@heroicons/vue/16/solid';
import { RouteTyping, listData } from '@laraddon/addons/WebModule/shared/route-typing';

const route = useRoute();
const matched = ref(route);


watch(
    () => route.fullPath, 
    setBreadcrumb,
    { immediate: true }
);

function setBreadcrumb() {
    RouteTyping(route, matched.value.matched);
}

</script>