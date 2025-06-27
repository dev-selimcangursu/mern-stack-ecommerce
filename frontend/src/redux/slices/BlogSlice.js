import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogService } from "../../services/BlogServices";

// En Yeni 8 Blogu Getir
export const fetchTop8Blog = createAsyncThunk(
  "blog/top8/fetch",
  async () => {
    const response = await fetchBlogService();
    return response.data;
  }
);

const initialState = {
  top8Blog: [],
  status: "idle",
  error: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop8Blog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTop8Blog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top8Blog = action.payload;
      })
      .addCase(fetchTop8Blog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
