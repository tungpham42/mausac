"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "@/context/LanguageContext";

export default function ColorSearchForm() {
  const { t, language } = useContext(LanguageContext);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const cleanedQuery = query.replace("#", "");
      router.push(`/${encodeURIComponent(cleanedQuery)}?lang=${language}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col md={11} sm={11} xs={9} className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder={t("colorSearchForm.placeholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            required
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
