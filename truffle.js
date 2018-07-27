var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = 'shell traffic raven bulb route clip pelican rich cross seek ball reopen';
// web3.setProvider(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/fe482ed2826a4c2ab7ccfc6849528e62'))

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/fe482ed2826a4c2ab7ccfc6849528e62`)
      },
      network_id: 3,
      gas: 4612388
    }
  }
};
