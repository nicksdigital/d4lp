<template>
  <footer class="w-full bg-black/90 text-gray-400 py-10 px-6">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      <!-- Logo & Tagline -->
      <div>
        <NuxtLink to="/" class="text-2xl font-bold text-white flex items-center justify-center md:justify-start space-x-2">
          <img 
            src="/d4l-ai-logo.png" 
            alt="D4L Logo" 
            class="w-10 h-10 object-contain"
            @error="handleImageError"
          />
          <span class="font-display-semibold">D4L</span>
        </NuxtLink>
        <p class="mt-2 text-gray-400">The Future of Fair Launches in DeFi.</p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col space-y-3">
        <h3 class="text-white font-display-semibold uppercase tracking-wide">Quick Links</h3>
        <NuxtLink to="#about" class="hover:text-orange-500 transition">About</NuxtLink>
        <NuxtLink to="#auction" class="hover:text-orange-500 transition">Auction</NuxtLink>
        <NuxtLink to="#features" class="hover:text-orange-500 transition">Features</NuxtLink>
        <NuxtLink to="#whitepaper" class="hover:text-orange-500 transition">Whitepaper</NuxtLink>
        <NuxtLink to="#contact" class="hover:text-orange-500 transition">Contact</NuxtLink>
      </div>

      <!-- Socials -->
      <div class="flex flex-col space-y-3">
        <h3 class="text-white font-display-semibold uppercase tracking-wide">Follow Us</h3>
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="https://twitter.com" target="_blank" class="hover:text-orange-500 transition">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://discord.com" target="_blank" class="hover:text-orange-500 transition">
            <i class="fab fa-discord text-2xl"></i>
          </a>
          <a href="https://telegram.org" target="_blank" class="hover:text-orange-500 transition">
            <i class="fab fa-telegram text-2xl"></i>
          </a>
          <a href="https://github.com" target="_blank" class="hover:text-orange-500 transition">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-6"></div>

    <!-- Copyright -->
    <div class="text-center text-gray-500 text-sm">
      &copy; 2025 D4L. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const handleImageError = (e) => {
  console.error('Logo failed to load:', e)
  e.target.src = '/fallback-logo.png'
}
</script>
  
