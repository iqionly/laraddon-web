<template>
    <h1 class="text-2xl font-bold mb-4">Selamat Datang 👋</h1>
    <p class="text-gray-600 dark:text-gray-300">
        Ini area konten utama. Tambahkan komponen atau halaman di sini.
    </p>
    <p class="mt-4">Hasil pencarian: <span class="font-semibold">{{ search }}</span></p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  search: String
});
</script>