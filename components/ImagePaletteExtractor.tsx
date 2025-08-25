"use client";

import React, { useState, useRef, useCallback } from "react";
import { Card, Button, Row, Col, Alert, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faDownload,
  faCopy,
  faImage,
  faPalette,
  faSpinner,
  faTrash,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import tinycolor from "tinycolor2";
import { useRouter } from "next/navigation";
import { getTranslation } from "@/translations";

interface ExtractedColor {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  percentage: number;
}

interface ImagePaletteExtractorProps {
  language?: string;
}

export default function ImagePaletteExtractor({ language = "en" }: ImagePaletteExtractorProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [extractedColors, setExtractedColors] = useState<ExtractedColor[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [colorCount, setColorCount] = useState(6);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  // Translation helper
  const t = (key: string) => {
    const result = getTranslation(language, key);
    return Array.isArray(result) ? result.join(' ') : result;
  };

  const handleFileSelect = useCallback((file: File) => {
    console.log('📁 File selected:', { name: file.name, type: file.type, size: file.size });
    
    if (!file.type.startsWith('image/')) {
      console.log('❌ Invalid file type:', file.type);
      setError(t('imagePaletteExtractor.invalidFileType'));
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      console.log('❌ File too large:', file.size);
      setError(t('imagePaletteExtractor.fileTooLarge'));
      return;
    }

    console.log('✅ File validation passed, setting states...');
    setSelectedImage(file);
    setError("");
    setExtractedColors([]);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      console.log('🖼️ Preview created:', result ? 'SUCCESS' : 'FAILED');
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  // Color quantization algorithm using median cut
  const extractColors = async (imageData: ImageData, numColors: number): Promise<ExtractedColor[]> => {
    console.log('🔍 Starting color extraction...', { numColors, imageDataLength: imageData.data.length });
    
    const pixels: number[][] = [];
    
    // Sample pixels (take every 4th pixel for performance)
    for (let i = 0; i < imageData.data.length; i += 16) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const a = imageData.data[i + 3];
      
      if (a > 128) { // Only consider non-transparent pixels
        pixels.push([r, g, b]);
      }
    }

    console.log('📊 Pixels collected:', pixels.length);

    if (pixels.length === 0) {
      throw new Error('No valid pixels found');
    }

    // Simple color quantization - group similar colors
    const colorGroups = new Map<string, number>();
    
    pixels.forEach(([r, g, b]) => {
      // Reduce color precision for grouping
      const quantizedR = Math.round(r / 16) * 16;
      const quantizedG = Math.round(g / 16) * 16;
      const quantizedB = Math.round(b / 16) * 16;
      const key = `${quantizedR},${quantizedG},${quantizedB}`;
      
      colorGroups.set(key, (colorGroups.get(key) || 0) + 1);
    });

    console.log('🎨 Color groups created:', colorGroups.size);

    // Sort by frequency and take top colors
    const sortedColors = Array.from(colorGroups.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, numColors);

    console.log('📈 Top colors selected:', sortedColors.length);

    const totalPixels = pixels.length;
    
    const result = sortedColors.map(([colorKey, count]) => {
      const [r, g, b] = colorKey.split(',').map(Number);
      const color = tinycolor({ r, g, b });
      
      return {
        hex: color.toHexString(),
        rgb: { r, g, b },
        hsl: color.toHsl(),
        percentage: Math.round((count / totalPixels) * 100 * 100) / 100
      };
    });

    console.log('✅ Final colors:', result);
    return result;
  };

  const handleExtractPalette = async () => {
    console.log('🎨 Starting extraction...', { selectedImage, imagePreview, colorCount });
    
    if (!selectedImage || !imagePreview) {
      console.log('❌ No image selected');
      setError(t('imagePaletteExtractor.noImageSelected'));
      return;
    }

    setIsExtracting(true);
    setError("");

    try {
      const canvas = canvasRef.current;
      if (!canvas) throw new Error('Canvas not available');

      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context not available');

      console.log('📷 Loading image...');
      const img = new window.Image();
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imagePreview;
      });

      console.log('🖼️ Image loaded:', { width: img.width, height: img.height });

      // Resize image for faster processing
      const maxSize = 300;
      const scale = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      console.log('📐 Canvas resized:', { width: canvas.width, height: canvas.height });

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      console.log('🎨 Extracting colors from imageData...', { dataLength: imageData.data.length });
      const colors = await extractColors(imageData, colorCount);
      
      console.log('✅ Colors extracted:', colors);
      setExtractedColors(colors);
    } catch (err) {
      console.error('❌ Extraction error:', err);
      setError(t('imagePaletteExtractor.extractionError'));
    } finally {
      setIsExtracting(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      console.log('📋 Attempting to copy:', text);
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        console.log('✅ Copied to clipboard successfully');
        
        // Show a brief visual feedback
        // You could add a toast notification here if needed
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('✅ Copied using fallback method');
      }
    } catch (error) {
      console.error('❌ Failed to copy to clipboard:', error);
      // Fallback method
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('✅ Copied using fallback after error');
      } catch (fallbackError) {
        console.error('❌ Fallback copy also failed:', fallbackError);
      }
    }
  };

  const copyAllColors = () => {
    const allColors = extractedColors.map(color => color.hex).join(', ');
    copyToClipboard(allColors);
  };

  // Navigate to color page
  const navigateToColor = (hexColor: string) => {
    try {
      console.log('🎨 Navigating to color:', hexColor, 'Language:', language);
      
      // Remove # from hex color for URL
      const colorName = hexColor.replace('#', '').toLowerCase();
      
      // Build URL based on language - simplified since getTranslation handles fallback
      const colorUrl = language === 'en' ? `/${colorName}` : `/lang/${language}/${colorName}`;
      
      console.log('🔗 Navigating to:', colorUrl);
      router.push(colorUrl);
    } catch (error) {
      console.error('❌ Navigation error:', error);
      // Fallback: copy color if navigation fails
      copyToClipboard(hexColor);
    }
  };

  const downloadPalette = () => {
    const paletteData = extractedColors.map(color => ({
      hex: color.hex,
      rgb: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
      hsl: `hsl(${Math.round(color.hsl.h)}, ${Math.round(color.hsl.s * 100)}%, ${Math.round(color.hsl.l * 100)}%)`,
      percentage: `${color.percentage}%`
    }));

    const dataStr = JSON.stringify(paletteData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'color-palette.json';
    link.click();
    
    URL.revokeObjectURL(url);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview("");
    setExtractedColors([]);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="image-palette-extractor">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      <Row>
        {/* Left Panel - Controls */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              {/* File Upload Area - Simplified */}
              <div
                className={`border-2 border-dashed p-3 text-center mb-3 ${
                  dragOver ? 'border-primary bg-light' : 'border-secondary'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{ borderRadius: '8px', cursor: 'pointer', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                onClick={() => fileInputRef.current?.click()}
              >
                <FontAwesomeIcon icon={faUpload} className="text-muted mb-2" />
                <small className="text-muted">{t('imagePaletteExtractor.clickOrDrop')}</small>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file);
                }}
              />

              {/* Browse Image Button */}
              <Button
                variant="outline-secondary"
                className="w-100 mb-3"
                onClick={() => fileInputRef.current?.click()}
              >
                <FontAwesomeIcon icon={faImage} className="me-2" />
                {t('imagePaletteExtractor.browseImage')}
              </Button>

              <Form.Group className="mb-3">
                <Form.Label>{t('imagePaletteExtractor.colorCount')}</Form.Label>
                <Form.Select
                  value={colorCount}
                  onChange={(e) => setColorCount(Number(e.target.value))}
                >
                  <option value={3}>3 {t('imagePaletteExtractor.colors')}</option>
                  <option value={5}>5 {t('imagePaletteExtractor.colors')}</option>
                  <option value={6}>6 {t('imagePaletteExtractor.colors')}</option>
                  <option value={8}>8 {t('imagePaletteExtractor.colors')}</option>
                  <option value={10}>10 {t('imagePaletteExtractor.colors')}</option>
                  <option value={12}>12 {t('imagePaletteExtractor.colors')}</option>
                </Form.Select>
              </Form.Group>

              {/* Extract Button */}
              <Button
                variant={!selectedImage || isExtracting ? "secondary" : "primary"}
                onClick={handleExtractPalette}
                disabled={!selectedImage || isExtracting}
                className="w-100 mb-3"
                style={{
                  backgroundColor: !selectedImage || isExtracting ? "#6c757d" : "#0d6efd",
                  borderColor: !selectedImage || isExtracting ? "#6c757d" : "#0d6efd",
                  color: "white"
                }}
              >
                {isExtracting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                    {t('imagePaletteExtractor.extracting')}
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPalette} className="me-2" />
                    {t('imagePaletteExtractor.extractPalette')}
                  </>
                )}
              </Button>

              {/* Export Palette Button */}
              {extractedColors.length > 0 && (
                <div className="dropdown">
                  <Button
                    variant="primary"
                    className="w-100 dropdown-toggle"
                    id="exportDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faDownload} className="me-2" />
                    {t('imagePaletteExtractor.exportPalette')}
                  </Button>
                  <ul className="dropdown-menu w-100" aria-labelledby="exportDropdown">
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); copyAllColors(); }}>
                        <FontAwesomeIcon icon={faCopy} className="me-2" />
                        {t('imagePaletteExtractor.copyAllColors')}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); downloadPalette(); }}>
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        {t('imagePaletteExtractor.downloadJSON')}
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {error && (
                <Alert variant="danger" className="mt-3 small">
                  {error}
                </Alert>
              )}

              {/* Debug Info */}
              <small className="text-muted d-block mt-2">
                Image: {selectedImage ? '✅' : '❌'} | Extracting: {isExtracting ? '⏳' : '⭕'} | Preview: {imagePreview ? '🖼️' : '📷'}
              </small>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Panel - Image Preview */}
        <Col md={8}>
          {imagePreview ? (
            <Card>
              <Card.Body className="text-center">
                <div className="position-relative d-inline-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '500px',
                      borderRadius: '8px'
                    }}
                  />
                  {selectedImage && (
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={clearImage}
                      className="position-absolute top-0 end-0 m-2"
                      style={{
                        borderColor: "#dc3545",
                        color: "#dc3545"
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          ) : (
            <Card className="h-100 d-flex align-items-center justify-content-center">
              <Card.Body className="text-center text-muted">
                <FontAwesomeIcon icon={faImage} size="3x" className="mb-3" />
                <h5>{t('imagePaletteExtractor.noImageSelected')}</h5>
                <p>{t('imagePaletteExtractor.uploadPrompt')}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Color Palette Section - Full Width Below */}
      {extractedColors.length > 0 && (
        <Row className="mt-4">
          <Col xs={12}>
            <Card>
              <Card.Body>
                <h5 className="mb-4 text-center">
                  <FontAwesomeIcon icon={faPalette} className="me-2" />
                  {t('imagePaletteExtractor.extractedColorPalette')}
                </h5>
                
                {/* Color Palette - Full Width */}
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  {extractedColors.map((color, index) => (
                    <div 
                      key={index} 
                      className="text-center p-3 border rounded shadow-sm"
                      style={{ 
                        minWidth: '100px',
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0 !important',
                        borderRadius: '12px',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                      }}
                    >
                      {/* Color Swatch - Larger */}
                      <div
                        className="color-swatch mb-3"
                        style={{
                          backgroundColor: color.hex,
                          width: '60px',
                          height: '60px',
                          borderRadius: '8px',
                          border: '2px solid #ddd',
                          cursor: 'pointer',
                          margin: '0 auto',
                          transition: 'transform 0.2s',
                          position: 'relative'
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('🎨 Color swatch clicked, navigating to:', color.hex);
                          navigateToColor(color.hex);
                        }}
                        title={`${t('imagePaletteExtractor.clickToView')} ${color.hex} ${t('imagePaletteExtractor.colorPage')} (${color.percentage}%)`}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {/* Navigation indicator */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '8px'
                          }}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                      </div>
                      
                      {/* Color Info */}
                      <div className="mb-3">
                        <div 
                          className="fw-bold" 
                          style={{ 
                            fontSize: '13px', 
                            color: '#333', 
                            cursor: 'pointer' 
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigateToColor(color.hex);
                          }}
                          title={`${t('imagePaletteExtractor.clickToView')} ${t('imagePaletteExtractor.colorPage')}`}
                        >
                          {color.hex}
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" style={{ fontSize: '10px' }} />
                        </div>
                        <small className="text-muted" style={{ fontSize: '11px' }}>{color.percentage}% {t('imagePaletteExtractor.ofImage')}</small>
                      </div>
                      
                      {/* Copy Buttons - Larger and More Visible */}
                      <div className="d-flex justify-content-center gap-1">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('🔵 HEX button clicked:', color.hex);
                            copyToClipboard(color.hex);
                          }}
                          title={t('imagePaletteExtractor.copyHex')}
                          style={{ 
                            width: '32px', 
                            height: '28px', 
                            fontSize: '9px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          HEX
                        </button>
                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const rgbValue = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
                            console.log('🟢 RGB button clicked:', rgbValue);
                            copyToClipboard(rgbValue);
                          }}
                          title={t('imagePaletteExtractor.copyRgb')}
                          style={{ 
                            width: '32px', 
                            height: '28px', 
                            fontSize: '9px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          RGB
                        </button>
                        <button
                          className="btn btn-sm btn-outline-warning"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const hslValue = `hsl(${Math.round(color.hsl.h)}, ${Math.round(color.hsl.s * 100)}%, ${Math.round(color.hsl.l * 100)}%)`;
                            console.log('🟡 HSL button clicked:', hslValue);
                            copyToClipboard(hslValue);
                          }}
                          title={t('imagePaletteExtractor.copyHsl')}
                          style={{ 
                            width: '32px', 
                            height: '28px', 
                            fontSize: '9px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          HSL
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
