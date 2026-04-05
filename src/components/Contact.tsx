import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDateTime: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola VITALY! Me gustaría reservar:\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nServicio: ${formData.service}\nFecha/Hora preferida: ${formData.preferredDateTime}\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/34956569023?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Get in <span className="font-normal text-teal-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to begin your wellness journey? Book your appointment today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-stone-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-700 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 mb-2 font-medium">Service Interested In</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Pilates Classes">Pilates Classes</option>
                  <option value="Spa & Relaxation">Spa & Relaxation</option>
                  <option value="Therapeutic Massage">Therapeutic Massage</option>
                  <option value="Wellness Treatments">Wellness Treatments</option>
                  <option value="Hydrotherapy Pool">Hydrotherapy Pool</option>
                  <option value="Relaxation Circuits">Relaxation Circuits</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 mb-2 font-medium">Preferred Day/Time</label>
                <input
                  type="text"
                  value={formData.preferredDateTime}
                  onChange={(e) => setFormData({ ...formData, preferredDateTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="e.g., Monday morning, Friday afternoon"
                />
              </div>

              <div>
                <label className="block text-stone-700 mb-2 font-medium">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Book Appointment via WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a href="tel:+34956569023" className="flex items-start gap-4 group">
                  <div className="bg-teal-100 rounded-full p-3 group-hover:bg-teal-600 transition-colors">
                    <Phone className="text-teal-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Phone</p>
                    <p className="text-lg text-stone-800 group-hover:text-teal-600 transition-colors">+34 956 56 90 23</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 rounded-full p-3">
                    <Mail className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Email</p>
                    <p className="text-lg text-stone-800">info@vitalyspa.es</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 rounded-full p-3">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-1">Address</p>
                    <p className="text-lg text-stone-800">
                      Av. Río San Pedro, 14<br />
                      11500 El Puerto de Santa María<br />
                      Cádiz, Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-light mb-4">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
