import { defineMiddleware } from "astro:middleware";
import { siteInfo } from "./data/site";

// Every external link opens in a new tab — site-wide, including links in
// content collections, set:html strings and data-driven hrefs (bookingUrl,
// ctaHref…), so nobody has to remember target="_blank" per link.
//
// Runs on every page at build time (static output) and in `astro dev`.
// "External" = an absolute http(s) or protocol-relative URL whose host is not
// this site's own (production domain, with or without www, or whatever host is
// serving the build: localhost, the workers.dev preview). tel:, mailto:, #
// and relative links are left alone. A link that already sets its own target
// is left alone too. rel gains "noopener noreferrer" if it lacks them.

const bare = (host: string) => host.toLowerCase().replace(/^www\./, "");
const siteHost = siteInfo.url ? bare(new URL(siteInfo.url).host) : "";

function isExternal(href: string, ownHost: string): boolean {
  if (!/^(https?:)?\/\//i.test(href)) return false;
  try {
    const host = bare(new URL(href, "https://x.invalid").host);
    return host !== siteHost && host !== ownHost;
  } catch {
    return false;
  }
}

function addNewTab(tag: string, ownHost: string): string {
  if (/\starget\s*=/i.test(tag)) return tag;
  const href = tag.match(/\shref\s*=\s*(["'])(.*?)\1/i)?.[2];
  if (!href || !isExternal(href.replace(/&amp;/g, "&"), ownHost)) return tag;

  let out = tag;
  const rel = out.match(/\srel\s*=\s*(["'])(.*?)\1/i);
  if (rel) {
    const tokens = new Set(rel[2].split(/\s+/).filter(Boolean));
    tokens.add("noopener");
    tokens.add("noreferrer");
    out = out.replace(rel[0], ` rel="${[...tokens].join(" ")}"`);
  } else {
    out = out.replace(/\s*\/?>$/, (end) => ` rel="noopener noreferrer"${end}`);
  }
  return out.replace(/\s*\/?>$/, (end) => ` target="_blank"${end}`);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!response.headers.get("content-type")?.includes("text/html")) return response;

  const ownHost = bare(context.url.host);
  const html = await response.text();
  const rewritten = html.replace(/<a\b[^>]*>/gi, (tag) => addNewTab(tag, ownHost));

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(rewritten, { status: response.status, statusText: response.statusText, headers });
});
