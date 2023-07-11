import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

describe("DexAggregator", function () {
  let dexAggregator: Contract;
  let owner: Signer;

  beforeEach(async function () {
    const DexAggregator = await ethers.getContractFactory("DexAggregator");
    [owner] = await ethers.getSigners();

    dexAggregator = await DexAggregator.deploy("0xc586bef4a0992c495cf22e1aeee4e446cecdee0e");
    await dexAggregator.deployed();
  });

  it("should execute a trade successfully", async function () {
    const inTokenTicker = "USDC";
    const outTokenTicker = "ETH";
    const inAmount = ethers.utils.parseEther("100");
    const maxSlippage = 2;

    await expect(dexAggregator.executeTrade(inTokenTicker, outTokenTicker, inAmount, maxSlippage))
      .to.emit(dexAggregator, "TradeExecuted")
      .withArgs("1inch DEX Aggregator", ethers.constants.Zero);
  });
});
