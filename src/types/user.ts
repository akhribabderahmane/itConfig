export interface User {
  id: number;          // Unique identifier for the user
  name: string;        // User's name
  email: string;       // User's email
  password: string;    // User's password (consider hashed in real apps)
}