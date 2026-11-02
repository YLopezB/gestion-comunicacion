import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../service/api.js";

export const fetchCompany = createAsyncThunk(
  "company/fetchCompany",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await apiFetch(
        "/api/company/profile",
        { method: "GET" },
        dispatch,
      );
    } catch (error) {
      return rejectWithValue(
        error.message || "No se pudo consultar la empresa",
      );
    }
  },
);

export const updateCompany = createAsyncThunk(
  "company/updateCompany",
  async (form, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiFetch(
        "/api/company/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
        dispatch,
      );

      return response.profile;
    } catch (error) {
      return rejectWithValue(
        error.message || "No se pudo actualizar la empresa",
      );
    }
  },
);

const initialState = {
  company: null,
  status: "idle",
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    clearCompany: (state) => {
      state.company = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompany.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.company = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.company = null;
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateCompany.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.company = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearCompany } = companySlice.actions;
export default companySlice.reducer;
