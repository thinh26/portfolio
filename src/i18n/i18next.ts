import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
// import LocizeBackend from 'i18next-locize-backend'
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLng, languages, defaultNS } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng: fallbackLng, // let detect the language on client side
    fallbackNS: defaultNS,
    defaultNS,
    preload: runsOnServerSide ? languages : [],
    react: {
      useSuspense: false,
    },
  });

export default i18next;
