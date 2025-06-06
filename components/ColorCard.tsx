"use client";
import { Card } from "react-bootstrap";

export default function ColorCard({ hex }: { hex: string }) {
  return (
    <Card className="my-3">
      <Card.Body style={{ backgroundColor: hex, height: "100px" }} />
    </Card>
  );
}
