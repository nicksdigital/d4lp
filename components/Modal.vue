<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div class="fixed inset-0 bg-black/70 backdrop-blur-sm" @click="$emit('close')"></div>
      <div class="relative bg-gray-900 rounded-xl max-w-2xl w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>