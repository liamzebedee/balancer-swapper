module.exports = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "whom",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "denorm",
        "type": "uint256"
      }
    ],
    "name": "bind",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcInGivenOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcOutGivenIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolInGivenSingleOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolOutGivenSingleIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleInGivenPoolOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleOutGivenPoolIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSpotPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "spotPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "minAmountsOut",
        "type": "uint256[]"
      }
    ],
    "name": "exitPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxPoolAmountIn",
        "type": "uint256"
      }
    ],
    "name": "exitswapExternAmountOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minAmountOut",
        "type": "uint256"
      }
    ],
    "name": "exitswapPoolAmountIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "finalize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getController",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getDenormalizedWeight",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFinalTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getNormalizedWeight",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      }
    ],
    "name": "getSpotPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "spotPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      }
    ],
    "name": "getSpotPriceSansFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "spotPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSwapFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalDenormalizedWeight",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "gulp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "t",
        "type": "address"
      }
    ],
    "name": "isBound",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isFinalized",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPublicSwap",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "maxAmountsIn",
        "type": "uint256[]"
      }
    ],
    "name": "joinPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minPoolAmountOut",
        "type": "uint256"
      }
    ],
    "name": "joinswapExternAmountIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxAmountIn",
        "type": "uint256"
      }
    ],
    "name": "joinswapPoolAmountOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "denorm",
        "type": "uint256"
      }
    ],
    "name": "rebind",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "manager",
        "type": "address"
      }
    ],
    "name": "setController",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "public_",
        "type": "bool"
      }
    ],
    "name": "setPublicSwap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "setSwapFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxPrice",
        "type": "uint256"
      }
    ],
    "name": "swapExactAmountIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "spotPriceAfter",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenIn",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxPrice",
        "type": "uint256"
      }
    ],
    "name": "swapExactAmountOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "spotPriceAfter",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "unbind",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
