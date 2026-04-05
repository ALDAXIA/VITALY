import { Instagram as InstagramIcon } from 'lucide-react';

export default function Instagram() {
  const instagramPosts = [
    'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3764544/pexels-photo-3764544.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Follow Us on <span className="font-normal text-teal-600">Instagram</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
            Join our community and stay inspired with wellness tips, class updates, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/vitalyspa.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/vitalyspa.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <InstagramIcon size={24} />
            Follow @vitalyspa.es
          </a>
        </div>
      </div>
    </section>
  );
}
