import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    message: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.message.push(action.payload);
    },
    clearNotifications: (state) => {
      state.message = [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationSlice.actions;

export default notificationSlice.reducer;
