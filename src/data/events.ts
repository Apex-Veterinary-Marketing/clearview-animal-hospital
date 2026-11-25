// Events for /events (Pastel 4wq5nl74 #9, 2026-11-25): each event moves from
// "Upcoming Events" to "Past Events" on its own once it has ended. The split
// happens at build time and again in the visitor's browser, so an event moves
// even if the site hasn't been rebuilt since.
//
// To add an event, add an entry here (newest dates can go anywhere; the page
// sorts them). Times are Easley (Eastern) time, 24-hour "HH:MM".
import type { ImageMetadata } from "astro";
import houndsAndHoses from "../assets/pages/hounds-and-hoses.jpg";

export type ClinicEvent = {
  title: string;
  subtitle?: string;
  date: string; // "YYYY-MM-DD"
  start?: string; // "HH:MM"
  end?: string; // "HH:MM"; without it the event counts as past the day after
  location?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  paragraphs: string[];
};

export const events: ClinicEvent[] = [
  {
    title: "Hounds and Hoses",
    subtitle: "Canine Vaccination & Microchip Clinic",
    date: "2026-09-26",
    start: "09:00",
    end: "12:00",
    location: "Pickens Fire Department",
    image: houndsAndHoses,
    imageAlt: "Hounds and Hoses flyer: a cartoon firefighter with two dogs and free pup cups",
    paragraphs: [
      "Clearview Animal Hospital with the Pickens Fire Department is offering our community a low-cost canine vaccine and microchip clinic! Come by and get a free pup cup, and keep your dogs safe and vaccinated!",
      "We will be at 302 Johnson Street in Pickens, and advance registration is not required. Walk Ups welcome! (This event is for dogs only, and they must remain leashed at all times. While supplies last.)",
    ],
  },
];

/** UTC offset of America/New_York on a given date ("-04:00" or "-05:00"). */
function easternOffset(date: string): string {
  const noon = new Date(`${date}T12:00:00Z`);
  const name = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", timeZoneName: "shortOffset" })
    .formatToParts(noon).find((p) => p.type === "timeZoneName")?.value ?? "GMT-5";
  const h = Number(name.replace("GMT", "")) || -5;
  return `${h < 0 ? "-" : "+"}${String(Math.abs(h)).padStart(2, "0")}:00`;
}

/** The moment the event is over, as an ISO string with the Eastern offset. */
export function eventEnds(e: ClinicEvent): string {
  if (e.end) return `${e.date}T${e.end}:00${easternOffset(e.date)}`;
  const next = new Date(`${e.date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + 1);
  const d = next.toISOString().slice(0, 10);
  return `${d}T00:00:00${easternOffset(d)}`;
}

const fmtTime = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, "0")}` : ""}${h < 12 ? "AM" : "PM"}`;
};

/** "Saturday, September 26, 2026, 9AM - 12PM" (the old page's format). */
export function eventWhen(e: ClinicEvent): string {
  const day = new Date(`${e.date}T12:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric" });
  if (!e.start) return day;
  return `${day}, ${fmtTime(e.start)}${e.end ? ` - ${fmtTime(e.end)}` : ""}`;
}
