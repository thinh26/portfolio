import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import {
  languages,
  cookieName,
  headerName,
  PATH_LOCALE_MAP,
  DOMAIN_LOCALE_MAP,
} from "@/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sw_prod.js|sitemap.xml|robots.txt|opengraph-image.png|twitter-image.png|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  console.log(`pathname: ${pathname}`);
  const hostname = req.headers.get("host")?.split(":")[0];
  console.log(`hostName: ${hostname}`);

  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();

  // Legacy: All old Prefix-based routing (/en, /vi) redirect to new Domain-based routing (.com, .vn)
  const segments = pathname.split("/").filter(Boolean);
  const pathLocale = segments[0];
  console.log(`path locale: ${pathLocale}`);
  if (pathLocale && pathLocale in PATH_LOCALE_MAP) {
    const newDomain = PATH_LOCALE_MAP[pathLocale];
    const newPath = "/" + segments.slice(1).join("/");
    console.log(`new domain: ${newDomain}`);
    console.log(`new path: ${newPath}`);

    const redirectUrl = new URL(`${newPath || "/"}${search}`, newDomain);
    console.log(`redirect url: ${redirectUrl.toString()}`);

    return process.env.NODE_ENV === "production"
      ? NextResponse.redirect(redirectUrl, 301)
      : NextResponse.next();
  }

  // Domain-based locale resolution
  const locale =
    hostname && DOMAIN_LOCALE_MAP[hostname as keyof typeof DOMAIN_LOCALE_MAP];
  const headers = new Headers(req.headers);
  headers.set(headerName, locale ?? "");
  console.log(`domain based locale: ${locale}`);
  const response = NextResponse.next({ headers });
  response.cookies.set(cookieName, locale ?? "", {
    path: "/",
    httpOnly: false,
  });
  return response;
}
