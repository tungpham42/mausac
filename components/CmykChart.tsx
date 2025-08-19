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

export default function CmykChart({
  cmyk,
}: {
  cmyk: { c: number; m: number; y: number; k: number };
}) {
  const data = [
    { name: "Cyan", value: cmyk.c, color: "#00ffff" },
    { name: "Magenta", value: cmyk.m, color: "#ff00ff" },
    { name: "Yellow", value: cmyk.y, color: "#ffff00" },
    { name: "Black", value: cmyk.k, color: "#000000" },
  ];

  return (
    <div className="my-4">
      <h3 className="text-center">CMYK</h3>
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
