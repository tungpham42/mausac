"use client";

import React, { useState } from "react";
import { Image, CloseButton } from "react-bootstrap";

interface ColorLogoProps {
  logoSrc: string; // Link ảnh logo
  mainDomain: string; // Ví dụ: 'soft.io.vn'
  altText?: string;
  size?: number; // Chiều cao logo
  dismissible?: boolean;
}

const ColorLogo: React.FC<ColorLogoProps> = ({
  logoSrc,
  mainDomain,
  altText = "Logo Color",
  size = 40,
  dismissible = false,
}) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      className="position-relative top-0 start-0 m-0 d-flex align-items-center bg-white rounded shadow-sm p-2"
      style={{ zIndex: 1050 }}
    >
      <a href={`https://${mainDomain}`}>
        <Image src={logoSrc} alt={altText} height={size} className="me-2" />
      </a>
      {dismissible && (
        <CloseButton
          onClick={() => setShow(false)}
          className="ms-2"
          aria-label="Đóng logo brand"
        />
      )}
    </div>
  );
};

export default ColorLogo;
