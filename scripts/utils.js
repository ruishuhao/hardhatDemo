//const {ethers} = require('ethers');

import ethers from "ethers";
// The Contract interface
const MyContractAbi = `[{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newValue","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}]`
// Connect to the network

const INFURA_ID = '8e76d6d234f74213a47c8ea9c4e89562';
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


const contractAddress = "0xb0f7fd6348356558ef817ed73ea67a3d2707ac30";

const allContract = []
const privateKey = '76f1fd7616cd3a6d2cec5855921829724ddba06d33d8e8dc20a572a87924f1ca';
const signer = new ethers.Wallet(privateKey, provider);
allContract.contractRead = new ethers.Contract(LPcontractAddress, LPjsonAbi, provider);
allContract.contractWrite = allContract.LPcontractRead.connect(signer);

export default allContract;
