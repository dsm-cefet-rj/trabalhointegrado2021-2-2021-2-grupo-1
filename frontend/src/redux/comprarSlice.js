import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  meuCarrinho: [],
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
    removeItemMeuCarrinho: (state, action) => {
      const index = state.meuCarrinho.findIndex((e) => e.id === action.payload);

      state.meuCarrinho.splice(index, 1);
    },
    removeTudoMeuCarrinho: (state, action) => {
      return {
        ...state,
        meuCarrinho: [],
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
    deleteCompra: (state, action) => {
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

export const {
  addMeuCarrinho,
  removeItemMeuCarrinho,
  removeTudoMeuCarrinho,
  addCompra,
  editCompra,
  deleteCompra,
} = comprarSlice.actions;
export default comprarSlice.reducer;
