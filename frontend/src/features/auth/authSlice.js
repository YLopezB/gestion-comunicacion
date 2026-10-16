import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../service/api.js";

// Consulta al backend si la sesión de la cookie sigue vigente.
export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiFetch(
        "/api/auth/me",
        { method: "GET" },
        dispatch,
      );

      if (response.status === 401) {
        return null;
      }

      if (!response.ok) {
        return rejectWithValue("No se pudo verificar la sesión");
      }

      const data = await response.json();
      return data.user;
    } catch {
      return rejectWithValue("No se pudo conectar con el servidor");
    }
  },
);

const initialState = {
  user: null,
  status: "checking",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.status = "unauthenticated";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "checking";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = action.payload ? "authenticated" : "unauthenticated";
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.user = null;
        state.status = "unauthenticated";
        state.error = action.payload || "No se pudo verificar la sesión";
      });
  },
});

export const { clearUser } = authSlice.actions;
export default authSlice.reducer;
