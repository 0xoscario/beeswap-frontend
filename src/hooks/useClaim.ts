import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { claim } from 'utils/callHelpers'
import { usePresale } from './useContract'

export const useClaim = () => {
  const { account } = useWallet()
  const presaleContract = usePresale()

  const handleClaim = useCallback(async () => {
    const txHash = await claim(presaleContract, account)
    return txHash
  }, [account, presaleContract])

  return { onReward: handleClaim }
}

export default useClaim
