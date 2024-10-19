const calculateAverages = (clients, intervalDays) => {
  const intervalDate = new Date();
  intervalDate.setDate(intervalDate.getDate() - intervalDays);

  return clients.map((client, index) => {
    const { bandwidth_logs } = client;

    // Filter logs within the interval
    const filteredLogs = bandwidth_logs.filter(
      (log) => new Date(log.timestamp) >= intervalDate
    );

    // Calculate averages
    const requestedTotal = filteredLogs.reduce(
      (sum, log) => sum + log.requested_bandwidth,
      0
    );
    const allocatedTotal = filteredLogs.reduce(
      (sum, log) => sum + log.allocated_bandwidth,
      0
    );

    const requestedAverage = filteredLogs.length
      ? requestedTotal / filteredLogs.length
      : 0;
    const allocatedAverage = filteredLogs.length
      ? allocatedTotal / filteredLogs.length
      : 0;

    return {
      index: index + 1,
      clientId: client.id,
      clientName: client.name,
      wants: requestedAverage,
      gets: allocatedAverage,
    };
  });
};
      
const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 50%)`
} 

function calculateBandwidthSum(clients, n) {
  const result = [];
  const nDaysAgo = new Date();
  nDaysAgo.setDate(nDaysAgo.getDate() - n); // Calculate date n days ago

  clients.forEach((client,index) => {
      const totalBandwidth = client.bandwidth_logs
          .filter(log => new Date(log.timestamp) >= nDaysAgo) // Filter logs for the last n days
          .reduce((sum, log) => sum + log.allocated_bandwidth, 0); // Sum allocated bandwidth
      
      result.push({"index":"client "+index+1,"name": client.name,"gets":totalBandwidth,"color":generateRandomColor() });
  });
  return result;
}

// Helper function to check if a log is within the time period
function isWithinPeriod(logDate, startDate, endDate) {
    return logDate >= startDate && logDate <= endDate;
  }
  
  // Function to generate aggregate bandwidth data
 function generateAggregateData(clients, period) {
    const dataPoints = [];
    const today = new Date();
    
    // 1. For 'day' (last 24 hours from 00:00 to 23:59)
    if (period === 'day') {
        for (let hour = 0; hour < 24; hour++) {
            const startHour = new Date(today);
            startHour.setHours(hour, 0, 0, 0);
            const endHour = new Date(startHour);
            endHour.setHours(hour, 59, 59, 999);
  
            const totals = { total_gets: 0, total_wants: 0 };
            clients.forEach(client => {
                client.bandwidth_logs.forEach(log => {
                    const logDate = new Date(log.timestamp);
                    if (isWithinPeriod(logDate, startHour, endHour)) {
                        totals.total_gets += log.allocated_bandwidth;
                        totals.total_wants += log.requested_bandwidth;
                    }
                });
            });
  
            dataPoints.push({
                "hour": `${hour}h`,
                "gets": totals.total_gets,
                "wants": totals.total_wants,
                "label":"hour"
            });
        }
    }
    
    // 2. For 'week' (last 7 days, Sunday to Saturday)
    else if (period === 'week') {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        for (let i = 6; i >= 0; i--) {
            const startDay = new Date(today);
            startDay.setDate(today.getDate() - i);
            startDay.setHours(0, 0, 0, 0);
            const endDay = new Date(startDay);
            endDay.setHours(23, 59, 59, 999);
  
            const totals = { total_gets: 0, total_wants: 0 };
            clients.forEach(client => {
                client.bandwidth_logs.forEach(log => {
                    const logDate = new Date(log.timestamp);
                    if (isWithinPeriod(logDate, startDay, endDay)) {
                        totals.total_gets += log.allocated_bandwidth;
                        totals.total_wants += log.requested_bandwidth;
                    }
                });
            });
  
            dataPoints.push({
                "day": daysOfWeek[startDay.getDay()],
                "gets": totals.total_gets,
                "wants": totals.total_wants,
                "label":"day"
            });
        }
    }
    
    // 3. For 'month' (last 30 days)
    else if (period === 'month') {
        for (let i = 29; i >= 0; i--) {
            const startDay = new Date(today);
            startDay.setDate(today.getDate() - i);
            startDay.setHours(0, 0, 0, 0);
            const endDay = new Date(startDay);
            endDay.setHours(23, 59, 59, 999);
  
            const totals = { total_gets: 0, total_wants: 0 };
            clients.forEach(client => {
                client.bandwidth_logs.forEach(log => {
                    const logDate = new Date(log.timestamp);
                    if (isWithinPeriod(logDate, startDay, endDay)) {
                        totals.total_gets += log.allocated_bandwidth;
                        totals.total_wants += log.requested_bandwidth;
                    }
                });
            });
  
            dataPoints.push({
                "date": startDay.toISOString().split('T')[0].slice(5), // Format YYYY-MM-DD
                "gets": totals.total_gets,
                "wants": totals.total_wants,
                "label":"date"
            });
        }
    }
  
    // 4. For 'year' (month-wise aggregation, January to December)
    else if (period === 'year') {
        for (let i = 11; i >= 0; i--) {
            const startMonth = new Date(today);
            startMonth.setMonth(today.getMonth() - i, 1); // First day of the month
            startMonth.setHours(0, 0, 0, 0);
            const endMonth = new Date(startMonth);
            endMonth.setMonth(startMonth.getMonth() + 1, 0); // Last day of the month
            endMonth.setHours(23, 59, 59, 999);
  
            const totals = { total_gets: 0, total_wants: 0 };
            clients.forEach(client => {
                client.bandwidth_logs.forEach(log => {
                    const logDate = new Date(log.timestamp);
                    if (isWithinPeriod(logDate, startMonth, endMonth)) {
                        totals.total_gets += log.allocated_bandwidth;
                        totals.total_wants += log.requested_bandwidth;
                    }
                });
            });
  
            dataPoints.push({
                "month": startMonth.toLocaleString('default', { month: 'long' }), // Full month name
                "gets": totals.total_gets,
                "wants": totals.total_wants,
                "label":"month"
            });
        }
    }
    
    return dataPoints;
  }


export { calculateAverages,calculateBandwidthSum,generateAggregateData};
