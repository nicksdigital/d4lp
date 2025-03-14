<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Rocket, Layout, Code2, Coins, Calendar, Target, Shield, Users, Lightbulb, TrendingUp, FileText, Cpu, Map, Layers
} from 'lucide-vue-next'

const sections = [
  { id: 'executive-summary', title: '1. Executive Summary', icon: Rocket },
  { id: 'platform-overview', title: '2. Platform Overview', icon: Layout },
  { id: 'technical', title: '3. Technical Architecture', icon: Code2 },
  { id: 'tokenomics', title: '4. Tokenomics & Allocation', icon: Coins },
  { id: 'technology', title: '5. Technology Stack', icon: Layers },
  { id: 'roadmap', title: '6. Roadmap', icon: Calendar },
  { id: 'security', title: '7. Security', icon: Shield },
  { id: 'risk', title: '8. Risk Management', icon: Target },
  { id: 'community', title: '9. Community & Governance', icon: Users },
  { id: 'legal', title: '10. Legal & Compliance', icon: FileText }
]

const activeSection = ref('')
const readingProgress = ref(0)

const calculateReadingProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrollTop = window.scrollY
  readingProgress.value = (scrollTop / documentHeight) * 100
}

const updateActiveSection = () => {
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', calculateReadingProgress)
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', calculateReadingProgress)
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <main class="min-h-screen bg-background">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 bg-violet-900/20 z-50">
      <div 
        class="h-full bg-gradient-to-r from-violet-500 to-violet-700 transition-all duration-300"
        :style="{ width: `${readingProgress}%` }"
      ></div>
    </div>

    <!-- Hero Section -->
    <div class="relative pt-[172px] pb-24 text-center">
      <div class="container mx-auto px-4">
        <div class="glass-hero-card p-12 rounded-2xl mb-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-900/20 backdrop-blur-xl"></div>
          <div class="relative z-10">
            <h1 class="text-7xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              D4L Whitepaper
            </h1>
            <p class="text-2xl text-violet-200/80 mt-6 max-w-2xl mx-auto font-display-thin">
              Risk It, Build It, Bank It
            </p>
            <div class="mt-8 flex items-center justify-center gap-4">
              <a href="/docs/D4L-Whitepaper.pdf" 
                target="_blank"
                class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-700 to-violet-600 
                      hover:from-violet-600 hover:to-violet-500 text-white rounded-xl shadow-lg transition-all duration-300 
                      transform hover:scale-105 hover:shadow-violet-500/25 backdrop-blur-sm">
                <FileText class="w-5 h-5" />
                Download PDF
              </a>
              <button 
                @click="() => document.getElementById('executive-summary')?.scrollIntoView({ behavior: 'smooth', block: 'start' })"
                class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 
                      text-white rounded-xl transition-all duration-300 backdrop-blur-sm">
                Read Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Side Navigation -->
    <div class="fixed left-4 top-1/2 transform -translate-y-1/2 hidden xl:block z-40">
      <nav class="space-y-2">
        <a v-for="section in sections" 
           :key="section.id"
           :href="`#${section.id}`"
           class="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 group hover:bg-violet-500/20"
           :class="activeSection === section.id ? 'bg-violet-500/20 text-violet-400' : 'text-gray-400 hover:text-violet-400'">
          <component :is="section.icon" class="w-5 h-5" />
          <span class="font-display-regular text-sm whitespace-nowrap transition-all duration-300"
                :class="activeSection === section.id ? 'opacity-100' : 'opacity-20 group-hover:opacity-60'">
            {{ section.title }}
          </span>
        </a>
      </nav>
    </div>

    <!-- Mobile/Tablet Navigation -->
    <ClientOnly>
      <div class="sticky top-[72px] left-0 right-0 z-40 backdrop-blur-xl bg-black/40 xl:hidden">
        <div class="container mx-auto px-4 py-4 overflow-x-auto">
          <div class="flex gap-4 min-w-max">
            <a v-for="section in sections" 
               :key="section.id"
               :href="`#${section.id}`"
               class="px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
               :class="activeSection === section.id ? 'bg-violet-500/20 text-violet-400' : 'text-gray-400'">
              <component :is="section.icon" class="w-4 h-4" />
              <span class="font-display-regular text-sm whitespace-nowrap">{{ section.title }}</span>
            </a>
          </div>
        </div>
      </div>
    </ClientOnly>

    <!-- Content Sections -->
    <div class="container mx-auto px-4 pb-24">
      <div class="max-w-4xl mx-auto">
        <!-- Executive Summary -->
        <section id="executive-summary" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                      hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Rocket class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 
                         bg-clip-text text-transparent">
                1. Executive Summary
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                D4L represents a paradigm shift in decentralized finance, combining advanced trading mechanisms with user-centric design. Our ecosystem integrates:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Next-generation DEX with 130% capital efficiency</li>
                <li>Secure token launchpad with anti-scam protection</li>
                <li>Competitive meme coin battle arena</li>
                <li>Strategic prediction markets</li>
                <li>Cross-chain compatibility and seamless asset transfer</li>
              </ul>
              <p>
                Built for traders, creators, and risk-takers, D4L delivers a secure and engaging platform where innovation meets opportunity.
              </p>
            </div>
          </div>
        </section>

        <!-- Platform Overview -->
        <section id="platform-overview" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Layout class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                2. Platform Overview
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                D4L is a next-generation DeFi platform that combines advanced trading mechanisms with innovative risk management solutions.
                Our platform is designed to serve both retail and institutional users with a focus on security, efficiency, and user experience.
              </p>
              <h3 class="text-2xl text-violet-400">Key Features</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Advanced order types and execution algorithms</li>
                <li>Cross-chain asset management</li>
                <li>Institutional-grade security measures</li>
                <li>Automated portfolio rebalancing</li>
                <li>Social trading integration</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Technical Architecture -->
        <section id="technical" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                      hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Code2 class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 
                         bg-clip-text text-transparent">
                3. Technical Architecture
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <h3 class="text-2xl text-violet-400">Blockchain Infrastructure</h3>
              <p>
                D4L is engineered on Base, an Ethereum Layer-2 scaling solution, harnessing the ERC-20 standard
                for the $D4L token. This design guarantees broad compatibility with wallets, decentralized
                applications (dApps), and exchanges.
              </p>
              
              <h3 class="text-2xl text-violet-400">Smart Contract Architecture</h3>
              <p>
                D4L runs on a modular stack of smart contracts:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>D4LController:</strong> Core protocol management</li>
                <li><strong>SecurityModule:</strong> Security and access control</li>
                <li><strong>LiquidityModule:</strong> AMM and liquidity management</li>
                <li><strong>SocialModule:</strong> Social trading features</li>
                <li><strong>InsuranceModule:</strong> Risk mitigation and insurance</li>
                <li><strong>PredictionMarketModule:</strong> Market analysis</li>
                <li><strong>MomentumModule:</strong> Trading signals</li>
                <li><strong>DEX & ENS Modules:</strong> Exchange and naming services</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Tokenomics -->
        <section id="tokenomics" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                      hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Coins class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 
                         bg-clip-text text-transparent">
                4. Tokenomics
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <h3 class="text-2xl text-violet-400">Token Distribution</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white/5 p-6 rounded-xl">
                  <h4 class="text-xl text-violet-300 mb-4">Initial Supply</h4>
                  <ul class="list-none space-y-3">
                    <li class="flex justify-between">
                      <span>Community Pool</span>
                      <span class="text-violet-400">25%</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Team & Development</span>
                      <span class="text-violet-400">20%</span>
                    </li>
                    <li class="flex justify-between">
                      <span>DEX Liquidity</span>
                      <span class="text-violet-400">30%</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Marketing</span>
                      <span class="text-violet-400">10%</span>
                    </li>
                    <li class="flex justify-between">
                      <span>CEX Liquidity</span>
                      <span class="text-violet-400">15%</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-white/5 p-6 rounded-xl">
                  <h4 class="text-xl text-violet-300 mb-4">Vesting Schedule</h4>
                  <ul class="list-disc pl-6 space-y-2">
                    <li>Team tokens: 2-year linear vesting</li>
                    <li>Advisors: 18-month linear vesting</li>
                    <li>Community rewards: Released per milestone</li>
                    <li>Liquidity: Locked for minimum 1 year</li>
                  </ul>
                </div>
              </div>

              <h3 class="text-2xl text-violet-400 mt-12">Token Utility</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Governance rights in the D4L DAO</li>
                <li>Platform fee discounts</li>
                <li>Access to premium features</li>
                <li>Staking rewards</li>
                <li>Liquidity mining incentives</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Technology -->
        <section id="technology" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                      hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Cpu class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 
                         bg-clip-text text-transparent">
                5. Technology Stack
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <h3 class="text-2xl text-violet-400">HydraCurve™ AMM</h3>
              <p>
                Our proprietary automated market maker combines three mathematical functions:
              </p>
              <div class="bg-white/5 p-6 rounded-xl space-y-4">
                <div>
                  <h4 class="text-lg text-violet-300">Sigmoid Component</h4>
                  <p class="text-sm">Optimizes liquidity concentration around the current price</p>
                </div>
                <div>
                  <h4 class="text-lg text-violet-300">Gaussian Component</h4>
                  <p class="text-sm">Ensures smooth price transitions and reduced slippage</p>
                </div>
                <div>
                  <h4 class="text-lg text-violet-300">Rational Component</h4>
                  <p class="text-sm">Manages tail behavior for extreme price movements</p>
                </div>
              </div>

              <h3 class="text-2xl text-violet-400 mt-12">Security Features</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Multi-signature governance</li>
                <li>Time-locked upgrades</li>
                <li>Automated audit tools</li>
                <li>Bug bounty program</li>
                <li>Insurance fund</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Roadmap -->
        <section id="roadmap" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] 
                      hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Map class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 
                         bg-clip-text text-transparent">
                6. Roadmap
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <div class="space-y-12">
                <div class="relative pl-8 border-l-2 border-violet-500/30">
                  <div class="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h3 class="text-2xl text-violet-400">Q2 2024 - Launch Phase</h3>
                  <ul class="list-disc pl-6 space-y-2 mt-4">
                    <li>Token launch on Base</li>
                    <li>HydraCurve™ AMM deployment</li>
                    <li>Initial DEX offering</li>
                    <li>Community building initiatives</li>
                  </ul>
                </div>

                <div class="relative pl-8 border-l-2 border-violet-500/30">
                  <div class="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h3 class="text-2xl text-violet-400">Q3 2024 - Expansion Phase</h3>
                  <ul class="list-disc pl-6 space-y-2 mt-4">
                    <li>Cross-chain integration</li>
                    <li>Advanced trading features</li>
                    <li>Mobile app launch</li>
                    <li>Strategic partnerships</li>
                  </ul>
                </div>

                <div class="relative pl-8 border-l-2 border-violet-500/30">
                  <div class="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                  <h3 class="text-2xl text-violet-400">Q4 2024 - Maturity Phase</h3>
                  <ul class="list-disc pl-6 space-y-2 mt-4">
                    <li>DAO governance implementation</li>
                    <li>Institutional features</li>
                    <li>Enhanced security measures</li>
                    <li>Global expansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Security Section -->
        <section id="security" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Shield class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                7. Security
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                Security is at the core of D4L's infrastructure, implementing multiple layers of protection to ensure user assets and platform integrity.
              </p>
              <h3 class="text-2xl text-violet-400">Security Measures</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Multi-signature wallets for protocol management</li>
                <li>Regular smart contract audits</li>
                <li>Real-time monitoring systems</li>
                <li>Automated threat detection</li>
                <li>Cold storage for reserve funds</li>
              </ul>

              <h3 class="text-2xl text-violet-400">Access Control</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Role-based access control (RBAC)</li>
                <li>Time-locked transactions</li>
                <li>Multi-factor authentication</li>
                <li>Hardware security modules (HSM)</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Risk Management Section -->
        <section id="risk" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Target class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                8. Risk Management
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                Our comprehensive risk management framework ensures platform stability and user protection through multiple layers of security.
              </p>
              <h3 class="text-2xl text-violet-400">Risk Mitigation Strategies</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Circuit breakers for market volatility</li>
                <li>Insurance fund allocation</li>
                <li>Liquidity risk monitoring</li>
                <li>Position limits and controls</li>
                <li>Automated risk assessment</li>
              </ul>

              <h3 class="text-2xl text-violet-400">Emergency Procedures</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Emergency shutdown protocol</li>
                <li>Crisis management team</li>
                <li>Incident response plan</li>
                <li>User fund protection measures</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Community & Governance Section -->
        <section id="community" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <Users class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                9. Community & Governance
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                The D4L ecosystem is built on strong community participation and decentralized governance principles.
              </p>
              <h3 class="text-2xl text-violet-400">Community Engagement</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Ambassador program</li>
                <li>Developer grants</li>
                <li>Educational resources</li>
                <li>Community events</li>
              </ul>

              <h3 class="text-2xl text-violet-400">Governance Framework</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Token-based voting rights</li>
                <li>Proposal submission system</li>
                <li>Community-driven decisions</li>
                <li>Treasury management</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Legal & Compliance Section -->
        <section id="legal" class="py-16 scroll-mt-32">
          <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 border border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <div class="p-3 rounded-xl bg-violet-500/10">
                <FileText class="w-8 h-8 text-violet-400" />
              </div>
              <h2 class="text-4xl font-display-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                10. Legal & Compliance
              </h2>
            </div>
            <div class="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                D4L maintains strict adherence to regulatory requirements and implements comprehensive compliance measures.
              </p>
              <h3 class="text-2xl text-violet-400">Regulatory Compliance</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>KYC/AML procedures</li>
                <li>Regulatory reporting</li>
                <li>License maintenance</li>
                <li>Privacy protection</li>
              </ul>

              <h3 class="text-2xl text-violet-400">Legal Framework</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Terms of service</li>
                <li>User agreements</li>
                <li>Jurisdiction compliance</li>
                <li>Legal partnerships</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.glass-hero-card {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-section-card {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for the navigation */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(139, 92, 246, 0.5) transparent;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: rgba(139, 92, 246, 0.5);
  border-radius: 20px;
}

/* Add animation for roadmap timeline */
.border-l-2 {
  transition: border-color 0.3s ease;
}

.border-l-2:hover {
  border-color: theme('colors.violet.500');
}

/* Add hover effects for team cards */
.bg-white\/5 {
  transition: all 0.3s ease;
}

.bg-white\/5:hover {
  transform: translateY(-4px);
  background-color: rgb(255 255 255 / 0.1); /* Fixed syntax for white with opacity */
}

.group:hover .opacity-20 {
  opacity: 0.6;
}
</style>
