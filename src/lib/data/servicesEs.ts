// Spanish service pages (collection `servicesEs`, src/content/services-es/).
// Each entry's `enSlug` points at its English service; the page URL is
// /es/servicios-veterinarios/<entry id>/ (the client's old Spanish URLs).
import { getCollection } from "astro:content";

export const ES_SERVICES_BASE = "/es/servicios-veterinarios";

export async function getAllServicesEs() {
  return getCollection("servicesEs");
}

/** English service id → Spanish entry id (only services that have a Spanish page). */
export async function getEsSlugMap(): Promise<Record<string, string>> {
  const all = await getAllServicesEs();
  return Object.fromEntries(all.map((s) => [s.data.enSlug, s.id]));
}
