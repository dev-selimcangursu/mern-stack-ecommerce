import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  sectionSlugProductService,
  sectionIsPopularService,
} from "../../services/ProductServices";

// Home Banner Tıklanınca İlgili Ürün Detayı
export const fetchSectionProduct = createAsyncThunk(
  "section/slug/product",
  async (productSlug) => {
    const response = await sectionSlugProductService(productSlug);
    return response;
  }
);

// Anasayfa Öne Çıkan Ürünleri Getir
export const fetchIsPopularProducts = createAsyncThunk(
  "section/populer/product",
  async () => {
    const response = await sectionIsPopularService();
    return response;
  }
);

const initialState = {
  sectionProduct: [],
  isPopularProduct: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSectionProduct.fulfilled, (state, action) => {
      state.sectionProduct = action.payload;
    });
    builder.addCase(fetchIsPopularProducts.fulfilled, (state, action) => {
      state.isPopularProduct = action.payload.data;
    });
  },
});

export default ProductSlice.reducer;
