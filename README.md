# [Truffle Reference Project](https://superblocks.com/d/superblocks/projects/reference-projects/)

[![Superblocks](https://superblocks.com/d/superblocks/projects/reference-projects.svg?branch=master)](https://superblocks.com/d/superblocks/projects/reference-projects)

Truffle reference repository to showcase Superblocks functionality on how to build and deploy your Ethereum contract projects


## Features this project showcases
* Fully automate your build proccess using Superblocks CI
* Automate, track, sing and deploy your transactions using Superblocks


## Quick start
Below is described how to get the a **Truffle** project setup and running locally.


### Install node modules
```sh
npm i
```

<br/>

## Setup 

### Configure the from address
In order to make sure you are broadcasting and signing the txs with the right account, you need to setup the `from` propertie in the `truffle-config.js` to which ever account you would like to perform the deployments with. 

### Configure your ENV variables

Env variables to setup for the intial config:
DEPLOY_TOKEN -> A generated token in the Superblocks platform. 
DEPLOYMENT_SPACE_ID -> The deployment space id into which you want to track your deployment with. 

In order to get this values setup, follow the this instructions: 

#### DEPLOYMENT_SPACE_ID
1. Login into Superblocks using your Github user.
2. If you haven't created an organization/project, create one.
3. Open your project and under `deployments`, create a new space
4. Once your space is created, head to the space settings (by clicking the gear icon next to the space name)
5. Finally change the process.env.DEPLOYMENT_SPACE_ID in the `truffle-config.js` file with the id (or simply keep reading on how can you leave everything with Env variables when exec the `truffle migrate` command) 

#### DEPLOY_TOKEN
1. Login into Superblocks using your Github user.
2. If you haven't created an organization/project, create one.
4. Once your project is created, head to the project settings (by clicing the `Project Settings` in the left menu of your project. 
5. Go to the section `Project Tokens`, give your token a fancy name and click in `Generate`. Copy the generated key. 
5. Finally change the process.env.PROJECT_TOKEN in the `truffle-config.js` file with your newly created token (or simply keep reading on how can you leave everything with Env variables when exec the `truffle migrate` command)


<br/>

## Performing the deployment (Running the truffle migrations)
There are 2 different way you can do this. 

#### Method 1: 
Place the newly created values directly in the `truffle-config.js` file (not realy recommended to leave those values hardcoded in the repo) and run:

```
npx truffle  migrate --network=rinkeby_metamask --verbose-rpc --reset
```

#### Method 2: 
Run

```
DEPLOYMENT_SPACE_ID={your_space_id} DEPLOY_TOKEN={your_token} npx truffle  migrate --network=rinkeby_metamask --verbose-rpc --reset
```

### Signing and broadcasting the Txs to the blockchain
Finally once everything is setup, you will see that our super provider will route the RPC calls for sending transacations to our plaform. Head to the dashboard and open your deployment space and you will see a new enviornment and a the last deployment created for you. Simply click in the deploymentId and you wil be taken to the deployment details page. 

So whenver Truffle is trying to send a new txs to the chain, we will re-route it and display it for you in the UI. Simply click the `Sign` button, approve the tx in Metamask (make sure the selected account matches the one configure in the `truffle-config.js` and the selected network also matches), and the transcation will be deployed to the chain. Once this is done, we will send all the way back to Truffle the txReceipt hash so your deployment can continue. 

Repeat this proccess until all your txs are signed and succesfully deployed. 










 
 











