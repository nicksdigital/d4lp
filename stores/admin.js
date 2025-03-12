
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    showFloatingUI: false,
    stats: {
      totalWhitelisted: 0,
      totalBids: 0,
      highestBid: 0,
      activeBidders: 0
    }
  }),
  
  actions: {
    toggleFloatingUI() {
      this.showFloatingUI = !this.showFloatingUI
    },
    updateStats(stats) {
      this.stats = { ...this.stats, ...stats }
    }
  }
})
