import { ethers } from "hardhat";

async function main() {
  const DexAggregator = await ethers.getContractFactory("DexAggregator");
  const dexAggregator = await DexAggregator.deploy("0xc586bef4a0992c495cf22e1aeee4e446cecdee0e");
  await dexAggregator.deployed();

  console.log("DexAggregator deployed to:", dexAggregator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
