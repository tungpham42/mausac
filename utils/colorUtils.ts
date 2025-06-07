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

export function getAnalogous(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.analogous().map((c) => c.toHexString());
}

export function getSplitComplement(color: string) {
  const parsedColor = parseColor(color);
  if (!parsedColor) return null;
  return parsedColor.splitcomplement().map((c) => c.toHexString());
}
