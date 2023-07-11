/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "DexAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DexAggregator__factory>;
    getContractFactory(
      name: "IOneSplit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOneSplit__factory>;
    getContractFactory(
      name: "IOneSplit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOneSplit__factory>;
    getContractFactory(
      name: "TokenSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenSwap__factory>;
    getContractFactory(
      name: "IOneInch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOneInch__factory>;
    getContractFactory(
      name: "OneInchSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OneInchSwapper__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1967",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "DexAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DexAggregator>;
    getContractAt(
      name: "IOneSplit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOneSplit>;
    getContractAt(
      name: "IOneSplit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOneSplit>;
    getContractAt(
      name: "TokenSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenSwap>;
    getContractAt(
      name: "IOneInch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOneInch>;
    getContractAt(
      name: "OneInchSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OneInchSwapper>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}