<template>
    <div class="flex box-border h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <!-- Sidebar -->
        <Sidebar />
        <!-- Main Content -->
        <div class="flex-1 flex flex-col z-100">
            <!-- Header -->
            <header class="h-16 bg-white dark:bg-gray-800 shadow flex justify-between items-center px-4">
                <div class="size-fit">

                </div>

                <!-- Search Bar -->
                <SearchInput v-model:search="search" />

                <!-- Action Page -->
                <div class="size-fit">
                    <ButtonsGroup>
                        <Button>
                            <ChevronLeftIcon class="size-5" />
                        </Button>

                        <Button>
                            <ChevronRightIcon class="size-5" />
                        </Button>
                    </ButtonsGroup>
                </div>
            </header>

            <!-- Profile -->
             
            <!-- Breadcumb -->
            <Breadcrumb />

            <!-- Content Area -->
            <main class="flex-1 px-6 pt-2 pb-6">
                <RouterView v-slot="{ Component }">
                    <component :is="Component" v-bind="useSafeProps(Component, { search })"/>
                </RouterView>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSafeProps } from './shared/use-safe-props';

/**
 * Styles
 */
import './src/style.css';

import Sidebar from './src/Layouts/Sidebar.vue';
import Breadcrumb from './src/Components/Breadcrumb.vue';
import ButtonsGroup from './src/Components/Buttons/ButtonsGroup.vue';

import SearchInput from '@laraddon/addons/SearchInput';
import Button from './src/Components/Buttons/Button.vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid';

const search = ref(null);
</script>