import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../async/get-user";

const todoSlice = createSlice({
  name: "User",
  initialState: {
    user: [],
    status: "",
    loading: false,
    error: false,
    closed: false,
  },

  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = false;
      state.closed = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "fulfilled";
      state.user = action.payload;
      state.closed = true;
    },
    [fetchUser.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
      state.loading = false;
      state.closed = false;
    },
  },
});

export default todoSlice.reducer;
