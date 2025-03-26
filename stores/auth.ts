import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import { UserProfile__factory } from '~/types/contracts'

interface AdminPermissions {
  canGrantRoles: boolean
  canUpdateContract: boolean
  canPause: boolean
}

interface AuthState {
  address: string | null
  isAdmin: boolean
  isAuthenticated: boolean
  adminPermissions: AdminPermissions | null
  reputation: number
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Diamond' | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    address: null,
    isAdmin: false,
    isAuthenticated: false,
    adminPermissions: null,
    reputation: 0,
    tier: null
  }),

  getters: {
    userTier: (state) => {
      if (state.reputation >= 701) return 'Diamond'
      if (state.reputation >= 401) return 'Gold'
      if (state.reputation >= 201) return 'Silver'
      if (state.reputation >= 0) return 'Bronze'
      return null
    },
    
    hasAdminPermission: (state) => (permission: keyof AdminPermissions) => {
      return state.adminPermissions?.[permission] ?? false
    }
  },

  actions: {
    async connectWallet() {
      try {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const accounts = await provider.send("eth_requestAccounts", [])
          this.address = accounts[0]
          this.isAuthenticated = true
          await this.checkAdminStatus()
          await this.fetchUserReputation()
        }
      } catch (error) {
        console.error('Wallet connection failed:', error)
        throw error
      }
    },

    async checkAdminStatus() {
      if (!this.address) return

      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        
        // Get contract address from your config
        const userProfileAddress = '0x...' // Add your deployed contract address
        const userProfile = UserProfile__factory.connect(userProfileAddress, signer)

        // Check if address has admin role
        const ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("ADMIN_ROLE"))
        this.isAdmin = await userProfile.hasRole(ADMIN_ROLE, this.address)

        if (this.isAdmin) {
          // Fetch admin permissions
          const adminData = await userProfile.adminData(this.address)
          this.adminPermissions = {
            canGrantRoles: adminData.canGrantRoles,
            canUpdateContract: adminData.canUpdateContract,
            canPause: adminData.canPause
          }
        }
      } catch (error) {
        console.error('Admin check failed:', error)
        this.isAdmin = false
        this.adminPermissions = null
      }
    },

    async fetchUserReputation() {
      // TODO: Implement reputation fetch from smart contract
      this.reputation = 450 // Temporary mock data
      this.tier = this.userTier
    },

    disconnect() {
      this.address = null
      this.isAuthenticated = false
      this.isAdmin = false
      this.reputation = 0
      this.tier = null
    }
  }
})
