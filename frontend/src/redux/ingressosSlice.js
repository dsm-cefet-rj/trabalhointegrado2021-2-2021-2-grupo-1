import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchIngressos = createAsyncThunk(
  "ingressos/fetchIngressos",
  async () => {
    return await (await fetch("http://localhost:3001/ingressos")).json();
  }
);

const ingressosSlice = createSlice({
  name: "ingressos",
  initialState,
  reducers: {
    addIngresso: (state, action) => [...state, action.payload],
    editIngresso: (state, action) => {
      return state.map((e) =>
        e.id === action.payload.id ? { ...e, ...action.payload } : e
      );
    },
    deleteIngresso: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);

      state.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchIngressos.fulfilled]: (state, action) => action.payload,
  },
});

export const { addIngresso, editIngresso, deleteIngresso } = ingressosSlice.actions;
export default ingressosSlice.reducer;
