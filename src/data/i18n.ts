// English / Spanish (2026-11-17). The site is bilingual like the client's
// current site: English at "/", Spanish under "/es/". Each Spanish page is
// its own URL (good for search), and the header's EN/ES switch links a page
// to its counterpart. Pages say which counterpart they have through
// BaseLayout's `altLangPath`; without one, the switch goes to the other
// language's homepage.
//
// UI strings shared by the chrome (header, footer) live here. Page copy
// lives with its page (e.g. src/data/home-copy.ts).

export type Lang = "en" | "es";

export const ES_BASE = "/es";

/** The current page's path in each language, and whether they are real counterparts. */
export function langAlternates(lang: Lang, pathname: string, altLangPath?: string) {
  const here = pathname || "/";
  if (lang === "es") return { es: here, en: altLangPath ?? "/", linked: !!altLangPath };
  return { en: here, es: altLangPath ?? `${ES_BASE}/`, linked: !!altLangPath };
}

/** Where each shared link goes in each language. Spanish entries fall back to
 *  the English page until a Spanish version exists. */
export const routes = {
  en: { services: "/services", contact: "/contact-us", team: "/meet-the-team", payment: "/payment-plans", events: "/events", privacy: "/privacy-policy" },
  es: { services: "/es/servicios-veterinarios/", contact: "/es/contacto/", team: "/es/staff/", payment: "/es/opciones-de-pago/", events: "/events", privacy: "/es/poliza-de-privacidad/" },
} as const;

/** External links from the client's current site. */
export const PHARMACY_URL = "https://clearvieweasley.vetsfirstchoice.com/";
// AllyDVM PetPage links (same as the current site's buttons).
export const PET_RECORDS_URL = "https://practices.allydvm.com?practice=clearviewanimal";
export const RX_REFILL_URL = "https://practices.allydvm.com/product-request?practice=clearviewanimal";
export const PETPAGE_APP_URL = "https://www.allydvm.com/solutions/petpage-patient-portal/mobile-app";

export const ui = {
  en: {
    home: "/",
    about: "About",
    meetTeam: "Meet the Team",
    gallery: "Photo Gallery",
    howdWeDo: "How'd We Do?",
    services: "Services",
    allServices: "All Services",
    forPetOwners: "For Pet Owners",
    faq: "FAQs",
    forms: "Forms",
    blog: "Our Blog",
    contact: "Contact",
    events: "Events",
    pharmacy: "Pharmacy",
    paymentPlans: "Payment Plans",
    petRecords: "Pet Records",
    acceptingPatients: "Accepting New Patients",
    sameDay: "Same Day Appointments Available",
    rxRefill: "Rx Refill Request",
    petPageApp: "PetPage App",
    menu: "Menu",
    language: "Language",
    callUs: "Call us at",
    bookNow: "Book Now",
    footerHours: "Hours",
    footerContact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  es: {
    home: "/es/",
    about: "Nosotros",
    meetTeam: "Conoce a Nuestro Equipo",
    gallery: "Galería de Fotos",
    howdWeDo: "¿Cómo lo Hicimos?",
    services: "Servicios",
    allServices: "Todos los Servicios",
    forPetOwners: "Para Dueños de Mascotas",
    faq: "Preguntas Frecuentes",
    forms: "Formularios",
    blog: "Nuestro Blog",
    contact: "Contacto",
    events: "Eventos",
    pharmacy: "Farmacia",
    paymentPlans: "Opciones de Pago",
    petRecords: "Portal de Mascotas",
    acceptingPatients: "Aceptamos Nuevos Pacientes",
    sameDay: "Citas Disponibles para el Mismo Día",
    rxRefill: "Resurtido de Recetas",
    petPageApp: "App PetPage",
    menu: "Menú",
    language: "Idioma",
    callUs: "Llámenos al",
    bookNow: "Agendar Cita",
    footerHours: "Horario",
    footerContact: "Contacto",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
  },
} as const;

/** Spanish names for the service categories (ids from src/content/service-categories/). */
export const serviceCategoryEs: Record<string, string> = {
  wellness: "Bienestar y Medicina Preventiva",
  dental: "Cuidado Dental",
  surgery: "Cirugía",
  diagnostics: "Diagnóstico",
  "urgent-emergency": "Cuidado Urgente y de Emergencia",
  pharmacy: "Farmacia",
  "end-of-life": "Cuidado al Final de la Vida",
  specialty: "Servicios Especializados",
};
