"use client";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function ColorCard({ hex }: { hex: string }) {
  const { t } = useContext(LanguageContext);

  return (
    <Card className="my-4">
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
