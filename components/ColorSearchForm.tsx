"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ColorSearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const cleanedQuery = query.replace("#", "");
      router.push(`/${encodeURIComponent(cleanedQuery)}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={11} sm={11} xs={9} className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="Nhập tên màu (v.d. red, #00edc3)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col md={1} sm={1} xs={3} className="d-flex justify-content-start">
          <Button type="submit" variant="primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
