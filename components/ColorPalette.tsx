"use client";
import { Row, Col, Card } from "react-bootstrap";

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
        {colors.map((color, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body style={{ backgroundColor: color, height: "50px" }} />
              <Card.Footer className="text-center">{color}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
