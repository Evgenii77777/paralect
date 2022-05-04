import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async function (USERNAME, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "token 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",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
