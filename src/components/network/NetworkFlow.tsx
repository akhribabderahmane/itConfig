import React, { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ClientNode from "./ClientNode"; // Custom client node component
import ServerNode from "./ServerNode"; // Custom server node component
import axios from "axios"; // If you prefer Axios, install with npm install axios
import RouterNode from "./RouterNode";
const server = {
  name: "IT config",
  ip: "192.168.1.100",
  port: 8080,
  total_bandwidth: 3000,
  used_bandwidth: 0,
};
const initialServerNode = [
  {
    id: "node-0",
    type: "serverNode", // Custom server node
    position: { x: 300, y: -100 },
    data: server,
  },
  {
    id: "node-1",
    type: "routerNode", // Custom server node
    position: { x: 300, y: 100 },
    data: { value: "ROUTER" },
  },
];
const initialEdges = [
  {
    id: "1000292",
    source: "node-0",
    target: "node-1",
    animated: true,
    style: { stroke: "#db2777", strokeWidth: 4 },
  },
];

const nodeTypes = {
  serverNode: ServerNode,
  clientNode: ClientNode,
  routerNode: RouterNode,
};

const NetworkFlow = () => {
  const [nodes, setNodes] = useState(initialServerNode); // Start with just the server
  const [edges, setEdges] = useState(initialEdges); // Edges will be dynamically created
  const [clients, setClients] = useState([]); // To store fetched client data

  // Fetch client data from the server
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/traffic/clients"); // Replace with your actual URL
        const clientData = response.data;

        // Create client nodes based on the fetched data
        const clientNodes = clientData
        .filter(client => client.connection_status === "connected") // Filter clients based on connection status
        .map((client, index) => ({
          id: `client-${client.id}`,
          type: "clientNode",
          position: { x: 0 + index * 300, y: 300 + (index % 6) * 4 }, // Dynamically position nodes
          data: { ...client, index: index + 1 }, // Include the index in the data
        }));

      // Create edges that connect each connected client to the server
      const clientEdges = clientData
        .filter(client => client.connection_status === "connected") // Filter clients based on connection status
        .map((client) => ({
          id: `e1-${client.id}`, // Unique ID for each edge
          source: "node-1", // Connect clients to server node
          target: `client-${client.id}`, // Client node ID
          animated: true,
          style: { stroke: "#db2777", strokeWidth: 4 }, // Customize edge style
        }));
        // Update state with the fetched nodes and edges
        setNodes((nds) => [...initialServerNode, ...clientNodes]);
        setEdges([...initialEdges,...clientEdges]);
        setClients(clientData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []); // Empty dependency array ensures this runs once on component mount

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        defaultZoom={0.9}
        className="bg-itconfig-bgColor"
      >
        <Background color="#e0f7fa" variant="lines" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default NetworkFlow;
