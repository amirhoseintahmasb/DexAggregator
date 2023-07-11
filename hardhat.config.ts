import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import '@typechain/hardhat-typechain';


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "polygon",
  networks: {
    polygon: {
      chainId: 137,
      url: "https://matic.getblock.io/83ac5e9c-b4ae-48e5-932b-ebf37bbfaf3b/mainnet",
      accounts: [
        "0x8a300b8da5df26967d844e2db52b2eedf5e16905577c577823b3ae9c15271580",
      ],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
