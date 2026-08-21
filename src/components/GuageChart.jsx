"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from "recharts";

export function GaugeChart({ data }) {
  return (
    <div className="relative h-[240px] w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 bottom-0 top-14 rounded-full opacity-70 blur-2xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="90%"
            innerRadius="62%"
            outerRadius="100%"
            paddingAngle={0}
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((slice) => (
              <Cell key={slice.name} fill={slice.color} />
            ))}
            <LabelList
              dataKey="value"
              position="inside"
              offset={-18}
              fill="var(--color-card-foreground)"
              fontSize={12}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}