import { MetadataRoute } from "next";
import { parseISO, addMinutes, set } from "date-fns";
import { PATH_LOCALE_MAP } from "@/i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const domains = ["com", "vn"];
  const baseUrl = "https://www.thinh26";
  const baseModifiedTime = set(new Date(0), {
    date: 3,
    month: 0, // 1-12 is 0-11
    year: 2026,
    hours: 10,
    minutes: 40,
    seconds: 11,
  }).toISOString();
  const baseDate = parseISO(baseModifiedTime);

  return domains.flatMap((domain, i) => {
    const newDate = addMinutes(baseDate, i);
    const lastmod = newDate.toISOString();
    return [
      {
        url: `${baseUrl}.${domain}`,
        lastModified: lastmod,
        alternates: {
          languages: {
            ...PATH_LOCALE_MAP,
            "x-default": `${baseUrl}.${domain}`,
          },
        },
      },
    ];
  });
}
