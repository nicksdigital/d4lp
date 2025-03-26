<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, Trophy, Star, TrendingUp } from 'lucide-vue-next'
import PageLayout from '~/components/layouts/PageLayout.vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

const traders = ref([
  {
    address: '0x1234...5678',
    name: 'CryptoWhale',
    reputation: 850,
    roi: '+45.2%',
    followers: 1234,
    achievements: ['Diamond Trader', 'Top 10 Weekly']
  },
  // Add more traders
])

const achievements = ref([
  {
    id: 1,
    name: 'First Trade',
    description: 'Complete your first trade',
    progress: 100,
    completed: true
  },
  {
    id: 2,
    name: 'Volume Master',
    description: 'Reach $100k trading volume',
    progress: 65,
    completed: false
  }
])

onMounted(async () => {
  // Fetch social trading data
})
</script>

<template>
  <PageLayout
    title="Social Trading"
    subtitle="Copy top traders and earn achievements"
    :icon="Users"
    gradient-start="violet"
    gradient-end="indigo"
  >
    <!-- User Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="glass-card p-6 rounded-xl">
        <div class="flex items-center space-x-4">
          <div class="p-3 rounded-lg bg-violet-500/20">
            <Trophy class="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h3 class="text-lg font-semibold">Your Rank</h3>
            <p class="text-2xl font-bold text-violet-400">#{{ auth.reputation }}</p>
          </div>
        </div>
      </div>
      
      <!-- Add more stat cards -->
    </div>

    <!-- Top Traders -->
    <div class="glass-card p-6 rounded-xl mb-8">
      <h2 class="text-xl font-semibold mb-6 flex items-center">
        <Star class="w-6 h-6 mr-2 text-violet-400" />
        Top Traders
      </h2>
      
      <div class="space-y-4">
        <div v-for="trader in traders" 
             :key="trader.address"
             class="p-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <Users class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-semibold">{{ trader.name }}</h3>
                <p class="text-sm text-gray-400">{{ trader.address }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-green-400">{{ trader.roi }}</p>
              <p class="text-sm text-gray-400">{{ trader.followers }} followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <div class="glass-card p-6 rounded-xl">
      <h2 class="text-xl font-semibold mb-6 flex items-center">
        <Trophy class="w-6 h-6 mr-2 text-violet-400" />
        Achievements
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="achievement in achievements" 
             :key="achievement.id"
             class="p-4 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold">{{ achievement.name }}</h3>
            <span class="text-sm" 
                  :class="achievement.completed ? 'text-green-400' : 'text-gray-400'">
              {{ achievement.progress }}%
            </span>
          </div>
          <p class="text-sm text-gray-400">{{ achievement.description }}</p>
          <div class="mt-2 h-2 rounded-full bg-white/[0.05]">
            <div class="h-full rounded-full bg-violet-500"
                 :style="`width: ${achievement.progress}%`" />
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}
</style>