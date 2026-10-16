import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    pendingRequests: 0,
  },
  reducers: {
    requestStarted: (state) => {
      state.pendingRequests += 1;
    },
    requestFinished: (state) => {
      state.pendingRequests = Math.max(0, state.pendingRequests - 1);
    },
  },
});

export const { requestStarted, requestFinished } = uiSlice.actions;

export default uiSlice.reducer;
