import { Header } from '../components/header';
import { default as Footer } from '../components/footer';
import AsciiNoise from '../lib/asciinoise/asciinoise';
import MainApp from '../App';

const AppPage = () => {
  return (
    <>
      <AsciiNoise />
      <Header />
      <MainApp />
      <Footer />
    </>
  );
};

export default AppPage;