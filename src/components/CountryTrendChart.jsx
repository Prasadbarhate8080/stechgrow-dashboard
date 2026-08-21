"use client";
import { AreaChart, Area, XAxis, CartesianGrid, ResponsiveContainer, LabelList, Tooltip } from "recharts";

export function CountryTrendChart({ data }) {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 28, right: 12, left: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="trendLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-chart-4)" />
              <stop offset="50%" stopColor="var(--color-chart-3)" />
              <stop offset="100%" stopColor="var(--color-chart-3)" />
            </linearGradient>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-chart-3)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--color-chart-4)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical strokeDasharray="3 4" stroke="var(--color-border)" horizontal={false} />
          <XAxis
            dataKey="country"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
          />
          <Tooltip
            cursor={false}
            contentStyle={{
              background: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              color: "var(--color-popover-foreground)",
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="url(#trendLine)"
            strokeWidth={3}
            fill="url(#trendFill)"
            dot={{ r: 4, fill: "var(--color-chart-3)", stroke: "none" }}
            activeDot={{ r: 6 }}
          >
            <LabelList
              dataKey="sales"
              position="top"
              formatter={(v) => `${v}M`}
              fill="var(--color-muted-foreground)"
              fontSize={11}
            />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}