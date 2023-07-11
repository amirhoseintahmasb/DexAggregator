/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface IOneSplitInterface extends utils.Interface {
  functions: {
    "getExpectedReturn(address,address,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getExpectedReturn"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getExpectedReturn",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getExpectedReturn",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOneSplit extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOneSplitInterface;

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
    getExpectedReturn(
      fromToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      parts: PromiseOrValue<BigNumberish>,
      flags: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        returnAmount: BigNumber;
        distribution: BigNumber[];
      }
    >;
  };

  getExpectedReturn(
    fromToken: PromiseOrValue<string>,
    destToken: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    parts: PromiseOrValue<BigNumberish>,
    flags: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[]] & {
      returnAmount: BigNumber;
      distribution: BigNumber[];
    }
  >;

  callStatic: {
    getExpectedReturn(
      fromToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      parts: PromiseOrValue<BigNumberish>,
      flags: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        returnAmount: BigNumber;
        distribution: BigNumber[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    getExpectedReturn(
      fromToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      parts: PromiseOrValue<BigNumberish>,
      flags: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getExpectedReturn(
      fromToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      parts: PromiseOrValue<BigNumberish>,
      flags: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}