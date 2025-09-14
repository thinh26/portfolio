import { personalData } from "@/data/data";
import { Metadata } from "next";

export const websiteData = {
  title: "Duc Thinh | Software Developer",
  description: personalData.description,
  locale: "vi_VN",
  alternateLocale: ["en_US"],
} as const;

export const websiteMetadata: Metadata = {
  metadataBase: new URL(personalData.url),
  title: {
    default: websiteData.title,
    template: `%s | ${websiteData.title}`,
  },
  description: personalData.description,
  publisher: personalData.username,
  openGraph: {
    title: `${websiteData.title}`,
    description: personalData.description,
    url: personalData.url,
    siteName: `${personalData.username}`,
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
    title: `${websiteData.title}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};
