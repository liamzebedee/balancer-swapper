# balancer-swapper

A self-contained React component for swapping tokens using a Balancer pool.

UNSTABLE. This repo serves as an eductional reference only, for any future hackers. It is ~1 day proof-of-concept I've extracted from [another dApp I'm building](https://github.com/liamzebedee/curatem-frontend). If you're interested in a more fully fleshed out component, I could probably do something for you. Just reach out.

 * Loads token details (symbol) from chain.
 * Works with any Balancer pool.
 * Handles approvals and swaps.

To do:

 - [ ] Improve token switcher.
 - [ ] Error handling for swaps/cancelled tx's.
 - [ ] Error handling for when swap breaks pool weight invariants (ERR_MAX_IN_RATIO, ERR_BAD_LIMIT_PRICE, ERR_LIMIT_OUT, ERR_LIMIT_PRICE).

## Requirements.

This uses web3-react under-the-hood to get the Web3 Provider. So you should have web3-react configured and setup with your dApp.

## Usage.

```ts
<BalancerSwapper
    pool="POOL_ADDRESS"
    tokens={[ POOL_TOKEN_A_ADDRESS, POOL_TOKEN_B_ADDRESS ]} />
```

