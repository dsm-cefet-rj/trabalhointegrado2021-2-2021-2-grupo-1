import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchEventos = createAsyncThunk(
  "eventos/fetchEventos",
  async () => {
    return await (await fetch("http://localhost:3001/eventos")).json();
  }
);

const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  reducers: {
    addEvento: (state, action) => [...state, action.payload],
    editEvento: (state, action) => {
      return state.map((e) =>
        e.id === action.payload.id ? { ...e, ...action.payload } : e
      );
    },
    deleteEvento: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);

      state.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchEventos.fulfilled]: (state, action) => action.payload,
  },
});

export const { addEvento, editEvento, deleteEvento } = eventosSlice.actions;
export default eventosSlice.reducer;
