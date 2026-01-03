import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ServiceWorker from "@/components/ServiceWorker";
import { DOMAIN_LOCALE_MAP, languages, PATH_LOCALE_MAP } from "@/i18n/settings";
import { getT } from "@/i18n";
import { personalData } from "@/data/data";
import { cookies, headers } from "next/headers";
import I18nClientWrapper from "@/components/i18n/I18nClientWrapper";

const fontSans = Bai_Jamjuree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT();
  const hostname = headers().get("host")?.split(":").at(0);

  return {
    metadataBase: new URL(`https://${hostname}`),
    alternates: {
      canonical: `https://${hostname}`,
      languages: {
        ...PATH_LOCALE_MAP,
        "x-default": `https://${hostname}`,
      },
    },
    title: {
      default: t("websiteData.title"),
      template: `$s | ${t("websiteData.title")}`,
    },
    description: t("description"),
    creator: t("personalData.name.full"),
    authors: [
      {
        name: t("personalData.name.full"),
      },
    ],
    publisher: t("personalData.name.full"),
    generator: "Web framework",
    appleWebApp: true,
    appLinks: {
      android: {
        url: `https://${hostname}`,
        app_name: "Google Chrome",
        package: "com.android.chrome",
      },
      ios: {
        url: `https://${hostname}`,
        app_name: "Google Chrome",
        app_store_id: 535886823,
      },
      web: {
        url: `https://${hostname}`,
        should_fallback: true,
      },
    },
    openGraph: {
      title: t("websiteData.title"),
      description: t("description"),
      url: `https://${hostname}`,
      siteName: t("websiteData.title"),
      locale: DOMAIN_LOCALE_MAP[hostname ?? ""] === "en" ? "en_US" : "vi_VN",
      alternateLocale:
        DOMAIN_LOCALE_MAP[hostname ?? ""] === "en" ? ["vi_VN"] : ["en_US"],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("websiteData.title"),
      description: t("description"),
      creator: `@${personalData.username}`,
      creatorId: "3221138588",
      site: `@${personalData.username}`,
      siteId: "3221138588",
    },
    verification: {
      google: "",
      yandex: "",
    },
    // other: {
    //   "geo.region": "VN",
    //   "geo.placename": "Nha Trang",
    //   "geo.position": "12.239318;109.197091",
    //   ICBM: "12.239318, 109.197091",
    // },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lng: string;
  }>;
}>) {
  const hostname = headers().get("host")?.split(":").at(0);
  const language = DOMAIN_LOCALE_MAP[hostname ?? ""];
  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content={language} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ServiceWorker>
          <I18nClientWrapper language={language}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider delayDuration={0}>
                {children}
                <Toaster position="top-right" />
                <Navbar />
              </TooltipProvider>
            </ThemeProvider>
          </I18nClientWrapper>
        </ServiceWorker>
      </body>
    </html>
  );
}
