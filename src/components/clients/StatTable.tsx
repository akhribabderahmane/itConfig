import React from 'react'
import { extractClientFields } from '@/utils/table'
import { fetchClients } from "@/features/client/clientSlice";
import { RootState } from "@/app/store";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DemoPage from '../table';
const StatTable = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state: RootState) => state.client.clients);
  const clientStatus = useSelector((state: RootState) => state.client.status);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (clientStatus === "idle") {
      dispatch(fetchClients()); // Fetch server data when component mounts
    } else if (clientStatus === "succeeded") {
      setChartData(extractClientFields(clients));
      console.log(clients)
      console.log("chartdata",chartData);
    }
  }, [clientStatus, dispatch, clients]);
  useEffect(()=>{
    setChartData(extractClientFields(clients));
      console.log(clients)
      console.log("chartdata",chartData);
  },[clientStatus])
  return (
    <div>
      <DemoPage />
    </div>
  )
}

export default StatTable
