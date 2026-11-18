// Homepage copy, English and Spanish (Clearview V3b, approved 2026-11-17).
// English = the prelaunch homepage copy; Spanish = its translation (the
// client's current /es/ homepage was the reference for terms like
// "Solicitud de Cita" and "Portal de Mascotas"). Google reviews are never
// translated — they render in the language they were written in.
//
// Service rows link to the service pages (old-site URLs; Spanish rows to the
// /es/servicios-veterinarios/ pages).
import type { Lang } from "./i18n";

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroLede: string;
  heroImageAlt: string;
  bookAppointment: string;
  call: string;
  since: string;
  hoursFallback: string;
  openUntil: (time: string) => string;
  closedNowOpensToday: (range: string) => string;
  closedTodayNext: (day: string, time: string) => string;
  quick: { tag: string; title: string; text: string; href: string; external?: boolean }[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutAccent: string;
  aboutText: string;
  aboutImageAlt: string;
  meetTeam: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesAccent: string;
  allServices: string;
  services: { title: string; text: string; href: string; image: "wellness" | "dental" | "surgery" | "urgent" }[];
  moreServices: string[];
  doctorEyebrow: string;
  doctorRole: string;
  doctorBio?: string; // Spanish only: the doctor's bio comes from the CMS in English
  headshotSoon: string;
  readBio: (shortName: string) => string;
  teamTitle: string;
  teamText: string;
  teamImageAlt: string;
  whyEyebrow: string;
  whyTitle: string;
  whyAccent: string;
  whyText: string;
  facts: { stat: string; title: string; text: string }[];
  reviewsEyebrow: string;
  reviewSource: string;
  erEyebrow: string;
  erTitle: string;
  erText: string;
  visitEyebrow: string;
  visitTitle: string;
  visitAccent: string;
  days: string[]; // Sunday first, like Date#getDay()
  closed: string;
  weekend: string;
  today: string;
  lunch: (range: string) => string;
  afterHours: string;
  bookNow: string;
  directions: string;
  mapTitle: string;
}

// Links from the client's current site (intake.json nav).
const PETPAGE = "https://practices.allydvm.com?practice=clearviewanimal";
const RX_REFILL = "https://practices.allydvm.com/product-request?practice=clearviewanimal";
const PHARMACY = "https://clearvieweasley.vetsfirstchoice.com/";

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    metaTitle: "Clearview Animal Hospital | Easley | Accepting New Patients",
    metaDescription:
      "Offering local, caring veterinary medicine to our neighbors in Easley and the surrounding area since 1958. Formerly owned and operated by Drs. Spearman and Furr, we faithfully served the people and pets in our community for decades!",
    heroEyebrow: "Easley, South Carolina",
    heroTitle: "Veterinary care,",
    heroAccent: "made easy.",
    heroLede: "The animal hospital with a heart for Easley and the Upstate.",
    heroImageAlt: "German shepherd smiling outdoors",
    bookAppointment: "Book an Appointment",
    call: "Call",
    since: "Since",
    hoursFallback: "Mon, Tue, Thu, Fri 9am–5pm · Wed 9am–1pm",
    openUntil: (time) => `Open now · until ${time} today`,
    closedNowOpensToday: (range) => `Closed right now · open ${range} today`,
    closedTodayNext: (day, time) => `Closed today · open ${day} ${time}`,
    quick: [
      { tag: "Book", title: "Request an Appointment", text: "Book online in minutes", href: "BOOKING" },
      { tag: "Records", title: "Pet Records", text: "Through the PetPage portal", href: PETPAGE, external: true },
      { tag: "Refills", title: "Rx Refill Request", text: "Refills without a phone call", href: RX_REFILL, external: true },
      { tag: "Shop", title: "Online Pharmacy", text: "Food and meds delivered", href: PHARMACY, external: true },
    ],
    aboutEyebrow: "About Us",
    aboutTitle: "Your neighborhood animal hospital",
    aboutAccent: "since 1958",
    aboutText:
      "Clearview Animal Hospital has cared for pets and their families in Easley since 1958. Today Dr. Aimee Seguin and her team carry that tradition forward, pairing compassionate, personal attention with the medical and surgical care your pet needs close to home. We focus on four-legged friends: if they have fur, we’re here to help.",
    aboutImageAlt: "Labrador and tabby cat resting in the grass",
    meetTeam: "Meet the Team",
    servicesEyebrow: "Our Services",
    servicesTitle: "Everything your pet needs,",
    servicesAccent: "under one roof",
    allServices: "All Services",
    services: [
      { title: "Wellness & Preventive Care", text: "Annual exams, bloodwork, fecal and heartworm testing, and vaccines matched to your pet’s lifestyle.", href: "/services/wellness", image: "wellness" },
      { title: "Dental Cleaning", text: "Cleanings and extractions to keep your pet comfortable.", href: "/services/dental", image: "dental" },
      { title: "Surgery", text: "Soft tissue and orthopedic procedures, close to home.", href: "/services/surgical", image: "surgery" },
      { title: "Urgent Care", text: "Same-day visits during business hours when your pet can’t wait.", href: "/services/emergency", image: "urgent" },
    ],
    moreServices: ["In-house laboratory", "Ultrasound", "Microchipping", "Pet nutrition", "Pet pharmacy", "End of life care"],
    doctorEyebrow: "Meet the Doctor",
    doctorRole: "Veterinarian",
    headshotSoon: "Headshot coming soon",
    readBio: (shortName) => `Read ${shortName}’s Bio`,
    teamTitle: "And the whole Clearview crew",
    teamText: "Meet the people who care for your pet every day.",
    teamImageAlt: "The Clearview Animal Hospital team in red scrubs outside the hospital",
    whyEyebrow: "Why Choose Us",
    whyTitle: "More of the care your pet needs,",
    whyAccent: "close to home",
    whyText:
      "From urgent care when your pet needs to be seen quickly to dental care, ultrasound and orthopedic procedures, our team offers more of the care your pet needs without a long drive. We take time to listen, explain your options clearly and build a plan around what you know about your pet.",
    facts: [
      { stat: "1958", title: "Rooted in Easley", text: "Caring for local pets for generations." },
      { stat: "Same day", title: "Urgent care access", text: "When your pet can’t wait." },
      { stat: "In house", title: "Lab & ultrasound", text: "Answers without a second trip." },
      { stat: "Pay later", title: "Cherry & CareCredit", text: "Help with vet bills when you need it." },
    ],
    reviewsEyebrow: "Reviews",
    reviewSource: "Google review",
    // After-hours emergencies: the current site's homepage section (#emergency),
    // its text word for word (2026-11-18).
    erEyebrow: "Emergencies",
    erTitle: "After Hours Emergencies",
    erText: "If you’re having an emergency after hours, we recommend these emergency centers.",
    visitEyebrow: "Visit",
    visitTitle: "Come see us",
    visitAccent: "in Easley",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    closed: "Closed",
    weekend: "Saturday–Sunday",
    today: "today",
    lunch: (range) => `Closed ${range} for lunch.`,
    afterHours: "After hours: Veterinary Emergency Group or FETCH, Greenville.",
    bookNow: "Book Now",
    directions: "Get Directions",
    mapTitle: "Map to Clearview Animal Hospital",
  },
  es: {
    metaTitle: "Hospital de Animales Clearview | Easley | Aceptamos Nuevos Pacientes",
    metaDescription:
      "Atención veterinaria cercana y compasiva para nuestros vecinos de Easley y sus alrededores desde 1958. Bienestar, odontología, cirugía, laboratorio en casa, ultrasonido y cuidado urgente.",
    heroEyebrow: "Easley, Carolina del Sur",
    heroTitle: "Atención veterinaria,",
    heroAccent: "sin complicaciones.",
    heroLede: "El hospital de animales con corazón para Easley y toda la región.",
    heroImageAlt: "Pastor alemán sonriendo al aire libre",
    bookAppointment: "Solicitar una Cita",
    call: "Llamar al",
    since: "Desde",
    hoursFallback: "Lun, Mar, Jue, Vie 9am–5pm · Mié 9am–1pm",
    openUntil: (time) => `Abierto ahora · hasta las ${time}`,
    closedNowOpensToday: (range) => `Cerrado en este momento · hoy de ${range}`,
    closedTodayNext: (day, time) => `Cerrado hoy · abrimos el ${day} a las ${time}`,
    quick: [
      { tag: "Citas", title: "Solicitud de Cita", text: "Agende en línea en minutos", href: "BOOKING" },
      { tag: "Historial", title: "Portal de Mascotas", text: "A través del portal PetPage", href: PETPAGE, external: true },
      { tag: "Recetas", title: "Resurtido de Recetas", text: "Sin necesidad de llamar", href: RX_REFILL, external: true },
      { tag: "Tienda", title: "Farmacia en Línea", text: "Alimento y medicamentos a domicilio", href: PHARMACY, external: true },
    ],
    aboutEyebrow: "Sobre Nosotros",
    aboutTitle: "Su hospital de animales de confianza",
    aboutAccent: "desde 1958",
    aboutText:
      "El Hospital de Animales Clearview cuida a las mascotas y a sus familias en Easley desde 1958. Hoy, la Dra. Aimee Seguin y su equipo continúan esa tradición, combinando una atención personal y compasiva con el cuidado médico y quirúrgico que su mascota necesita, cerca de casa. Nos enfocamos en los amigos de cuatro patas: si tienen pelo, estamos aquí para ayudar.",
    aboutImageAlt: "Labrador y gato atigrado descansando en el pasto",
    meetTeam: "Conoce a Nuestro Equipo",
    servicesEyebrow: "Nuestros Servicios",
    servicesTitle: "Todo lo que su mascota necesita,",
    servicesAccent: "en un solo lugar",
    allServices: "Todos los Servicios",
    services: [
      { title: "Bienestar y Medicina Preventiva", text: "Exámenes anuales, análisis de sangre, pruebas de heces y de gusano del corazón, y vacunas según el estilo de vida de su mascota.", href: "/es/servicios-veterinarios/bienestar-y-medicina-preventiva/", image: "wellness" },
      { title: "Limpieza Dental", text: "Limpiezas y extracciones para mantener a su mascota cómoda.", href: "/es/servicios-veterinarios/limpieza-dental-extracciones-dentales/", image: "dental" },
      { title: "Cirugía", text: "Procedimientos de tejidos blandos y ortopédicos, cerca de casa.", href: "/es/servicios-veterinarios/procedimientos-quirurgicos/", image: "surgery" },
      { title: "Cuidado Urgente", text: "Citas el mismo día, en horario de atención, cuando su mascota no puede esperar.", href: "/es/servicios-veterinarios/emergencias-cuidado-urgente/", image: "urgent" },
    ],
    moreServices: ["Laboratorio en casa", "Ultrasonido", "Microchip", "Nutrición para mascotas", "Farmacia veterinaria", "Cuidado al final de la vida"],
    doctorEyebrow: "Conozca a la Doctora",
    doctorRole: "Veterinaria",
    doctorBio:
      "<p>La Dra. Aimee Seguin es la veterinaria del Hospital de Animales Clearview en Easley, SC. Junto a su equipo brinda atención personal y compasiva a perros, gatos y otros miembros peludos de la familia en toda la región, desde consultas de bienestar y odontología hasta cirugía y cuidado urgente.</p>",
    headshotSoon: "Foto próximamente",
    readBio: (shortName) => `Leer la Biografía de la ${shortName.replace(/^Dr\./, "Dra.")}`,
    teamTitle: "Y todo el equipo de Clearview",
    teamText: "Conozca a las personas que cuidan a su mascota todos los días.",
    teamImageAlt: "El equipo del Hospital de Animales Clearview con uniformes rojos afuera del hospital",
    whyEyebrow: "Por Qué Elegirnos",
    whyTitle: "Más de la atención que su mascota necesita,",
    whyAccent: "cerca de casa",
    whyText:
      "Desde cuidado urgente cuando su mascota necesita ser atendida rápido hasta cuidado dental, ultrasonido y procedimientos ortopédicos, nuestro equipo ofrece más de la atención que su mascota necesita sin tener que manejar lejos. Nos tomamos el tiempo de escuchar, explicarle sus opciones con claridad y crear un plan basado en lo que usted conoce de su mascota.",
    facts: [
      { stat: "1958", title: "Raíces en Easley", text: "Cuidando a las mascotas locales por generaciones." },
      { stat: "Mismo día", title: "Acceso a cuidado urgente", text: "Cuando su mascota no puede esperar." },
      { stat: "En casa", title: "Laboratorio y ultrasonido", text: "Respuestas sin una segunda visita." },
      { stat: "Pague después", title: "Cherry y CareCredit", text: "Ayuda con los gastos veterinarios cuando la necesite." },
    ],
    reviewsEyebrow: "Reseñas",
    reviewSource: "Reseña de Google",
    erEyebrow: "Emergencias",
    erTitle: "Emergencias fuera de horario",
    erText: "Si tiene una emergencia fuera del horario de atención, le recomendamos estos centros de emergencia. Durante el horario comercial habitual, estaremos encantados de ver a su mascota por una emergencia o necesidad de atención urgente, llámenos al (864) 442-6192.",
    visitEyebrow: "Visítenos",
    visitTitle: "Venga a vernos",
    visitAccent: "en Easley",
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    closed: "Cerrado",
    weekend: "Sábado–Domingo",
    today: "hoy",
    lunch: (range) => `Cerrado de ${range} para almorzar.`,
    afterHours: "Fuera de horario: Veterinary Emergency Group o FETCH, Greenville.",
    bookNow: "Agendar Cita",
    directions: "Cómo Llegar",
    mapTitle: "Mapa al Hospital de Animales Clearview",
  },
};
