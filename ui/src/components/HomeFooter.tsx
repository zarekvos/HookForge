import { motion } from 'framer-motion';

const HomeFooter = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-white font-bold text-xl">HookForge</span>
          </div>
          
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Empowering developers to build the next generation of DeFi infrastructure with Uniswap V4 hooks.
          </p>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-white font-medium">
              Made by Zarekvos
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default HomeFooter;