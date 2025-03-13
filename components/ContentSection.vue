<script setup>
defineProps({
  title: String,
  subtitle: String,
  bgImage: String, // Optional background image
  darkOverlay: { type: Boolean, default: true }, // Toggle for dark overlay
});
</script>

<template>
  <section 
    class="section-container"
    :style="{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }"
  >
    <!-- Optional Dark Overlay -->
    <div 
      v-if="darkOverlay"
      class="absolute inset-0 bg-black/60 backdrop-blur-lg"
    ></div>

    <div class="relative z-10 max-w-4xl mx-auto space-content-lg">
      <!-- Section Title -->
      <h2 class="text-4xl font-extrabold text-white uppercase tracking-wide drop-shadow-lg">
        {{ title }}
      </h2>

      <!-- Section Subtitle -->
      <p v-if="subtitle" class="text-lg text-gray-300 opacity-80 max-w-3xl">
        {{ subtitle }}
      </p>

      <!-- Content -->
      <div class="text-content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
