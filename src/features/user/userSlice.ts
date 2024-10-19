// src/redux/slices/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {},
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        clearUserDetails: (state) => {
            state.userDetails = {};
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUserDetails, clearUserDetails, setError } = userSlice.actions;
export default userSlice.reducer;
