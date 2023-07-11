// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface IOneInch {
    function swap(
        IERC20 fromToken,
        IERC20 destToken,
        uint256 amountIn,
        uint256 minReturn,
        uint256[] calldata distribution,
        uint256 flags
    ) external payable;

    function getExpectedReturn(
        IERC20 fromToken,
        IERC20 destToken,
        uint256 amountIn,
        uint256 parts,
        uint256 featureFlags
    )
        external
        view
        returns(
            uint256 returnAmount,
            uint256[] memory distribution,
            uint256[] memory gasPrice
        );
}

contract OneInchSwapper {
    using SafeMath for uint256;

    IOneInch public oneInch;
    IERC20 public inToken;
    IERC20 public outToken;

    constructor(address _oneInch, address _inToken, address _outToken) {
        oneInch = IOneInch(_oneInch);
        inToken = IERC20(_inToken);
        outToken = IERC20(_outToken);
    }

    function swapTokens(uint256 amountIn, uint256 maxSlippage) external {
        uint256 expectedReturn;
        uint256[] memory distribution;
        uint256[] memory gasPrice;

        // Get expected return and gas price distribution
        (expectedReturn, distribution, gasPrice) = oneInch.getExpectedReturn(inToken, outToken, amountIn, 10, 0);

        uint256 minReturn = expectedReturn.mul(10000 - maxSlippage).div(10000);

        // Approve the 1inch contract to spend 'amountIn' of 'inToken'
        inToken.approve(address(oneInch), amountIn);

        // Perform the swap
        oneInch.swap(inToken, outToken, amountIn, minReturn, distribution, 0);
    }
}
