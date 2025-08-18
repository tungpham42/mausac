import tinycolor from "tinycolor2";

export function parseColor(input: string) {
  const color = tinycolor(input);
  return color.isValid() ? color : null;
}

export function getColorFormats(color: tinycolor.Instance) {
  return {
    hex: color.toHexString(),
    rgb: color.toRgbString(),
    hsl: color.toHslString(),
  };
}

export function getShades(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return Array.from({ length: 12 }, (_, i) =>
    parsedColor.darken(i).toHexString()
  );
}

export function getTints(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return Array.from({ length: 12 }, (_, i) =>
    parsedColor.lighten(i).toHexString()
  );
}

export function getComplement(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.complement().toHexString();
}

export function getTriadic(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.triad().map((c) => c.toHexString());
}

export function getTetradic(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.tetrad().map((c) => c.toHexString());
}

export function getAnalogous(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.analogous(12).map((c) => c.toHexString());
}

export function getMonochromatic(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.monochromatic(12).map((c) => c.toHexString());
}

export function getSplitComplement(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.splitcomplement().map((c) => c.toHexString());
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function rgbaToHex(rgba: string): string {
  const result = rgba.match(
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*[\d.]+)?\s*\)$/
  );
  if (!result) return "#000000"; // Default to black if invalid
  const r = parseInt(result[1]).toString(16).padStart(2, "0");
  const g = parseInt(result[2]).toString(16).padStart(2, "0");
  const b = parseInt(result[3]).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

export function hexToClean(color: string): string {
  const parsedColor = parseColor(color);
  const hex = parsedColor?.toHexString() || "#000000";
  return hex.replace("#", "");
}
