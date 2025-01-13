import {
  default as init_wasm,
  RunProperties,
  RunResult,
} from "./pkg/miner_wasm_worker";
import { fromHex } from "viem";

export type WorkerInputs = {
  initialize: boolean;
  deployerAddress: `0x${string}`; // deployer_address: &[u8],
  initCodeHash: `0x${string}`; // init_code_hash: &[u8],
  hookPermissionsMask: `0x${string}`; // hook_permissions_mask: &[u8],
  vanityPrefix: string; // vanity_prefix: string,
  caseSensitive: boolean; // case_sensitive: bool,
};

export type WorkerOutputs = {
  workerState: WorkerState;
  salt: string;
  address: string;
};

export enum WorkerState {
  NON_INITIALIZED,
  INITIALIZED,
  MINED,
}

let workerState: WorkerState = WorkerState.NON_INITIALIZED;

self.onmessage = async (msg: MessageEvent<WorkerInputs>) => {
  const inputs: WorkerInputs = msg.data;

  if (inputs.initialize) {
    /** 1. Initialize wasam */
    await init_wasm();
    workerState++;
    self.postMessage({ workerState } as WorkerOutputs);
  } else if (workerState === WorkerState.INITIALIZED) {
    /** 2. Run miner */
    const miner: RunProperties = RunProperties.new(
      fromHex(inputs.deployerAddress, "bytes"),
      fromHex(inputs.initCodeHash, "bytes"),
      fromHex(inputs.hookPermissionsMask, "bytes"),
      inputs.vanityPrefix,
      inputs.caseSensitive
    );
    const result: RunResult = miner.mine_salt();
    workerState++;
    self.postMessage({
      workerState,
      salt: result.salt(),
      address: result.address(),
    } as WorkerOutputs);
  }
};
