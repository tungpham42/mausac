"use client";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hexToRgba } from "@/utils/colorUtils";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function ColorCard({ hex }: { hex: string }) {
  const { t } = useContext(LanguageContext);

  return (
    <Card
      className="my-4"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 6px 12px ${hexToRgba(hex, 0.5)}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.5)";
      }}
    >
      <Card.Header>
        <FontAwesomeIcon icon={faEye} className="me-2" />
        {t("colorCard.header")}
      </Card.Header>
      <Card.Body
        className="color-card-body"
        style={{
          backgroundColor: hex,
          height: "100px",
          borderTopLeftRadius: "0 !important",
          borderTopRightRadius: "0 !important",
          borderBottomLeftRadius: "8px !important",
          borderBottomRightRadius: "8px !important",
        }}
      />
    </Card>
  );
}
