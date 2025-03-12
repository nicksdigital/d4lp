<script setup>
import { ref } from "vue";
import { Home, Rocket, Layers, FileText, Users, LogIn } from "lucide-vue-next"; // ✅ Import Lucide Icons

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
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-lg transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- LOGO -->
      <NuxtLink to="#top" class="text-white text-xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
        <Rocket class="w-6 h-6 text-orange-400" />
        <span>D4L</span>
      </NuxtLink>

      <!-- NAVIGATION MENU -->
      <div class="hidden md:flex items-center space-x-6 text-white">
        <NuxtLink 
          v-for="(item, index) in navItems" 
          :key="index"
          :to="item.to" 
          class="nav-link group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <component :is="item.icon" class="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
          <span class="group-hover:text-orange-400 transition-colors duration-300">{{ item.text }}</span>
        </NuxtLink>
      </div>

      <!-- LOGIN BUTTON -->
      <NuxtLink
        to="#login"
        class="nav-button bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20"
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
    <div v-if="menuOpen" class="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col py-4">
      <NuxtLink to="/" class="py-2 px-6 flex items-center space-x-2 hover:bg-orange-500/20 transition">
        <Home class="w-5 h-5" />
        <span>Home</span>
      </NuxtLink>

      <NuxtLink to="/#auction" class="py-2 px-6 flex items-center space-x-2 hover:bg-orange-500/20 transition">
        <Rocket class="w-5 h-5" />
        <span>Auction</span>
      </NuxtLink>

      <NuxtLink to="/#features" class="py-2 px-6 flex items-center space-x-2 hover:bg-orange-500/20 transition">
        <Layers class="w-5 h-5" />
        <span>Features</span>
      </NuxtLink>

      <NuxtLink to="/whitepaper" class="py-2 px-6 flex items-center space-x-2 hover:bg-orange-500/20 transition">
        <FileText class="w-5 h-5" />
        <span>Whitepaper</span>
      </NuxtLink>

      <NuxtLink to="/#community" class="py-2 px-6 flex items-center space-x-2 hover:bg-orange-500/20 transition">
        <Users class="w-5 h-5" />
        <span>Community</span>
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
  background-color: theme('colors.orange.400');
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-button {
  background: linear-gradient(135deg, theme('colors.orange.500'), theme('colors.orange.600'));
  box-shadow: 0 4px 20px -5px theme('colors.orange.500/30');
}
</style>

