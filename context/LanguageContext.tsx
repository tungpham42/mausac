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
    } else {
      const savedLanguage = localStorage.getItem("language");
      const selectedLanguage =
        savedLanguage && validLanguages.includes(savedLanguage)
          ? savedLanguage
          : initialLanguage;

      setLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);

      if (selectedLanguage !== initialLanguage) {
        const url = new URL(window.location.href);
        url.pathname = `/${selectedLanguage}${url.pathname}`;
        window.location.replace(url.toString());
      } else if (
        selectedLanguage === initialLanguage &&
        queryLang === initialLanguage
      ) {
        const url = new URL(window.location.href);
        url.pathname = url.pathname.replace(/^\/en/, "");
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, [initialLanguage]);

  const setLanguageAndSave = (lang: string) => {
    if (validLanguages.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);

      const url = new URL(window.location.href);
      const segments = url.pathname.split("/").filter(Boolean);
      const currentLang =
        segments[0] && validLanguages.includes(segments[0])
          ? segments[0]
          : null;

      if (currentLang) {
        segments[0] = lang === "en" ? "" : lang;
      } else {
        segments.unshift(lang === "en" ? "" : lang);
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
