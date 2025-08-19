"use client";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

type Props = {
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
    cmyk: string;
  };
};

export default function ColorFormats({ formats }: Props) {
  const { t } = useContext(LanguageContext);

  return (
    <Card className="mb-5">
      <Card.Header>
        <FontAwesomeIcon icon={faList} className="me-2" />
        {t("colorFormats.header")}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {t("colorFormats.hex")}:{" "}
          <span className="color-code">{formats.hex}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          {t("colorFormats.rgb")}:{" "}
          <span className="color-code">{formats.rgb}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          {t("colorFormats.hsl")}:{" "}
          <span className="color-code">{formats.hsl}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          {t("colorFormats.cmyk")}:{" "}
          <span className="color-code">{formats.cmyk}</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
