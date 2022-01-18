import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { httpDelete, httpGet, httpPut, httpPost } from "../utils";

const comprasAdapter = createEntityAdapter();

const initialState = {
  meuCarrinho: [],
  compras: [],
};

export const fetchComprar = createAsyncThunk(
  "comprar/fetchComprar",
  async () => {
    return await (await fetch("http://localhost:3001/compras")).json();
        return await httpGet("http://localhost:3001/compras");
  }
);

export const addCompra = createAsyncThunk(
  "compras/addCompra",
  async (projeto) => {
    return await httpPost("http://localhost:3001/compras", projeto);
  }
);

export const deleteCompra = createAsyncThunk(
  "Compras/deleteCompra",
  async (id) => {
    await httpDelete(`http://localhost:3001/compras/${id}`);
    return id;
  }
);

export const updateCompra = createAsyncThunk(
  "eventos/updateCompra",
  async (compras) => {
    return await httpPut(`http://localhost:3001/compras/${ingresso.id}`, ingresso);
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
    extraReducers: {
    [fetchMeuCarrinho.fulfilled]: (state, action) => {
      state.status = "loaded";
      comprasAdapter.setAll(state, action.payload);
      
    },
     [fetchCompras.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCompras.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar projetos: " + action.error.message;
    },
    [addCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.addOne(state, action.payload);
    },
    [addCompra.pending]: (state, action) => {
      state.status = "loading";
    },
    [addCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao adicionar projeto: " + action.error.message;
    },
    [updateCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.upsertOne(state, action.payload);
    },
    [updateCompra.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao editar projeto: " + action.error.message;
    },
    [deleteCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.removeOne(state, action.payload);
    },
    [deleteCompras.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao deletar projeto: " + action.error.message;
});

export const {
  addMeuCarrinho,
  removeItemMeuCarrinho,
  removeTudoMeuCarrinho,
} = comprarSlice.actions;
    export const {
  selectAll: selectAllCompras,
  selectById: selectCompraById,
  selectIds: selectComprasIds,
} = comprasAdapter.getSelectors((state) => state.compras);
export default comprarSlice.reducer;
 
