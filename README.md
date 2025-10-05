# HookForge

Professional-grade Uniswap V4 Hook Address Miner. Craft deterministic hook contracts with precision, speed, and full control over your on-chain identity.

## ⚡ Features

- **Vanity Address Mining**: Generate hooks with personalized prefixes using efficient salt mining algorithms
- **Parallel Performance**: Optimized multithreaded engine with 8+ threads for maximum mining speed
- **Configurable Parameters**: Full control over deployer address, init code hash, and permission masks
- **Dual Interface**: Professional web UI and powerful CLI for advanced developers
- **Open Source**: Built with Rust + TypeScript + Solidity for the Uniswap V4 ecosystem

## 🚀 Quick Start

### Web Interface
Visit the online tool for an intuitive mining experience with real-time feedback.

### CLI Usage
```bash
# Basic mining with custom prefix
./hookforge-cli -t 8 -p 0x00 [INIT_CODE_HASH] [HOOK_PERMISSIONS_MASK]

# Advanced configuration
./hookforge-cli -d 0x3F06E9124da279d95942E0B3ddc8aF43948987f0 -t 16 -p cafe -c [INIT_CODE_HASH] [PERMISSIONS]
```

## 🛠 Development

Built for Uniswap V4 Builders. Powered by Base.

**"Forge your perfect hook. Deterministically."**

---

Made by [Zarekvos](https://github.com/zarekvos)