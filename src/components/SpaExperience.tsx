import { useTranslation } from '../i18n/useTranslation';

export default function SpaExperience() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="spa" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            {t('spa.title')} <span className="font-normal text-teal-600">{t('spa.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t('spa.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
            <img
              src="https://images.pexels.com/photos/3757959/pexels-photo-3757959.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hydrotherapy pool"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-light mb-2">{t('spa.features.hydrotherapy')}</h3>
              <p className="text-sm opacity-90">{t('spa.features.hydrotherapyDesc')}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-96">
            <img
              src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Relaxation areas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-light mb-2">{t('spa.features.relaxation')}</h3>
              <p className="text-sm opacity-90">{t('spa.features.relaxationDesc')}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-72">
            <img
              src="https://images.pexels.com/photos/3764544/pexels-photo-3764544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Massage rooms"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-light">{t('spa.features.massage')}</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-72">
            <img
              src="https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wellness rituals"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-light">{t('spa.features.rituals')}</h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-xl h-72">
            <img
              src="https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Treatment rooms"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-light">{t('spa.features.massage')}</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('spa.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
