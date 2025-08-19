"use client";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

export function PaletteBar({ colors }: { colors: string[] }) {
  const data = colors.map((c, i) => ({ name: i + 1, value: 1, color: c }));

  return (
    <div className="d-flex justify-center my-4">
      <BarChart width={400} height={80} data={data}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Bar dataKey="value" isAnimationActive={false}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
