<template>
    Settings

    <div class="text-sm" v-for="route in childRoutes">
        <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import findChild from '@laraddon/addons/WebModule/shared/find-route-child.ts'

const route = useRoute()
const router = useRouter()

const childRoutes = findChild(route, router.getRoutes());
</script>