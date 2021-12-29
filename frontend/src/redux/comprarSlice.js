import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchComprar = createAsyncThunk(
  "Comprar/fetchComprar",
  async () => {
    return await (await fetch("http://localhost:3001/Comprar")).json();
  }
);

const ComprarSlice = createSlice({
  name: "Comprar",
  initialState,
  reducers: {
    addCompra: (state, action) => [...state, action.payload],
    editCompra: (state, action) => {
      return state.map((e) =>
        e.id === action.payload.id ? { ...e, ...action.payload } : e
      );
    },
    deleteComprar: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);

      state.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchComprar.fulfilled]: (state, action) => action.payload,
  },
});

export const { addCompra, editCompra, deleteCompra } = ComprarSlice.actions;
export default ComprarSlice.reducer;
