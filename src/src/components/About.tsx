import { Sparkles, Users, Leaf, Shield } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              {t('about.title').split(' ')[0]} <span className="font-normal text-teal-600">{t('about.title').split(' ')[1]}</span>
            </h2>
            <div className="w-20 h-1 bg-teal-600 mb-8"></div>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              {t('about.mission')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Sparkles className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">{t('about.values.care')}</h3>
                  <p className="text-sm text-stone-600">{t('about.values.careDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">{t('about.values.atmosphere')}</h3>
                  <p className="text-sm text-stone-600">{t('about.values.atmosphereDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">{t('about.values.attention')}</h3>
                  <p className="text-sm text-stone-600">{t('about.values.attentionDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">{t('about.values.wellness')}</h3>
                  <p className="text-sm text-stone-600">{t('about.values.wellnessDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness center interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-3xl font-light mb-2">Your wellness journey starts here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
