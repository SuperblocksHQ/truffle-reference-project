const path = require("path");
const { SuperHDWalletProvider, ManualSignProvider } = require("super-web3-provider");

// We need to globally store these providers here due to the fact that Truffle decides to call
// the provider() function multiple times during a deployment, therefore we would be re-creating
// a deployment on every call. 
let rinkebyProvider;
let rinkebyMetamaskProvider;


/**
 * PRO TIP: If you want to run all this inside your terminal to try things out, simply assign the variables 
 * here and good to go. We do recommend though to put all this as ENV variables when running in a CI, so
 * you never actually commit this values into your repository
 */

// Make sure to login into Superblocks, and create a new deployment space in a project. You can find 
// the deployment space id inside the space settings by clicking the gear icon next to the name
const deploymentSpaceId = process.env.DEPLOYMENT_SPACE_ID;

// You need to create a new token in order to authenticate against the service. Login into the dashboard,
// select the project you want to deploy into, and in the project settings you will find a Project Token 
// section. 
const token = process.env.TOKEN;

module.exports = {
  plugins: ["truffle-security"],

  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: () => {

          // Let's not double create the provider (as we will create many deployments) as Truffle calls this function many times (◔_◔)
          if (!rinkebyProvider) {
            rinkebyProvider = new SuperHDWalletProvider({
              deploymentSpaceId,
              token,
              mnemonic: process.env.MNEMONIC,
              networkId: '4',
              provider: "https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564"
            });
          }
        
        return rinkebyProvider;
      },
      network_id: '4'
    },
    rinkeby_metamask: {
      provider: () => {
        
          // Let's not double create the provider (as we will create many deployments) as Truffle calls this function many times (◔_◔)
          if (!rinkebyMetamaskProvider) {
            rinkebyMetamaskProvider = new ManualSignProvider({ 
              deploymentSpaceId,
              token,
              from: '0xEA6630F5bfA193f76cfc5F530648061b070e7DAd', 
              endpoint: 'https://rinkeby.infura.io/v3/14a9bebf5c374938b2476abe29ca5564',
              networkId: '4',
            })
          }

          return rinkebyMetamaskProvider;
          
      },
      network_id: '4'
    }
  }
};
