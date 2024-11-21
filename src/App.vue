<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
import HeaderNavbar from './components/HeaderNavbar.vue'
</script>

<template>
  <div class="overflow-y-hidden">
    <HeaderSection />
    <HeaderNavbar />
    <RouterView />
  </div>
</template>
