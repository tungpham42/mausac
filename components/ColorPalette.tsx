"use client";
import Link from "next/link";
import { Row, Col, Card } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default function ColorPalette({
  title,
  colors,
}: {
  title: string;
  colors: string[];
}) {
  const hasTwelveColors = title === "Shades" || title === "Tints";
  const hasThreeColors = title === "Triadic" || title === "Split Complement";
  const hasSixColors = title === "Analogous";
  return (
    <>
      <h4>
        <FontAwesomeIcon icon={faPalette} className="me-2" />
        {title}
      </h4>
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
                hasTwelveColors
                  ? 6
                  : hasSixColors
                  ? 4
                  : hasThreeColors
                  ? 12
                  : 12
              }
              xs={
                hasTwelveColors
                  ? 12
                  : hasSixColors
                  ? 12
                  : hasThreeColors
                  ? 12
                  : 12
              }
              key={idx}
            >
              <Card className="mb-4">
                <Card.Body
                  as={Link}
                  href={`/${hexClean}`}
                  style={{ backgroundColor: hex, height: "50px" }}
                />
                <Card.Footer className="text-center">
                  <Link href={`/${hexClean}`}>
                    <span className="color-code">{hex}</span>
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
