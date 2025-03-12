<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ScrollToTop v-if="$route.path !== '/whitepaper'" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSmoothScroll } from "~/composables/useSmoothScroll";
import { useRoute } from 'vue-router'
const route = useRoute()

useSmoothScroll();
</script>