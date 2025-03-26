<script setup>
import { ref } from 'vue'
import { 
  Home, 
  Building2, 
  Users, 
  Code2, 
  Layers,
  Rocket,
  Sword,
  LineChart,
  HelpCircle,
  Map,
  Mail,
  Lock,
  ChevronDown,
  FileText
} from "lucide-vue-next"
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Main navigation items
const navItems = [
  { to: "/", icon: Home, text: "Home" },
  { 
    text: "Company",
    icon: Building2,
    children: [
      { to: "/business-info", text: "Business Info" },
      { to: "/about-us", text: "About Us" },
      { to: "/team", text: "Our Team" }
    ]
  },
  { 
    text: "Platform",
    icon: Layers,
    children: [
      { to: "/tech", text: "The Technology" },
      { to: "/system", text: "The System" }
    ]
  },
  {
    text: "Features",
    icon: Rocket,
    children: [
      { to: "/features/dex", text: "DEX" },
      { to: "/features/bonkwars", text: "BonkWars" },
      { to: "/features/hydracurve", text: "HydraCurve" },
      { to: "/features/prediction", text: "Prediction Markets" },
      { to: "/features/social", text: "Social Trading" }
    ]
  },
  { to: "/faq", icon: HelpCircle, text: "FAQ" },
  { to: "/roadmap", icon: Map, text: "Roadmap" },
  { to: "/contact", icon: Mail, text: "Contact" }
]

// Admin/gated pages - separate from main nav
const adminItems = [
  { to: "/admin/dashboard", text: "Dashboard", icon: LineChart },
  { to: "/admin/users", text: "User Management", icon: Users },
  { to: "/admin/content", text: "Content Management", icon: FileText },
  { to: "/admin/settings", text: "Settings", icon: Lock }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.includes(path)
}

const isChildActive = (children) => {
  return children.some(child => route.path.includes(child.to))
}
</script>

<template>
  <nav class="bg-black/80 backdrop-blur-xl fixed w-full z-50 top-0 border-b border-white/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/d4l-ai-logo.png" alt="D4L Logo" class="w-10 h-10" />
          <span class="text-xl font-bold text-white">D4L</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <template v-for="(item, index) in navItems" :key="index">
            <!-- Regular nav item -->
            <NuxtLink
              v-if="!item.children"
              :to="item.to"
              :class="[
                'nav-link group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10',
                isActive(item.to) ? 'text-violet-400 bg-white/5' : 'text-white'
              ]"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.text }}</span>
            </NuxtLink>

            <!-- Dropdown menu -->
            <div
              v-else
              class="relative group"
            >
              <button
                class="nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                :class="[isChildActive(item.children) ? 'text-violet-400 bg-white/5' : 'text-white']"
              >
                <component :is="item.icon" class="w-5 h-5" />
                <span>{{ item.text }}</span>
                <ChevronDown class="w-4 h-4 ml-1" />
              </button>
              
              <div class="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="block px-4 py-2 text-white hover:bg-white/10 hover:text-violet-400 transition-colors duration-300"
                  :class="[isActive(child.to) ? 'text-violet-400 bg-white/5' : '']"
                >
                  {{ child.text }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>

        <!-- Login Button -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/login"
            class="nav-button bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Lock class="w-5 h-5" />
            <span>Login</span>
          </NuxtLink>

          <!-- Mobile menu button -->
          <button @click="toggleMenu" class="lg:hidden text-white">
            <Layers class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="menuOpen"
      class="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-2">
          <template v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              v-if="!item.children"
              :to="item.to"
              class="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg"
              :class="[isActive(item.to) ? 'text-violet-400 bg-white/5' : '']"
              @click="menuOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.text }}</span>
            </NuxtLink>

            <div v-else class="flex flex-col">
              <div
                class="flex items-center space-x-2 px-4 py-2 text-white"
                :class="[isChildActive(item.children) ? 'text-violet-400' : '']"
              >
                <component :is="item.icon" class="w-5 h-5" />
                <span>{{ item.text }}</span>
              </div>
              <div class="ml-8 flex flex-col space-y-1">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="px-4 py-2 text-white hover:bg-white/10 rounded-lg"
                  :class="[isActive(child.to) ? 'text-violet-400 bg-white/5' : '']"
                  @click="menuOpen = false"
                >
                  {{ child.text }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply font-display-regular;
}

.nav-button {
  @apply font-display font-semibold;
}

.nav-dropdown-enter-active,
.nav-dropdown-leave-active {
  transition: all 0.3s ease;
}

.nav-dropdown-enter-from,
.nav-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.3s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Add to existing styles */
.nav-indicator {
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 transform scale-x-0 transition-transform duration-300;
}

.nav-link:hover .nav-indicator,
.nav-link.active .nav-indicator {
  @apply scale-x-100;
}

.nav-button {
  @apply relative overflow-hidden;
}

.nav-button::after {
  content: '';
  @apply absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-300;
}

.nav-button:hover::after {
  @apply scale-x-100;
}
</style>

