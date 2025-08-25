"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getTranslation } from "@/translations";
import validLanguages from "@/languages";

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
    const segments = window.location.pathname.split("/").filter(Boolean);
    const queryLang =
      segments[0] && validLanguages.includes(segments[0]) ? segments[0] : null;

    if (queryLang) {
      setLanguage(queryLang);
      localStorage.setItem("language", queryLang);
      document.documentElement.lang = queryLang; // Update HTML lang attribute
    } else {
      // No language subfolder → always English
      setLanguage("en");
      localStorage.setItem("language", "en");
      document.documentElement.lang = "en";
    }
  }, [initialLanguage]);

  const setLanguageAndSave = (lang: string) => {
    if (validLanguages.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang; // Update HTML lang attribute

      const url = new URL(window.location.href);
      const segments = url.pathname.split("/").filter(Boolean);
      const currentLang =
        segments[0] && validLanguages.includes(segments[0])
          ? segments[0]
          : null;

      if (lang === "en") {
        // English → remove subfolder completely
        if (currentLang) {
          segments.shift(); // remove first segment (the language)
        }
      } else {
        // Other languages → keep subfolder
        if (currentLang) {
          segments[0] = lang;
        } else {
          segments.unshift(lang);
        }
      }
      const newPath = `/${segments.filter(Boolean).join("/")}` || "/";
      url.pathname = newPath;
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
