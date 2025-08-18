"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { hexToRgba, parseColor } from "@/utils/colorUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { PaletteType } from "@/types/palette";

export default function ColorPalette({
  label,
  type,
  colors,
}: {
  label: string;
  type: PaletteType;
  colors: string[];
}) {
  const { language } = useContext(LanguageContext);
  const hasTwelveColors = type === "shades" || type === "tints";
  const hasThreeColors = type === "triadic" || type === "splitComplement";
  const hasSixColors = type === "analogous";
  const [showAlert, setShowAlert] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setShowAlert(hex);
    setTimeout(() => setShowAlert(null), 2000);
  };

  const description = translations[language]?.paletteDescriptions?.[type] || "";

  return (
    <>
      <h4>{label}</h4>
      {description && <p className="text-muted">{description}</p>}
      <Row className="mb-4">
        {colors.map((color, idx) => {
          const parsedColor = parseColor(color);
          const hex = parsedColor?.toHexString() || "#000000";
          const hexClean = hex.replace("#", "");
          return (
            <Col
              xl={
                hasTwelveColors ? 2 : hasSixColors ? 2 : hasThreeColors ? 4 : 12
              }
              lg={
                hasTwelveColors ? 2 : hasSixColors ? 2 : hasThreeColors ? 4 : 12
              }
              md={
                hasTwelveColors ? 4 : hasSixColors ? 4 : hasThreeColors ? 4 : 12
              }
              sm={
                hasTwelveColors ? 4 : hasSixColors ? 4 : hasThreeColors ? 4 : 12
              }
              xs={
                hasTwelveColors
                  ? 6
                  : hasSixColors
                  ? 6
                  : hasThreeColors
                  ? 12
                  : 12
              }
              key={idx}
            >
              <Card
                className="mb-4"
                style={{
                  border: "1px solid #f8fafc",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hex;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(
                    hex,
                    0.5
                  )}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#f8fafc";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Link href={`/${hexClean}?lang=${language}`} passHref>
                  <Card.Body
                    style={{
                      backgroundColor: hex,
                      height: "50px",
                      position: "relative",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(hex);
                      }}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "4px",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                      title="Copy color"
                    >
                      <FontAwesomeIcon
                        icon={faCopy}
                        style={{ color: "#ffffff" }}
                      />
                    </button>
                  </Card.Body>
                </Link>
                {showAlert === hex && (
                  <div
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0, 0, 0, 0.8)",
                      color: "#ffffff",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      zIndex: 10,
                      fontSize: "14px",
                      width: "max-content",
                      textAlign: "center",
                    }}
                  >
                    Đã sao chép {hex}!
                  </div>
                )}
                <Card.Footer className="text-center">
                  <Link href={`/${hexClean}?lang=${language}`} passHref>
                    <span className="color-code text-decoration-none">
                      {hex}
                    </span>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
