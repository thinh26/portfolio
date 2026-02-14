import { defineRouting } from "next-intl/routing";
import { cookieName, fallbackLng, languages } from "./settings";

export const routing =
  process.env.NODE_ENV === "production"
    ? defineRouting({
        // A list of all locales that are supported
        locales: languages,
        domains: [
          {
            domain: "thinh26.com",
            defaultLocale: "en",
            locales: ["en"],
          },
          {
            domain: "thinh26.vn",
            defaultLocale: "vi",
            locales: ["vi"],
          },
          {
            domain: "beta.portfolio.thinh26.com",
            defaultLocale: "en",
            locales: ["en"],
          },
          {
            domain: "beta.portfolio.thinh26.vn",
            defaultLocale: "vi",
            locales: ["vi"],
          },
        ],

        localePrefix: {
          mode: "never",
        },
        localeCookie: {
          name: cookieName,
        },
        alternateLinks: false,
        // Used when no locale matches
        defaultLocale: fallbackLng,
      })
    : defineRouting({
        locales: languages,
        localePrefix: {
          mode: "as-needed",
        },
        localeCookie: {
          name: cookieName,
        },
        alternateLinks: false,
        // Used when no locale matches
        defaultLocale: fallbackLng,
      });
