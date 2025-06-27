import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sectionSlugProductService } from "../../services/ProductServices";

// Home Banner Tıklanınca İlgili Ürün Detayı
export const fetchSectionProduct = createAsyncThunk(
  "section/slug/product",
  async (productSlug) => {
    const response = await sectionSlugProductService(productSlug);
    return response;
  }
);

const initialState = {
  sectionProduct: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSectionProduct.fulfilled, (state, action) => {
      state.sectionProduct = action.payload;
    });
  },
});

export default ProductSlice.reducer;
