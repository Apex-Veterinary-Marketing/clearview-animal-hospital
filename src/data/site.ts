// Site-wide config — NOT a content collection. Webflow models this as two
// CMS collections (Practice Information, Practice Social Links) but both
// are effectively singletons, not repeatable content. See
// Skeleton-Build-Spec.md §4.2. Per-client values get filled in here (or in
// a sibling .json this module imports) during client intake.
//
// NOTE (2026-09-08): direct social-profile links used to live here as a
// plain array (`socialLinks`). They're now their own real content
// collection (src/content/social-links/, accessed via
// getAllSocialLinks()) so each platform's icon renders from the inline-SVG
// library in src/lib/icons/social.ts instead of a name string — see
// content.config.ts. googleReviewsLink/facebookReviewsLink/yelpReviewLink
// below are a different thing (review-platform CTA links used by
// ReputationWidget), unaffected by that move.

export interface SiteInfo {
  practiceName: string;
  // The number SHOWN everywhere. Every tel: link dials callTrackingNumber when
  // set, else this — always build links with phoneHref() from
  // src/lib/utils/phone.ts, never by hand (check:links enforces one number).
  phoneNumber?: string;
  callTrackingNumber?: string; // e.g. "+18635914728" — dialed, never displayed
  email?: string;
  address?: string; // street line — see showStreetAddress
  addressLine2?: string; // "City, ST 00000"
  addressLocality?: string; // city, for the schema PostalAddress
  addressRegion?: string; // state, e.g. "FL"
  postalCode?: string;
  addressLink?: string;
  // Publish the street address? Defaults to true, or to FALSE when mobileVet
  // is true (a mobile/home-based business usually works from a private home).
  // When false, getSiteInfo() drops address, addressLink and mapEmbedLink, so
  // no component, page or schema node can leak it; city/ZIP stay.
  // Confirm with the client at intake — never publish a home address by default.
  showStreetAddress?: boolean;
  mobileVet?: boolean;
  serviceAreaOfCoverage?: string; // comma-separated cities; becomes schema areaServed
  // Primary booking action — every "book" CTA (header button, service pages'
  // closing block, CTA bands) reads these instead of hard-coding a route.
  bookingUrl?: string;
  bookingLabel?: string;
  businessDescription?: string; // one or two plain sentences for the schema Business node
  // Machine-readable hours for schema (hours above is display HTML), e.g.
  // [{ dayOfWeek: ["Monday","Tuesday"], opens: "08:00", closes: "18:00" }]
  openingHoursSpecification?: { dayOfWeek: string[]; opens: string; closes: string }[];
  hours?: string; // rich text/HTML — formatted hours table, not a plain string
  afterHours?: string; // rich text/HTML
  hoursEs?: string; // Spanish versions for the /es/ pages (bilingual site)
  afterHoursEs?: string;
  mapEmbedLink?: string;
  googleReviewsLink?: string;
  facebookReviewsLink?: string;
  yelpReviewLink?: string;
  googleRating?: number; // static fallback shown until googleWidgetId is configured
  googleReviewCount?: number;
  logoColor?: string; // asset path
  logoWhite?: string; // asset path
  footerAbout?: string; // ~160-char practice blurb, Footer's About Us column
  cityState?: string; // "[CITY, ST]" display string
  googleWidgetId?: string;
  // UserWay accessibility-widget account id. Optional override only — leave
  // unset to use the agency's own company-wide account (E6izlREqK3, baked
  // into AccessibilityWidget.astro as the default); set this only if a
  // specific client needs their own separate UserWay account.
  userwayAccountId?: string;
  url?: string; // site's canonical origin, e.g. "https://example.com" — the SINGLE
  // place the domain is configured. astro.config.mjs imports this file directly
  // and sets Astro's `site` from this field, so canonical URLs, OG/Twitter tags,
  // and the sitemap all derive from it automatically — never hard-code the
  // domain anywhere else. MUST be the real production domain (no trailing
  // slash) before launch, or canonical/sitemap URLs will point at the
  // placeholder below.
  // Schema.org @type for the site-wide Business node (see Skeleton-Build-Spec.md
  // §9/§14 item 8). Set it from intake — defaults to "VeterinaryCare", but a
  // non-clinic client (trainer, groomer, boarding) is NOT VeterinaryCare:
  // use e.g. ["LocalBusiness", "ProfessionalService"]. A mobile business
  // also sets mobileVet + serviceAreaOfCoverage (→ areaServed).
  businessSchemaType?: string | string[];
}

// Clearview Animal Hospital — from client-docs/intake.json and the current
// site (clearvieweasley.com), prelaunch sequence 2026-11-16.
export const siteInfo: SiteInfo = {
  practiceName: "Clearview Animal Hospital",
  phoneNumber: "(864) 442-6192",
  callTrackingNumber: "+18644473520", // 2026-11-19 Twilio: every tel: link dials this; (864) 442-6192 stays the number shown
  email: "hello@clearvieweasley.com",
  address: "6714 Calhoun Memorial Hwy",
  addressLine2: "Easley, SC 29640",
  addressLocality: "Easley",
  addressRegion: "SC",
  postalCode: "29640",
  addressLink:
    "https://www.google.com/maps/dir//6714+Calhoun+Memorial+Hwy,+Easley,+SC+29640",
  mapEmbedLink:
    "https://www.google.com/maps?q=Clearview+Animal+Hospital,+6714+Calhoun+Memorial+Hwy,+Easley,+SC+29640&hl=en&output=embed",
  showStreetAddress: true,
  // AllyDVM online booking (current site's "Book Now With Us").
  bookingUrl: "https://practices.allydvm.com/online-booking?practice=clearviewanimal",
  bookingLabel: "Book Now",
  cityState: "Easley, SC",
  // Onboarding form: where patients come from (→ schema areaServed).
  serviceAreaOfCoverage: "Easley, Pickens, Clemson, Liberty, Greenville",
  // Hours confirmed by the client's onboarding form (2026-11-24): Mon, Tue, Thu,
  // Fri 9–5, Wed 9–1, Sun closed. Pastel 4wq5nl74 #1 (2026-11-25): no lunch
  // closure, and open two Saturdays a month (call for hours) — those Saturdays
  // vary, so they stay out of openingHoursSpecification (schema + "Open now").
  hours:
    "<p>Mon, Tue, Thu, Fri: 9am&ndash;5pm<br>Wed: 9am&ndash;1pm<br>Sat: Two Saturdays a month, call for hours<br>Sun: Closed</p>",
  openingHoursSpecification: [
    { dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    { dayOfWeek: ["Wednesday"], opens: "09:00", closes: "13:00" },
  ],
  afterHours:
    '<p>During business hours, call us at (864) 442-6192 for urgent care. After hours, please contact <a href="https://veterinaryemergencygroup.com/lp/greenville/">Veterinary Emergency Group (Greenville)</a>, <a href="https://fetchvets.com/greenville-sc/">FETCH Greenville</a> or <a href="https://upstatevet.com/">Upstate Veterinary Specialists</a>.</p>',
  hoursEs:
    "<p>Lun, Mar, Jue, Vie: 9am&ndash;5pm<br>Mié: 9am&ndash;1pm<br>Sáb: Dos sábados al mes, llame para conocer el horario<br>Dom: Cerrado</p>",
  afterHoursEs:
    '<p>En horario de atención, llámenos al (864) 442-6192 para cuidado urgente. Fuera de horario, comuníquese con <a href="https://veterinaryemergencygroup.com/lp/greenville/">Veterinary Emergency Group (Greenville)</a>, <a href="https://fetchvets.com/greenville-sc/">FETCH Greenville</a> o <a href="https://upstatevet.com/">Upstate Veterinary Specialists</a>.</p>',
  businessDescription:
    "Clearview Animal Hospital is a full-service veterinary hospital in Easley, SC, across from Home Depot, caring for pets from Easley, Pickens, Clemson, Liberty and Greenville since 1958. We offer same-day appointments, urgent care, dental care, surgery, an in-house laboratory and digital radiology, with payment plans through Cherry and CareCredit.",
  // 156 characters.
  footerAbout:
    "Clearview Animal Hospital offers compassionate, personal veterinary care for dogs, cats and other furry family members in Easley, SC and across the Upstate.",
  // Google Place ID (from the Maps listing's feature id, 2026-11-18): drives
  // the agency review widget — live rating + count in ReviewsBand.
  googleWidgetId: "ChIJw3t4kdFJWIgRpvSaE7EcfaA",
  googleReviewsLink: "https://g.page/r/Cab0mhOxHH2gEBM/review",
  facebookReviewsLink: "https://www.facebook.com/clearviewanimalhospitalSC/reviews",
  // No Yelp profile; no static googleRating/googleReviewCount — the widget
  // loads the live numbers.
  url: "https://clearvieweasley.com", // apex is canonical (GitHub Pages custom domain; www 301s to it)
  // Logo from the current site (PNG, 1200x304). logo-white.png = the same file
  // with the grey artwork turned white for dark backgrounds (footer). Swap in
  // vector (SVG) versions if the client has them.
  logoWhite: "/logo-white.png",
  logoColor: "/logo-color.png",
};
