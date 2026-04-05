import { Activity, Waves, Hand, Sparkles, Droplets, Heart } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Activity,
      titleKey: 'services.pilates.name',
      descKey: 'services.pilates.description',
      image: 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Waves,
      titleKey: 'services.spa.name',
      descKey: 'services.spa.description',
      image: 'https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Hand,
      titleKey: 'services.massage.name',
      descKey: 'services.massage.description',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Sparkles,
      titleKey: 'services.wellness.name',
      descKey: 'services.wellness.description',
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Droplets,
      titleKey: 'services.hydrotherapy.name',
      descKey: 'services.hydrotherapy.description',
      image: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      titleKey: 'services.relaxation.name',
      descKey: 'services.relaxation.description',
      image: 'https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            {t('services.title')} <span className="font-normal text-teal-600">{t('services.title').split(' ')[1]}</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-stone-800 mb-3">{t(service.titleKey)}</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">{t(service.descKey)}</p>
                  <button
                    onClick={scrollToContact}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors inline-flex items-center gap-2 group/btn"
                  >
                    Book Now
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
