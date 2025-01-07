use alloy_primitives::{address, Address, B256};
use uni_v4_hook_address_miner::{fulfills_vanity, mine_salt};
use wasm_bindgen::prelude::*;

const BEFORE_INITIALIZE_FLAG: Address = address!("0000000000000000000000000000000000002000");
const AFTER_INITIALIZE_FLAG: Address = address!("0000000000000000000000000000000000001000");
const BEFORE_ADD_LIQUIDITY_FLAG: Address = address!("0000000000000000000000000000000000000800");
const AFTER_ADD_LIQUIDITY_FLAG: Address = address!("0000000000000000000000000000000000000400");
const BEFORE_REMOVE_LIQUIDITY_FLAG: Address = address!("0000000000000000000000000000000000000200");
const AFTER_REMOVE_LIQUIDITY_FLAG: Address = address!("0000000000000000000000000000000000000100");
const BEFORE_SWAP_FLAG: Address = address!("0000000000000000000000000000000000000080");
const AFTER_SWAP_FLAG: Address = address!("0000000000000000000000000000000000000040");
const BEFORE_DONATE_FLAG: Address = address!("0000000000000000000000000000000000000020");
const AFTER_DONATE_FLAG: Address = address!("0000000000000000000000000000000000000010");
const BEFORE_SWAP_RETURNS_DELTA_FLAG: Address =
    address!("0000000000000000000000000000000000000008");
const AFTER_SWAP_RETURNS_DELTA_FLAG: Address = address!("0000000000000000000000000000000000000004");
const AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG: Address =
    address!("0000000000000000000000000000000000000002");
const AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG: Address =
    address!("0000000000000000000000000000000000000001");

#[wasm_bindgen]
pub struct RunProperties {
    deployer_address: Address,
    init_code_hash: B256,
    hook_permissions_mask: Address,
    vanity_prefix: String,
    case_sensitive: bool,
}

#[wasm_bindgen]
impl RunProperties {
    pub fn new(
        deployer_address: &[u8],
        init_code_hash: &[u8],
        vanity_prefix: String,
        case_sensitive: bool,
        before_initialize: bool,
        after_initialize: bool,
        before_add_liquidity: bool,
        before_remove_liquidity: bool,
        after_add_liquidity: bool,
        after_remove_liquidity: bool,
        before_swap: bool,
        after_swap: bool,
        before_donate: bool,
        after_donate: bool,
        before_swap_return_delta: bool,
        after_swap_return_delta: bool,
        after_add_liquidity_return_delta: bool,
        after_remove_liquidity_return_delta: bool,
    ) -> RunProperties {
        let mut hook_permissions_mask = Address::ZERO;
        if before_initialize {
            hook_permissions_mask |= BEFORE_INITIALIZE_FLAG;
        }
        if after_initialize {
            hook_permissions_mask |= AFTER_INITIALIZE_FLAG;
        }
        if before_add_liquidity {
            hook_permissions_mask |= BEFORE_ADD_LIQUIDITY_FLAG;
        }
        if after_add_liquidity {
            hook_permissions_mask |= AFTER_ADD_LIQUIDITY_FLAG;
        }
        if before_remove_liquidity {
            hook_permissions_mask |= BEFORE_REMOVE_LIQUIDITY_FLAG;
        }
        if after_remove_liquidity {
            hook_permissions_mask |= AFTER_REMOVE_LIQUIDITY_FLAG;
        }
        if before_swap {
            hook_permissions_mask |= BEFORE_SWAP_FLAG;
        }
        if after_swap {
            hook_permissions_mask |= AFTER_SWAP_FLAG;
        }
        if before_donate {
            hook_permissions_mask |= BEFORE_DONATE_FLAG;
        }
        if after_donate {
            hook_permissions_mask |= AFTER_DONATE_FLAG;
        }
        if before_swap_return_delta {
            hook_permissions_mask |= BEFORE_SWAP_RETURNS_DELTA_FLAG;
        }
        if after_swap_return_delta {
            hook_permissions_mask |= AFTER_SWAP_RETURNS_DELTA_FLAG;
        }
        if after_add_liquidity_return_delta {
            hook_permissions_mask |= AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG;
        }
        if after_remove_liquidity_return_delta {
            hook_permissions_mask |= AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG;
        }

        RunProperties {
            deployer_address: Address::from_slice(deployer_address),
            init_code_hash: B256::from_slice(init_code_hash),
            hook_permissions_mask,
            vanity_prefix,
            case_sensitive,
        }
    }

    pub fn mine_salt(&self) -> RunResult {
        loop {
            let salt = mine_salt(
                self.deployer_address,
                self.init_code_hash,
                self.hook_permissions_mask,
            );
            let address = self.deployer_address.create2(salt, self.init_code_hash);
            if fulfills_vanity(address, &self.vanity_prefix, self.case_sensitive) {
                return RunResult { salt, address };
            }
        }
    }
}

#[wasm_bindgen]
pub struct RunResult {
    salt: B256,
    address: Address,
}

#[wasm_bindgen]
impl RunResult {
    pub fn salt(&self) -> String {
        self.salt.to_string()
    }

    pub fn address(&self) -> String {
        self.address.to_string()
    }
}
