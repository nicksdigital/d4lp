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
  TrendingUp,
  FileText
} from 'lucide-vue-next'

const sections = [
  { id: 'executive-summary', title: '1. Executive Summary', icon: Rocket },
  { id: 'platform-overview', title: '2. Platform Overview', icon: Layout },
  { id: 'technical', title: '3. Technical Architecture', icon: Code2 },
  { id: 'tokenomics', title: '4. Tokenomics & Allocation', icon: Coins },
  { id: 'roadmap', title: '5. Roadmap', icon: Calendar },
  { id: 'governance', title: '6. Governance', icon: Shield },
  { id: 'risk', title: '7. Risk Management', icon: Target },
  { id: 'community', title: '8. Community', icon: Users },
  { id: 'legal', title: '9. Legal & Compliance', icon: FileText }
]
</script>

<template>
  <main class="min-h-screen bg-background">
    <!-- Hero Section with enhanced glassmorphism -->
    <div class="relative pt-[172px] pb-24 text-center">
      <div class="container mx-auto px-4">
        <div class="glass-hero-card p-12 rounded-2xl mb-12">
          <h1 class="text-7xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
            D4L Whitepaper
          </h1>
          <p class="text-2xl text-violet-200/80 mt-6 max-w-2xl mx-auto font-light">
            Risk It, Build It, Bank It
          </p>

          <a href="/docs/D4L-Whitepaper.pdf" 
             target="_blank"
             class="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-700 to-violet-600 
                    hover:from-violet-600 hover:to-violet-500 text-white rounded-xl shadow-lg transition-all duration-300 
                    transform hover:scale-105 hover:shadow-violet-500/25 backdrop-blur-sm">
            <FileText class="w-5 h-5" />
            Download Full Whitepaper
          </a>
        </div>
      </div>
    </div>

    <!-- Enhanced Navigation with better glassmorphism -->
    <ClientOnly>
      <div class="sticky top-[72px] left-0 right-0 z-40 backdrop-blur-xl bg-black/40">
        <div class="container mx-auto px-4 py-4">
          <div class="glass-nav-container p-4 rounded-2xl bg-gradient-to-br from-violet-900/10 to-violet-800/5">
            <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3">
              <a v-for="(section, index) in [
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
                 class="nav-item relative group">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-violet-500/20 rounded-xl 
                            transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></div>
                <div class="absolute inset-0 bg-white/[0.03] rounded-xl"></div>
                <span class="relative z-10 text-violet-200 group-hover:text-white transition-all duration-300 text-sm font-medium 
                           flex items-center justify-center py-3 px-4">
                  {{ section.replace('-', ' ').toUpperCase() }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>

    <!-- Content Sections with enhanced glassmorphism -->
   
    <!-- Executive Summary -->
    <section id="executive-summary" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] 
                    transition-all duration-300 border border-white/10">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-3 rounded-xl bg-violet-500/10">
              <Rocket class="w-8 h-8 text-violet-400" />
            </div>
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              1. Executive Summary
            </h2>
          </div>
          <div class="prose prose-lg prose-invert max-w-none space-y-6">
            <p class="text-2xl font-light text-violet-200">Welcome to D4L: Ride the D4L Wave: Risk It, Build It, Bank It</p>
            <div class="bg-white/[0.02] p-6 rounded-xl border border-white/5">
              <p class="text-gray-300 leading-relaxed">
                D4L isn't some boring platform—it's the beating heart of crypto, cultivating a lifestyle built for those who 
                live for wild bets, the enthusiasts who dream in code, and the investors chasing fat stacks.
              </p>
            </div>
            <div class="bg-white/[0.02] p-6 rounded-xl border border-white/5">
              <p class="text-gray-300 leading-relaxed">
                We're throwing advanced trading, gamified battles, meme coin madness, prediction markets, social engagement 
                and robust risk management into a comprehensive DeFi blender, creating an ecosystem that's equal parts 
                adventurous and rock-solid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Overview -->
    <section id="platform-overview" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Layout class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              2. Platform Overview
            </h2>
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
      </div>
    </section>

    <!-- Technical Architecture -->
    <section id="technical" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl bg-white/[0.03] hover:bg-white/[0.05] 
                    transition-all duration-300 border border-white/10">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-3 rounded-xl bg-violet-500/10">
              <Code2 class="w-8 h-8 text-violet-400" />
            </div>
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              2. Technical Architecture
            </h2>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Core Infrastructure Card -->
            <div class="bg-white/[0.02] p-8 rounded-xl border border-white/5 hover:bg-white/[0.04] 
                        transition-all duration-300 hover:transform hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 rounded-lg bg-violet-500/10">
                  <Shield class="w-6 h-6 text-violet-300" />
                </div>
                <h4 class="text-xl font-bold text-violet-300">Core Infrastructure</h4>
              </div>
              <div class="space-y-6">
                <div class="bg-black/20 p-6 rounded-lg">
                  <h5 class="text-lg font-semibold text-violet-200 mb-3">BlockChain</h5>
                  <p class="text-gray-300">
                    D4L is engineered on Base, an Ethereum Layer-2 scaling solution, harnessing the ERC-20 standard 
                    for the $D4L token.
                  </p>
                </div>
                <div class="bg-black/20 p-6 rounded-lg">
                  <h5 class="text-lg font-semibold text-violet-200 mb-3">The Code</h5>
                  <p class="text-gray-300">
                    D4L runs on a slick stack of modular smart contracts, each a cog in a machine built for chaos and control:
                  </p>
                  <ul class="mt-4 space-y-2 text-gray-300">
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-violet-400"></div>
                      D4LController
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-violet-400"></div>
                      SecurityModule
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-violet-400"></div>
                      LiquidityModule
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- D4L Token Card -->
            <div class="bg-white/[0.02] p-8 rounded-xl border border-white/5 hover:bg-white/[0.04] 
                        transition-all duration-300 hover:transform hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 rounded-lg bg-violet-500/10">
                  <Coins class="w-6 h-6 text-violet-300" />
                </div>
                <h4 class="text-xl font-bold text-violet-300">D4L Token</h4>
              </div>
              <div class="bg-black/20 p-6 rounded-lg mb-6">
                <p class="text-gray-300">1 Billion total supply—your golden ticket to the D4L arena.</p>
              </div>
              <h5 class="text-lg font-semibold text-violet-200 mb-4">Token Distribution</h5>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-violet-500/5 rounded-lg">
                  <span class="text-violet-200">DEX Liquidity Pool</span>
                  <span class="text-violet-300 font-semibold">30%</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-violet-500/5 rounded-lg">
                  <span class="text-violet-200">Community/Ecosystem</span>
                  <span class="text-violet-300 font-semibold">25%</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-violet-500/5 rounded-lg">
                  <span class="text-violet-200">Team (Locked)</span>
                  <span class="text-violet-300 font-semibold">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tokenomics -->
    <section id="tokenomics" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Coins class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              4. Tokenomics & Allocation
            </h2>
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
      </div>
    </section>

    <!-- Pre-Sale Structure & Roadmap -->
    <section id="presale" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Calendar class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              6. Pre-Sale Structure & Roadmap
            </h2>
          </div>
          <div class="prose prose-lg prose-invert max-w-none">
            <h3 class="text-2xl font-bold text-violet-300">Pre-Sale (7 Stages)</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Dutch Auction: Whitelist only—lowest price per D4L, lock-up period, and a nice bonus stack to kick things off right.</li>
              <li>Community Sale: Whitelist or KYC crew—sweet entry price, moderate bonuses for the early faithful.</li>
              <li>Public Rounds (3-6): Open to all—price climbs as those in the know pile in, market vibes set the pace.</li>
              <li>Bonus Finale: Last chance for extra D4L heat—special perks for the closers.</li>
            </ul>

            <h3 class="text-2xl font-bold text-violet-300 mt-8">Use of Funds</h3>
            <p>The pre-sale proceeds will be allocated as follows:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>35% Development: Smart contract development, UI/UX, infrastructure</li>
              <li>20% Security & Audits: Third-party audits, bug bounties</li>
              <li>20% Liquidity: DEX liquidity provision</li>
              <li>15% Marketing: Community growth, promotional activities</li>
              <li>10% Community Growth: Incentives and rewards</li>
            </ul>

            <h3 class="text-2xl font-bold text-violet-300 mt-8">Q2 2025 Roadmap Highlights</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Whitepaper release and pre-sale launch</li>
              <li>DEX launch with HydraCurve implementation</li>
              <li>BonkWars beta release</li>
              <li>Core development team expansion</li>
              <li>Security audits and formal verification</li>
              <li>Staking mechanism activation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance -->
    <section id="governance" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Users class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              6. Governance
            </h2>
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
      </div>
    </section>

    <!-- Risk Management -->
    <section id="risk" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Shield class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              7. Risk Management
            </h2>
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
      </div>
    </section>

    <!-- Community & Marketing -->
    <section id="community" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Users class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              8. Community & Marketing
            </h2>
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
      </div>
    </section>

    <!-- Legal & Compliance -->
    <section id="legal" class="py-16 relative">
      <div class="container mx-auto px-4">
        <div class="glass-section-card p-8 rounded-2xl backdrop-blur-2xl">
          <div class="flex items-center gap-4 mb-8">
            <Shield class="w-8 h-8 text-violet-400" />
            <h2 class="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              9. Legal & Compliance
            </h2>
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
.bg-background {
  background-image: radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.1) 0%, transparent 100%),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95));
}

.glass-hero-card {
  background: rgba(109, 40, 217, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 8px 32px rgba(109, 40, 217, 0.1);
}

.glass-nav-container {
  background: rgba(109, 40, 217, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 4px 24px rgba(109, 40, 217, 0.1);
}

.nav-item {
  background: rgba(109, 40, 217, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(109, 40, 217, 0.08);
  transition: all 0.3s ease;
}

.nav-item:hover {
  transform: translateY(-1px);
  border-color: rgba(109, 40, 217, 0.2);
  box-shadow: 0 4px 20px -5px rgba(109, 40, 217, 0.2);
}

.glass-section-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(109, 40, 217, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.glass-section-card:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(109, 40, 217, 0.15);
  transform: translateY(-2px);
}

/* Typography enhancements */
.prose strong {
  @apply text-violet-300;
}

.prose h3, .prose h4 {
  @apply text-violet-300 font-semibold;
}

.prose p {
  @apply text-gray-300;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
}
</style>
