const {expect} = require("chai");
const { ethers } = require("hardhat");

describe('test MyContract',  async function(){

    it('get a value', async () => {
        const MyContract = await ethers.getContractFactory("MyContract");
        const getter = await MyContract.deploy(); 
        const tx = await getter.setValue(42);
        await tx.wait();
        console.log("Setter function called successfully!");   
        const value = await getter.getValue();
        console.log("Getter function result:", value.toString());
        expect(value).to.equals(42);
    });
});

