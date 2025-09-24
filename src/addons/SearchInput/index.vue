<template>
    <div class="flex items-center w-full max-w-md bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
        <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2"/>
        <input
        v-model="search"
        type="text"
        placeholder="Search..."
        class="bg-gray-100 dark:bg-gray-700 focus:outline-none flex-1 text-sm"
        />
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid';

import { ref, watch } from 'vue';

const search = ref('');
const emit = defineEmits(['update:search']);

watch(search, (val) => {
    emit('update:search', val);
})
</script>