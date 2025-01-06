use alloy_primitives::{address, Address, B256};
use rand::Rng;

/// Mine a salt that will result in a contract address with the desired hook permissions mask.
pub fn mine_salt(
    deployer_address: Address,
    init_code_hash: B256,
    hook_permissions_mask: Address,
) -> B256 {
    let all_hook_mask: Address = address!("0x0000000000000000000000000000000000003fff");
    loop {
        let salt = B256::from_slice(&rand::thread_rng().gen::<[u8; 32]>());
        let address = deployer_address.create2(salt, init_code_hash);
        if hook_permissions_mask == address & all_hook_mask {
            return salt;
        }
    }
}

/// Checks if an address fulfills vanity requirements
pub fn fulfills_vanity(address: Address, prefix: &str, case_sensitive: bool) -> bool {
    if !case_sensitive {
        let address_str = format!("{:x}", address);
        address_str.starts_with(&prefix.to_lowercase())
    } else {
        let address_str = &address.to_checksum(None)[2..];
        address_str.starts_with(prefix)
    }
}
