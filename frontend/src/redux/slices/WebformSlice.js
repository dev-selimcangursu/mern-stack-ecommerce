import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postWebformService } from "../../services/WebformServices";

export const postWebform = createAsyncThunk(
  "create/webform",
  async (webform) => {
    const response = await postWebformService(webform);
    return response;
  }
);

const initialState = {
  webform: [],
};

export const WebformSlice = createSlice({
  name: "webform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postWebform.fulfilled, (state, action) => {
      state.webform = action.payload;
    });
  },
});

export default WebformSlice.reducer;
