import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../../services/AuthServices";

export const registerPost = createAsyncThunk(
  "auth/register",
  async (registerForm) => {
    const response = await register(registerForm);
    return response;
  }
);

const initialState = {
  register: [],
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerPost.fulfilled, (state, action) => {
        state.loading = false;
        state.register = action.payload;
      })
      .addCase(registerPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
