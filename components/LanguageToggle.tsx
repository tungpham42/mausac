"use client";

import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { LanguageContext } from "@/context/LanguageContext";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLanguageAndNavigate = (lang: string) => {
    setLanguage(lang);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("lang", lang);
    router.push(`${pathname}?lang=${lang}`);
  };

  return (
    <Container className="mb-4 d-flex justify-content-end gap-2">
      <Button
        variant={language === "en" ? "primary" : "outline-primary"}
        onClick={() => setLanguageAndNavigate("en")}
      >
        English
      </Button>
      <Button
        variant={language === "vi" ? "primary" : "outline-primary"}
        onClick={() => setLanguageAndNavigate("vi")}
      >
        Tiếng Việt
      </Button>
    </Container>
  );
}
