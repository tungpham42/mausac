"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Form, InputGroup, Button } from "react-bootstrap";
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
      router.push(
        language === "en"
          ? `/${encodeURIComponent(cleanedQuery)}`
          : `/${encodeURIComponent(cleanedQuery)}?lang=${language}`
      );
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mb-4 d-flex justify-content-center"
    >
      <InputGroup className="search-bar overflow-hidden">
        <Form.Control
          type="text"
          placeholder={t("colorSearchForm.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          autoFocus
          className="border-0 ps-4 py-3 search-input"
        />
        <Button
          type="submit"
          variant="primary"
          className="d-flex align-items-center justify-content-center px-4 search-btn"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>
    </Form>
  );
}
