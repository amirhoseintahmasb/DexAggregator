/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenSwapInterface extends utils.Interface {
  functions: {
    "oneSplitContract()": FunctionFragment;
    "swapTokens(string,string,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "oneSplitContract" | "swapTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "oneSplitContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "oneSplitContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapTokens", data: BytesLike): Result;

  events: {};
}

export interface TokenSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    oneSplitContract(overrides?: CallOverrides): Promise<[string]>;

    swapTokens(
      inTokenTicker: PromiseOrValue<string>,
      outTokenTicker: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  oneSplitContract(overrides?: CallOverrides): Promise<string>;

  swapTokens(
    inTokenTicker: PromiseOrValue<string>,
    outTokenTicker: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    maxSlippage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    oneSplitContract(overrides?: CallOverrides): Promise<string>;

    swapTokens(
      inTokenTicker: PromiseOrValue<string>,
      outTokenTicker: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    oneSplitContract(overrides?: CallOverrides): Promise<BigNumber>;

    swapTokens(
      inTokenTicker: PromiseOrValue<string>,
      outTokenTicker: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    oneSplitContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapTokens(
      inTokenTicker: PromiseOrValue<string>,
      outTokenTicker: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
