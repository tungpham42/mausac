"use client";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeDropper, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function ToolsDropdown() {
  const { t, language } = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  return (
    <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
      <Dropdown.Toggle
        variant="outline-primary"
        id="tools-dropdown"
        className="lang-toggle-btn d-flex align-items-center gap-2"
      >
        <FontAwesomeIcon icon={faPalette} className="globe-icon" />
        <span className="fw-bold">{t("tools.toolsLabel")}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="lang-dropdown-menu">
        <Dropdown.Item
          as={Link}
          href={language === "en" ? "/" : `/${language}`}
          className="lang-dropdown-item d-flex align-items-center gap-2"
        >
          <FontAwesomeIcon icon={faEyeDropper} />
          {t("tools.colorPicker")}
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          href={language === "en" ? "/color-mixer" : `/${language}/color-mixer`}
          className="lang-dropdown-item d-flex align-items-center gap-2"
        >
          <FontAwesomeIcon icon={faPalette} />
          {t("tools.colorMixer")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
