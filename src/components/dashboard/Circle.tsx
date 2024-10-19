import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Function to generate a random vibrant color

import { fetchClients } from "@/features/client/clientSlice";
import { RootState } from "@/app/store";
import { calculateBandwidthSum } from "@/utils/charts";
const Circle = () => {
  const [selectedInterVal, setSelectedInterval] = useState(1);
  const handleSelectInterval = (value) => {
    setSelectedInterval(value);
    console.log(value);
  };
  const dispatch = useDispatch();
  const clients = useSelector((state: RootState) => state.client.clients);
  const clientStatus = useSelector((state: RootState) => state.client.status);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (clientStatus === "idle") {
      dispatch(fetchClients()); // Fetch server data when component mounts
    } else if (clientStatus === "succeeded") {
      setChartData(calculateBandwidthSum(clients, selectedInterVal));
      console.log("chartdata", chartData);
    }
  }, [clientStatus, dispatch, clients]);
  useEffect(() => {
    if (clientStatus === "succeeded") {
      setChartData(
        [...calculateBandwidthSum(clients, selectedInterVal)].slice(0, 7)
      );
      console.log(`chartdata ${selectedInterVal}`, chartData);
    }
  }, [selectedInterVal]);
  const chartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      gets: {
        label: "Bandwidth",
      },
    };
    chartData.forEach((item) => {
      config[item.id] = {
        label: item.id,
        color: item.color,
      };
    });
    return config;
  }, [chartData]);

  const totalBandwidth = React.useMemo(() => {
    return chartData.reduce((total, item) => total + item.gets, 0);
  }, [chartData]);
  return (
    <div className=" basis-1/2  space-y-10 py-10  px-8 bg-itconfig-BGCard rounded-2xl shadow-md border-[2px] border-itconfig-blue-dark/8">
      <div className=" flex flex-row justify-between items-center">
        <h2 className=" text-xl font-roboto font-bold italic">
          Bandwidth distribution{" "}
        </h2>
        <div className=" flex flex-row justify-between items-center">
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
                <SelectItem value={1}>Last 24 hours</SelectItem>
                <SelectItem value={7}>Last week</SelectItem>
                <SelectItem value={30}>Last Month</SelectItem>
                <SelectItem value={365}>Last Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <ChartContainer config={chartConfig}>
          <PieChart >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="gets"
              nameKey={"index"}
              innerRadius={80}
              outerRadius={150}
              strokeWidth={2}
              stroke="var(--background)"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Circle;
