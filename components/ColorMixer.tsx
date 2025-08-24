import { useContext, useState } from "react";
import { Row, Col, Button, Form, Card, Stack } from "react-bootstrap";
import { LanguageContext } from "@/context/LanguageContext";
import tinycolor from "tinycolor2";
import Link from "next/link";

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

export default function ColorMixer() {
  const { t, language } = useContext(LanguageContext);
  const [color1, setColor1] = useState("#FF0000");
  const [color2, setColor2] = useState("#0000FF");
  const [ratio, setRatio] = useState(50);
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
    const tc1 = tinycolor(color1);
    const tc2 = tinycolor(color2);

    let mixed: tinycolor.Instance;

    if (blendMode === "normal") {
      // Simple ratio-based mixing for normal mode
      const weight1 = ratio / 100;
      const weight2 = 1 - weight1;

      const rgb1 = tc1.toRgb();
      const rgb2 = tc2.toRgb();

      const r = Math.round(rgb1.r * weight1 + rgb2.r * weight2);
      const g = Math.round(rgb1.g * weight1 + rgb2.g * weight2);
      const b = Math.round(rgb1.b * weight1 + rgb2.b * weight2);

      mixed = tinycolor({ r, g, b });
    } else {
      // Apply blend mode
      mixed = applyBlendMode(tc1, tc2, blendMode);
    }

    setMixedColor(mixed.toHexString());
  }

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
    <Card className="p-4 shadow-lg border-0">
      <div className="color-mixer">
        <Row className="mb-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-3">
                <Form.Group>
                  <Form.Label className="fw-bold mb-3 d-block">
                    {t("colorMixer.color1")}
                  </Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="color-picker-wrapper rounded-circle shadow"
                      style={{
                        backgroundColor: color1,
                        height: "60px",
                        width: "66px",
                        border: "3px solid #fff",
                        boxShadow: "0 0 0 2px #dee2e6",
                        cursor: "pointer",
                      }}
                    >
                      <Form.Control
                        type="color"
                        value={color1}
                        onChange={(e) => setColor1(e.target.value)}
                        className="opacity-0 w-100 h-100"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <Form.Control
                      type="text"
                      value={color1}
                      onChange={(e) => setColor1(e.target.value)}
                      placeholder="#FF0000"
                      className="fw-bold"
                    />
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-3">
                <Form.Group>
                  <Form.Label className="fw-bold mb-3 d-block">
                    {t("colorMixer.color2")}
                  </Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="color-picker-wrapper rounded-circle shadow"
                      style={{
                        backgroundColor: color2,
                        height: "60px",
                        width: "66px",
                        border: "3px solid #fff",
                        boxShadow: "0 0 0 2px #dee2e6",
                        cursor: "pointer",
                      }}
                    >
                      <Form.Control
                        type="color"
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                        className="opacity-0 w-100 h-100"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <Form.Control
                      type="text"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      placeholder="#0000FF"
                      className="fw-bold"
                    />
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-3">
                <Form.Group>
                  <Form.Label className="fw-bold mb-3 d-block">
                    {t("colorMixer.mixRatio")}:{" "}
                    <span className="text-primary">{ratio}%</span>
                  </Form.Label>
                  <Form.Range
                    min="0"
                    max="100"
                    value={ratio}
                    onChange={(e) => setRatio(parseInt(e.target.value))}
                    className="custom-range"
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">
                      {t("colorMixer.moreColor1")}
                    </small>
                    <small className="text-muted">
                      {t("colorMixer.moreColor2")}
                    </small>
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-3">
                <Form.Group>
                  <Form.Label className="fw-bold mb-3 d-block">
                    {t("colorMixer.blendMode")}
                  </Form.Label>
                  <Form.Select
                    value={blendMode}
                    onChange={(e) => setBlendMode(e.target.value as BlendMode)}
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
            <i
              className={`ms-2 fas ${
                showAdvanced ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
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
                    <div>
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          const temp = color1;
                          setColor1(color2);
                          setColor2(temp);
                        }}
                        className="px-4"
                      >
                        <i className="fas fa-exchange-alt me-2"></i>
                        {t("colorMixer.swap")}
                      </Button>
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
                        onClick={() => {
                          setColor1(tinycolor.random().toHexString());
                          setColor2(tinycolor.random().toHexString());
                        }}
                        className="px-4"
                      >
                        <i className="fas fa-dice me-2"></i>
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
            <i className="fas fa-palette me-2"></i>
            {t("home.mixButton")}
          </Button>
        </div>

        {mixedColor && (
          <Card className="border-0 shadow-lg mt-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">{t("home.mixedColor")}</h3>

              <div className="d-flex justify-content-center align-items-center gap-4 mb-4 flex-wrap">
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="color-preview shadow"
                    style={{
                      backgroundColor: color1,
                      height: "80px",
                      width: "80px",
                      borderRadius: "12px",
                      border: "3px solid #fff",
                      boxShadow: "0 0 0 2px #dee2e6",
                    }}
                  ></div>
                  <small className="mt-2 fw-semibold">{color1}</small>
                </div>

                <div className="mix-arrow fs-2 text-muted">
                  <i className="fas fa-plus"></i>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <div
                    className="color-preview shadow"
                    style={{
                      backgroundColor: color2,
                      height: "80px",
                      width: "80px",
                      borderRadius: "12px",
                      border: "3px solid #fff",
                      boxShadow: "0 0 0 2px #dee2e6",
                    }}
                  ></div>
                  <small className="mt-2 fw-semibold">{color2}</small>
                </div>

                <div className="mix-arrow fs-2 text-muted">
                  <i className="fas fa-arrow-right"></i>
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
  );
}
