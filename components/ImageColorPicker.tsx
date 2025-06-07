"use client";
import { useState, useRef } from "react";
import { Form, Alert, Button, Image } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload, faRedo } from "@fortawesome/free-solid-svg-icons";

export default function ImageColorPicker() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [pickedColor, setPickedColor] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${[...pixel]
      .slice(0, 3)
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("")}`;
    setPickedColor(hex);
  };

  const drawToCanvas = () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (img && canvas && ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    }
  };

  const handleReset = () => {
    setImageSrc(null);
    setPickedColor(null);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
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
            size="sm"
            className="mb-3"
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faRedo} className="me-2" />
            Đặt lại
          </Button>
          <Image
            ref={imgRef}
            src={imageSrc}
            alt="Uploaded"
            style={{ display: "none" }}
            onLoad={drawToCanvas}
          />
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            style={{
              maxWidth: "100%",
              cursor: "crosshair",
              border: "1px solid #ccc",
            }}
          />
        </>
      )}

      {pickedColor && (
        <Alert variant="info" className="mt-3">
          <strong>Màu đã chọn:</strong>{" "}
          <Link href={`/${hexClean}`}>{pickedColor}</Link>
          <Link href={`/${hexClean}`}>
            <div
              style={{
                backgroundColor: pickedColor,
                width: "100px",
                height: "40px",
                border: "1px solid #ccc",
                marginTop: "8px",
              }}
            />
          </Link>
        </Alert>
      )}
    </div>
  );
}
