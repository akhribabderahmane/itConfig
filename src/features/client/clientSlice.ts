import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL="http://localhost:5000"
const initialState = {
    clients: [], // Array to hold client data
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

export const fetchClients = createAsyncThunk(
    'clients/fetchClients',
    async () => {
        const response = await axios.get(BASE_URL+"/api/traffic/clients/logs");
        return response.data; // Assuming it returns an array of clients
    }
);

// Async thunk to update a client
export const updateClient = createAsyncThunk(
    'clients/updateClient',
    async (clientData) => {
        const response = await axios.put(`${BASE_URL}/${clientData.id}`,clientData);
        return response.data; // Assuming it returns the updated client data
    }
);

// Async thunk to delete a client
export const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async (clientId) => {
        await axios.delete(`"${BASE_URL}/${clientId}"`);
        return clientId; // Return the deleted client's ID
    }
);


const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch clients
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.clients = action.payload; // Update clients state with fetched data
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Update client
            .addCase(updateClient.fulfilled, (state, action) => {
                const index = state.clients.findIndex(client => client.id === action.payload.id);
                if (index !== -1) {
                    state.clients[index] = action.payload; // Update the client in the state
                }
            })
            // Delete client
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.clients = state.clients.filter(client => client.id !== action.payload); // Remove the client from the state
            });
    },
});
export default clientsSlice.reducer;
export const actions = { fetchClients, updateClient, deleteClient };