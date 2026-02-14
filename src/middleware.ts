import { NextRequest, NextResponse } from "next/server";
import { PATH_LOCALE_MAP } from "./i18n/settings";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sw_prod.js|sitemap.xml|robots.txt|opengraph-image.png|twitter-image.png|site.webmanifest).*)",
  ],
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get("host")?.split(":")[0];

  const isDev = process.env.NODE_ENV !== "production";

  if (pathname.includes("icon") || pathname.includes("chrome")) {
    return NextResponse.next();
  }

  // Legacy: All old Prefix-based routing (/en, /vi) redirect to new Domain-based routing (.com, .vn)
  if (!isDev) {
    const segments = pathname.split("/").filter(Boolean);
    const pathLocale = segments[0];
    if (pathLocale && pathLocale in PATH_LOCALE_MAP) {
      const newDomain = PATH_LOCALE_MAP[pathLocale];
      const newPath = "/" + segments.slice(1).join("/");

      const redirectUrl = new URL(`${newPath || "/"}${search}`, newDomain);

      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  // Bring control back to next-intl
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
  return response;
}
