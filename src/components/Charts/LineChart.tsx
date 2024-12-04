import {} from "tailwind-merge";

import {
  CartesianGrid,
  Line,
  LineChart as LineChartRecharts,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Calendar } from "lucide-react";

const chartData = [
  { day: 26, visitors: 100 },
  { day: 27, visitors: 50 },
  { day: 28, visitors: 60 },
  { day: 29, visitors: 200 },
  { day: 30, visitors: 166 },
  { day: 1, visitors: 24 },
  { day: 2, visitors: 124 },
  { day: 3, visitors: 10 },
  { day: 4, visitors: 20 },
  { day: 5, visitors: 40 },
  { day: 6, visitors: 80 },
  { day: 7, visitors: 120 },
  { day: 8, visitors: 50 },
  { day: 9, visitors: 65 },
  { day: 10, visitors: 98 },
  { day: 11, visitors: 18 },
  { day: 12, visitors: 2 },
  { day: 13, visitors: 9 },
  { day: 14, visitors: 46 },
  { day: 15, visitors: 42 },
  { day: 16, visitors: 78 },
  { day: 17, visitors: 86 },
  { day: 18, visitors: 186 },
  { day: 19, visitors: 186 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function LineChart() {
  return (
    <Card className="border-none shadow-none h-full">
      <CardHeader className="flex-row items-center justify-between pt-0 px-0">
        <CardTitle>Visitantes</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="text-blue-dark" size={16} /> 26 de junho - 25 de
          julho
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="max-h-[270px] w-full">
          <LineChartRecharts
            accessibilityLayer
            data={chartData}
            margin={{
              bottom: 0,
              top: 0,
              right: 0,
              left: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="10 20" />
            <YAxis
              dataKey="visitors"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="visitors"
              type="bump"
              className="text-blue-dark"
              strokeWidth={2}
              dot={false}
            />
          </LineChartRecharts>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
