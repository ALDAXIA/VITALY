import { useTranslation } from '../i18n/useTranslation';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spa environment',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pilates class'
  },
  {
    src: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pool area'
  },
  {
    src: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Massage therapy'
  },
  {
    src: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Relaxation room'
  },
  {
    src: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pilates session',
    span: 'md:col-span-2'
  },
  {
    src: 'https://images.pexels.com/photos/3764544/pexels-photo-3764544.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Treatment room'
  },
  {
    src: 'https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spa facilities'
  }
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            {t('gallery.title')} <span className="font-normal text-teal-600">{t('gallery.title')}</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${image.span || ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
