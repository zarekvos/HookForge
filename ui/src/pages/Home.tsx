import { motion } from 'framer-motion';
import { ArrowRight, Zap, Settings, Code, Cpu, Globe, Layers } from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home = ({ navigate }: HomeProps) => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Vanity Address Mining",
      description: "Generate hooks with personalized prefixes using efficient salt mining algorithms."
    },
    {
      icon: <Cpu className="w-6 h-6" />, 
      title: "Parallel Performance", 
      description: "Optimized multithreaded engine with 8+ threads for maximum mining speed."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configurable Parameters",
      description: "Full control over deployer address, init code hash, and permission masks."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Instant Results",
      description: "Real-time mining feedback with immediate salt and address generation."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Dual Interface",
      description: "Professional web UI and powerful CLI for advanced developers."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Open Source",
      description: "Built with Rust + TypeScript + Solidity for the Uniswap V4 ecosystem."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.6
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const glowAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00152B] via-[#001122] to-[#000C1E] relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Floating Badge */}
            <motion.div
              variants={itemVariants}
              animate={floatingAnimation}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-blue-300 text-sm font-medium cursor-pointer"
            >
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Next-Generation Hook Address Miner
            </motion.div>

            {/* Animated Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-diatype font-bold text-white leading-[0.9] tracking-[-0.02em]"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Forge the Future of{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Uniswap Hooks
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed font-diatype font-normal"
            >
              Professional-grade Uniswap V4 Hook Address Miner. Craft deterministic hook contracts 
              with precision, speed, and full control over your on-chain identity.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                onClick={() => navigate('/app')}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 text-blue-400 hover:text-blue-300 hover:bg-black/30 text-lg font-diatype font-semibold transition-all duration-300 tracking-wide"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
              >
                <span>Launch HookForge</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Animated Stats Badges */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 1.5
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-blue-300/60"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.1, color: "#60A5FA" }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <motion.div 
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={glowAnimation}
                />
                <span>Rust-Powered Performance</span>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.1, color: "#22D3EE" }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <motion.div 
                  className="w-1 h-1 bg-cyan-400 rounded-full"
                  animate={{
                    ...glowAnimation,
                    transition: { ...glowAnimation.transition, delay: 1 }
                  }}
                />
                <span>Multi-threaded Mining</span>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.1, color: "#60A5FA" }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <motion.div 
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{
                    ...glowAnimation,
                    transition: { ...glowAnimation.transition, delay: 2 }
                  }}
                />
                <span>Open Source</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-[-0.005em]"
            >
              Powerful by Design
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-200/80 max-w-3xl mx-auto font-diatype font-normal"
            >
              Professional-grade tools designed for Uniswap V4 developers who demand precision and performance.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02
                }}
                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 mb-6">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-300">
                    <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-diatype font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200/80 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300 font-diatype">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              >
                <motion.h2 className="text-4xl md:text-6xl font-diatype font-bold text-white mb-8 tracking-[-0.01em] leading-[1.1]">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    What is{" "}
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    HookForge?
                  </motion.span>
                </motion.h2>
              </motion.div>
              
              <div className="space-y-6 text-blue-200/80 leading-relaxed">
                <motion.p 
                  className="text-lg font-diatype font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.strong 
                    className="text-white font-diatype font-bold"
                    whileHover={{ 
                      color: "#60A5FA",
                      transition: { duration: 0.2 }
                    }}
                  >
                    HookForge
                  </motion.strong> is a powerful open-source tool that helps developers discover and generate custom hook addresses for Uniswap V4 deployments.
                </motion.p>
                
                <motion.p 
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  In Uniswap V4, "hooks" are modular smart contracts that let you extend or customize pool logic — from fee structures to dynamic swaps. Each hook has its own deterministic address, derived from parameters like salt, deployer address, and init_code_hash.
                </motion.p>
                
                <motion.p 
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  HookForge gives you the control to mine vanity hook addresses, test configurations, and deploy them efficiently — whether through a clean web interface or via high-performance CLI mode.
                </motion.p>
                
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.15)",
                      borderColor: "rgba(96, 165, 250, 0.4)"
                    }}
                    animate={floatingAnimation}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={glowAnimation}
                    />
                    <span>Rust + TypeScript + Solidity</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* 3D Abstract Illustration */}
              <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Mining Terminal */}
                <div className="relative space-y-4">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400/80 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400/80 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400/80 rounded-full"></div>
                    </div>
                    <span className="text-blue-300/60 text-xs font-mono">hookforge-terminal</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 font-mono text-sm border border-white/5">
                    <div className="space-y-3">
                      <div className="text-cyan-300">$ hookforge mine --prefix 0x0dd</div>
                      <div className="text-blue-200/80 font-diatype">Deployer: 0x3F06E9124da279d95942E0B3ddc8aF43948987f0</div>
                      <div className="text-blue-200/80 font-diatype">Threads: 8 | Target: 0x0dd*****</div>
                      
                      <div className="py-2">
                        <div className="text-yellow-300/80 flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span>Mining in progress...</span>
                        </div>
                      </div>
                      
                      <div className="text-green-400 font-semibold">
                        ✓ Found: 0x0dd4a7b2c1e3f8d9a2b5c6e1f4a7b0c3d6e9f2a5
                      </div>
                      <div className="text-green-300/80">Salt: 0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d</div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="flex justify-between items-center bg-white/[0.02] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/5">
                    <span className="text-blue-300/80 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      Ready to deploy
                    </span>
                    <span className="text-green-400/80 text-sm font-medium">Success</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl rotate-12 blur-sm"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl -rotate-12 blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-diatype font-bold text-white mb-8">
              Why It Matters
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                In Uniswap V4, every hook contract's address is deterministic.
              </p>
              <p className="text-lg text-blue-300 leading-relaxed">
                By manipulating the deployment parameters, HookForge empowers developers to brand, secure, 
                or optimize their hooks — giving full control over how their on-chain identity looks and behaves.
              </p>
            </div>
            <div className="mt-12">
              <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                "Forge your perfect hook. Deterministically."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;