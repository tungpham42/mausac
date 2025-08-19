"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

export default function RgbChart({
  rgb,
}: {
  rgb: { r: number; g: number; b: number };
}) {
  // Normalize RGB values (0-255) to percentages (0-100)
  const data = [
    { name: "Red", value: (rgb.r / 255) * 100, color: "#ff0000" },
    { name: "Green", value: (rgb.g / 255) * 100, color: "#00ff00" },
    { name: "Blue", value: (rgb.b / 255) * 100, color: "#0000ff" },
  ];

  return (
    <div className="my-4">
      <h3 className="text-center">RGB</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value: number) => `${Math.round(value)}%`} />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
