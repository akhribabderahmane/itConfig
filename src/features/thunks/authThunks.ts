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

        // Fetch users to check if the email already exists
        const users = await fetchUsers();
        const existingUser = users.find((u: any) => u.email === credentials.email);

        if (existingUser) {
            throw new Error('Email already registered');
        }

        // Add new user to the JSON server
        const newUser = { ...credentials, id: users.length + 1 };
        await axios.post('http://localhost:3000/users', newUser);

        // Automatically log in the user after signup
        dispatch(loginSuccess(newUser)); // Mark the new user as authenticated
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

        // Fetch users and find matching credentials
        const users = await fetchUsers();
        const user = users.find((u: any) => u.email === credentials.email && u.password === credentials.password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Log in the user if credentials match
        dispatch(loginSuccess(user)); // Mark the user as authenticated
    } catch (error: any) {
        dispatch(authError(error.message));
    } finally {
        dispatch(stopLoading());
    }
};
