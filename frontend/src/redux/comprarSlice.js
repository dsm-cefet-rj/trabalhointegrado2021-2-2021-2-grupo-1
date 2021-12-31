import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  meuCarrinho: [
    {
      id: "1",
      vendaId: "1",
      quantidade: "5",
      cpf: "12345678901",
    },
  ],
  compras: [],
};

export const fetchComprar = createAsyncThunk(
  "comprar/fetchComprar",
  async () => {
    return await (await fetch("http://localhost:3001/compras")).json();
  }
);

const comprarSlice = createSlice({
  name: "comprar",
  initialState,
  reducers: {
    addMeuCarrinho: (state, action) => {
      return {
        ...state,
        meuCarrinho: [...state.meuCarrinho, action.payload],
      };
    },
    addCompra: (state, action) => {
      return {
        ...state,
        compras: [...state.compras, action.payload],
      };
    },
    editCompra: (state, action) => {
      return {
        ...state,
        compras: state.compras.map((e) =>
          e.id === action.payload.id ? { ...e, ...action.payload } : e
        ),
      };
    },
    deleteComprar: (state, action) => {
      const index = state.compras.findIndex((e) => e.id === action.payload);

      state.compras.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchComprar.fulfilled]: (state, action) => {
      return {
        ...state,
        compras: action.payload,
      };
    },
  },
});

export const { addMeuCarrinho, addCompra, editCompra, deleteCompra } =
  comprarSlice.actions;
export default comprarSlice.reducer;
