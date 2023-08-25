// scripts/getter.js
const { ethers } = require("hardhat");

async function main() {
    // const contractAddress = "0xb0f7fd6348356558ef817ed73ea67a3d2707ac30";
    // const INFURA_ID = '8e76d6d234f74213a47c8ea9c4e89562';
    // const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

    // const MyContract = await ethers.getContractFactory("MyContract");
    // const contract = MyContract.attach(contractAddress);

    const MyContractAbi = `[{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}]`
    // Connect to the network

    const INFURA_ID = '8e76d6d234f74213a47c8ea9c4e89562';
    const provider = new ethers.getDefaultProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


    const contractAddress = "0xb0f7fd6348356558ef817ed73ea67a3d2707ac30";

    contractRead = new ethers.Contract(contractAddress, MyContractAbi, provider);

    const value = await contractRead.getValue();
    console.log("Getter function result:", value.toString());
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
