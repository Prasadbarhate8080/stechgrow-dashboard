"use client";

import { TrendingUp, PackageIcon, Globe2, DollarSign } from "lucide-react";
import { ChartCard } from "./ChartCard";
import { GaugeChart } from "./GuageChart";
import BarChart from "./BarChart";
import { CountryTrendChart } from "./CountryTrendChart";
import StatsCards from "./StatsCards";

const gauge = [
  { name: "Carretera", value: 11.8, color: "var(--color-chart-6)" },
  { name: "Paseo", value: 11.8, color: "var(--color-chart-9)" },
  { name: "VTT", value: 11.8, color: "var(--color-chart-1)" },
  { name: "Vello", value: 11.8, color: "var(--color-chart-7)" },
  { name: "Montana", value: 11.8, color: "var(--color-chart-4)" },
  { name: "Amarilla", value: 11.8, color: "var(--color-chart-8)" },
];

const gaugeLegend = [
  { label: "Carretera", color: "var(--color-chart-6)" },
  { label: "Paseo", color: "var(--color-chart-9)" },
  { label: "VTT", color: "var(--color-chart-1)" },
  { label: "Vello", color: "var(--color-chart-7)" },
  { label: "Montana", color: "var(--color-chart-4)" },
  { label: "Amarilla", color: "var(--color-chart-8)" },
];

const brandLegend = gaugeLegend.slice(0, 3).map((l) => ({ ...l, label: "Carretera" }));

const yearwise = [
  { product: "Paseo", y2013: 21, y2014: 28 },
  { product: "VTT", y2013: 14, y2014: 24 },
  { product: "Vello", y2013: 20, y2014: 28 },
  { product: "Montana", y2013: 10, y2014: 18 },
  { product: "Carretera", y2013: 18, y2014: 28 },
];

const countries = [
  { country: "USA", sales: 21 },
  { country: "Canada", sales: 24 },
  { country: "France", sales: 22 },
  { country: "Germany", sales: 24 },
  { country: "Mexico", sales: 23 },
  { country: "UAE", sales: 26 },
  { country: "Australia", sales: 28 },
  { country: "Europe", sales: 26 },
];

export function Dashboard() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="sr-only">Sales analytics dashboard</h1>
          <StatsCards />
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={TrendingUp} label="Total Sales" value="119 M" />
          <StatCard icon={DollarSign} label="Total Profit" value="15 M" />
          <StatCard icon={PackageIcon} label="Total Unit Sold" value="1 M" />
          <StatCard icon={Globe2} label="Countries" value="647" />
        </div> */}

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ChartCard title="Total Sales by Product" legend={gaugeLegend}>
            <GaugeChart data={gauge} />
          </ChartCard>

          <ChartCard
            title="Total Sales by Product - Yearwise"
            legend={[
              { label: "2013", color: "var(--color-chart-1)" },
              { label: "2014", color: "var(--color-chart-2)" },
            ]}
          >
            <BarChart data={yearwise} />
          </ChartCard>

          <ChartCard title="Total Sales for Discounted Brands" legend={brandLegend}>
            <GaugeChart data={gauge} />
          </ChartCard>

          <ChartCard
            title="Total Sales by Country"
            legend={gaugeLegend.map((l) => ({ ...l, label: "Carretera" }))}
          >
            <GaugeChart data={gauge} />
          </ChartCard>

          <ChartCard title="Total Sales by Country - Yearwise" subtitle="Sum of Gross Sales - 20M">
            <CountryTrendChart data={countries} />
          </ChartCard>

          <ChartCard title="Total Sales by Segment" legend={brandLegend}>
            <GaugeChart data={gauge} />
          </ChartCard>
        </div>
      </div>
    </main>
  );
}