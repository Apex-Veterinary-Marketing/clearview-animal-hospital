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
    forms: "New Patient Forms",
    blog: "Our Blog",
    contact: "Contact",
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
    forms: "Formularios para Nuevos Pacientes",
    blog: "Nuestro Blog",
    contact: "Contacto",
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
