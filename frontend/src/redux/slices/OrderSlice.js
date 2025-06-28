import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchOrderService } from "../../services/OrderServices";
export const fetchSearchOrder = createAsyncThunk(
  "order/search",
  async (orderNumber) => {
    const response = await searchOrderService(orderNumber);
    return response;
  }
);

const initialState = {
  searchResult: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchOrder.fulfilled, (state, action) => {
      state.searchResult = action.payload;
    });
  },
});

export default OrderSlice.reducer;
