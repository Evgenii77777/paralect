import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async function (USERNAME, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.github.com/users/${USERNAME}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
