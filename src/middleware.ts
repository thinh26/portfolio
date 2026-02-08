import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import {
  fallbackLng,
  languages,
  cookieName,
  headerName,
} from "@/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sw_prod.js|sitemap.xml|robots.txt|opengraph-image.png|twitter-image.png|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const origin = req.nextUrl.origin;
  console.log(origin);
  const isDev = process.env.NODE_ENV !== "production";

  if (pathname.includes("icon") || pathname.includes("chrome")) {
    return NextResponse.next();
  }

  const lngInPath = languages.find((l) => pathname.startsWith(`/${l}`));

  /* =====================================================
   * DEV ENV — đơn giản: chỉ cần lang trong path
   * ===================================================== */
  if (isDev) {
    const finalLang = lngInPath ?? fallbackLng;

    if (!lngInPath) {
      return NextResponse.rewrite(
        new URL(`/${finalLang}${pathname}${search}`, req.url),
      );
    }

    const headers = new Headers(req.headers);
    headers.set(headerName, finalLang);

    const res = NextResponse.next({ headers });
    res.cookies.set(cookieName, finalLang);
    return res;
  }

  /* =====================================================
   * PROD ENV — DOMAIN FIRST
   * ===================================================== */

  const isVN = origin.endsWith(".vn");
  const isCOM = origin.endsWith(".com");

  /* ---------- 1. REDIRECT (canonical domain) ---------- */

  // .vn chỉ cho vi
  if (isVN && lngInPath && lngInPath !== "vi") {
    return NextResponse.redirect(
      new URL(`${pathname.replace(`/${lngInPath}`, "")}${search}`, origin),
      301,
    );
  }

  // .com không cho /vi
  if (isCOM && pathname.startsWith("/vi")) {
    return NextResponse.redirect(
      new URL(`${pathname.replace("/vi", "")}${search}`, origin),
      301,
    );
  }

  /* ---------- 2. REWRITE (internal routing) ---------- */

  let rewriteUrl: URL | null = null;
  let finalLang: string;

  if (isVN) {
    finalLang = "vi";
    if (!pathname.startsWith("/vi")) {
      rewriteUrl = new URL(`/vi${pathname}${search}`, req.url);
    }
  } else {
    // .com
    finalLang =
      lngInPath ??
      acceptLanguage.get(req.cookies.get(cookieName)?.value) ??
      acceptLanguage.get(req.headers.get("Accept-Language")) ??
      fallbackLng;

    if (!lngInPath) {
      rewriteUrl = new URL(`/${finalLang}${pathname}${search}`, req.url);
    }
  }

  /* ---------- 3. SET HEADER + COOKIE (LAST STEP) ---------- */

  const headers = new Headers(req.headers);
  headers.set(headerName, finalLang);

  const res = rewriteUrl
    ? NextResponse.rewrite(rewriteUrl, { headers })
    : NextResponse.next({ headers });

  res.cookies.set(cookieName, finalLang);
  return res;
}
