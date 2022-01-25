/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ERC1155Interface,
  ERC1155InterfaceInterface,
} from "../ERC1155Interface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ERC1155Interface__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1155InterfaceInterface {
    return new utils.Interface(_abi) as ERC1155InterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Interface {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Interface;
  }
}
