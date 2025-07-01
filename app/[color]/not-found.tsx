"use client";

import ColorSearchForm from "@/components/ColorSearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function NotFound() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="not-found container my-4">
      <LanguageToggle />
      <h1 className="mb-4">
        <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
        {t("notFound.header")}
      </h1>
      <div className="not-found-content">
        <p>{t("notFound.errorMessage")}</p>
        <ColorSearchForm />
      </div>
    </div>
  );
}
