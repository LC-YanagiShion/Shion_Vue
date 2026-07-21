<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HomeView from './views/HomeView.vue'

const route = useRoute()

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
