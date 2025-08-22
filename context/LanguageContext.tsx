// LanguageContext.tsx
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getTranslation } from "@/translations";

const SUPPORTED_LANGUAGES = [
  "en",
  "vi",
  "zh",
  "fr",
  "de",
  "it",
  "ja",
  "ko",
  "pt",
  "ru",
  "es",
];

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode;
  initialLanguage?: string;
}) => {
  const [language, setLanguage] = useState<string>(initialLanguage);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");

    if (queryLang && SUPPORTED_LANGUAGES.includes(queryLang)) {
      setLanguage(queryLang);
      localStorage.setItem("language", queryLang);
    } else {
      const savedLanguage = localStorage.getItem("language");
      const selectedLanguage =
        savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)
          ? savedLanguage
          : initialLanguage;

      setLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);

      // 🚨 Fix: only redirect if NOT default language
      if (
        selectedLanguage !== initialLanguage &&
        (!queryLang || !SUPPORTED_LANGUAGES.includes(queryLang))
      ) {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", selectedLanguage);
        window.location.replace(url.toString());
      } else if (
        selectedLanguage === initialLanguage &&
        queryLang === initialLanguage
      ) {
        // Remove ?lang=en if it’s the default
        const url = new URL(window.location.href);
        url.searchParams.delete("lang");
        window.history.replaceState({}, "", url.toString()); // no redirect flash
      }
    }
  }, [initialLanguage]);

  const setLanguageAndSave = (lang: string) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);

      // 🚨 Fix: Don’t add ?lang=en for default language
      const url = new URL(window.location.href);
      if (lang === initialLanguage) {
        url.searchParams.delete("lang"); // ✅ removes ?lang=en
      } else {
        url.searchParams.set("lang", lang);
      }
      window.location.replace(url.toString());
    }
  };

  const t = (key: string): string => {
    return getTranslation(language, key) as string;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageAndSave, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
