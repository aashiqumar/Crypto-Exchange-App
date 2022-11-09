// https://eth-goerli.g.alchemy.com/v2/By4JX16m6fx3QYW1zo59xNy4p8dueKmr

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/By4JX16m6fx3QYW1zo59xNy4p8dueKmr',
      accounts: [ '2512b78c5d73470470e9bbdb1900a2b0b10173a2b59741b188150947a1b0885e' ]
    }
  }
}

