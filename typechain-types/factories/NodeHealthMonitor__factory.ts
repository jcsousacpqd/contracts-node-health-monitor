/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  NodeHealthMonitor,
  NodeHealthMonitorInterface,
} from "../NodeHealthMonitor";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "CriticalAlert",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "severity",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "statusHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "StatusReported",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "getLatestStatus",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "reporter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "statusHash",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "severity",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "optionalDetails",
            type: "string",
          },
        ],
        internalType: "struct NodeHealthMonitor.NodeStatus",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "severity",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "statusHash",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "optionalDetails",
        type: "string",
      },
    ],
    name: "reportStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "statusReports",
    outputs: [
      {
        internalType: "address",
        name: "reporter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "statusHash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "severity",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "optionalDetails",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061103b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635abcc8e614610046578063cccbe5121461007a578063d0e220d414610096575b600080fd5b610060600480360381019061005b91906106fe565b6100c6565b604051610071959493929190610821565b60405180910390f35b610094600480360381019061008f9190610a08565b6101ce565b005b6100b060048036038101906100ab9190610a77565b6103e4565b6040516100bd9190610ba0565b60405180910390f35b600060205281600052604060002081815481106100e257600080fd5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900460ff169080600401805461014b90610bf1565b80601f016020809104026020016040519081016040528092919081815260200182805461017790610bf1565b80156101c45780601f10610199576101008083540402835291602001916101c4565b820191906000526020600020905b8154815290600101906020018083116101a757829003601f168201915b5050505050905085565b60006040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018481526020018560ff16815260200160028660ff16101561022d576040518060200160405280600081525061022f565b835b81525090506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908360ff160217905550608082015181600401908161032d9190610dce565b5050503373ffffffffffffffffffffffffffffffffffffffff167f2b2fad46d9e580826993f2178cfb35fbdad7cd509c83088855b31333e13b28d885854260405161037a93929190610ea0565b60405180910390a260028460ff16106103de573373ffffffffffffffffffffffffffffffffffffffff167fb682c4907570afe96c89e399e89324781c4aa469aa90f0aec46df5660cf10e2383426040516103d5929190610ed7565b60405180910390a25b50505050565b6103ec61060b565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008111610475576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046c90610f53565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001826104c09190610fa2565b815481106104d1576104d0610fd6565b5b90600052602060002090600502016040518060a00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff1660ff1660ff16815260200160048201805461058190610bf1565b80601f01602080910402602001604051908101604052809291908181526020018280546105ad90610bf1565b80156105fa5780601f106105cf576101008083540402835291602001916105fa565b820191906000526020600020905b8154815290600101906020018083116105dd57829003601f168201915b505050505081525050915050919050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008019168152602001600060ff168152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106958261066a565b9050919050565b6106a58161068a565b81146106b057600080fd5b50565b6000813590506106c28161069c565b92915050565b6000819050919050565b6106db816106c8565b81146106e657600080fd5b50565b6000813590506106f8816106d2565b92915050565b6000806040838503121561071557610714610660565b5b6000610723858286016106b3565b9250506020610734858286016106e9565b9150509250929050565b6107478161068a565b82525050565b610756816106c8565b82525050565b6000819050919050565b61076f8161075c565b82525050565b600060ff82169050919050565b61078b81610775565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107cb5780820151818401526020810190506107b0565b60008484015250505050565b6000601f19601f8301169050919050565b60006107f382610791565b6107fd818561079c565b935061080d8185602086016107ad565b610816816107d7565b840191505092915050565b600060a082019050610836600083018861073e565b610843602083018761074d565b6108506040830186610766565b61085d6060830185610782565b818103608083015261086f81846107e8565b90509695505050505050565b61088481610775565b811461088f57600080fd5b50565b6000813590506108a18161087b565b92915050565b6108b08161075c565b81146108bb57600080fd5b50565b6000813590506108cd816108a7565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610915826107d7565b810181811067ffffffffffffffff82111715610934576109336108dd565b5b80604052505050565b6000610947610656565b9050610953828261090c565b919050565b600067ffffffffffffffff821115610973576109726108dd565b5b61097c826107d7565b9050602081019050919050565b82818337600083830152505050565b60006109ab6109a684610958565b61093d565b9050828152602081018484840111156109c7576109c66108d8565b5b6109d2848285610989565b509392505050565b600082601f8301126109ef576109ee6108d3565b5b81356109ff848260208601610998565b91505092915050565b600080600060608486031215610a2157610a20610660565b5b6000610a2f86828701610892565b9350506020610a40868287016108be565b925050604084013567ffffffffffffffff811115610a6157610a60610665565b5b610a6d868287016109da565b9150509250925092565b600060208284031215610a8d57610a8c610660565b5b6000610a9b848285016106b3565b91505092915050565b610aad8161068a565b82525050565b610abc816106c8565b82525050565b610acb8161075c565b82525050565b610ada81610775565b82525050565b600082825260208201905092915050565b6000610afc82610791565b610b068185610ae0565b9350610b168185602086016107ad565b610b1f816107d7565b840191505092915050565b600060a083016000830151610b426000860182610aa4565b506020830151610b556020860182610ab3565b506040830151610b686040860182610ac2565b506060830151610b7b6060860182610ad1565b5060808301518482036080860152610b938282610af1565b9150508091505092915050565b60006020820190508181036000830152610bba8184610b2a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c0957607f821691505b602082108103610c1c57610c1b610bc2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c47565b610c8e8683610c47565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ccb610cc6610cc1846106c8565b610ca6565b6106c8565b9050919050565b6000819050919050565b610ce583610cb0565b610cf9610cf182610cd2565b848454610c54565b825550505050565b600090565b610d0e610d01565b610d19818484610cdc565b505050565b5b81811015610d3d57610d32600082610d06565b600181019050610d1f565b5050565b601f821115610d8257610d5381610c22565b610d5c84610c37565b81016020851015610d6b578190505b610d7f610d7785610c37565b830182610d1e565b50505b505050565b600082821c905092915050565b6000610da560001984600802610d87565b1980831691505092915050565b6000610dbe8383610d94565b9150826002028217905092915050565b610dd782610791565b67ffffffffffffffff811115610df057610def6108dd565b5b610dfa8254610bf1565b610e05828285610d41565b600060209050601f831160018114610e385760008415610e26578287015190505b610e308582610db2565b865550610e98565b601f198416610e4686610c22565b60005b82811015610e6e57848901518255600182019150602085019450602081019050610e49565b86831015610e8b5784890151610e87601f891682610d94565b8355505b6001600288020188555050505b505050505050565b6000606082019050610eb56000830186610782565b610ec26020830185610766565b610ecf604083018461074d565b949350505050565b60006040820190508181036000830152610ef181856107e8565b9050610f00602083018461074d565b9392505050565b7f4e6f207265706f72747320796574000000000000000000000000000000000000600082015250565b6000610f3d600e8361079c565b9150610f4882610f07565b602082019050919050565b60006020820190508181036000830152610f6c81610f30565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fad826106c8565b9150610fb8836106c8565b9250828203905081811115610fd057610fcf610f73565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212200aefc698db6a5be66211717c974972890b6d4cff4b86c113435429888c99553a64736f6c63430008180033";

type NodeHealthMonitorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NodeHealthMonitorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NodeHealthMonitor__factory extends ContractFactory {
  constructor(...args: NodeHealthMonitorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NodeHealthMonitor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NodeHealthMonitor__factory {
    return super.connect(runner) as NodeHealthMonitor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NodeHealthMonitorInterface {
    return new Interface(_abi) as NodeHealthMonitorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NodeHealthMonitor {
    return new Contract(address, _abi, runner) as unknown as NodeHealthMonitor;
  }
}
