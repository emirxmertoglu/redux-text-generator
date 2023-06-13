import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { paragraphMapper } from "@/utils";

export const fetchParagraphs = createAsyncThunk(
  "generator/fetchParagraphs",
  async (params) => {
    try {
      const { number, format } = params;
      const response = await axios.get(
        `${
          import.meta.env.VITE_TEXT_GENERATOR_API_URL
        }/?type=all-meat&paras=${number}&format=${format}`
      );
      return paragraphMapper(response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  paragraphs: [],
  status: "idle",
  error: null,
};

const generatorSlice = createSlice({
  name: "generator",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchParagraphs.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchParagraphs.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.paragraphs = action.payload;
    });
    builder.addCase(fetchParagraphs.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default generatorSlice.reducer;
