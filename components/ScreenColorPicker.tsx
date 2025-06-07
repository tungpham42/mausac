"use client";
import { useState } from "react";
import { Button, Alert, ButtonGroup } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer, faRedo } from "@fortawesome/free-solid-svg-icons";

export default function ScreenColorPicker() {
  const [pickedColor, setPickedColor] = useState<string | null>(null);

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
    setPickedColor(null);
  };

  const parsedColor = pickedColor ? parseColor(pickedColor) : null;
  const hex = parsedColor?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");

  return (
    <div className="mb-4">
      <ButtonGroup>
        <Button variant="success" size="lg" onClick={handlePickColor}>
          <FontAwesomeIcon icon={faMousePointer} className="me-2" />
          Chọn màu từ màn hình
        </Button>
        <Button variant="outline-secondary" size="lg" onClick={handleReset}>
          <FontAwesomeIcon icon={faRedo} className="me-2" />
          Đặt lại
        </Button>
      </ButtonGroup>

      {pickedColor && (
        <Alert variant="info" className="mt-3">
          <strong>Màu đã chọn:</strong>{" "}
          <Link href={`/${hexClean}`}>
            <span className="color-code">{pickedColor}</span>
          </Link>
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
