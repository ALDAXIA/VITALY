import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { Language } from '../i18n/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-light tracking-wider text-stone-800">
              VITALY <span className="font-normal">Piscina & Spa</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('about')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('pilates')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.pilates')}
            </button>
            <button onClick={() => scrollToSection('spa')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.spa')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.gallery')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-teal-600 transition-colors">
              {t('nav.contact')}
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-stone-200">
              <button
                onClick={toggleLanguage}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'es'
                    ? 'text-teal-600 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                ES
              </button>
              <span className="text-stone-300">/</span>
              <button
                onClick={toggleLanguage}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'text-teal-600 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+34956569023" className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all">
              <Phone size={18} />
              <span>+34 956 56 90 23</span>
            </a>
          </div>

          <button
            className="md:hidden text-stone-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('pilates')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.pilates')}
            </button>
            <button onClick={() => scrollToSection('spa')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.spa')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.gallery')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-stone-600 hover:text-teal-600">
              {t('nav.contact')}
            </button>
            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded transition-colors ${
                  language === 'es'
                    ? 'text-teal-600 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                ES
              </button>
              <span className="text-stone-300">/</span>
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded transition-colors ${
                  language === 'en'
                    ? 'text-teal-600 font-medium'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                EN
              </button>
            </div>
            <a href="tel:+34956569023" className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full mt-4">
              <Phone size={18} />
              <span>+34 956 56 90 23</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
