import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default function DemoPage() {
  const clientData = [
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 11,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Aerona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "desconnected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
    {
      id: "4bb045ff-d65f-46b0-a398-4ff96bc5e9c9",
      name: "Verona.Rolfson",
      ip: "122.238.206.33",
      port: 8190,
      subscription: 11,
      connection_status: "connected",
      current_requested_bandwidth: 15,
      current_allocated_bandwidth: 12,
    },
  ];
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <div className="">
      <DataTable columns={columns} data={clientData} />
    </div>
  );
}
