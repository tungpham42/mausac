"use client";

import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import { Dropdown } from "react-bootstrap";
import validLanguages from "@/languages";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const setLanguageAndNavigate = (lang: string) => {
    setLanguage(lang);
    const segments = pathname.split("/").filter(Boolean);
    const currentLang =
      segments[0] && validLanguages.includes(segments[0]) ? segments[0] : null;

    if (currentLang) {
      segments[0] = lang === "en" ? "" : lang;
    } else {
      segments.unshift(lang === "en" ? "" : lang);
    }
    const newPath = `/${segments.filter(Boolean).join("/")}` || "/";
    router.push(newPath);
    setShow(false);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="d-flex justify-content-end mb-4">
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        <Dropdown.Toggle
          id="dropdown-lang"
          className="lang-toggle-btn d-flex align-items-center gap-2"
        >
          <span>{currentLang?.flag}</span>
          <span className="fw-bold">{currentLang?.label}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" className="lang-dropdown-menu">
          {languages.map((lang) => (
            <Dropdown.Item
              key={lang.code}
              active={language === lang.code}
              onClick={() => setLanguageAndNavigate(lang.code)}
              className="lang-dropdown-item d-flex align-items-center gap-2"
            >
              <span>{lang.flag}</span> {lang.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
