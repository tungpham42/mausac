"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getTranslation } from "@/translations";

// Define supported languages (adjust as per your app's needs)
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
]; // Example: Vietnamese and English

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

  // Initialize language on mount and ensure 'lang' query string
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");

    // Prioritize query string 'lang'
    if (queryLang && SUPPORTED_LANGUAGES.includes(queryLang)) {
      setLanguage(queryLang);
      localStorage.setItem("language", queryLang);
    } else {
      // Fallback to localStorage or initialLanguage
      const savedLanguage = localStorage.getItem("language");
      const selectedLanguage =
        savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)
          ? savedLanguage
          : initialLanguage;
      setLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);

      // Redirect to include 'lang' query string if missing or invalid
      if (!queryLang || !SUPPORTED_LANGUAGES.includes(queryLang)) {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", selectedLanguage);
        window.location.replace(url.toString());
      }
    }
  }, [initialLanguage]);

  // Handle language change and update localStorage and URL
  const setLanguageAndSave = (lang: string) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      // Update URL query string with redirect
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.location.replace(url.toString());
    }
  };

  // Translation function
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
