<script setup lang="ts">
import { 
  Rocket, 
  Layout, 
  Code2, 
  Coins,
  Calendar,
  Target,
  Shield,
  Users,
  Lightbulb,
  TrendingUp
} from 'lucide-vue-next'
</script>

<template>
  <main class="min-h-screen bg-black/90">
      <!-- Hero Section -->
      <div class="relative pt-[172px] pb-24 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-6xl font-bold text-violet-600">
            D4L Whitepaper
          </h1>
          <p class="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Risk It, Build It, Bank It
          </p>

          <a href="/docs/D4L-Whitepaper.pdf" 
             target="_blank"
             class="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-violet-700 to-violet-600 hover:from-violet-600 hover:to-violet-500 
                    text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-violet-500/25">
            Download Full Whitepaper
          </a>
        </div>
      </div>

      <!-- Fixed Quick Navigation -->
      <ClientOnly>
      <div class="fixed top-[72px] left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-violet-900/30 transition-all duration-300">
        <div class="container mx-auto px-4 py-3">
          <div class="wp-nav-glass p-3 rounded-xl bg-gradient-to-br from-violet-900/20 to-violet-800/10">
            <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-2">
              <a v-for="section in [
                'executive-summary', 
                'platform-overview', 
                'technical', 
                'tokenomics', 
                'roadmap',
                'governance',
                'risk',
                'community',
                'legal'
              ]" 
                 :key="section"
                 :href="`#${section}`"
                 class="wp-nav-pill relative group">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-700/20 to-violet-600/20 transform transition-all duration-300 
                            group-hover:scale-100 scale-x-0 origin-left rounded-lg opacity-0 group-hover:opacity-100"></div>
                <div class="absolute inset-0 bg-white/[0.02] rounded-lg"></div>
                <span class="relative z-10 text-violet-200 group-hover:text-violet-100 transition-all duration-300 text-sm font-medium 
                             group-hover:translate-y-[-1px] inline-block">
                  {{ section.replace('-', ' ').toUpperCase() }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </ClientOnly>

      <!-- Remove the spacer div as we're using padding on the hero section instead -->

      <!-- Executive Summary -->
      <section id="executive-summary" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Rocket class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">1. Executive Summary</h2>
          </div>
          <div class="prose prose-lg prose-invert max-w-none glass-card p-8">
            <p>Welcome to D4L: Ride the D4L Wave: Risk It, Build It, Bank It</p>
            <p>D4L isn't some boring platform—it's the beating heart of crypto, cultivating a lifestyle built for those who live for wild bets, the enthusiasts who dream in code, and the investors chasing fat stacks. We're throwing advanced trading, gamified battles, meme coin madness, prediction markets, social engagement and robust risk management into a comprehensive DeFi blender, creating an ecosystem that's equal parts adventurous and rock-solid.</p>
            <p>In a 2025 market where opportunities are ripening and clarity is emerging, D4L's the spark—delivering a secure DEX with the revolutionary HydraCurve magic, a BonkWars arena for meme coin dominance, and prediction markets to flex your brain while you stack your bags.</p>
          </div>
        </div>
      </section>

      <!-- Platform Overview -->
      <section id="platform-overview" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Layout class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">2. Platform Overview</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="glass-card p-8">
              <div class="flex items-center gap-3 mb-4">
                <Lightbulb class="w-6 h-6 text-violet-300" />
                <h4 class="text-xl font-bold text-violet-300">Meme Coin Launchpad</h4>
              </div>
              <div class="space-y-4">
                <p><strong>What:</strong> Spin up your own meme coin with D4L's creator tools—customize it, secure it, launch it. Our verification system sniffs out scams, anti-bot features, plus no rug pulls to ruin the party.</p>
                <p><strong>Next Level:</strong> Hit market cap milestones, and your token's promoted to BonkWars—where the real pioneers shine. It's a proving ground for hype and hustle.</p>
                <p><strong>Why Join:</strong> Creators get a safe shot at greatness; risk takers snag legit tokens to ride. Moonshots with guardrails—pure D4L style.</p>
              </div>
            </div>
            <div class="glass-card p-8">
              <div class="flex items-center gap-3 mb-4">
                <TrendingUp class="w-6 h-6 text-violet-300" />
                <h4 class="text-xl font-bold text-violet-300">DEX: Powered by HydraCurve</h4>
              </div>
              <div class="space-y-4">
                <p><strong>What:</strong> Trade cross-chain with low slippage, backed by a 30% D4L liquidity pool that keeps the gears turning. Secure trading with built in liquidity, no more sketchy swaps—D4L's DEX is built for speed and stability.</p>
                <p><strong>HydraCurve Edge:</strong> This is not your grandpa's AMM. HydraCurve's a dynamic pricing beast, flexing with market swings to keep capital where it matters—up to 130% more efficient than the old dogs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Architecture -->
      <section id="technical" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Code2 class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">3. Technical Architecture</h2>
          </div>
          <div class="glass-card p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Shield class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">Core Infrastructure</h4>
                </div>
                <div class="space-y-4">
                  <p><strong>BlockChain:</strong> D4L is engineered on Base, an Ethereum Layer-2 scaling solution, harnessing the ERC-20 standard for the $D4L token.</p>
                  <p><strong>The Code:</strong> D4L runs on a slick stack of modular smart contracts- (D4LController, SecurityModule, LiquidityModule, SocialModule, InsuranceModule, Prediction MarketModule, MomentumModule, DEX & ENS Modules, and Contract Registry) plus more—each a cog in a machine built for chaos and control.</p>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Target class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">HydraCurve Technology</h4>
                </div>
                <p><strong>HydraCurve:</strong> The star, a next-gen pricing engine powering the DEX. The HydraCurve is an advanced, dynamic pricing mechanism designed to optimize liquidity utilization in AMMs by continuously adapting to market conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tokenomics -->
      <section id="tokenomics" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Coins class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">4. Tokenomics & Allocation</h2>
          </div>
          <div class="glass-card p-8">
            <p class="text-xl mb-6">D4L Token: 1 Billion total supply—your golden ticket to the D4L arena.</p>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="glass-inner-card p-6">
                <h4 class="text-xl font-bold text-violet-300 mb-4">Token Allocation</h4>
                <ul class="space-y-3">
                  <li class="flex items-center justify-between">
                    <span>DEX Liquidity Pool</span>
                    <span class="text-violet-300">30%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Community/Ecosystem</span>
                    <span class="text-violet-300">25%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Team</span>
                    <span class="text-violet-300">20%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>D4L Treasury</span>
                    <span class="text-violet-300">10%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>Marketing</span>
                    <span class="text-violet-300">10%</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span>CEX Liquidity</span>
                    <span class="text-violet-300">5%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Roadmap -->
      <section id="roadmap" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Calendar class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">5. Roadmap</h2>
          </div>
          <div class="glass-card p-8">
            <div class="space-y-8">
              <div class="glass-inner-card p-6">
                <h4 class="text-xl font-bold text-violet-300 mb-4">Q2 2025</h4>
                <ul class="space-y-2">
                  <li>• D4L whitepaper release and vision unveiling</li>
                  <li>• Pre-sale funding initiation</li>
                  <li>• DEX launch with HydraCurve implementation</li>
                  <li>• BonkWars beta release with community voting</li>
                  <li>• Core development team assembly</li>
                  <li>• Partnership with top audit firms</li>
                  <li>• Smart contract and multi-sig wallet development</li>
                  <li>• Staking mechanism activation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Governance -->
      <section id="governance" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Users class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">6. Governance</h2>
          </div>
          <div class="glass-card p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Target class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">DAO Structure</h4>
                </div>
                <div class="space-y-4">
                  <p>D4L operates as a Decentralized Autonomous Organization (DAO), where token holders have direct influence over the platform's evolution.</p>
                  <ul class="space-y-2">
                    <li>• Voting power proportional to D4L token holdings</li>
                    <li>• Proposal submission requires minimum 100,000 D4L tokens</li>
                    <li>• 72-hour voting periods for standard proposals</li>
                    <li>• Emergency proposals handled by multi-sig council</li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Shield class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">Voting Mechanisms</h4>
                </div>
                <div class="space-y-4">
                  <p><strong>Key Voting Areas:</strong></p>
                  <ul class="space-y-2">
                    <li>• Protocol parameter adjustments</li>
                    <li>• Fee structure modifications</li>
                    <li>• New feature implementations</li>
                    <li>• Treasury fund allocations</li>
                    <li>• Partnership approvals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Risk Management -->
      <section id="risk" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Shield class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">7. Risk Management</h2>
          </div>
          <div class="glass-card p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="glass-inner-card p-6">
                <h4 class="text-xl font-bold text-violet-300 mb-4">Security Measures</h4>
                <ul class="space-y-3">
                  <li>• Multi-layered smart contract security</li>
                  <li>• Regular third-party audits</li>
                  <li>• Bug bounty program</li>
                  <li>• Emergency shutdown mechanism</li>
                  <li>• Real-time monitoring systems</li>
                </ul>
              </div>
              <div class="glass-inner-card p-6">
                <h4 class="text-xl font-bold text-violet-300 mb-4">Insurance Protocol</h4>
                <ul class="space-y-3">
                  <li>• Coverage for smart contract risks</li>
                  <li>• Liquidity protection</li>
                  <li>• Staking insurance options</li>
                  <li>• Cross-chain bridge protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Community & Marketing -->
      <section id="community" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Users class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">8. Community & Marketing</h2>
          </div>
          <div class="glass-card p-8">
            <div class="space-y-8">
              <div class="glass-inner-card p-6">
                <h4 class="text-xl font-bold text-violet-300 mb-4">Community Building</h4>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <p class="font-bold text-violet-300 mb-2">Social Engagement</p>
                    <ul class="space-y-2">
                      <li>• Discord community hub</li>
                      <li>• Twitter/X presence</li>
                      <li>• Telegram groups</li>
                      <li>• Reddit discussions</li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-bold text-violet-300 mb-2">Educational Initiatives</p>
                    <ul class="space-y-2">
                      <li>• D4L Academy</li>
                      <li>• Trading workshops</li>
                      <li>• Technical documentation</li>
                      <li>• Video tutorials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Legal & Compliance -->
      <section id="legal" class="py-16 relative backdrop-blur-xl bg-black/30">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-4 mb-8">
            <Shield class="w-8 h-8 text-violet-500" />
            <h2 class="text-4xl font-bold text-violet-500">9. Legal & Compliance</h2>
          </div>
          <div class="glass-card p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Target class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">Regulatory Framework</h4>
                </div>
                <div class="space-y-4">
                  <p>D4L is committed to operating within regulatory guidelines while maintaining decentralization principles:</p>
                  <ul class="space-y-2">
                    <li>• Compliance with relevant DeFi regulations</li>
                    <li>• KYC/AML procedures where required</li>
                    <li>• Regular legal consultations</li>
                    <li>• Transparent reporting mechanisms</li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <Shield class="w-6 h-6 text-violet-300" />
                  <h4 class="text-xl font-bold text-violet-300">Jurisdictional Approach</h4>
                </div>
                <div class="space-y-4">
                  <ul class="space-y-2">
                    <li>• Global accessibility focus</li>
                    <li>• Region-specific compliance</li>
                    <li>• Regular policy updates</li>
                    <li>• Community governance alignment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 mt-16 border-t border-white/10">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400">© 2024 D4L. All rights reserved.</p>
        </div>
      </footer>
    </main>
</template>

<style scoped>
.wp-nav-glass {
  box-shadow: 0 4px 30px rgba(109, 40, 217, 0.1);
  border: 1px solid rgba(109, 40, 217, 0.1);
  transition: all 0.3s ease;
}

.wp-nav-pill {
  @apply px-3 py-2 rounded-lg text-center transition-all duration-300;
  background: rgba(109, 40, 217, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(109, 40, 217, 0.1);
  overflow: hidden;
}

.wp-nav-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px -5px rgba(109, 40, 217, 0.2);
  border-color: rgba(109, 40, 217, 0.2);
}

.wp-nav-pill:active {
  transform: translateY(1px);
}

/* Update section headers */
section h2 {
  @apply text-4xl font-bold text-violet-500;
}

.glass-card {
  @apply bg-white/5 backdrop-blur-xl border border-violet-500/20 rounded-xl transition-all duration-300 hover:bg-white/10;
}

.glass-inner-card {
  @apply bg-violet-900/10 rounded-lg border border-violet-500/20 transition-all duration-300;
}

.prose strong {
  @apply text-violet-400;
}

.prose h3, .prose h4 {
  @apply text-violet-400;
}

/* Update icons color */
[class^="lucide-"] {
  @apply text-violet-500;
}

.text-orange-300, .text-orange-400, .text-orange-500 {
  @apply text-violet-300;
}

section {
  @apply relative backdrop-blur-xl bg-black/30;
}
</style>