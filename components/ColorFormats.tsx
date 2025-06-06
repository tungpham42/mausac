"use client";
import { Card, ListGroup } from "react-bootstrap";

type Props = {
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
  };
};

export default function ColorFormats({ formats }: Props) {
  return (
    <Card className="mb-3">
      <Card.Header>Định dạng</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>HEX: {formats.hex}</ListGroup.Item>
        <ListGroup.Item>RGB: {formats.rgb}</ListGroup.Item>
        <ListGroup.Item>HSL: {formats.hsl}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
