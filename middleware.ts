import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validLanguages from "./languages";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const segments = url.pathname.split("/").filter(Boolean);
  const lang =
    segments[0] && validLanguages.includes(segments[0]) ? segments[0] : null;

  // Handle legacy ?lang= query parameters
  if (url.searchParams.get("lang")) {
    const queryLang = url.searchParams.get("lang");
    url.searchParams.delete("lang");
    if (queryLang && validLanguages.includes(queryLang)) {
      const newSegments = segments;
      if (queryLang !== "en") {
        newSegments.unshift(queryLang);
      }
      const newUrl = `/${newSegments.join("/")}` || "/";
      return NextResponse.redirect(new URL(newUrl, req.url), 301);
    }
  }

  // Redirect to language-prefixed route if no language segment and a saved non-English language exists
  if (!lang && segments.length > 0) {
    const savedLanguage = req.cookies.get("language")?.value || "en";
    if (validLanguages.includes(savedLanguage) && savedLanguage !== "en") {
      const newUrl = `/${savedLanguage}/${segments.join("/")}`;
      return NextResponse.redirect(new URL(newUrl, req.url), 301);
    }
  }

  // Redirect /en/... to /... for English
  if (lang === "en") {
    const newSegments = segments.slice(1);
    const newUrl = `/${newSegments.join("/")}` || "/";
    return NextResponse.redirect(new URL(newUrl, req.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
