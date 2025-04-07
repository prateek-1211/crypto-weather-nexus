import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    notifications: notificationReducer,
  },
});

export default store;
