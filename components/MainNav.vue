<script setup>
import { ref, computed } from "vue";
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
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Enhanced 3D Logo -->
      <NuxtLink to="#top" class="text-white text-xl font-super font-obviously flex items-center space-x-3 group">
        <div class="relative w-12 h-12 perspective-1000">
          <!-- 3D Container -->
          <div class="logo-3d-container relative w-full h-full transform-style-preserve-3d group-hover:animate-logo-spin">
            <!-- Base glow effect -->
            <div class="absolute inset-0 rounded-full bg-violet-500/20 blur-xl group-hover:bg-violet-500/40 
                        transition-all duration-500"></div>
            
            <!-- Front face -->
            <div class="absolute w-full h-full backface-hidden">
              <img 
                src="/d4l-ai-logo.svg" 
                alt="D4L Logo" 
                class="w-full h-full relative z-10 group-hover:filter group-hover:brightness-125
                       transition-all duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              />
            </div>
            
            <!-- Back face -->
            <div class="absolute w-full h-full backface-hidden transform rotate-y-180">
              <img 
                src="/d4l-ai-logo.svg" 
                alt="D4L Logo" 
                class="w-full h-full relative z-10 group-hover:filter group-hover:brightness-125
                       transition-all duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              />
            </div>

            <!-- Orbital glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-violet-500/0
                        rounded-full animate-spin-reverse opacity-0 group-hover:opacity-100
                        transition-opacity duration-300"></div>
          </div>
        </div>
        <span class="group-hover:text-violet-400 transition-colors duration-300">D4L</span>
      </NuxtLink>

      <!-- NAVIGATION MENU -->
      <div class="hidden md:flex items-center space-x-6 text-white">
        <NuxtLink 
          v-for="(item, index) in navItems" 
          :key="index"
          :to="item.to" 
          :class="[
            'nav-link group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10',
            'font-obviously font-thin',
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

.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

@keyframes logo-spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.animate-logo-spin {
  animation: logo-spin 3s linear infinite;
}

/* Optional: Add these smooth transitions */
.logo-3d-container {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced shadow effect */
.logo-3d-container::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent);
  border-radius: 50%;
  z-index: -1;
  animation: border-pulse 2s linear infinite;
}

@keyframes border-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>

