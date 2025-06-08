"use client";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ColorSearchForm from "@/components/ColorSearchForm";
import ScreenColorPicker from "@/components/ScreenColorPicker";
import ImageColorPicker from "@/components/ImageColorPicker";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { hexToRgba } from "@/utils/colorUtils";

export default function HomePage() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Tra cứu Mã Màu</h1>
      <p className="text-center">
        Chào mừng bạn đến với công cụ tra cứu mã màu. Hãy nhập tên màu hoặc mã
        HEX để tìm kiếm màu sắc yêu thích của bạn!
      </p>
      <ColorSearchForm />
      <hr className="my-5" />
      <h2 className="mb-4">
        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
        Hướng dẫn sử dụng
      </h2>
      <ul>
        <li>
          Nhập tên màu (ví dụ: <code>red</code>, <code>blue</code>) hoặc mã màu
          HEX (ví dụ: <code>#FF5733</code>).
        </li>
        <li>Nhấn nút &ldquo;Tìm kiếm&rdquo; để xem thông tin chi tiết.</li>
        <li>Công cụ hỗ trợ chọn màu từ màn hình hoặc ảnh tải lên.</li>
      </ul>
      <hr className="my-5" />
      <h2 className="mb-4">
        <FontAwesomeIcon icon={faPalette} className="me-2" />
        Chọn màu từ màn hình hoặc ảnh
      </h2>
      <ScreenColorPicker />
      <ImageColorPicker />
      <hr className="my-5" />
      <h2 className="mb-4">
        <FontAwesomeIcon icon={faPalette} className="me-2" />
        Một số màu sắc phổ biến
      </h2>
      <Row>
        {[
          { name: "Đỏ", hex: "#FF0000", clean: "FF0000" },
          { name: "Xanh lá", hex: "#00FF00", clean: "00FF00" },
          { name: "Xanh dương", hex: "#0000FF", clean: "0000FF" },
          { name: "Vàng", hex: "#FFFF00", clean: "FFFF00" },
        ].map((color) => (
          <Col key={color.hex} md={3} className="mb-4">
            <Card
              style={{
                border: "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color.hex;
                e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(
                  color.hex,
                  0.5
                )}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  backgroundColor: color.hex,
                  height: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>{color.name}</Card.Title>
                <Card.Text>
                  Mã HEX: <span className="color-code">{color.hex}</span>
                </Card.Text>
                <Link
                  href={`/${color.clean}`}
                  className="stretched-link"
                  passHref
                >
                  <Button variant="primary">Xem chi tiết</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
