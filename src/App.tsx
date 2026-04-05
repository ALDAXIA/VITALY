import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pilates from './components/Pilates';
import SpaExperience from './components/SpaExperience';
import Gallery from './components/Gallery';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Pilates />
        <SpaExperience />
        <Gallery />
        <Instagram />
        <Contact />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
