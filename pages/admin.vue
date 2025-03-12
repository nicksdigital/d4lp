
<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <h1 class="text-3xl font-bold mb-8">Admin Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="glass-card p-6">
        <h3 class="text-lg text-orange-400 mb-2">Total Whitelisted</h3>
        <p class="text-2xl font-bold">{{ adminStore.stats.totalWhitelisted }}</p>
      </div>
      <div class="glass-card p-6">
        <h3 class="text-lg text-orange-400 mb-2">Total Bids</h3>
        <p class="text-2xl font-bold">{{ adminStore.stats.totalBids }}</p>
      </div>
      <div class="glass-card p-6">
        <h3 class="text-lg text-orange-400 mb-2">Highest Bid</h3>
        <p class="text-2xl font-bold">${{ adminStore.stats.highestBid }}</p>
      </div>
      <div class="glass-card p-6">
        <h3 class="text-lg text-orange-400 mb-2">Active Bidders</h3>
        <p class="text-2xl font-bold">{{ adminStore.stats.activeBidders }}</p>
      </div>
    </div>

    <div class="glass-card p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">Feature Controls</h2>
      <div class="flex items-center space-x-4">
        <label class="inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            :checked="adminStore.showFloatingUI"
            @change="adminStore.toggleFloatingUI()"
            class="sr-only peer"
          >
          <div class="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          <span class="ms-3">Show Trending Auction</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAdminStore } from '~/stores/admin'

const adminStore = useAdminStore()

// Example of updating stats - replace with real data fetching
onMounted(() => {
  adminStore.updateStats({
    totalWhitelisted: 156,
    totalBids: 423,
    highestBid: "12,500",
    activeBidders: 89
  })
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
