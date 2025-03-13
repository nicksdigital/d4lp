<script setup>
import { ref, computed, onMounted } from "vue";
import { Home, Rocket, Layers, FileText, Users, LogIn } from "lucide-vue-next";
import { useRoute } from 'vue-router';

const route = useRoute();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navItems = [
  { to: "/", icon: Home, text: "Home" },
  { to: "/#auction", icon: Rocket, text: "Auction" },
  { to: "/#features", icon: Layers, text: "Features" },
  { to: "/whitepaper", icon: FileText, text: "Whitepaper" },
  { to: "/#community", icon: Users, text: "Community" },
];

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.includes(path.replace('/#', ''));
};

const fontLoaded = ref(false)
const handleImageError = (e) => {
  console.error('Logo failed to load:', e)
  // You might want to set a fallback image here
}

onMounted(() => {
  // Check if fonts are loaded
  document.fonts.ready.then(() => {
    fontLoaded.value = true
  })
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Simplified Logo -->
      <NuxtLink to="#top" class="text-white text-xl font-obviously-semibold flex items-center space-x-3">
        <div class="w-12 h-12 relative">
          <img 
            src="/d4l-ai-logo.svg" 
            alt="D4L Logo" 
            class="w-full h-full"
            @error="handleImageError"
          />
        </div>
        <span class="opacity-0 transition-opacity duration-300" :class="{ 'opacity-100': fontLoaded }">D4L</span>
      </NuxtLink>

      <!-- NAVIGATION MENU -->
      <div class="hidden md:flex items-center space-x-6 text-white">
        <NuxtLink 
          v-for="(item, index) in navItems" 
          :key="index"
          :to="item.to" 
          :class="[
            'nav-link group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10',
            'font-obviously-regular',
            isActive(item.to) ? 'text-violet-400 bg-white/5' : 'text-white'
          ]"
        >
          <component 
            :is="item.icon" 
            :class="[
              'w-5 h-5 transition-transform duration-300',
              isActive(item.to) ? 'text-violet-400 scale-110' : 'text-violet-400 group-hover:scale-110'
            ]" 
          />
          <span class="group-hover:text-violet-400 transition-colors duration-300">{{ item.text }}</span>
        </NuxtLink>
      </div>

      <!-- LOGIN BUTTON -->
      <NuxtLink
        to="#login"
        class="nav-button bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/20 font-obviously font-semibold"
      >
        <LogIn class="w-5 h-5" />
        <span>Login</span>
      </NuxtLink>

      <!-- MOBILE MENU BUTTON -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <Layers class="w-6 h-6" />
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div 
      v-if="menuOpen" 
      class="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col py-4"
    >
      <NuxtLink 
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        :class="[
          'py-2 px-6 flex items-center space-x-2 transition font-obviously font-thin',
          isActive(item.to) ? 'bg-violet-500/20 text-violet-400' : 'hover:bg-violet-500/20'
        ]"
      >
        <component 
          :is="item.icon" 
          :class="[
            'w-5 h-5',
            isActive(item.to) ? 'text-violet-400' : 'text-violet-400'
          ]"
        />
        <span>{{ item.text }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: theme('colors.violet.400');
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-button {
  background: linear-gradient(135deg, theme('colors.violet.500'), theme('colors.violet.600'));
  box-shadow: 0 4px 20px -5px theme('colors.violet.500/30');
}
</style>

