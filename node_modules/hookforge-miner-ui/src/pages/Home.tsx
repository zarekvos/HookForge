import { motion } from 'framer-motion';
import { Hammer, Zap, BarChart3, Rocket, ArrowRight } from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home = ({ navigate }: HomeProps) => {
  const features = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Hook Builder",
      description: "Create custom Uniswap V4 hooks with our intuitive builder interface."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Mining",
      description: "Mine vanity addresses for your hooks with optimized multi-threading."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Track performance and usage statistics for your deployed hooks."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Easy Deploy",
      description: "Deploy your hooks seamlessly to any EVM-compatible network."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Forge the Future of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Hooks
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              HookForge lets you create, test, and deploy Uniswap V4 hooks seamlessly.
              Build the next generation of DeFi infrastructure with our powerful toolkit.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => navigate('/app')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Enter App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-200 max-w-2xl mx-auto"
            >
              Everything you need to build, test, and deploy professional Uniswap V4 hooks
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Developers
                </span>
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                HookForge is the ultimate toolkit for Uniswap V4 development. Whether you're building 
                custom AMM logic, implementing advanced fee structures, or creating innovative DeFi 
                primitives, our platform provides the tools you need to succeed.
              </p>
              <p className="text-lg text-blue-300 leading-relaxed">
                From rapid prototyping to production deployment, HookForge streamlines your entire 
                development workflow with powerful mining capabilities, comprehensive testing tools, 
                and seamless integration with major blockchain networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                {/* Abstract illustration placeholder */}
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 font-mono text-sm">
                    <div className="text-blue-300">// Hook Implementation</div>
                    <div className="text-white mt-2">function beforeSwap()</div>
                    <div className="text-gray-400 ml-4">returns (bytes4) {'{'}</div>
                    <div className="text-green-300 ml-8">// Your logic here</div>
                    <div className="text-white ml-8">return IHook.beforeSwap.selector;</div>
                    <div className="text-gray-400 ml-4">{'}'}</div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-800/30 rounded-lg px-4 py-2">
                    <span className="text-blue-300 text-sm">✓ Hook compiled successfully</span>
                    <span className="text-green-400 text-sm">Ready to deploy</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;