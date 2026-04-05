import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Visit <span className="font-normal text-teal-600">Our Center</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Located in the heart of El Puerto de Santa María, Cádiz
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.773726941!2d-6.231!3d36.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0ddf6b1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sAv.%20R%C3%ADo%20San%20Pedro%2C%2014%2C%2011500%20El%20Puerto%20de%20Santa%20Mar%C3%ADa%2C%20C%C3%A1diz%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VITALY Piscina & Spa Location"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-stone-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-teal-600" size={32} />
                <h3 className="text-2xl font-light text-stone-800">Our Address</h3>
              </div>
              <p className="text-stone-600 leading-relaxed mb-6">
                <strong className="block text-stone-800 mb-2">VITALY Piscina & Spa</strong>
                Av. Río San Pedro, 14<br />
                11500 El Puerto de Santa María<br />
                Cádiz, Spain
              </p>
              <a
                href="https://www.google.com/maps/dir//Av.+R%C3%ADo+San+Pedro,+14,+11500+El+Puerto+de+Santa+Mar%C3%ADa,+C%C3%A1diz,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all transform hover:scale-105"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-light mb-4">Easy to Find</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                We're conveniently located on Av. Río San Pedro, easily accessible by car or public transport. Free parking available for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
