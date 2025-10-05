import { Header } from '../components/header';
import { default as Footer } from '../components/footer';
import AsciiNoise from '../lib/asciinoise/asciinoise';
import MainApp from '../App';
import { ArrowLeft } from 'lucide-react';

interface AppPageProps {
  navigate?: (path: string) => void;
}

const AppPage = ({ navigate }: AppPageProps) => {
  return (
    <>
      <AsciiNoise />
      {/* Professional Navigation */}
      {navigate && (
        <div className="fixed top-3 left-6 z-[9999]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 px-2 py-2 text-blue-400 hover:text-blue-300 transition-all duration-300 font-mono text-sm tracking-wide"
            >
              <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform duration-200" />
              <span className="font-medium">HOMEPAGE</span>
            </button>
          </div>
        </div>
      )}
      <Header />
      <MainApp />
      <Footer />
    </>
  );
};

export default AppPage;