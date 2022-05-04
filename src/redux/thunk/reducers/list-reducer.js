import { createSlice } from "@reduxjs/toolkit";
import { fetchList } from "../async/get-list";

const todoSlice = createSlice({
  name: "List",
  initialState: {
    list: [],
    status: "",
    loading: false,
    error: false,
    closed: false,
  },

  extraReducers: {
    [fetchList.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
      state.error = false;
      state.closed = false;
    },
    [fetchList.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "fulfilled";
      state.list = action.payload;
      state.closed = true;
    },
    [fetchList.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
      state.loading = false;
      state.closed = false;
    },
  },
});

export default todoSlice.reducer;
