import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
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


const chartConfig = {
  wants: {
    label: "Wants",
    color: "#DB7B93",
  },
  gets: {
    label: "Gets",
    color: "#59E87F",
  },
} satisfies ChartConfig

import { fetchClients } from "@/features/client/clientSlice";
import { RootState } from "@/app/store";
import { calculateAverages } from "@/utils/charts";
const Bars = () => {
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
      setChartData(calculateAverages(clients, selectedInterVal));
      console.log("chartdata",chartData);
    }
  }, [clientStatus, dispatch, clients]);
  useEffect(() => {
    if (clientStatus === "succeeded") {
      setChartData(calculateAverages(clients,selectedInterVal));
      console.log(`chartdata ${selectedInterVal}`,chartData);
    }
  },[selectedInterVal]);

  return (
    <div className=" basis-1/2 space-y-10 py-10  px-8 bg-itconfig-BGCard rounded-2xl shadow-md border-[2px] border-itconfig-blue-dark/8">
      <div className=" flex flex-row justify-between items-center">
        <h2 className=" text-xl font-roboto font-bold italic">
          Clients Bandwidth
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
                <SelectItem value={1}>Last 24 hours</SelectItem>
                <SelectItem value={7}>Last week</SelectItem>
                <SelectItem value={30}>Last Month</SelectItem>
                <SelectItem value={365}>Last Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="index"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="wants" fill="var(--color-wants)" radius={4} />
          <Bar dataKey="gets" fill="var(--color-gets)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Bars;
