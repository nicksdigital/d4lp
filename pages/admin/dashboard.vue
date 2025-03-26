<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  LineChart, Users, ArrowUpRight, ArrowDownRight, 
  DollarSign, Activity 
} from 'lucide-vue-next'

const stats = ref([
  {
    title: 'Total Volume',
    value: '$12.4M',
    change: '+14.2%',
    trend: 'up',
    icon: DollarSign
  },
  {
    title: 'Active Users',
    value: '2,847',
    change: '+7.3%',
    trend: 'up',
    icon: Users
  },
  {
    title: 'TVL',
    value: '$8.2M',
    change: '-2.1%',
    trend: 'down',
    icon: Activity
  }
])

// Add authentication check
onMounted(() => {
  // Check auth status and redirect if not admin
})
</script>

<template>
  <div class="min-h-screen bg-background pt-[72px]">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-display-semibold text-white">
          Admin Dashboard
        </h1>
        <div class="flex items-center space-x-4">
          <button class="px-4 py-2 bg-violet-600 rounded-lg text-white hover:bg-violet-700 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div v-for="stat in stats" 
             :key="stat.title"
             class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-gray-400 mb-1">{{ stat.title }}</p>
              <h3 class="text-2xl font-display-semibold text-white">
                {{ stat.value }}
              </h3>
            </div>
            <component :is="stat.icon" 
                      class="w-6 h-6 text-violet-400" />
          </div>
          <div class="mt-4 flex items-center" 
               :class="stat.trend === 'up' ? 'text-green-500' : 'text-red-500'">
            <component :is="stat.trend === 'up' ? ArrowUpRight : ArrowDownRight" 
                      class="w-4 h-4 mr-1" />
            {{ stat.change }}
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Chart Section -->
        <div class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
          <h2 class="text-xl font-display-semibold text-white mb-6">
            Trading Volume
          </h2>
          <div class="h-[300px] flex items-center justify-center">
            <!-- Add your chart component here -->
            <p class="text-gray-400">Chart Coming Soon</p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
          <h2 class="text-xl font-display-semibold text-white mb-6">
            Recent Activity
          </h2>
          <div class="space-y-4">
            <!-- Add your activity list component here -->
            <p class="text-gray-400">Activity Feed Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>