import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async function (userName, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos?per_page=100`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
