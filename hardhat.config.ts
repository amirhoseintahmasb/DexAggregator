import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import '@typechain/hardhat-typechain';


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      // chainId: 5777,
      url: "http://127.0.0.1:7545",
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
