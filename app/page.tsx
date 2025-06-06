"use client";
import { Container } from "react-bootstrap";
import ColorSearchForm from "@/components/ColorSearchForm";

export default function HomePage() {
  return (
    <Container className="mt-5">
      <h1>Tra cứu mã màu</h1>
      <ColorSearchForm />
    </Container>
  );
}
