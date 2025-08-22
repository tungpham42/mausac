"use client";
import { Container, Row, Col, Card, Button, Ratio } from "react-bootstrap";
import ColorSearchForm from "@/components/ColorSearchForm";
import ScreenColorPicker from "@/components/ScreenColorPicker";
import ImageColorPicker from "@/components/ImageColorPicker";
import LanguageToggle from "@/components/LanguageToggle";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import { hexToRgba } from "@/utils/colorUtils";
import AdSenseBanner from "./AdSenseBanner";

export default function Home({ language }: { language: string }) {
  const { t } = useContext(LanguageContext);

  return (
    <Container className="mt-0">
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
      <Ratio aspectRatio="16x9" style={{ maxWidth: 640 }}>
        <iframe
          src={`https://www.youtube.com/embed/${t(
            "home.youtubeCode"
          )}?rel=0&modestbranding=1`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Ratio>
      <hr className="my-5" />
      <AdSenseBanner />
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
          { name: t("home.cyan"), hex: "#00FFFF", clean: "00FFFF" },
          { name: t("home.magenta"), hex: "#FF00FF", clean: "FF00FF" },
          { name: t("home.orange"), hex: "#FFA500", clean: "FFA500" },
          { name: t("home.purple"), hex: "#800080", clean: "800080" },
          { name: t("home.pink"), hex: "#FFC0CB", clean: "FFC0CB" },
          { name: t("home.brown"), hex: "#A52A2A", clean: "A52A2A" },
          { name: t("home.black"), hex: "#000000", clean: "000000" },
          { name: t("home.white"), hex: "#FFFFFF", clean: "FFFFFF" },
        ].map((color) => (
          <Col
            key={color.hex}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="mb-4 d-flex"
          >
            <Card
              className="h-100 w-100"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 12px ${hexToRgba(
                  color.hex,
                  0.5
                )}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.5)";
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
              <Card.Body className="d-flex flex-column">
                <Card.Title>{color.name}</Card.Title>
                <Card.Text>
                  {t("colorFormats.hex")}:{" "}
                  <span className="color-code">{color.hex}</span>
                </Card.Text>
                <div className="mt-auto">
                  <Link
                    href={
                      language === "en"
                        ? `/${color.clean}`
                        : `/${color.clean}?lang=${language}`
                    }
                    passHref
                  >
                    <Button variant="primary">{t("home.viewDetails")}</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
