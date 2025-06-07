"use client";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

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
      <Card.Header>
        <FontAwesomeIcon icon={faList} className="me-2" />
        Định dạng
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          HEX: <span className="color-code">{formats.hex}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          RGB: <span className="color-code">{formats.rgb}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          HSL: <span className="color-code">{formats.hsl}</span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
