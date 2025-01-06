use alloy_primitives::{Address, B256};
use clap::Parser;
use spinners::{Spinner, Spinners};
use std::str::FromStr;
use std::sync::{Arc, RwLock};
use std::thread;
use uni_v4_hook_address_miner::{fulfills_vanity, mine_salt};

const CREATE2_UNIVERSAL_DEPLOYER: &str = "0x4e59b44847b379578588920ca78fbf26c0b4956c";

#[derive(Parser)]
#[command(about, long_about = None)]
struct Cli {
    init_code_hash: Option<String>,
    hook_permissions_mask: Option<String>,
    #[arg(short, long, value_name = "DEPLOYER_ADDRESS", default_value = CREATE2_UNIVERSAL_DEPLOYER)]
    deployer_address: Option<String>,
    #[arg(
        short = 't',
        long,
        value_name = "NUMBER_OF_THREADS",
        default_value_t = 8
    )]
    threads: i32,
    #[arg(short = 'p', long, value_name = "VANITY_PREFIX")]
    vanity_prefix: Option<String>,
    #[arg(short = 'c', long)]
    case_sensitive: bool,
}

fn main() {
    let cli = Cli::parse();
    let mut deployer_address: Address = Address::ZERO;
    let mut init_code_hash: B256 = B256::ZERO;
    let mut hook_permissions_mask: Address = Address::ZERO;
    let threads = cli.threads;
    let case_sensitive = cli.case_sensitive;

    // Parse the command line arguments
    if let Some(_deployer_address) = cli.deployer_address.as_deref() {
        deployer_address =
            Address::from_str(_deployer_address).expect("Error: Invalid deployer address");
    }
    if let Some(_init_code_hash) = cli.init_code_hash.as_deref() {
        init_code_hash = B256::from_str(_init_code_hash).expect("Error: Invalid init code hash");
    }
    if let Some(_miner_address) = cli.hook_permissions_mask.as_deref() {
        hook_permissions_mask =
            Address::from_str(_miner_address).expect("Error: Invalid hook permission mask");
    }
    let vanity_prefix = cli.vanity_prefix.clone().unwrap_or_default();

    // Validate the command line arguments
    if deployer_address == Address::ZERO {
        eprintln!("Error: Invalid deployer address");
        std::process::exit(1);
    }
    if init_code_hash == B256::ZERO {
        eprintln!("Error: Invalid initialization code hash");
        std::process::exit(1);
    }
    if hook_permissions_mask == Address::ZERO {
        eprintln!("Error:: Invalid miner address");
        std::process::exit(1);
    }
    if !vanity_prefix.is_empty() && usize::from_str_radix(&vanity_prefix, 16).is_err() {
        eprintln!("Error:: Invalid hex prefix");
        std::process::exit(1);
    }

    // Print run properties
    println!("Run properties:");
    println!(" * Deployer address: {:?}", &deployer_address);
    println!(" * Init code hash: {:?}", &init_code_hash);
    println!(" * Hook permissions mask: {:?}", &hook_permissions_mask);
    if !vanity_prefix.is_empty() {
        println!(" * Vanity prefix: {:?}", &vanity_prefix);
        println!(" * Number of threads: {}", threads);
    }
    println!();

    // Start Mining
    let mut sp = Spinner::new(Spinners::Aesthetic, "Mining...".into());
    let shared_salt = Arc::new(RwLock::new(B256::ZERO));
    let mut handles = vec![];
    for _ in 0..threads {
        let shared_salt_clone = Arc::clone(&shared_salt);
        let vanity_prefix_clone = vanity_prefix.clone();

        let handle = thread::spawn(move || {
            while shared_salt_clone.read().unwrap().is_zero() {
                let salt = mine_salt(deployer_address, init_code_hash, hook_permissions_mask);
                let address = deployer_address.create2(salt, init_code_hash);
                if fulfills_vanity(address, &vanity_prefix_clone, case_sensitive) {
                    *shared_salt_clone.write().unwrap() = salt;
                }
            }
        });

        handles.push(handle);
    }

    // Wait for all threads to complete
    for handle in handles {
        handle.join().unwrap();
    }
    sp.stop();

    // Print results
    println!("\n\nSalt Found!");
    let salt = shared_salt.read().unwrap();
    println!(" * Salt: {:?}", salt);
    // TODO: print address with case sensitivy checksum
    println!(
        " * Address: {:?}",
        deployer_address.create2(*salt, init_code_hash)
    );
}
