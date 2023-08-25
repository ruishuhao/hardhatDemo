// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
    //  const MyContract = await ethers.getContractFactory("MyContract");
    //  const contract = await MyContract.deploy();
    //  await contract.deployed();
    //  console.log("Contract deployed to:", contract.address);
    // return contract.address;
    const my = await ethers.deployContract("MyContract");
    await my.waitForDeployment();
    console.log("contract address: ",my.target);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});