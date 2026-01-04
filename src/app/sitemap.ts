import { MetadataRoute } from "next";
import { parseISO, addMinutes, set } from "date-fns";
import { PATH_LOCALE_MAP } from "@/i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const fallbackUrl = process.env.NEXT_PUBLIC_SITEMAP_FALLBACK_URL ?? "";
  const baseModifiedTime = set(new Date(0), {
    date: 4,
    month: 0, // 1-12 is 0-11
    year: 2026,
    hours: 10,
    minutes: 45,
    seconds: 33,
    milliseconds: 112,
  }).toISOString();
  const baseDate = parseISO(baseModifiedTime);
  const lastmod = baseDate.toISOString();

  return [
    {
      url: siteUrl,
      lastModified: lastmod,
      alternates: {
        languages: {
          ...PATH_LOCALE_MAP,
          "x-default": fallbackUrl,
        },
      },
    },
  ];
}
