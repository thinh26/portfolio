import { personalData } from "@/data/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "vi"];
  const baseUrl = personalData.url;
  const baseModifiedTime = "2025-10-21T07:45:48.030Z";
  const baseDate = new Date(baseModifiedTime);

  return locales.flatMap((locale, i) => {
    const newDate = new Date(baseDate.getTime() + i * 60 * 1000);
    const lastmod = newDate.toISOString();
    return [
      {
        url: `${baseUrl}/${locale}`,
        lastModified: lastmod,
        alternates: {
          languages: {
            en: `${baseUrl}/en`,
            vi: `${baseUrl}/vi`,
            "x-default": baseUrl,
          },
        },
      },
    ];
  });
}
