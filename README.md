# DeFi App Based on Uniswap v2

Simple decentralized application based on Solidity and Web3 that swap a simple pair of tokens with the help of the Uniswap V2 library.

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache CLI](https://github.com/trufflesuite/ganache-cli-archive) (For Local Blockchain)
- [Infura](https://infura.io/) (Ethereum Node As A Service Provider)

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle version`. To install truffle go to your project root directory and run `npm install --save-dev truffle` Ideal to have truffle version 5.4 to avoid dependency issues.
- Install [Ganache CLI](https://github.com/trufflesuite/ganache-cli-archive).

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ cd uniswap-defi-app
$ npm install
```

### 3. Start Ganache

`$ npm run ganache`

### 4. Migrate Smart Contracts

`$ npx truffle migrate --reset --skip-dry-run`

### 5. Run

`$ npm start`

### 6. Connect Metamask
- Import account ganache: Open metamask -> setting -> import account -> enter private key account number 2 in ganache account
(you can see private key in keys.json).
- Private key account 2: `99c167f3260c7de6cb92cde2bb83fdf30660a2778d181c5af2ab045b39ed8e88`
(adress: 0x2aac0eb300fa402730bced0b4c43a7fe6bf6491e)

## Ready to test
Everything is ready to test
