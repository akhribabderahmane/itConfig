"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export type Client = {
  id: string;
  name: string;
  ip: string;
  port: number;
  subscription: number;
  connection_status: "connected" | "disconnected" | "pending";
  current_requested_bandwidth: number;
  current_allocated_bandwidth: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "connection_status",
    header: () => (
      <div className=" text-xl text-[#71717A] px-4 py-4">Status</div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("connection_status");
      return (
        <div className="font-medium flex flex-row  items-center gap-4 px-2">
          <div
            className={`${
              status == "connected" ? " bg-green-500" : " bg-itconfig-red"
            } w-3 aspect-square rounded-full`}
          ></div>
          <div className="capitalize text-[#18181B] text-lg ">
            {status == "connected" ? " Online" : "Offline"}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className=" text-xl text-[#71717A]  py-4">Name</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name");
      return <div className="capitalize text-[#18181B] text-lg ">{name}</div>;
    },
  },
  {
    accessorKey: "current_allocated_bandwidth",
    header: ({ column }) => {
      return (
        <div className=" w-full flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <div className=" text-xl text-[#71717A]  py-4">
              Current Bandwith
            </div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const bandwith = row.getValue("current_allocated_bandwidth");
      return (
        <div className="capitalize text-[#18181B] text-lg flex justify-center items-center font-medium">
          {bandwith}{" "}
          <span className=" text-sm text-itconfig-blue-dark ml-1">Mbps</span>
        </div>
      );
    },
  },
  {
    accessorKey: "subscription",
    header: ({ column }) => {
      return (
        <div className=" w-full flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <div className=" text-xl text-[#71717A]  py-4">Max Bandwith</div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const bandwith = row.getValue("subscription");
      return (
        <div className="capitalize text-[#18181B] text-lg flex justify-center items-center font-medium">
          {bandwith}
          <span className=" text-sm text-itconfig-blue-dark ml-1">Mbps</span>
        </div>
      );
    },
  },
  {
    accessorKey: "current_requested_bandwidth",
    header: ({ column }) => {
      return (
        <div className=" w-full flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <div className=" text-xl text-[#71717A]  py-4">request</div>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const bandwith = row.getValue("current_requested_bandwidth");
      return (
        <div className="capitalize text-[#18181B] text-lg flex justify-center items-center font-medium">
          {bandwith}
          <span className=" text-sm text-itconfig-blue-dark ml-1">Mbps</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className=" flex justify-center items-center">
              <Button variant="primary" className=" bg-itconfig-red hover:bg-itconfig-red/90 text-sm w-full">desconnect</Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" flex justify-center items-center">
              <Button variant="primary" className="  bg-red-500 hover:bg-red-500/90 text-sm text-itconfig-bgColor w-full">Ban</Button>
            </DropdownMenuItem>
            <DropdownMenuItem className=" flex justify-center items-center">
              <Button variant="primary" className=" bg-green-500 hover:bg-green-500/90 text-sm text-itconfig-bgColor w-full">connect</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
