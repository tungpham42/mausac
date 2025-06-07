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
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Nhập tên màu (v.d. red, #00edc3)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button type="submit" variant="primary">
            <FontAwesomeIcon icon={faSearch} className="me-2" />
            Tìm kiếm
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
