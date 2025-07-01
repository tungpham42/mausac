"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getTranslation } from "@/translations";

// Define supported languages (adjust as per your app's needs)
const SUPPORTED_LANGUAGES = ["vi", "en"]; // Example: Vietnamese and English

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({
  children,
  initialLanguage = "vi",
}: {
  children: ReactNode;
  initialLanguage?: string;
}) => {
  const [language, setLanguage] = useState<string>(initialLanguage);

  // Initialize language on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");

    // Prioritize query string 'lang'
    if (queryLang && SUPPORTED_LANGUAGES.includes(queryLang)) {
      setLanguage(queryLang);
      localStorage.setItem("language", queryLang);
    } else {
      // Fallback to localStorage if no valid query string
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        // Default to initialLanguage if no valid saved language
        setLanguage(initialLanguage);
        localStorage.setItem("language", initialLanguage);
      }
    }
  }, [initialLanguage]);

  // Handle language change and update localStorage and URL
  const setLanguageAndSave = (lang: string) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      // Update URL query string without reloading
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
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
