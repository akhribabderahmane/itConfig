import { User } from '../types/user';
import axios from "axios"
const API_URL = 'http://localhost:3000/users';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};
