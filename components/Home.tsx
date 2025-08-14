"use client";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ColorSearchForm from "@/components/ColorSearchForm";
import ScreenColorPicker from "@/components/ScreenColorPicker";
import ImageColorPicker from "@/components/ImageColorPicker";
import LanguageToggle from "@/components/LanguageToggle";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import { hexToRgba } from "@/utils/colorUtils";

export default function Home({ language }: { language: string }) {
  const { t } = useContext(LanguageContext);

  return (
    <Container className="mt-5">
      <LanguageToggle />
      <h1 className="mb-4 text-center">{t("home.title")}</h1>
      <p className="text-center">{t("home.description")}</p>
      <ColorSearchForm />
      <hr className="my-5" />
      <h2 className="mb-4">{t("home.instructionsTitle")}</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: t("home.instruction1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("home.instruction2") }} />
        <li>{t("home.instruction3")}</li>
      </ul>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${t("home.youtubeCode")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <hr className="my-5" />
      <h2 className="mb-4">{t("home.pickerTitle")}</h2>
      <ScreenColorPicker />
      <ImageColorPicker />
      <hr className="my-5" />
      <h2 className="mb-4">{t("home.popularColorsTitle")}</h2>
      <Row>
        {[
          { name: t("home.red"), hex: "#FF0000", clean: "FF0000" },
          { name: t("home.green"), hex: "#00FF00", clean: "00FF00" },
          { name: t("home.blue"), hex: "#0000FF", clean: "0000FF" },
          { name: t("home.yellow"), hex: "#FFFF00", clean: "FFFF00" },
        ].map((color) => (
          <Col key={color.hex} md={3} className="mb-4">
            <Card
              style={{
                border: "1px solid #f8fafc",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color.hex;
                e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(
                  color.hex,
                  0.5
                )}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f8fafc";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  backgroundColor: color.hex,
                  height: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>{color.name}</Card.Title>
                <Card.Text>
                  {t("colorFormats.hex")}:{" "}
                  <span className="color-code">{color.hex}</span>
                </Card.Text>
                <Link href={`/${color.clean}?lang=${language}`} passHref>
                  <Button variant="primary">{t("home.viewDetails")}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
