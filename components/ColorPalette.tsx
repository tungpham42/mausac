"use client";
import Link from "next/link";
import { Row, Col, Card } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";

export default function ColorPalette({
  title,
  colors,
}: {
  title: string;
  colors: string[];
}) {
  return (
    <>
      <h4>{title}</h4>
      <Row className="mb-4">
        {colors.map((color, idx) => {
          const parsedColor = parseColor(color);
          const hex = parsedColor?.toHexString() || "#000000";
          const hexClean = hex.replace("#", "");
          return (
            <Col key={idx}>
              <Card>
                <Card.Body style={{ backgroundColor: hex, height: "50px" }} />
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
