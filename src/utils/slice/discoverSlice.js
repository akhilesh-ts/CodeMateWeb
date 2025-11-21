import { createSlice } from "@reduxjs/toolkit";

const discoverSlice = createSlice({
  name: "discover",
  initialState: null,
  reducers: {
    addFeeds: (state, action) => action.payload,
    removeFeeds: () => null,
  },
});

export const { addFeeds, removeFeeds } = discoverSlice.actions;

export default discoverSlice.reducer;
