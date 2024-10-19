import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  wants: {
    label: "wants",
    color: "hsl(var(--chart-1))",
  },
  gets: {
    label: "gets",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { generateAggregateData } from "@/utils/charts";
import { fetchClients } from "@/features/client/clientSlice";
const LineDraw = () => {
  const [selectedInterVal, setSelectedInterval] = useState("day");
  const handleSelectInterval = (value) => {
    setSelectedInterval(value);
    console.log(value);
    if (clientStatus === "succeeded"){
      console.log(clients)
    }

  };
  const dispatch = useDispatch();
  const clients = useSelector((state: RootState) => state.client.clients);
  const clientStatus = useSelector((state: RootState) => state.client.status);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (clientStatus === "idle") {
      dispatch(fetchClients()); // Fetch server data when component mounts
    } else if (clientStatus === "succeeded") {
      setChartData(generateAggregateData(clients,selectedInterVal));
      console.log("chartdata",chartData);
    }
  }, [clientStatus, dispatch, clients]);
  useEffect(() => {
    if (clientStatus === "succeeded") {
      setChartData(generateAggregateData(clients,selectedInterVal));
      console.log(`chartdata ${selectedInterVal}`,chartData);
    }
  },[selectedInterVal]);
 
   const dectionnaryLabels={
    "day": "hour",
    "week": "day",
    "month": "date",
    "year": "month",
   }
  return (
    <div className=" basis-1/2 space-y-10 py-10  px-8 bg-itconfig-BGCard rounded-2xl shadow-md border-[2px] border-itconfig-blue-dark/8">
      <div className=" flex flex-row justify-between items-center">
        <h2 className=" text-xl font-roboto font-bold italic">
          Bandwidth distribution
        </h2>
        <div>
          <Select
            onValueChange={handleSelectInterval}
            defaultValue={selectedInterVal}
          >
            <SelectTrigger className="w-[300px] h-[40px] text-lg font-roboto ">
              <SelectValue placeholder="Select an interval" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className=" font-medium">Intervals</SelectLabel>
                <SelectItem value={"day"}>Last 24 hours</SelectItem>
                <SelectItem value={"week"}>Last week</SelectItem>
                <SelectItem value={"month"}>Last Month</SelectItem>
                <SelectItem value={"year"}>Last Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="">
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dectionnaryLabels[selectedInterVal]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="gets"
              type="monotone"
              stroke="var(--color-gets)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="wants"
              type="monotone"
              stroke="var(--color-wants)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default LineDraw;
