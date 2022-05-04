import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async function (userName, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "token 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",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
