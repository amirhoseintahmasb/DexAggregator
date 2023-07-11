/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DexAggregator,
  DexAggregatorInterface,
} from "../../../contracts/aggregator.sol/DexAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oneSplitAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "dexName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
    ],
    name: "TradeExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSlippage",
        type: "uint256",
      },
    ],
    name: "executeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oneSplitAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oneSplitAddress",
        type: "address",
      },
    ],
    name: "setOneSplitAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011e2380380620011e28339818101604052810190620000379190620001d5565b620000576200004b6200009f60201b60201c565b620000a760201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000207565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200019d8262000170565b9050919050565b620001af8162000190565b8114620001bb57600080fd5b50565b600081519050620001cf81620001a4565b92915050565b600060208284031215620001ee57620001ed6200016b565b5b6000620001fe84828501620001be565b91505092915050565b610fcb80620002176000396000f3fe6080604052600436106100595760003560e01c8063715018a6146100655780638da5cb5b1461007c578063b9078616146100a7578063d79afac4146100d0578063e7c308fd146100fb578063f2fde38b1461012457610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a61014d565b005b34801561008857600080fd5b50610091610161565b60405161009e919061074e565b60405180910390f35b3480156100b357600080fd5b506100ce60048036038101906100c991906107df565b61018a565b005b3480156100dc57600080fd5b506100e561044c565b6040516100f2919061074e565b60405180910390f35b34801561010757600080fd5b50610122600480360381019061011d9190610846565b610472565b005b34801561013057600080fd5b5061014b60048036038101906101469190610846565b6104be565b005b610155610541565b61015f60006105bf565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610192610161565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806101f657503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610235576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022c906108f6565b60405180910390fd5b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663085e2c5b878787600a60006040518663ffffffff1660e01b815260040161029d9594939291906109a5565b600060405180830381865afa1580156102ba573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102e39190610b66565b91509150600061031b606461030d8660646102fe9190610bf1565b8861068390919063ffffffff16565b61069990919063ffffffff16565b905080831161035f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035690610c71565b60405180910390fd5b60003a905061036e81866106af565b8111156103b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a790610d03565b60405180910390fd5b6103b86106f3565b6040518060400160405280601481526020017f31696e6368204445582041676772656761746f720000000000000000000000008152508160000181905250818160200181815250507f2a0fe84b0a78eb715985e75cffd963ebe5caa8f1875fba4c8dd44ba036a1183a81600001518260200151604051610439929190610d91565b60405180910390a1505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61047a610541565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104c6610541565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052c90610e33565b60405180910390fd5b61053e816105bf565b50565b6105496106eb565b73ffffffffffffffffffffffffffffffffffffffff16610567610161565b73ffffffffffffffffffffffffffffffffffffffff16146105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490610e9f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836106919190610ebf565b905092915050565b600081836106a79190610f30565b905092915050565b60006106e360646106d58460646106c69190610f61565b8661068390919063ffffffff16565b61069990919063ffffffff16565b905092915050565b600033905090565b604051806040016040528060608152602001600081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107388261070d565b9050919050565b6107488161072d565b82525050565b6000602082019050610763600083018461073f565b92915050565b6000604051905090565b600080fd5b600080fd5b6107868161072d565b811461079157600080fd5b50565b6000813590506107a38161077d565b92915050565b6000819050919050565b6107bc816107a9565b81146107c757600080fd5b50565b6000813590506107d9816107b3565b92915050565b600080600080608085870312156107f9576107f8610773565b5b600061080787828801610794565b945050602061081887828801610794565b9350506040610829878288016107ca565b925050606061083a878288016107ca565b91505092959194509250565b60006020828403121561085c5761085b610773565b5b600061086a84828501610794565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420746865206f776e6572206f7220746865206360008201527f6f6e747261637420697473656c66000000000000000000000000000000000000602082015250565b60006108e0602e83610873565b91506108eb82610884565b604082019050919050565b6000602082019050818103600083015261090f816108d3565b9050919050565b61091f816107a9565b82525050565b6000819050919050565b6000819050919050565b600061095461094f61094a84610925565b61092f565b6107a9565b9050919050565b61096481610939565b82525050565b6000819050919050565b600061098f61098a6109858461096a565b61092f565b6107a9565b9050919050565b61099f81610974565b82525050565b600060a0820190506109ba600083018861073f565b6109c7602083018761073f565b6109d46040830186610916565b6109e1606083018561095b565b6109ee6080830184610996565b9695505050505050565b600081519050610a07816107b3565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a5b82610a12565b810181811067ffffffffffffffff82111715610a7a57610a79610a23565b5b80604052505050565b6000610a8d610769565b9050610a998282610a52565b919050565b600067ffffffffffffffff821115610ab957610ab8610a23565b5b602082029050602081019050919050565b600080fd5b6000610ae2610add84610a9e565b610a83565b90508083825260208201905060208402830185811115610b0557610b04610aca565b5b835b81811015610b2e5780610b1a88826109f8565b845260208401935050602081019050610b07565b5050509392505050565b600082601f830112610b4d57610b4c610a0d565b5b8151610b5d848260208601610acf565b91505092915050565b60008060408385031215610b7d57610b7c610773565b5b6000610b8b858286016109f8565b925050602083015167ffffffffffffffff811115610bac57610bab610778565b5b610bb885828601610b38565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bfc826107a9565b9150610c07836107a9565b9250828203905081811115610c1f57610c1e610bc2565b5b92915050565b7f5472616465206661696c65643a206e6f2072657475726e20616d6f756e740000600082015250565b6000610c5b601e83610873565b9150610c6682610c25565b602082019050919050565b60006020820190508181036000830152610c8a81610c4e565b9050919050565b7f4761732070726963652065786365656473206d6178696d756d2061636365707460008201527f61626c6520736c69707061676500000000000000000000000000000000000000602082015250565b6000610ced602d83610873565b9150610cf882610c91565b604082019050919050565b60006020820190508181036000830152610d1c81610ce0565b9050919050565b600081519050919050565b60005b83811015610d4c578082015181840152602081019050610d31565b60008484015250505050565b6000610d6382610d23565b610d6d8185610873565b9350610d7d818560208601610d2e565b610d8681610a12565b840191505092915050565b60006040820190508181036000830152610dab8185610d58565b9050610dba6020830184610916565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610e1d602683610873565b9150610e2882610dc1565b604082019050919050565b60006020820190508181036000830152610e4c81610e10565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610e89602083610873565b9150610e9482610e53565b602082019050919050565b60006020820190508181036000830152610eb881610e7c565b9050919050565b6000610eca826107a9565b9150610ed5836107a9565b9250828202610ee3816107a9565b91508282048414831517610efa57610ef9610bc2565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f3b826107a9565b9150610f46836107a9565b925082610f5657610f55610f01565b5b828204905092915050565b6000610f6c826107a9565b9150610f77836107a9565b9250828201905080821115610f8f57610f8e610bc2565b5b9291505056fea264697066735822122064c3c3447c1408bc196fe1caaad75b0dd79dfeb2d5b99acdab2eb3a57a12174b64736f6c63430008120033";

type DexAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DexAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DexAggregator__factory extends ContractFactory {
  constructor(...args: DexAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _oneSplitAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DexAggregator> {
    return super.deploy(
      _oneSplitAddress,
      overrides || {}
    ) as Promise<DexAggregator>;
  }
  override getDeployTransaction(
    _oneSplitAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oneSplitAddress, overrides || {});
  }
  override attach(address: string): DexAggregator {
    return super.attach(address) as DexAggregator;
  }
  override connect(signer: Signer): DexAggregator__factory {
    return super.connect(signer) as DexAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexAggregatorInterface {
    return new utils.Interface(_abi) as DexAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DexAggregator {
    return new Contract(address, _abi, signerOrProvider) as DexAggregator;
  }
}
