import { loginSuccess, authError } from '../auth/authSlice';
import { startLoading, stopLoading } from '../loading/loadingSlice';

import axios from 'axios';
import { fetchUsers } from '../../api/user'; // Reuse API to fetch users

interface Credentials {
    email: string;
    password: string;
}

// Sign Up Thunk
export const signupUser = (credentials: Credentials) => async (dispatch: any) => {
    try {
        dispatch(startLoading());

        const response = await axios.post("http://localhost:5000/api/auth/register", credentials)
        const newUser = response.data; // New user data
        // Automatically log in the user after signup
        dispatch(loginSuccess(newUser.token)); // Mark the new user as authenticated
    } catch (error: any) {
        dispatch(authError(error.message));
    } finally {
        dispatch(stopLoading());
    }
};

// Login Thunk
export const loginUser = (credentials: Credentials) => async (dispatch: any) => {
    try {
        dispatch(startLoading());

        const response = await axios.post("http://localhost:5000/api/auth/login", credentials)
        const user = response.data;

        // Log in the user if credentials match
        dispatch(loginSuccess(user.token)); // Mark the user as authenticated
    } catch (error: any) {
        dispatch(authError(error.message));
    } finally {
        dispatch(stopLoading());
    }
};
