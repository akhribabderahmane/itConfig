import axios from "axios"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL="http://localhost:3000/server"
const initialState = {
    server: {
        name: '',
        ip: '',
        port: 0,
        total_bandwidth: 0,
        used_bandwidth: 0,
    },
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

export const fetchServer = createAsyncThunk(
    'server/fetchServer',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data; // Assuming it returns the server data
    }
);

export const updateServer = createAsyncThunk(
    'server/updateServer',
    async (serverData) => {
        const response = await axios.put(BASE_URL, serverData);
        return response.data; // Assuming it returns the updated server data
    }
);

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch server
            .addCase(fetchServer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.server = action.payload; // Update the server state
            })
            .addCase(fetchServer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Update server
            .addCase(updateServer.fulfilled, (state, action) => {
                state.server = action.payload; // Update the server data
            });
    },
});

export default serverSlice.reducer;
export const actions = { fetchServer, updateServer };




