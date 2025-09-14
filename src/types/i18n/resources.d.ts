import translation from "../../i18n/locales/en/translation.json";

declare global {
  type Resources = {
    translation: typeof translation;
  };
}
