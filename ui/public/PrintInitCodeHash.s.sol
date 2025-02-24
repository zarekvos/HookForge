/*1. Copy this script to the 'script' directory of your Foundry project.*/
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Script.sol";
import "forge-std/console.sol";

/* 2. Replace 'YourHook' with the name of the hook for which you want to compute the Init Code Hash */
import {YourHook as TargetHook} from "../src/YourHook.sol";

contract PrintInitCodeHash is Script {
    /* 3. Uncomment the PoolManager address corresponding to the network you are using */
    // Mainnet Deployments
    // address constant PM_ADDRESS = 0x000000000004444c5dc75cB358380D2e3dE08A90; // Mainnet: 1
    // address constant PM_ADDRESS = 0x9a13f98cb987694c9f086b1f5eb990eea8264ec3; // Optimism: 10
    // address constant PM_ADDRESS = 0x498581ff718922c3f8e6a244956af099b2652b2b; // Base: 8453
    // address constant PM_ADDRESS = 0x360e68faccca8ca495c1b759fd9eee466db9fb32; // Arbitrum One: 42161
    // address constant PM_ADDRESS = 0x67366782805870060151383f4bbff9dab53e5cd6; // Polygon: 137
    // address constant PM_ADDRESS = 0x1631559198a9e474033433b2958dabc135ab6446; // Blast: 81457
    // address constant PM_ADDRESS = 0x0575338e4c17006ae181b47900a84404247ca30f; // Zora: 7777777
    // address constant PM_ADDRESS = 0xb1860d529182ac3bc1f51fa2abd56662b7d13f33; // Worldchain: 480
    // address constant PM_ADDRESS = 0x360e68faccca8ca495c1b759fd9eee466db9fb32; // Ink: 57073
    // address constant PM_ADDRESS = 0x360e68faccca8ca495c1b759fd9eee466db9fb32; // Soneium: 1868
    // address constant PM_ADDRESS = 0x06380c0e0912312b5150364b9dc4542ba0dbbc85; // Avalanche: 43114
    // address constant PM_ADDRESS = 0x28e2ea090877bf75740558f6bfb36a5ffee9e9df; // BNB Smart Chain: 56

    // Testnet Deployments
    // address constant PM_ADDRESS = 0x00b036b58a818b1bc34d502d3fe730db729e62ac; // Unichain Sepolia: 1301
    // address constant PM_ADDRESS = 0xE03A1074c86CFeDd5C142C4F04F1a1536e203543;  // Sepolia: 11155111
    // address constant PM_ADDRESS = 0x05E73354cFDd6745C338b50BcFDfA3Aa6fA03408;  // Base Sepolia: 84532
    // address constant PM_ADDRESS = 0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317;  // Arbitrum Sepolia: 421614

    function run() public {
        // Hook constructor arguments
        bytes memory constructorArguments = abi.encode(PM_ADDRESS /* 4. Add any additional arguments here, if necessary */);

        // Print Init Code Hash
        bytes memory creationCodeWithConstructorArguments =
            abi.encodePacked(type(TargetHook).creationCode, constructorArguments);
        console.log("Init Code Hash:");
        console.logBytes32(keccak256(creationCodeWithConstructorArguments));
    }
}

/* 5. Run `forge script PrintInitCodeHash` to compute the Init Code Hash for the specified hook */