import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import FiksFinalLogo from '../assets/fiksfinal.png';

// Custom X Logo Component
const XLogo = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);



interface NavbarProps {
  navigate: (path: string) => void;
}

const Navbar = ({ navigate }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-none border-none"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 text-blue-400 hover:text-blue-300 hover:bg-black/30 transition-all duration-300 font-diatype font-semibold tracking-wide">
            <img 
              src={FiksFinalLogo} 
              alt="HookForge Logo" 
              className="w-6 h-6 rounded-md"
            />
            <span>HookForge</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/zarekvos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 p-2 rounded-lg transition-colors duration-300"
            >
              <XLogo size={20} />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="https://github.com/zarekvos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 p-2 rounded-lg transition-colors duration-300"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <motion.button
              onClick={() => navigate('/app')}
              className="px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 text-blue-400 hover:text-blue-300 hover:bg-black/30 transition-all duration-300 font-diatype font-semibold tracking-wide"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.2 }}
            >
              Launch App
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;