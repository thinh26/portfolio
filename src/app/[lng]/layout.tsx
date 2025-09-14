import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { websiteData, websiteMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import ServiceWorker from "@/components/ServiceWorker";
import { languages } from "@/i18n/settings";
import { getT } from "@/i18n";
import { personalData } from "@/data/data";
import i18next from "i18next";

const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT();
  return {
    metadataBase: new URL(personalData.url),
    alternates: {
      canonical: `${personalData.url}/en`,
      languages: {
        en: `${personalData.url}/en`,
        vi: `${personalData.url}/vi`,
        "x-default": `${personalData.url}`,
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
        url: personalData.url,
        app_name: "Google Chrome",
        package: "com.android.chrome",
      },
      ios: {
        url: personalData.url,
        app_name: "Google Chrome",
        app_store_id: 535886823,
      },
      web: {
        url: personalData.url,
        should_fallback: true,
      },
    },
    openGraph: {
      title: t("websiteData.title"),
      description: t("description"),
      url: personalData.url,
      siteName: t("websiteData.title"),
      locale: websiteData.locale,
      alternateLocale: [...websiteData.alternateLocale],
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
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content={i18next.language} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ServiceWorker>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              {children}
              <Toaster position="top-right" />
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </ServiceWorker>
      </body>
    </html>
  );
}
