// src/redux/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        authError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, logout, authError } = authSlice.actions;
export default authSlice.reducer;
