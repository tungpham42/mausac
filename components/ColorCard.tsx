"use client";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function ColorCard({ hex }: { hex: string }) {
  return (
    <Card className="my-3">
      <Card.Header>
        <FontAwesomeIcon icon={faEye} className="me-2" />
        Màu sắc
      </Card.Header>
      <Card.Body
        className="color-card-body"
        style={{
          backgroundColor: hex,
          height: "100px",
          borderTopLeftRadius: "0 !important",
          borderTopRightRadius: "0 !important",
          borderBottomLeftRadius: "8px !important",
          borderBottomRightRadius: "8px !important",
        }}
      />
    </Card>
  );
}
