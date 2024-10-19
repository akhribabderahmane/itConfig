function extractClientFields(clients) {
    return clients.map((client,index) => {
        return {
            id: client.id,
            index:index+1,
            name: client.name,
            ip: client.ip,
            port: client.port,
            subscription: client.subscription,
            connection_status: client.connection_status,
            current_requested_bandwidth: client.current_requested_bandwidth,
            current_allocated_bandwidth: client.current_allocated_bandwidth
        };
    });
}


export {extractClientFields}


