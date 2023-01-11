
require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox");
const ethers = require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();




// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts




module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },

  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,

  }

};