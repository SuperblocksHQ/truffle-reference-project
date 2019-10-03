const path = require("path");
const SuperProvider = require("./superprovider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
	rinkeby_metamask: {
        provider: () => {
            return new SuperProvider(process.env.SUPERBLOCKS_SESSIONID, process.env.SUPERBLOCKS_ADDRESS, {proxyUrl: 'https://api-dev.superblocks.com/v1/web3-hub/provider'});
        },
        network_id: '4',
    }
  }
};
