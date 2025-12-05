import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validLanguages from "./languages";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const segments = url.pathname.split("/").filter(Boolean);
  const lang =
    segments[0] && validLanguages.includes(segments[0].toLowerCase())
      ? segments[0].toLowerCase()
      : null;

  // Determine the language to use
  let normalizedLang = lang || req.cookies.get("language")?.value || "en";
  normalizedLang = validLanguages.includes(normalizedLang.toLowerCase())
    ? normalizedLang.toLowerCase()
    : "en";

  console.log(
    "Middleware - Pathname:",
    url.pathname,
    "Extracted lang:",
    lang,
    "Normalized lang:",
    normalizedLang
  );

  // Set x-lang header for all responses
  const response = NextResponse.next();
  response.headers.set("x-lang", normalizedLang);

  // Handle legacy ?lang= query parameters
  if (url.searchParams.get("lang")) {
    const queryLang = url.searchParams.get("lang")?.toLowerCase();
    url.searchParams.delete("lang");
    if (queryLang && validLanguages.includes(queryLang)) {
      const newSegments = segments;
      if (queryLang !== "en") {
        if (!lang || lang !== queryLang) {
          newSegments.unshift(queryLang);
          const newUrl = `/${newSegments.join("/")}` || "/";
          return NextResponse.redirect(new URL(newUrl, req.url), 301);
        }
      } else if (lang === "en") {
        // Redirect /en/... to /... for ?lang=en
        const newSegments = segments.slice(1);
        const newUrl = `/${newSegments.join("/")}` || "/";
        return NextResponse.redirect(new URL(newUrl, req.url), 301);
      }
    }
    // If queryLang is invalid, proceed with normalizedLang
    return response;
  }

  // Redirect /en/... to /... for English
  if (lang === "en") {
    const newSegments = segments.slice(1);
    const newUrl = `/${newSegments.join("/")}` || "/";
    return NextResponse.redirect(new URL(newUrl, req.url), 301);
  }

  // Redirect non-language-prefixed routes to language-prefixed routes for non-English saved languages
  if (!lang && segments.length > 0 && normalizedLang !== "en") {
    const newUrl = `/${normalizedLang}/${segments.join("/")}`;
    return NextResponse.redirect(new URL(newUrl, req.url), 301);
  }

  // Handle root route (/)
  if (url.pathname === "/") {
    if (normalizedLang !== "en") {
      return NextResponse.redirect(new URL(`/${normalizedLang}`, req.url), 301);
    }
    // For / with English, set x-lang and proceed
    return response;
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.webp|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)",
  ],
};
