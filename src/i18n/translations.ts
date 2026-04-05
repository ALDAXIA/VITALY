export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navigation
    nav: {
      about: 'Acerca de',
      services: 'Servicios',
      pilates: 'Pilates',
      spa: 'Spa',
      gallery: 'Galería',
      contact: 'Contacto',
    },

    // Hero
    hero: {
      headline: 'Bienestar, Balance y Relajación',
      subheadline: 'Descubre un espacio dedicado a tu salud y bienestar en El Puerto de Santa María',
      bookSession: 'Reservar Sesión',
      exploreServices: 'Explorar Servicios',
      highlights: {
        spa: 'Spa y Relajación',
        pilates: 'Pilates y Movimiento',
        wellness: 'Tratamientos de Bienestar',
      },
    },

    // About
    about: {
      title: 'Acerca de VITALY',
      description: 'VITALY Piscina & Spa es un centro de bienestar dedicado a mejorar tu salud física y mental a través de Pilates, terapias de relajación y experiencias de spa premium.',
      mission: 'Nuestra misión es crear un ambiente tranquilo donde puedas reconectarte con tu cuerpo, reducir el estrés y mejorar tu calidad de vida.',
      values: {
        care: 'Atención Profesional',
        careDesc: 'Expertos certificados dedicados a tu bienestar',
        atmosphere: 'Ambiente Relajante',
        atmosphereDesc: 'Un espacio diseñado para la paz y la tranquilidad',
        attention: 'Atención Personalizada',
        attentionDesc: 'Servicios adaptados a tus necesidades individuales',
        wellness: 'Bienestar Integral',
        wellnessDesc: 'Enfoque holístico para tu salud total',
      },
    },

    // Services
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Descubre nuestras ofertas premium de bienestar',
      pilates: {
        name: 'Clases de Pilates',
        description: 'Sesiones de Pilates diseñadas para mejorar tu postura, fuerza y flexibilidad',
        cta: 'Reservar Pilates',
      },
      spa: {
        name: 'Spa y Relajación',
        description: 'Experiencias de spa transformadoras para tu cuerpo y mente',
        cta: 'Reservar Spa',
      },
      massage: {
        name: 'Masaje Terapéutico',
        description: 'Masajes profesionales para aliviar tensiones y promover la recuperación',
        cta: 'Reservar Masaje',
      },
      wellness: {
        name: 'Tratamientos de Bienestar',
        description: 'Tratamientos holísticos para tu salud integral y rejuvenecimiento',
        cta: 'Solicitar Información',
      },
      hydrotherapy: {
        name: 'Piscina de Hidroterapia',
        description: 'Terapia acuática relajante y terapéutica en nuestras instalaciones premium',
        cta: 'Explorar',
      },
      relaxation: {
        name: 'Circuitos de Relajación',
        description: 'Circuitos completos diseñados para tu relajación profunda y recuperación',
        cta: 'Reservar Circuito',
      },
    },

    // Pilates
    pilates: {
      title: 'Sesiones de',
      titleHighlight: 'Pilates',
      description: 'Transforma tu cuerpo y mente a través de la práctica del Pilates. Nuestros instructores expertos te guían a través de movimientos controlados que construyen fuerza, flexibilidad y conciencia corporal.',
      features: {
        group: 'Clases Grupales',
        groupDesc: 'Únete a sesiones dinámicas en nuestro espacioso estudio',
        personal: 'Entrenamiento Personal',
        personalDesc: 'Sesiones uno a uno adaptadas a tus objetivos',
        posture: 'Mejora de Postura',
        postureDesc: 'Alineación correcta y alivio del dolor crónico',
        strength: 'Fuerza y Flexibilidad',
        strengthDesc: 'Construye fuerza del núcleo e incrementa tu movilidad',
      },
      cta: 'Reservar Sesión de Pilates',
    },

    // Spa Experience
    spa: {
      title: 'La Experiencia',
      titleHighlight: 'Spa',
      subtitle: 'Un viaje sensorial hacia la relajación total',
      description: 'Sumérgete en nuestras instalaciones premium diseñadas para ofrecerte la máxima relajación y rejuvenecimiento.',
      features: {
        hydrotherapy: 'Piscina de Hidroterapia',
        hydrotherapyDesc: 'Agua terapéutica para la recuperación y relajación',
        relaxation: 'Áreas de Relajación',
        relaxationDesc: 'Espacios tranquilos diseñados para tu paz mental',
        massage: 'Salas de Masaje',
        massageDesc: 'Tratamientos profesionales con técnicas ancestrales',
        rituals: 'Rituales de Bienestar',
        ritualsDesc: 'Experiencias personalizadas para tu transformación',
      },
      cta: 'Reservar Experiencia de Spa',
    },

    // Gallery
    gallery: {
      title: 'Galería',
      subtitle: 'Descubre nuestros espacios de lujo',
    },

    // Instagram
    instagram: {
      title: 'Síguenos en Instagram',
      subtitle: 'Descubre momentos de bienestar, clases de Pilates y experiencias de spa',
      cta: 'Seguir en Instagram',
    },

    // Contact
    contact: {
      title: 'Reserva tu Sesión',
      subtitle: 'Completa el formulario para reservar tu cita o solicitar información',
      name: 'Nombre Completo',
      phone: 'Teléfono',
      email: 'Email',
      service: 'Servicio Interesado',
      selectService: 'Seleccionar servicio',
      date: 'Día Preferido',
      time: 'Hora Preferida',
      message: 'Mensaje (Opcional)',
      submit: 'Reservar Cita',
      successMessage: 'Tu reserva ha sido enviada correctamente. Nos pondremos en contacto pronto.',
    },

    // Location
    location: {
      title: 'Nuestra Ubicación',
      subtitle: 'Visítanos en El Puerto de Santa María, Cádiz',
      getDirections: 'Obtener Direcciones',
      address: 'Av. Río San Pedro, 14',
      city: '11500 El Puerto de Santa María, Cádiz, España',
    },

    // Footer
    footer: {
      company: 'VITALY Piscina & Spa',
      tagline: 'Tu destino de bienestar y relajación',
      address: 'Av. Río San Pedro, 14',
      city: 'El Puerto de Santa María, Cádiz, España',
      phone: 'Teléfono',
      hours: 'Horario de Atención',
      monday: 'Lunes - Viernes: 9:00 - 20:00',
      saturday: 'Sábado: 10:00 - 18:00',
      sunday: 'Domingo: Cerrado',
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados',
      design: 'Diseño y desarrollo',
      callUs: 'Llamar',
      whatsapp: 'WhatsApp',
      contact: 'Contacto',
    },

    // WhatsApp
    whatsapp: {
      message: 'Hola! Me gustaría obtener más información sobre los servicios de VITALY Piscina & Spa.',
    },
  },

  en: {
    // Navigation
    nav: {
      about: 'About',
      services: 'Services',
      pilates: 'Pilates',
      spa: 'Spa',
      gallery: 'Gallery',
      contact: 'Contact',
    },

    // Hero
    hero: {
      headline: 'Wellness, Balance and Relaxation',
      subheadline: 'Discover a space dedicated to your health and wellbeing in El Puerto de Santa María',
      bookSession: 'Book a Session',
      exploreServices: 'Explore Services',
      highlights: {
        spa: 'Spa & Relaxation',
        pilates: 'Pilates & Movement',
        wellness: 'Wellness Treatments',
      },
    },

    // About
    about: {
      title: 'About VITALY',
      description: 'VITALY Piscina & Spa is a wellness center dedicated to improving your physical and mental wellbeing through Pilates, relaxation therapies and premium spa experiences.',
      mission: 'Our mission is to create a peaceful environment where you can reconnect with your body, reduce stress and improve your quality of life.',
      values: {
        care: 'Professional Care',
        careDesc: 'Certified experts dedicated to your wellbeing',
        atmosphere: 'Relaxing Atmosphere',
        atmosphereDesc: 'A space designed for peace and tranquility',
        attention: 'Personalized Attention',
        attentionDesc: 'Services tailored to your individual needs',
        wellness: 'Holistic Wellness',
        wellnessDesc: 'Comprehensive approach to your total health',
      },
    },

    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Discover our premium wellness offerings',
      pilates: {
        name: 'Pilates Classes',
        description: 'Pilates sessions designed to improve your posture, strength and flexibility',
        cta: 'Book Pilates',
      },
      spa: {
        name: 'Spa & Relaxation',
        description: 'Transformative spa experiences for your body and mind',
        cta: 'Book Spa',
      },
      massage: {
        name: 'Therapeutic Massage',
        description: 'Professional massages to relieve tension and promote recovery',
        cta: 'Book Massage',
      },
      wellness: {
        name: 'Wellness Treatments',
        description: 'Holistic treatments for your integral health and rejuvenation',
        cta: 'Request Info',
      },
      hydrotherapy: {
        name: 'Hydrotherapy Pool',
        description: 'Relaxing and therapeutic aquatic therapy in our premium facilities',
        cta: 'Explore',
      },
      relaxation: {
        name: 'Relaxation Circuits',
        description: 'Complete circuits designed for your deep relaxation and recovery',
        cta: 'Book Circuit',
      },
    },

    // Pilates
    pilates: {
      title: 'Pilates',
      titleHighlight: 'Sessions',
      description: 'Transform your body and mind through the practice of Pilates. Our expert instructors guide you through controlled movements that build strength, flexibility, and body awareness.',
      features: {
        group: 'Group Classes',
        groupDesc: 'Join dynamic sessions in our spacious studio',
        personal: 'Personal Training',
        personalDesc: 'One-on-one sessions tailored to your goals',
        posture: 'Posture Improvement',
        postureDesc: 'Correct alignment and relief from chronic pain',
        strength: 'Strength & Flexibility',
        strengthDesc: 'Build core strength and increase your mobility',
      },
      cta: 'Book Your Pilates Session',
    },

    // Spa Experience
    spa: {
      title: 'The Spa',
      titleHighlight: 'Experience',
      subtitle: 'A sensory journey toward complete relaxation',
      description: 'Immerse yourself in our premium facilities designed to offer you ultimate relaxation and rejuvenation.',
      features: {
        hydrotherapy: 'Hydrotherapy Pool',
        hydrotherapyDesc: 'Therapeutic water for recovery and relaxation',
        relaxation: 'Relaxation Areas',
        relaxationDesc: 'Peaceful spaces designed for your mental peace',
        massage: 'Massage Rooms',
        massageDesc: 'Professional treatments with ancestral techniques',
        rituals: 'Wellness Rituals',
        ritualsDesc: 'Personalized experiences for your transformation',
      },
      cta: 'Book Your Spa Experience',
    },

    // Gallery
    gallery: {
      title: 'Gallery',
      subtitle: 'Discover our luxury spaces',
    },

    // Instagram
    instagram: {
      title: 'Follow us on Instagram',
      subtitle: 'Discover wellness moments, Pilates classes and spa experiences',
      cta: 'Follow on Instagram',
    },

    // Contact
    contact: {
      title: 'Book Your Session',
      subtitle: 'Complete the form to book your appointment or request information',
      name: 'Full Name',
      phone: 'Phone',
      email: 'Email',
      service: 'Service Interested In',
      selectService: 'Select a service',
      date: 'Preferred Day',
      time: 'Preferred Time',
      message: 'Message (Optional)',
      submit: 'Book Appointment',
      successMessage: 'Your booking has been sent successfully. We will contact you soon.',
    },

    // Location
    location: {
      title: 'Our Location',
      subtitle: 'Visit us in El Puerto de Santa María, Cádiz',
      getDirections: 'Get Directions',
      address: 'Av. Río San Pedro, 14',
      city: '11500 El Puerto de Santa María, Cádiz, Spain',
    },

    // Footer
    footer: {
      company: 'VITALY Piscina & Spa',
      tagline: 'Your destination for wellness and relaxation',
      address: 'Av. Río San Pedro, 14',
      city: 'El Puerto de Santa María, Cádiz, Spain',
      phone: 'Phone',
      hours: 'Opening Hours',
      monday: 'Monday - Friday: 9:00 - 20:00',
      saturday: 'Saturday: 10:00 - 18:00',
      sunday: 'Sunday: Closed',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
      design: 'Design and development',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      contact: 'Contact',
    },

    // WhatsApp
    whatsapp: {
      message: 'Hello! I would like to get more information about VITALY Piscina & Spa services.',
    },
  },
};
