import { motion } from 'framer-motion';
import HookForgeFinalLogo from '../assets/fiksfinal.png';

const HomeFooter = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src={HookForgeFinalLogo} 
              alt="HookForge Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-white font-diatype font-bold text-xl">HookForge</span>
          </div>
          
          <p className="text-blue-200/80 mb-4 max-w-md mx-auto font-diatype font-normal">
            Built for Uniswap V4 Builders. Powered by Base.
          </p>
          
          <p className="text-xl font-diatype font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            "Forge your perfect hook. Deterministically."
          </p>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-blue-200/80 font-diatype font-medium">
              Made by Zarekvos
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default HomeFooter;