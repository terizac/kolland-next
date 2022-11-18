// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat")
require("@nomiclabs/hardhat-ethers");
// const fs = require('fs');
const Fs = require('@supercharge/filesystem')


const deployContract = async (name, params = []) => {
  const contractFactory = await ethers.getContractFactory(name)
  const contract = await contractFactory.deploy(...params)
  await contract.deployed()
  console.log(`${name} address:`, contract.address)
  // genderate file
  try {
    await Fs.ensureFile(`./hardhat/address/${name}.json`)
    await Fs.writeFile(`./hardhat/address/${name}.json`, JSON.stringify({ address: contract.address }, null, 2));
    console.log(`update contract address to ../address/${name}.json`);
    return {contract, address: contract.address}
  } catch (e) {
    console.log(e)
  }
}

async function main() {
  const deployers = await ethers.getSigners();
  // const deployer = deployers[0].address
  // const AtomicTokenContract = await deployContract('AtomicToken', [initSupply])
  const {contract: MainContract, address: mainContractAddress} = await deployContract('MainContract')
  const mainContract = MainContract.attach(mainContractAddress);
  const {contract: ProjectNFT, address: projectNFTAddress} = await deployContract('ProjectNFT')
  const projectNFT = ProjectNFT.attach(projectNFTAddress);


  // 1. setProjectConfig projectAddress, project_sharing: 90, kol_sharing: 8
  const setProjectConfigTx = await mainContract.setProjectConfig(projectNFTAddress, 90, 8);
  // 2. recordKOLInProject projectAddress, kolAddress
  const recordKOLInProjectTx = await mainContract.recordKOLInProject(projectNFTAddress, process.env.DEMO_KOL_ADDRESS);


  // const KryContract = await deployContract('KycContract', [])
  // await deployContract('DuctionAuctionCrowdSale', [100, deployer, AtomicTokenContract.address, KryContract.address])
  // await deployContract('Market', [])
  console.log('done!')
  // const AtomicToken = await hre.ethers.getContractFactory("AtomicToken")
  // const dAtomicToken = await AtomicToken.deploy(initSupply)
  // await dAtomicToken.deployed()

  // const KycContract = await hre.ethers.getContractFactory("KycContract")
  // const dKycContract = await KycContract.deploy()
  // await dKycContract.deployed()

  // const DuctionAuctionCrowdSale = await hre.ethers.getContractFactory("DuctionAuctionCrowdSale")
  // const dDuctionAuctionCrowdSale = await DuctionAuctionCrowdSale.deploy(100, deployer, AtomicTokenContract.address, dKycContract.address)
  // await dDuctionAuctionCrowdSale.deployed()

  // console.log('AtomicToken address: ', dAtomicToken.address)
  // console.log('KycContract address: ', dKycContract.address)
  // console.log('DuctionAuctionCrowdSale address: ', dDuctionAuctionCrowdSale.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
