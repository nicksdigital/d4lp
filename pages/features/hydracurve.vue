<script setup lang="ts">
import { LineChart, Cpu, Rocket, Shield } from 'lucide-vue-next'
import PageLayout from '~/components/layouts/PageLayout.vue'

const features = [
  {
    title: '130% Capital Efficiency',
    description: 'Optimized liquidity distribution through advanced mathematical modeling',
    icon: LineChart
  },
  {
    title: 'Dynamic Pricing',
    description: 'Real-time price adaptation using quantum-inspired algorithms',
    icon: Cpu
  },
  {
    title: 'Enhanced Security',
    description: 'Multi-layer protection systems with formal verification',
    icon: Shield
  }
]
</script>

<template>
  <PageLayout
    title="HydraCurve AMM"
    subtitle="Next-Generation Automated Market Maker with Enhanced Capital Efficiency"
    :icon="Rocket"
    gradient-start="emerald"
    gradient-end="blue"
  >
    <!-- Technical Overview -->
    <div class="prose prose-lg prose-invert max-w-none">
      <h2 class="text-3xl font-display-semibold text-emerald-400 mb-6">
        Technical Overview
      </h2>
      <p class="text-gray-300">
        HydraCurve represents a breakthrough in AMM design, combining sigmoid, gaussian, and 
        rational functions to optimize liquidity distribution and market adaptability.
      </p>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div v-for="feature in features" 
             :key="feature.title"
             class="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300
                    border border-white/10 hover:border-emerald-500/30">
          <component :is="feature.icon" 
                     class="w-8 h-8 text-emerald-400 mb-4" />
          <h3 class="text-xl font-display-semibold text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-400">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Mathematical Framework -->
      <h2 class="text-3xl font-display-semibold text-emerald-400 mt-12 mb-6">
        Mathematical Framework
      </h2>
      <div class="bg-black/30 p-6 rounded-xl border border-white/10">
        <p class="text-gray-300 font-mono">
          L(p,pt) = √(x·y)·f(p,pt)
        </p>
        <p class="text-sm text-gray-400 mt-2">
          Where:
          <br>L = Liquidity
          <br>p = Current price
          <br>pt = Target price
          <br>x,y = Token reserves
        </p>
      </div>

      <!-- Interactive Demo -->
      <div class="mt-12">
        <h2 class="text-3xl font-display-semibold text-emerald-400 mb-6">
          Live Performance
        </h2>
        <!-- Add your interactive chart/demo component here -->
        <div class="h-[400px] bg-black/30 rounded-xl border border-white/10 flex items-center justify-center">
          <p class="text-gray-400">Interactive Demo Coming Soon</p>
        </div>
      </div>
    </div>
  </PageLayout>
</template>