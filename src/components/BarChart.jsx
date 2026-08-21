"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const demoData = [
  { product: "Paseo", year2013: 20, year2014: 28 },
  { product: "VTT", year2013: 16, year2014: 24 },
  { product: "Vello", year2013: 20, year2014: 28 },
  { product: "Montana", year2013: 12, year2014: 22 },
  { product: "Carretera", year2013: 18, year2014: 28 },
];

export default function BarChart({ data = demoData }) {
  return (
    <div className="h-[356px] w-[494px] rounded-[10px] border border-white/5 bg-[#181818] p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-normal text-white">
          Total Sales by Product - Yearwise
        </h2>

        <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#101010]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 19L19 5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M10 5H19V14"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6500ff]" />
          <span className="text-[9px] text-gray-300">2013</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#5757ff]" />
          <span className="text-[9px] text-gray-300">2014</span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-2 h-[245px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{
              top: 10,
              right: 2,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="18%"
          >
            <defs>
              <linearGradient
                id="bar2013"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#6500ff"
                  stopOpacity={0.95}
                />
                <stop
                  offset="100%"
                  stopColor="#6500ff"
                  stopOpacity={0.05}
                />
              </linearGradient>

              <linearGradient
                id="bar2014"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#5b5cff"
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor="#5b5cff"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="product"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#858585",
                fontSize: 8,
              }}
              dy={8}
            />

            <Bar
              dataKey="year2013"
              fill="url(#bar2013)"
              barSize={24}
              radius={[1, 1, 0, 0]}
            />

            <Bar
              dataKey="year2014"
              fill="url(#bar2014)"
              barSize={24}
              radius={[1, 1, 0, 0]}
            >
              <LabelList
                dataKey="year2014"
                position="top"
                content={({ x, y, width, value }) => (
                  <g>
                    <rect
                      x={x + width / 2 - 16}
                      y={y + 7}
                      width={32}
                      height={20}
                      rx={2}
                      fill="#6668ff"
                    />
                    <text
                      x={x + width / 2}
                      y={y + 21}
                      textAnchor="middle"
                      fill="white"
                      fontSize="9"
                    >
                      {value}M
                    </text>
                  </g>
                )}
              />
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}