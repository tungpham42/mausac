"use client";
import { useContext, useState } from "react";
import { Row, Col, Button, Form, Card, Stack } from "react-bootstrap";
import { LanguageContext } from "@/context/LanguageContext";
import tinycolor from "tinycolor2";
import Link from "next/link";
import AdSenseBanner from "./AdSenseBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faDice,
  faPalette,
  faPlus,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface ColorWithRatio {
  color: string;
  ratio: number;
}

export default function ColorMixer() {
  const { t, language } = useContext(LanguageContext);
  const [colors, setColors] = useState<ColorWithRatio[]>([
    { color: "#FF0000", ratio: 50 },
    { color: "#0000FF", ratio: 50 },
  ]);
  const [blendMode, setBlendMode] = useState<BlendMode>("normal");
  const [mixedColor, setMixedColor] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const blendModes: { value: BlendMode; label: string }[] = [
    { value: "normal", label: t("colorMixer.blendModes.normal") },
    { value: "multiply", label: t("colorMixer.blendModes.multiply") },
    { value: "screen", label: t("colorMixer.blendModes.screen") },
    { value: "overlay", label: t("colorMixer.blendModes.overlay") },
    { value: "darken", label: t("colorMixer.blendModes.darken") },
    { value: "lighten", label: t("colorMixer.blendModes.lighten") },
    { value: "color-dodge", label: t("colorMixer.blendModes.colorDodge") },
    { value: "color-burn", label: t("colorMixer.blendModes.colorBurn") },
    { value: "hard-light", label: t("colorMixer.blendModes.hardLight") },
    { value: "soft-light", label: t("colorMixer.blendModes.softLight") },
    { value: "difference", label: t("colorMixer.blendModes.difference") },
    { value: "exclusion", label: t("colorMixer.blendModes.exclusion") },
    { value: "hue", label: t("colorMixer.blendModes.hue") },
    { value: "saturation", label: t("colorMixer.blendModes.saturation") },
    { value: "color", label: t("colorMixer.blendModes.color") },
    { value: "luminosity", label: t("colorMixer.blendModes.luminosity") },
  ];

  function applyBlendMode(
    color1: tinycolor.Instance,
    color2: tinycolor.Instance,
    mode: BlendMode
  ): tinycolor.Instance {
    const r1 = color1.toRgb();
    const r2 = color2.toRgb();

    const applyChannel = (c1: number, c2: number, mode: BlendMode): number => {
      const c1n = c1 / 255;
      const c2n = c2 / 255;

      let result = 0;

      switch (mode) {
        case "multiply":
          result = c1n * c2n;
          break;
        case "screen":
          result = 1 - (1 - c1n) * (1 - c2n);
          break;
        case "overlay":
          result = c1n < 0.5 ? 2 * c1n * c2n : 1 - 2 * (1 - c1n) * (1 - c2n);
          break;
        case "darken":
          result = Math.min(c1n, c2n);
          break;
        case "lighten":
          result = Math.max(c1n, c2n);
          break;
        case "color-dodge":
          result = c2n === 1 ? 1 : Math.min(1, c1n / (1 - c2n));
          break;
        case "color-burn":
          result = c2n === 0 ? 0 : 1 - Math.min(1, (1 - c1n) / c2n);
          break;
        case "hard-light":
          result = c2n < 0.5 ? 2 * c1n * c2n : 1 - 2 * (1 - c1n) * (1 - c2n);
          break;
        case "soft-light":
          result =
            c2n > 0.5
              ? c1n + (2 * c2n - 1) * (Math.sqrt(c1n) - c1n)
              : c1n + (2 * c2n - 1) * (c1n - c1n * c1n);
          break;
        case "difference":
          result = Math.abs(c1n - c2n);
          break;
        case "exclusion":
          result = c1n + c2n - 2 * c1n * c2n;
          break;
        default:
          result = c1n;
      }

      return Math.round(Math.min(Math.max(result, 0), 1) * 255);
    };

    if (["hue", "saturation", "color", "luminosity"].includes(mode)) {
      const hsl1 = color1.toHsl();
      const hsl2 = color2.toHsl();

      switch (mode) {
        case "hue":
          return tinycolor({ h: hsl2.h, s: hsl1.s, l: hsl1.l });
        case "saturation":
          return tinycolor({ h: hsl1.h, s: hsl2.s, l: hsl1.l });
        case "color":
          return tinycolor({ h: hsl2.h, s: hsl2.s, l: hsl1.l });
        case "luminosity":
          return tinycolor({ h: hsl1.h, s: hsl1.s, l: hsl2.l });
        default:
          return color1;
      }
    }

    const r = applyChannel(r1.r, r2.r, mode);
    const g = applyChannel(r1.g, r2.g, mode);
    const b = applyChannel(r1.b, r2.b, mode);

    return tinycolor({ r, g, b });
  }

  function mixColors() {
    if (colors.length < 2) return;

    let mixed: tinycolor.Instance;

    if (blendMode === "normal") {
      // Calculate total ratio for normalization
      const totalRatio = colors.reduce((sum, color) => sum + color.ratio, 0);

      // Simple ratio-based mixing for normal mode
      let r = 0,
        g = 0,
        b = 0;

      colors.forEach(({ color, ratio }) => {
        const tc = tinycolor(color);
        const rgb = tc.toRgb();
        const weight = ratio / totalRatio;

        r += rgb.r * weight;
        g += rgb.g * weight;
        b += rgb.b * weight;
      });

      mixed = tinycolor({
        r: Math.round(r),
        g: Math.round(g),
        b: Math.round(b),
      });
    } else {
      // For blend modes, we need to apply them sequentially
      // Start with the first color
      mixed = tinycolor(colors[0].color);

      // Apply blend mode with each subsequent color
      for (let i = 1; i < colors.length; i++) {
        mixed = applyBlendMode(mixed, tinycolor(colors[i].color), blendMode);
      }
    }

    setMixedColor(mixed.toHexString());
  }

  const updateColor = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index].color = value;
    setColors(newColors);
  };

  const updateRatio = (index: number, value: number) => {
    const newColors = [...colors];
    newColors[index].ratio = value;
    setColors(newColors);
  };

  const addColor = () => {
    setColors([
      ...colors,
      {
        color: tinycolor.random().toHexString(),
        ratio: 100 / (colors.length + 1),
      },
    ]);
  };

  const removeColor = (index: number) => {
    if (colors.length <= 2) return; // Keep at least 2 colors
    const newColors = [...colors];
    newColors.splice(index, 1);

    // Redistribute ratios
    const totalRatio = newColors.reduce((sum, color) => sum + color.ratio, 0);
    newColors.forEach((color) => {
      color.ratio = Math.round((color.ratio / totalRatio) * 100);
    });

    setColors(newColors);
  };

  const swapColors = (index1: number, index2: number) => {
    const newColors = [...colors];
    [newColors[index1], newColors[index2]] = [
      newColors[index2],
      newColors[index1],
    ];
    setColors(newColors);
  };

  const randomizeColors = () => {
    const newColors = colors.map(() => ({
      color: tinycolor.random().toHexString(),
      ratio: 100 / colors.length,
    }));
    setColors(newColors);
  };

  const mixedTc = mixedColor ? tinycolor(mixedColor) : null;

  // Simple CMYK conversion since we don't have the full function in scope
  const getCmykString = (color: tinycolor.Instance) => {
    const rgb = color.toRgb();
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const k = 1 - Math.max(r, g, b);
    const c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    const m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    const y = k === 1 ? 0 : (1 - b - k) / (1 - k);

    return `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(
      y * 100
    )}%, ${Math.round(k * 100)}%)`;
  };

  const mixedColorClean = mixedColor.replace("#", "").toLowerCase();

  return (
    <>
      <Card className="p-4 shadow-lg border-0">
        <div className="color-mixer">
          <Row className="mb-4">
            {colors.map((colorObj, index) => (
              <Col key={index} md={6} lg={4} className="mb-3">
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-3">
                    <Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Form.Label
                          className="fw-bold mb-0"
                          htmlFor={`color-code-${index + 1}`}
                        >
                          {t("colorMixer.color")} {index + 1}
                        </Form.Label>
                        {colors.length > 2 && (
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeColor(index)}
                            className="px-2 py-1 pb-0"
                            title={t("colorMixer.removeColor")}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </Button>
                        )}
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="color-picker-wrapper shadow"
                          style={{
                            backgroundColor: colorObj.color,
                            height: "60px",
                            width: "72px",
                            border: "3px solid #fff",
                            boxShadow: "0 0 0 2px #dee2e6",
                            cursor: "pointer",
                          }}
                        >
                          <Form.Control
                            type="color"
                            id={`color-picker-${index + 1}`}
                            value={colorObj.color}
                            onChange={(e) => updateColor(index, e.target.value)}
                            className="opacity-0 w-100 h-100"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        <Form.Control
                          type="text"
                          id={`color-code-${index + 1}`}
                          value={colorObj.color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          placeholder="#FF0000"
                          className="fw-bold"
                        />
                      </div>
                      <Form.Label
                        className="fw-bold mt-3 d-block"
                        htmlFor={`color-ratio-${index + 1}`}
                      >
                        {t("colorMixer.mixRatio")}:{" "}
                        <span className="text-primary">{colorObj.ratio}%</span>
                      </Form.Label>
                      <Form.Range
                        min="0"
                        max="100"
                        id={`color-ratio-${index + 1}`}
                        value={colorObj.ratio}
                        onChange={(e) =>
                          updateRatio(index, parseInt(e.target.value))
                        }
                        className="custom-range"
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {/* Add Color Button */}
            <Col md={6} lg={4} className="mb-3">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-3 d-flex align-items-center justify-content-center">
                  <Button
                    variant="outline-success"
                    onClick={addColor}
                    className="w-100 h-100 py-4"
                  >
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    {t("colorMixer.addColor")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={12}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-3">
                  <Form.Group>
                    <Form.Label className="fw-bold mb-3 d-block">
                      {t("colorMixer.blendMode")}
                    </Form.Label>
                    <Form.Select
                      value={blendMode}
                      onChange={(e) =>
                        setBlendMode(e.target.value as BlendMode)
                      }
                      className="fw-semibold"
                    >
                      {blendModes.map((mode) => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mb-4">
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-2"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced
                ? t("colorMixer.hideAdvanced")
                : t("colorMixer.showAdvanced")}
              <FontAwesomeIcon
                icon={showAdvanced ? faChevronUp : faChevronDown}
                className="ms-2"
              />
            </Button>
          </div>

          {showAdvanced && (
            <Row className="mb-4">
              <Col md={6}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-3 text-center">
                    <Form.Group>
                      <Form.Label className="fw-bold mb-3 d-block">
                        {t("colorMixer.swapColors")}
                      </Form.Label>
                      <div className="d-flex gap-2 justify-content-center flex-wrap">
                        {colors.map(
                          (_, index) =>
                            index < colors.length - 1 && (
                              <Button
                                key={index}
                                variant="outline-primary"
                                size="sm"
                                onClick={() => swapColors(index, index + 1)}
                                className="px-3"
                              >
                                {index + 1} ↔ {index + 2}
                              </Button>
                            )
                        )}
                      </div>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-3 text-center">
                    <Form.Group>
                      <Form.Label className="fw-bold mb-3 d-block">
                        {t("colorMixer.randomColors")}
                      </Form.Label>
                      <div>
                        <Button
                          variant="outline-info"
                          onClick={randomizeColors}
                          className="px-4"
                        >
                          <FontAwesomeIcon icon={faDice} className="me-2" />
                          {t("colorMixer.randomize")}
                        </Button>
                      </div>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          <div className="text-center mb-4">
            <Button
              variant="primary"
              size="lg"
              onClick={mixColors}
              className="px-5 py-2 fw-bold"
            >
              <FontAwesomeIcon icon={faPalette} className="me-2" />
              {t("home.mixButton")}
            </Button>
          </div>

          {mixedColor && (
            <Card className="border-0 shadow-lg mt-4">
              <Card.Body className="p-4">
                <h3 className="text-center mb-4">{t("home.mixedColor")}</h3>

                <div className="d-flex justify-content-center align-items-center gap-3 mb-4 flex-wrap">
                  {colors.map((colorObj, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="color-preview shadow"
                          style={{
                            backgroundColor: colorObj.color,
                            height: "60px",
                            width: "60px",
                            borderRadius: "8px",
                            border: "2px solid #fff",
                            boxShadow: "0 0 0 1px #dee2e6",
                          }}
                        ></div>
                        <small className="mt-2 fw-semibold">
                          {colorObj.color}
                        </small>
                        <small className="text-muted">{colorObj.ratio}%</small>
                      </div>
                      {index < colors.length - 1 && (
                        <div className="mix-arrow fs-4 text-muted mx-2">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="mix-arrow fs-2 text-muted mx-3">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <div
                      className="mixed-color-preview shadow-lg"
                      style={{
                        backgroundColor: mixedColor,
                        height: "100px",
                        width: "100px",
                        borderRadius: "16px",
                        border: "4px solid #fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }}
                    ></div>
                    <small className="mt-2 fw-bold">{mixedColor}</small>
                  </div>
                </div>

                <div className="color-info">
                  <Row className="justify-content-center">
                    <Col md={10}>
                      <Card className="border-0 bg-light">
                        <Card.Body className="p-4">
                          <Row>
                            <Col md={6} className="mb-2">
                              <strong>{t("colorFormats.hex")}:</strong>{" "}
                              <span className="text-primary fw-bold">
                                {mixedColor}
                              </span>
                            </Col>
                            <Col md={6} className="mb-2">
                              <strong>{t("colorFormats.rgb")}:</strong>{" "}
                              <span className="text-primary fw-bold">
                                {mixedTc?.toRgbString()}
                              </span>
                            </Col>
                            <Col md={6} className="mb-2">
                              <strong>{t("colorFormats.hsl")}:</strong>{" "}
                              <span className="text-primary fw-bold">
                                {mixedTc?.toHslString()}
                              </span>
                            </Col>
                            <Col md={6} className="mb-2">
                              {mixedTc && (
                                <>
                                  <strong>{t("colorFormats.cmyk")}:</strong>{" "}
                                  <span className="text-primary fw-bold">
                                    {getCmykString(mixedTc)}
                                  </span>
                                </>
                              )}
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <div className="text-center mt-4">
                    <Stack
                      direction="horizontal"
                      gap={3}
                      className="justify-content-center"
                    >
                      <Link
                        href={
                          language === "en"
                            ? `/${mixedColorClean}`
                            : `/${language}/${mixedColorClean}`
                        }
                        passHref
                      >
                        <Button variant="primary" className="px-4">
                          {t("home.viewDetails")}
                        </Button>
                      </Link>
                    </Stack>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </Card>
      <AdSenseBanner />
    </>
  );
}
