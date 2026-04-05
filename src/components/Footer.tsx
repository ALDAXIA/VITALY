import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light text-white mb-4">
              VITALY <span className="font-normal">Piscina & Spa</span>
            </h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Your wellness sanctuary in El Puerto de Santa María. Dedicated to your health, balance, and relaxation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vitalyspa.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-stone-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pilates')} className="hover:text-teal-400 transition-colors">
                  Pilates
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('spa')} className="hover:text-teal-400 transition-colors">
                  Spa Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-teal-400 transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-teal-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <a href="tel:+34956569023" className="hover:text-teal-400 transition-colors">
                  +34 956 56 90 23
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@vitalyspa.es" className="hover:text-teal-400 transition-colors">
                  info@vitalyspa.es
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <span>
                  Av. Río San Pedro, 14<br />
                  11500 El Puerto de Santa María<br />
                  Cádiz, Spain
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white">Monday - Friday</p>
                  <p className="text-stone-400 text-sm">9:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white">Saturday</p>
                  <p className="text-stone-400 text-sm">10:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white">Sunday</p>
                  <p className="text-stone-400 text-sm">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              &copy; {currentYear} VITALY Piscina & Spa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
