import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchVendas = createAsyncThunk("vendas/fetchVendas", async () => {
  return await (await fetch("http://localhost:3001/vendas")).json();
});

const vendasSlice = createSlice({
  name: "vendas",
  initialState,
  reducers: {
    addVenda: (state, action) => [...state, action.payload],
    vendaRealizada: (state, action) => {
      return state.map((e) => {
        if (e.id === action.payload) {
          return { ...e, quantidade: e.quantidade - 1 };
        }
        return e;
      });
    },
    editVenda: (state, action) => {
      return state.map((e) =>
        e.id === action.payload.id ? { ...e, ...action.payload } : e
      );
    },
    deleteVenda: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload);

      state.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchVendas.fulfilled]: (state, action) => action.payload,
  },
});

export const { addVenda, vendaRealizada, editVenda, deleteVenda } =
  vendasSlice.actions;
export default vendasSlice.reducer;
