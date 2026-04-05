import { Waves, Heart, Activity } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Wellness spa environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide animate-fade-in">
          {t('hero.headline')}
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-3xl mx-auto">
          {t('hero.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('hero.bookSession')}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
          >
            {t('hero.exploreServices')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Waves className="mx-auto mb-4 text-teal-300" size={40} />
            <h3 className="text-xl font-light mb-2">{t('hero.highlights.spa')}</h3>
            <p className="text-sm opacity-80">Immerse yourself in tranquility</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Activity className="mx-auto mb-4 text-teal-300" size={40} />
            <h3 className="text-xl font-light mb-2">{t('hero.highlights.pilates')}</h3>
            <p className="text-sm opacity-80">Strengthen body and mind</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Heart className="mx-auto mb-4 text-teal-300" size={40} />
            <h3 className="text-xl font-light mb-2">{t('hero.highlights.wellness')}</h3>
            <p className="text-sm opacity-80">Personalized care for you</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
