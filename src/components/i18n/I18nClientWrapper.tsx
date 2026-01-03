"use client";
import i18next from "@/i18n/i18next";
import { I18nextProvider } from "react-i18next";

function I18nClientWrapper({
  language,
  children,
}: {
  language: string;
  children: React.ReactNode;
}) {
  if (i18next.language !== language) {
    i18next.changeLanguage(language);
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default I18nClientWrapper;
