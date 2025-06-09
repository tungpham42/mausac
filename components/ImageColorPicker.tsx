"use client";

import { useState } from "react";
import { Form, Alert, Button, Image } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faRedo,
  faEyeDropper,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageColorPicker() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [pickedColor, setPickedColor] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
        setPickedColor(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePickColor = async () => {
    if (!window.EyeDropper) {
      alert("Trình duyệt của bạn không hỗ trợ EyeDropper API");
      return;
    }

    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      setPickedColor(result.sRGBHex);
    } catch (err) {
      console.error("Color pick cancelled or failed", err);
    }
  };

  const handleReset = () => {
    setImageSrc(null);
    setPickedColor(null);
  };

  const parsedColor = pickedColor ? parseColor(pickedColor) : null;
  const hex = parsedColor?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");

  return (
    <div className="mb-4">
      <Form.Group controlId="formFile">
        <Form.Label>
          <FontAwesomeIcon icon={faFileUpload} className="me-2" />
          Tải ảnh lên để chọn màu:
        </Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Form.Group>

      {imageSrc && (
        <>
          <Button
            variant="outline-secondary"
            size="lg"
            className="mb-3 me-2"
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faRedo} className="me-2" />
            Đặt lại
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            className="mb-3"
            onClick={handlePickColor}
          >
            <FontAwesomeIcon icon={faEyeDropper} className="me-2" />
            Chọn màu từ ảnh
          </Button>
          <Image
            src={imageSrc}
            alt="Uploaded"
            fluid
            className="border mt-2"
            style={{ maxHeight: "80vh", objectFit: "contain" }}
          />
        </>
      )}

      {pickedColor && (
        <Alert variant="info" className="mt-3">
          <strong>Màu đã chọn:</strong>{" "}
          <Link href={`/${hexClean}`}>
            <span className="color-code">{pickedColor}</span>
          </Link>
          <Link
            href={`/${hexClean}`}
            style={{ display: "block", width: "fit-content" }}
          >
            <div
              style={{
                backgroundColor: pickedColor,
                width: "200px",
                height: "100px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginTop: "8px",
                display: "block",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Link>
        </Alert>
      )}
    </div>
  );
}
