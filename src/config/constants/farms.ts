import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // Testnet Farms
  // {
  //   pid: 0,
  //   risk: 5,
  //   lpSymbol: 'HONEY-BNB LP',
  //   lpAddresses: {
  //     97: '0x78221E9D90d3e9cbE69C3F076Ee54E3BeE07D9E9',
  //     56: '0x8869e0ca0e5c72c4a78df74adea192232fc6f386',
  //   },
  //   tokenSymbol: 'HONEY',
  //   tokenAddresses: {
  //     97: '0x8FDD8A10E0b3e89bDB8049435528B69b9EA09C94',
  //     56: '0xc7B82c538A88DACE48659F8e1f0948D2176E2796',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 1,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'HONEY',
  //   lpAddresses: {
  //     97: '0x8FDD8A10E0b3e89bDB8049435528B69b9EA09C94',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'HONEY',
  //   tokenAddresses: {
  //     97: '0x8FDD8A10E0b3e89bDB8049435528B69b9EA09C94',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'HONEY-BUSD LP',
  //   lpAddresses: {
  //     97: '0xb1b32c19e7340b6db53edceeeafc0450a9b2f0dd',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   tokenSymbol: 'HONEY',
  //   tokenAddresses: {
  //     97: '0x8FDD8A10E0b3e89bDB8049435528B69b9EA09C94',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '0x2ee7701ec40f1afff8883dbcfa7a55a157fd32ed',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '0x2ee7701ec40f1afff8883dbcfa7a55a157fd32ed',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 4,
  //   risk: 3,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddresses: {
  //     97: '0x29caa96c302a25703067f65ae1df2560fc0c687d',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: {
  //     97: '0x2ee7701ec40f1afff8883dbcfa7a55a157fd32ed',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },

  // Mainnet Farms

  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HONEY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x196b71dCB07F2BEDfD67d7A9d7669130472E425b',
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HONEY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x64510b70aad51418bd17b50226bd08cbec48bddf',
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'HONEY-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xf3a25637d8fc4bce1d840ceff6e4c692da7dae3d',
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btcb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'HONEY-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xbf7997887d6d5467348fc75dfcf7d7a06f6f0e90',
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'HONEY-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x13477dd40f92bf5ef6cf884f698f5c73402610b0',
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.pancake,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'BNB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 2,
    lpSymbol: 'BNB-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 4,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 1,
    lpSymbol: 'BUSD-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 1,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // Pools

  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'HONEY',
    lpAddresses: {
      97: '',
      56: '0x64510b70aad51418bd17b50226bd08cbec48bddf', // HONEY-BUSD LP
    },
    tokenSymbol: 'HONEY',
    tokenAddresses: {
      97: '',
      56: '0x1BD7dF20aE5e884C61b7017FaC557e82cCA6baEe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // USDT-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // USDT-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BNB-BTCB LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // USDT-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6', // CAKE-BNb LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
