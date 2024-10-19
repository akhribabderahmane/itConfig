import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';
import loadingReducer from '../features/loading/loadingSlice';
import serverReducer from "../features/server/serviceSlice"
import clientReducer from "../features/client/clientSlice"
const store = configureStore({
  reducer: {
      user: userReducer,
      auth: authReducer,
      loading: loadingReducer,
      server:serverReducer,
      client:clientReducer
  },
});

export default store;
// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>; // Export RootState type

// Export AppDispatch type for thunks
export type AppDispatch = typeof store.dispatch;