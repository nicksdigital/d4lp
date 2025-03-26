import { ethers } from 'ethers'
import { UserProfile__factory } from '~/types/contracts'

export function useContracts() {
  const config = useRuntimeConfig()

  const getContract = async () => {
    if (typeof window.ethereum === 'undefined') {
      throw new Error('MetaMask not installed')
    }

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    
    return {
      userProfile: UserProfile__factory.connect(
        config.public.userProfileAddress,
        signer
      )
    }
  }

  return {
    getContract
  }
}