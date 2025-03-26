<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRightLeft, TrendingUp, ChevronDown } from 'lucide-vue-next'
import PageLayout from '~/components/layouts/PageLayout.vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

const fromToken = ref({
  symbol: 'ETH',
  balance: '1.245',
  amount: ''
})

const toToken = ref({
  symbol: 'D4L',
  balance: '1000.00',
  amount: ''
})

const slippage = ref(0.5)
const priceImpact = computed(() => {
  return fromToken.value.amount ? (parseFloat(fromToken.value.amount) * 0.02).toFixed(2) : '0.00'
})

const swapTokens = () => {
  [fromToken.value, toToken.value] = [toToken.value, fromToken.value]
}

const executeSwap = async () => {
  // Implement swap logic
}
</script>

<template>
  <PageLayout
    title="Trade"
    subtitle="Swap tokens with HydraCurve's optimized AMM"
    :icon="ArrowRightLeft"
    gradient-start="emerald"
    gradient-end="blue"
  >
    <div class="max-w-lg mx-auto">
      <!-- Swap Card -->
      <div class="glass-card p-6 rounded-2xl bg-white/[0.03] border border-white/10">
        <!-- From Token -->
        <div class="space-y-2">
          <div class="flex justify-between text-sm text-gray-400">
            <span>From</span>
            <span>Balance: {{ fromToken.balance }} {{ fromToken.symbol }}</span>
          </div>
          <div class="flex items-center space-x-4 p-4 rounded-xl bg-black/20">
            <button class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30">
              <span class="font-semibold">{{ fromToken.symbol }}</span>
              <ChevronDown class="w-4 h-4" />
            </button>
            <input
              v-model="fromToken.amount"
              type="number"
              placeholder="0.0"
              class="w-full bg-transparent text-2xl focus:outline-none"
            />
          </div>
        </div>

        <!-- Swap Button -->
        <div class="flex justify-center -my-2">
          <button
            @click="swapTokens"
            class="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transform transition-transform hover:scale-110"
          >
            <ArrowRightLeft class="w-6 h-6" />
          </button>
        </div>

        <!-- To Token -->
        <div class="space-y-2">
          <div class="flex justify-between text-sm text-gray-400">
            <span>To</span>
            <span>Balance: {{ toToken.balance }} {{ toToken.symbol }}</span>
          </div>
          <div class="flex items-center space-x-4 p-4 rounded-xl bg-black/20">
            <button class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30">
              <span class="font-semibold">{{ toToken.symbol }}</span>
              <ChevronDown class="w-4 h-4" />
            </button>
            <input
              v-model="toToken.amount"
              type="number"
              placeholder="0.0"
              class="w-full bg-transparent text-2xl focus:outline-none"
            />
          </div>
        </div>

        <!-- Trade Info -->
        <div class="mt-4 space-y-2 text-sm">
          <div class="flex justify-between text-gray-400">
            <span>Price Impact</span>
            <span>{{ priceImpact }}%</span>
          </div>
          <div class="flex justify-between text-gray-400">
            <span>Slippage Tolerance</span>
            <span>{{ slippage }}%</span>
          </div>
        </div>

        <!-- Action Button -->
        <button
          @click="executeSwap"
          class="w-full mt-4 py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 
                 font-semibold transition-colors text-center"
          :disabled="!auth.isAuthenticated"
        >
          {{ auth.isAuthenticated ? 'Swap' : 'Connect Wallet to Trade' }}
        </button>
      </div>

      <!-- Advanced Trading Features -->
      <div class="mt-8 space-y-4">
        <div class="glass-card p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp class="w-5 h-5 mr-2" />
            Advanced Trading
          </h3>
          <!-- Add advanced trading features here -->
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(139, 92, 246, 0.3);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>