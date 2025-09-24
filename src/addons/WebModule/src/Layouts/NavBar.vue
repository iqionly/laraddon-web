<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold text-indigo-600">Laraddon</span>
        </div>

        <!-- Links -->
        <div class="sm:flex sm:space-x-8 items-center">
          <RouterLink 
            to="/" 
            class="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="text-gray-700 hover:text-indigo-600 transition-colors"x
          >
            About
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
