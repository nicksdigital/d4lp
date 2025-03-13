<script setup>
import { ref, onMounted } from 'vue'
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
  e.target.src = '/fallback-logo.png'
}

onMounted(() => {
  document.fonts.ready.then(() => {
    fontLoaded.value = true
  })
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Enhanced Logo with Animation and Glow -->
      <NuxtLink to="#top" class="text-white text-xl font-display-semibold flex items-center space-x-3">
        <div class="logo-container w-12 h-12 relative flex items-center justify-center overflow-visible">
          <div class="absolute inset-0 logo-glow rounded-full"></div>
          <div class="absolute inset-0 logo-metallic rounded-full"></div>
          <!-- Magical Particles -->
          <div class="particles-container absolute inset-[-50%]">
            <div v-for="n in 6" :key="n" class="particle"></div>
          </div>
          <img 
            src="/d4l-ai-logo.png" 
            alt="D4L Logo" 
            class="w-10 h-10 object-contain relative z-10"
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
            'font-display-regular',
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
        class="nav-button bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/20 font-display font-semibold"
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
          'py-2 px-6 flex items-center space-x-2 transition font-display font-thin',
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
.logo-container {
  position: relative;
  isolation: isolate;
  background: rgba(168, 85, 247, 0.05);
}

.logo-glow {
  animation: pulse-glow 2s ease-in-out infinite;
  background: radial-gradient(
    circle at center,
    rgba(168, 85, 247, 0.4) 0%,
    rgba(168, 85, 247, 0.2) 40%,
    transparent 70%
  );
  filter: blur(8px);
}

.logo-metallic {
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.8) 0%,
    rgba(126, 34, 206, 0.6) 50%,
    rgba(168, 85, 247, 0.8) 100%
  );
  background-size: 200% 200%;
  mix-blend-mode: color-dodge;
  opacity: 0.6;
  animation: metallic-shift 3s linear infinite;
}

/* Particles Styling */
.particles-container {
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(168, 85, 247, 0.8);
  border-radius: 50%;
  filter: blur(1px);
}

.particle:nth-child(1) { animation: particle-1 3s linear infinite; }
.particle:nth-child(2) { animation: particle-2 3.5s linear infinite 0.5s; }
.particle:nth-child(3) { animation: particle-3 4s linear infinite 1s; }
.particle:nth-child(4) { animation: particle-4 3.8s linear infinite 1.5s; }
.particle:nth-child(5) { animation: particle-5 3.2s linear infinite 0.8s; }
.particle:nth-child(6) { animation: particle-6 3.6s linear infinite 1.2s; }

/* Particle Animations */
@keyframes particle-1 {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  50% { transform: translate(-20px, -20px) scale(1.2); opacity: 1; }
  100% { transform: translate(-40px, -40px) scale(0.8); opacity: 0; }
}

@keyframes particle-2 {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  50% { transform: translate(20px, -20px) scale(1.2); opacity: 1; }
  100% { transform: translate(40px, -40px) scale(0.8); opacity: 0; }
}

@keyframes particle-3 {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  50% { transform: translate(20px, 20px) scale(1.2); opacity: 1; }
  100% { transform: translate(40px, 40px) scale(0.8); opacity: 0; }
}

@keyframes particle-4 {
  0% { transform: translate(0, 0) scale(1); opacity: 0; }
  50% { transform: translate(-20px, 20px) scale(1.2); opacity: 1; }
  100% { transform: translate(-40px, 40px) scale(0.8); opacity: 0; }
}

@keyframes particle-5 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
  50% { transform: translate(-15px, -25px) rotate(180deg) scale(1.2); opacity: 1; }
  100% { transform: translate(-30px, -50px) rotate(360deg) scale(0.8); opacity: 0; }
}

@keyframes particle-6 {
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
  50% { transform: translate(15px, -25px) rotate(-180deg) scale(1.2); opacity: 1; }
  100% { transform: translate(30px, -50px) rotate(-360deg) scale(0.8); opacity: 0; }
}

/* Base Animations */
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes metallic-shift {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

/* Enhanced hover effects */
.logo-container:hover {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
}

.logo-container:hover .particle {
  animation-duration: 2s;
}

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

