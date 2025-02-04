"use client";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Janeiro", income: 186, outcome: 80 },
  { month: "Fevereiro", income: 305, outcome: 200 },
  { month: "Março", income: 237, outcome: 120 },
  { month: "Abril", income: 73, outcome: 190 },
  { month: "Maio", income: 209, outcome: 130 },
  { month: "Junho", income: 214, outcome: 140 },
];

const chartConfig = {
  income: {
    label: "Entradas",
    color: "hsl(var(--chart-1))",
  },
  outcome: {
    label: "Saídas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          hide
          width={30}
          scale="auto"
          padding={{ top: 10, bottom: 10 }}
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillincome" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-income)"
              stopOpacity={0.6}
            />
            <stop
              offset="95%"
              stopColor="var(--color-income)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-outcome)"
              stopOpacity={0.6}
            />
            <stop
              offset="95%"
              stopColor="var(--color-outcome)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="outcome"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-outcome)"
          stackId="a"
        />
        <Area
          dataKey="income"
          type="natural"
          fill="url(#fillincome)"
          fillOpacity={0.4}
          stroke="var(--color-income)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};

export const FinancialInsights = () => {
  return (
    <div className="h-full flex flex-col gap-3">
      <h3 className="text-lg font-bold">Financial Insights</h3>

      <div className="flex flex-col gap-1">
        <p>Account Balance</p>
        <h2 className="text-4xl font-bold">$12,943.00</h2>
        <p className="text-xs text-ui-text-foreground">
          Last 30 days{" "}
          <span className="text-ui-highlight font-semibold">+60%</span>
        </p>
      </div>

      <Chart />
    </div>
  );
};
