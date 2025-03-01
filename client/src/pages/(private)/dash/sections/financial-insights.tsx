"use client";

import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTransaction } from "@/context/transaction";
import { cn } from "@/lib/utils";

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
  const { transactions } = useTransaction();

  const getChartData = () => {
    if (!transactions || transactions.length === 0) {
      return [];
    }

    const data = transactions.map((transaction) => {
      return {
        month: transaction.date,
        income: transaction.type === "income" ? transaction.amount : 0,
        outcome: transaction.type === "expense" ? transaction.amount : 0,
      };
    });

    console.log(data);

    return data;
  };

  const chartData = getChartData();

  console.log(chartData);

  return (
    <ChartContainer key={transactions?.length} config={chartConfig}>
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

const TotalValue = () => {
  const { transactions } = useTransaction();

  const total = transactions.reduce((acc, transaction) => {
    return transaction.type === "income"
      ? acc + parseFloat(transaction.amount)
      : acc - parseFloat(transaction.amount);
  }, 0);

  const formatTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return <h2 className="text-4xl font-bold">{formatTotal}</h2>;
};

const Peercents = () => {
  const { transactions } = useTransaction();

  const calculatePercentageChange = () => {
    if (!transactions || transactions.length === 0) {
      return 0;
    }

    const last30DaysTransactions = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - transactionDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 30;
    });

    const totalIncome = last30DaysTransactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const totalOutcome = last30DaysTransactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const netChange = totalIncome - totalOutcome;
    const percentageChange = (netChange / totalOutcome) * 100;

    return percentageChange.toFixed(2);
  };

  const percentageChange = calculatePercentageChange();

  const isNegative = Boolean(parseFloat(percentageChange || "0") < 0);

  return (
    <p className="text-xs text-ui-text-foreground">
      Last 30 days{" "}
      <span
        className={cn(
          "text-ui-highlight font-semibold",
          isNegative && "text-red-500"
        )}
      >
        {parseFloat(percentageChange || "0") > 0
          ? `+${percentageChange}%`
          : `${percentageChange}%`}
      </span>
    </p>
  );
};

export const FinancialInsights = () => {
  return (
    <div className="h-full flex flex-col gap-3">
      <h3 className="text-lg font-bold">Financial Insights</h3>

      <div className="flex flex-col gap-1">
        <p>Account Balance</p>
        <TotalValue />
        <Peercents />
      </div>

      <Chart />
    </div>
  );
};
