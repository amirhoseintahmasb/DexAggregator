// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Interface for the 1inch DEX aggregator
interface IOneSplit {
    function getExpectedReturn(
        address fromToken,
        address destToken,
        uint256 amount,
        uint256 parts,
        uint256 flags
    ) external view returns (uint256 returnAmount, uint256[] memory distribution);
}

contract DexAggregator is Ownable {
    using SafeMath for uint256;

    // Struct to hold information about a DEX route
    struct DexRoute {
        string dexName;
        uint256 gasPrice;
    }

    // Address of the 1inch DEX aggregator contract
    address public oneSplitAddress;

    // Modifier to only allow the owner to call certain functions
    modifier onlyOwnerOrSelf() {
        require(msg.sender == owner() || msg.sender == address(this), "Caller is not the owner or the contract itself");
        _;
    }

    // Event emitted when a trade is executed
    event TradeExecuted(string dexName, uint256 gasPrice);

    constructor(address _oneSplitAddress) {
        oneSplitAddress = _oneSplitAddress;
    }

    function setOneSplitAddress(address _oneSplitAddress) external onlyOwner {
        oneSplitAddress = _oneSplitAddress;
    }

    function executeTrade(
        // string memory inTokenTicker,
        // string memory outTokenTicker,
        address inToken,
        address outToken,
        uint256 inAmount,
        uint256 maxSlippage
    ) external onlyOwnerOrSelf {
        // Perform the trade using the 1inch DEX aggregator
        (uint256 returnAmount, uint256[] memory distribution) = IOneSplit(oneSplitAddress).getExpectedReturn(
            // getTokenAddressByTicker(inTokenTicker),
            // getTokenAddressByTicker(outTokenTicker),
            inToken,
            outToken,
            inAmount,
            10,
            0
        );

        // Estimate the minimum return amount, considering the max slippage
        uint256 minReturnAmount = inAmount.mul(100 - maxSlippage).div(100);
         
        require(returnAmount > minReturnAmount, "Trade failed: no return amount");

        uint256 gasPrice = tx.gasprice;

        // Check the gas price against the maximum acceptable slippage
        require(gasPrice <= calculateMaxGasPrice(gasPrice, maxSlippage), "Gas price exceeds maximum acceptable slippage");

        // Choose the DEX with the lowest gas price
        DexRoute memory selectedRoute;
        selectedRoute.dexName = "1inch DEX Aggregator";
        selectedRoute.gasPrice = gasPrice;

        // Emit the trade execution event
        emit TradeExecuted(selectedRoute.dexName, selectedRoute.gasPrice);
    }

    function calculateMaxGasPrice(uint256 gasPrice, uint256 maxSlippage) internal pure returns (uint256) {
        return gasPrice.mul(100 + maxSlippage).div(100);
    }

    // function getTokenAddressByTicker(string memory ticker) internal pure returns (address) {
    //     // Mapping the token ticker to their addresses
    //     if (keccak256(abi.encodePacked(ticker)) == keccak256(abi.encodePacked("$USDC"))) {
    //         return 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    //     } else if (keccak256(abi.encodePacked(ticker)) == keccak256(abi.encodePacked("$ETH"))) {
    //         return 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    //     } else {
    //         revert("Token ticker not found");
    //     }
    // }

    // Fallback function to receive ETH
    receive() external payable {}
}
