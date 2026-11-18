// Live Google rating from the agency's review widget service
// (vetmarketing.googlewidget.com, keyed by a Google Business Profile / Place
// id = site.googleWidgetId). The service returns a small HTML snippet; only
// the rating and review count are read out of it, in an inert <template>,
// never injected into the page. Browser-only (used from component scripts).
// Shared by ReviewsBand and the homepage reviews section.
export interface GoogleRating {
  rating: number;
  count?: string; // as the service formats it, e.g. "218" or "1,204"
}

export async function fetchGoogleRating(placeId: string): Promise<GoogleRating> {
  const res = await fetch(`https://vetmarketing.googlewidget.com/api/reviews/${encodeURIComponent(placeId)}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const tpl = document.createElement("template");
  tpl.innerHTML = await res.text();
  const text = (tpl.content.textContent || "").replace(/\s+/g, " ");
  const rating = parseFloat(text.match(/\d(?:\.\d)?/)?.[0] || "");
  const count = tpl.content.querySelector(".g-footer-number")?.textContent?.match(/[\d,]+/)?.[0]
    ?? text.match(/([\d,]+)\s*reviews?/i)?.[1];
  if (!(rating > 0 && rating <= 5)) throw new Error("No rating in widget response");
  return { rating, count };
}
