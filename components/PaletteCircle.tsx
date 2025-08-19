"use client";
import { PieChart, Pie, Cell } from "recharts";

export function PaletteCircle({ colors }: { colors: string[] }) {
  const data = colors.map((c, i) => ({
    name: `Color ${i + 1}`,
    value: 1,
    color: c,
  }));

  return (
    <div className="flex justify-center my-4">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={120}
          innerRadius={60}
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
