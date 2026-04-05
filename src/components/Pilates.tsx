import { Users, User, TrendingUp, Zap } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Pilates() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pilates" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilates session"
                className="rounded-2xl shadow-lg h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilates practice"
                className="rounded-2xl shadow-lg h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilates equipment"
                className="rounded-2xl shadow-lg h-64 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pilates instructor"
                className="rounded-2xl shadow-lg h-64 object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              {t('pilates.title')} <span className="font-normal text-teal-600">{t('pilates.titleHighlight')}</span>
            </h2>
            <div className="w-20 h-1 bg-teal-600 mb-8"></div>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              {t('pilates.description')}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Users className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-1">{t('pilates.features.group')}</h3>
                  <p className="text-stone-600">{t('pilates.features.groupDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <User className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-1">{t('pilates.features.personal')}</h3>
                  <p className="text-stone-600">{t('pilates.features.personalDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <TrendingUp className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-1">{t('pilates.features.posture')}</h3>
                  <p className="text-stone-600">{t('pilates.features.postureDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-full p-3">
                  <Zap className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-1">{t('pilates.features.strength')}</h3>
                  <p className="text-stone-600">{t('pilates.features.strengthDesc')}</p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('pilates.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
