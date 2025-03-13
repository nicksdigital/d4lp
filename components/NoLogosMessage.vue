<template>
  <div 
    v-show="isVisible"
    class="fixed bottom-4 right-4 max-w-xs bg-violet-900/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
    :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-20 opacity-0': !isVisible }"
  >
    <div class="flex items-start gap-3">
      <div class="text-2xl animate-bounce">🤔</div>
      <div>
        <h3 class="font-obviously-semibold text-violet-300 mb-1">Why no fancy logos?</h3>
        <p class="text-sm text-gray-300 leading-snug">
          We think our money is better spent building awesome tech than paying venues to talk about us! 
          <span class="text-violet-400">Smart, right? 😎</span>
        </p>
      </div>
    </div>
    <button 
      @click="dismiss"
      class="absolute top-2 right-2 text-violet-400 hover:text-violet-200 text-sm"
    >
      ✕
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  // Show message after a short delay
  setTimeout(() => {
    isVisible.value = true;
  }, 2000);
});

const dismiss = () => {
  isVisible.value = false;
  // Store in localStorage so it doesn't show again for a while
  localStorage.setItem('noLogosMessageDismissed', Date.now().toString());
};

// Only show if not recently dismissed
onMounted(() => {
  const lastDismissed = localStorage.getItem('noLogosMessageDismissed');
  if (lastDismissed) {
    const hoursSinceDismissed = (Date.now() - parseInt(lastDismissed)) / (1000 * 60 * 60);
    if (hoursSinceDismissed < 24) {
      isVisible.value = false;
      return;
    }
  }
  setTimeout(() => {
    isVisible.value = true;
  }, 2000);
});
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.fixed {
  animation: float 3s ease-in-out infinite;
}
</style>