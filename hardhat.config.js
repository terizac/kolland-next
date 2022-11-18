require("@nomiclabs/hardhat-waffle")
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const defaultNetwork = 'localhost'

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork,
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      gas: 2100000,
      gasPrice: 8000000000,
    },
    hardhat: {
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    // kovan: {
    //   url: `https://kovan.infura.io/v3/${process.env.INFURA_ID}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY || ''],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY || ''],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY || ''],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY || ''],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      rinkeby: '55IUBI2VHE6TTADSXMMNBDWRRM3SWC763F'
    }
  },
  paths: {
    sources: "./hardhat/contracts",
    tests: "./hardhat/test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts"
  },
}
