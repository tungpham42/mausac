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
            <Col key={idx}>
              <Card>
                <Card.Body
                  as={Link}
                  href={`/${hexClean}`}
                  style={{ backgroundColor: hex, height: "50px" }}
                />
                <Card.Footer className="text-center">
                  <Link href={`/${hexClean}`}>{hex}</Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
