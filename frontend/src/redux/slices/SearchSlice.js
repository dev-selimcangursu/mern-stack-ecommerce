import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchService } from "../../services/SearchService";

export const fetchSearchResult = createAsyncThunk(
  "product/search",
  async (productName) => {
    const response = await searchService(productName);
    return response;
  }
);

const initialState = {
  search: [],
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export default SearchSlice.reducer;
