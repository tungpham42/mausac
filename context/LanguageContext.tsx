"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getTranslation } from "@/translations";

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");

    if (queryLang) {
      setLanguage(queryLang);
      localStorage.setItem("language", queryLang);
    } else {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const setLanguageAndSave = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
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
