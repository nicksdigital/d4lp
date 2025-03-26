<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
  icon?: any
  gradientStart?: string
  gradientEnd?: string
}>()

const gradientClass = computed(() => {
  return `from-${props.gradientStart || 'violet'}-400 to-${props.gradientEnd || 'violet'}-600`
})
</script>

<template>
  <div class="min-h-screen bg-background pt-[72px]">
    <!-- Hero Section -->
    <div class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="glass-hero-card p-12 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-900/20 backdrop-blur-xl"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-center gap-4 mb-6">
              <div v-if="icon" class="p-4 rounded-xl bg-violet-500/10">
                <component :is="icon" class="w-12 h-12 text-violet-400" />
              </div>
            </div>
            <h1 :class="[
              'text-5xl md:text-6xl font-display-semibold text-center bg-gradient-to-r bg-clip-text text-transparent',
              gradientClass
            ]">
              {{ title }}
            </h1>
            <p v-if="subtitle" class="text-xl text-violet-200/80 mt-6 max-w-2xl mx-auto text-center font-display-thin">
              {{ subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 pb-24">
      <div class="max-w-4xl mx-auto">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                    hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-hero-card {
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.1);
}
</style>