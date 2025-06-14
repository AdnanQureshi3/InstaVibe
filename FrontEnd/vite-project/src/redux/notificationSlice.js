import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: []
  },
  reducers: {
    setNotification: (state, action) => {
      if (action.payload.type === "Liked") {
        state.notifications.push(action.payload);
      } else if (action.payload.type === "Unliked") {
        state.notifications = state.notifications.filter(
          item =>
            !(
              item.user._id === action.payload.user._id &&
              item.postId === action.payload.postId
            )
        );
      }
    },
    clearNotification: (state) => {
      state.notifications = [];
    }
  }
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
