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
  sealCta: string;
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
  // href "TEL" = the practice's call link (phoneHref), for Same-Day Appointments.
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
  /** Part 1 (red band): "Emergencies" — business-hours line (phone gets linked) + emergency line. */
  erTitle: string;
  erHoursBefore: string;
  erLine: string;
  /** Part 2 (navy band): after-hours partner ERs. */
  erAfterTitle: string;
  erAfterText: string;
  visitEyebrow: string;
  visitTitle: string;
  visitAccent: string;
  days: string[]; // Sunday first, like Date#getDay()
  closed: string;
  weekend: string;
  saturdayValue: string;
  saturdayPill: string;
  today: string;
  lunch: (range: string) => string;
  saturdays: string;
  afterHours: string;
  bookNow: string;
  directions: string;
  mapTitle: string;
}

// Links from the client's current site (intake.json nav).
const PETPAGE = "https://practices.allydvm.com?practice=clearviewanimal";
const RX_REFILL = "https://practices.allydvm.com/product-request?practice=clearviewanimal";
const PHARMACY = "https://clearvieweasley.covetruspharmacy.com/";

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    metaTitle: "Clearview Animal Hospital | Easley | Accepting New Patients",
    metaDescription:
      "Offering local, caring veterinary medicine to our neighbors in Easley and the surrounding area since 1958. Formerly owned and operated by Drs. Spearman and Furr, we faithfully served the people and pets in our community for decades!",
    heroEyebrow: "Easley, South Carolina",
    heroTitle: "Veterinary care,",
    heroAccent: "made easy.",
    heroLede: "The animal hospital with a heart for Easley and the Upstate—here for everything from routine Wellness Visits to same-day Urgent Care appointments.",
    heroImageAlt: "German shepherd smiling outdoors",
    bookAppointment: "Book an Appointment",
    call: "Call",
    since: "Since",
    // Pastel 4wq5nl74 #5: the hero seal is now a call button.
    sealCta: "Click here for an urgent care appointment immediately",
    hoursFallback: "Mon, Tue, Thu, Fri 9am–5pm · Wed 9am–1pm",
    openUntil: (time) => `Open now · until ${time} today`,
    closedNowOpensToday: (range) => `Closed right now · open ${range} today`,
    closedTodayNext: (day, time) => `Closed today · open ${day} ${time}`,
    quick: [
      { tag: "Book", title: "Request an Appointment", text: "Book online in minutes", href: "BOOKING" },
      { tag: "Records", title: "Pet Records", text: "Through the PetPage portal", href: PETPAGE, external: true },
      { tag: "Refills", title: "Rx Refill Request", text: "Refills without a phone call", href: RX_REFILL, external: true },
      { tag: "Shop", title: "Online Pharmacy", text: "Food and meds delivered", href: PHARMACY, external: true },
      { tag: "Urgent", title: "Emergencies", text: "What to do and where to go", href: "#emergency" },
    ],
    aboutEyebrow: "About Us",
    aboutTitle: "Your neighborhood animal hospital",
    aboutAccent: "since 2022",
    aboutText:
      "Clearview Animal Hospital has cared for pets and their families in Easley since 1958. Today Dr. Aimee Seguin and her team carry that tradition forward, pairing compassionate, personal attention with the medical and surgical care your pet needs close to home. We focus on four-legged friends: if they have fur, we’re here to help.",
    aboutImageAlt: "Labrador and tabby cat resting in the grass",
    meetTeam: "Meet the Team",
    servicesEyebrow: "Our Services",
    servicesTitle: "Everything your pet needs,",
    servicesAccent: "under one roof",
    allServices: "All Services",
    // Top three services from the client's onboarding form (2026-11-24):
    // same-day access appointments, dental services, urgent care.
    services: [
      { title: "Same-Day Appointments", text: "Sick or not quite right? Call us and we’ll do our best to see your pet the same day.", href: "TEL", image: "wellness" },
      { title: "Dental Care", text: "Teeth cleaning, dental X-rays, extractions and dental surgery for a healthier mouth.", href: "/services-categories/dental", image: "dental" },
      { title: "Urgent Care", text: "When your pet can’t wait, we fit in urgent cases during business hours.", href: "/services/emergency", image: "urgent" },
    ],
    moreServices: ["Physical exams", "Vaccinations", "In-house laboratory", "Digital radiology", "Surgery", "Orthopedics", "Dermatology", "Allergy testing"],
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
      { stat: "2022", title: "Rooted in Easley", text: "Caring for local pets and their families." },
      { stat: "Same day", title: "Urgent care access", text: "When your pet can’t wait." },
      { stat: "In house", title: "Lab & ultrasound", text: "Answers without a second trip." },
      { stat: "Pay later", title: "Cherry & CareCredit", text: "Help with vet bills when you need it." },
    ],
    reviewsEyebrow: "Reviews",
    reviewSource: "Google review",
    // After-hours emergencies: the current site's homepage section (#emergency),
    // its text word for word (2026-11-18).
    erTitle: "Emergencies",
    erHoursBefore: "During regular business hours, please contact us immediately for a same day or urgent care appointment.",
    erLine: "If your pet is experiencing a medical emergency after hours, don’t delay, please call for immediate assistance or proceed to the nearest veterinary emergency center.",
    erAfterTitle: "After Hours Emergencies",
    erAfterText: "If you’re having an emergency after hours, we recommend these emergency centers.",
    visitEyebrow: "Visit",
    visitTitle: "Come see us",
    visitAccent: "in Easley",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    closed: "Closed",
    weekend: "Saturday–Sunday",
    saturdayValue: "Call for hours",
    saturdayPill: "Open two Saturdays a month · call for hours",
    today: "today",
    lunch: (range) => `Closed ${range} for lunch.`,
    saturdays: "Open two Saturdays of the month. Call for hours.",
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
    heroLede: "El hospital de animales con corazón para Easley y toda la región, aquí para todo, desde Visitas de Bienestar de rutina hasta citas de Atención Urgente el mismo día.",
    heroImageAlt: "Pastor alemán sonriendo al aire libre",
    bookAppointment: "Solicitar una Cita",
    call: "Llamar al",
    since: "Desde",
    sealCta: "Haga clic aquí para una cita de atención urgente de inmediato",
    hoursFallback: "Lun, Mar, Jue, Vie 9am–5pm · Mié 9am–1pm",
    openUntil: (time) => `Abierto ahora · hasta las ${time}`,
    closedNowOpensToday: (range) => `Cerrado en este momento · hoy de ${range}`,
    closedTodayNext: (day, time) => `Cerrado hoy · abrimos el ${day} a las ${time}`,
    quick: [
      { tag: "Citas", title: "Solicitud de Cita", text: "Agende en línea en minutos", href: "BOOKING" },
      { tag: "Historial", title: "Portal de Mascotas", text: "A través del portal PetPage", href: PETPAGE, external: true },
      { tag: "Recetas", title: "Resurtido de Recetas", text: "Sin necesidad de llamar", href: RX_REFILL, external: true },
      { tag: "Tienda", title: "Farmacia en Línea", text: "Alimento y medicamentos a domicilio", href: PHARMACY, external: true },
      { tag: "Urgente", title: "Emergencias", text: "Qué hacer y a dónde ir", href: "#emergency" },
    ],
    aboutEyebrow: "Sobre Nosotros",
    aboutTitle: "Su hospital de animales de confianza",
    aboutAccent: "desde 2022",
    aboutText:
      "El Hospital de Animales Clearview cuida a las mascotas y a sus familias en Easley desde 1958. Hoy, la Dra. Aimee Seguin y su equipo continúan esa tradición, combinando una atención personal y compasiva con el cuidado médico y quirúrgico que su mascota necesita, cerca de casa. Nos enfocamos en los amigos de cuatro patas: si tienen pelo, estamos aquí para ayudar.",
    aboutImageAlt: "Labrador y gato atigrado descansando en el pasto",
    meetTeam: "Conoce a Nuestro Equipo",
    servicesEyebrow: "Nuestros Servicios",
    servicesTitle: "Todo lo que su mascota necesita,",
    servicesAccent: "en un solo lugar",
    allServices: "Todos los Servicios",
    services: [
      { title: "Citas el Mismo Día", text: "¿Su mascota está enferma o no se siente bien? Llámenos y haremos lo posible por atenderla el mismo día.", href: "TEL", image: "wellness" },
      { title: "Cuidado Dental", text: "Limpieza dental, radiografías dentales, extracciones y cirugía dental para una boca más sana.", href: "/es/servicios-veterinarios/limpieza-dental-extracciones-dentales/", image: "dental" },
      { title: "Cuidado Urgente", text: "Cuando su mascota no puede esperar, atendemos casos urgentes en horario de atención.", href: "/es/servicios-veterinarios/emergencias-cuidado-urgente/", image: "urgent" },
    ],
    moreServices: ["Exámenes físicos", "Vacunas", "Laboratorio en casa", "Radiología digital", "Cirugía", "Ortopedia", "Dermatología", "Pruebas de alergia"],
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
      { stat: "2022", title: "Raíces en Easley", text: "Cuidando a las mascotas locales y a sus familias." },
      { stat: "Mismo día", title: "Acceso a cuidado urgente", text: "Cuando su mascota no puede esperar." },
      { stat: "En casa", title: "Laboratorio y ultrasonido", text: "Respuestas sin una segunda visita." },
      { stat: "Pague después", title: "Cherry y CareCredit", text: "Ayuda con los gastos veterinarios cuando la necesite." },
    ],
    reviewsEyebrow: "Reseñas",
    reviewSource: "Reseña de Google",
    erTitle: "Emergencias",
    erHoursBefore: "Durante el horario de atención, comuníquese con nosotros de inmediato para una cita el mismo día o de atención urgente:",
    erLine: "Si su mascota tiene una emergencia médica fuera de horario, no tarde en llamar para obtener asistencia inmediata o diríjase al centro de emergencia veterinario más cercano.",
    erAfterTitle: "Emergencias fuera de horario",
    erAfterText: "Si tiene una emergencia fuera del horario de atención, le recomendamos estos centros de emergencia.",
    visitEyebrow: "Visítenos",
    visitTitle: "Venga a vernos",
    visitAccent: "en Easley",
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    closed: "Cerrado",
    weekend: "Sábado–Domingo",
    saturdayValue: "Llame para el horario",
    saturdayPill: "Abrimos dos sábados al mes · llame para el horario",
    today: "hoy",
    lunch: (range) => `Cerrado de ${range} para almorzar.`,
    saturdays: "Abrimos dos sábados al mes. Llame para conocer el horario.",
    afterHours: "Fuera de horario: Veterinary Emergency Group o FETCH, Greenville.",
    bookNow: "Agendar Cita",
    directions: "Cómo Llegar",
    mapTitle: "Mapa al Hospital de Animales Clearview",
  },
};
