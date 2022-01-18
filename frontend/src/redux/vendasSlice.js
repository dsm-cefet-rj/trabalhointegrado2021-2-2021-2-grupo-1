import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { httpDelete, httpGet, httpPut, httpPost } from "../utils";

const vendasAdapter = createEntityAdapter();

const initialState = vendasAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchVendass = createAsyncThunk(
  "vendas/fetchVendas",
  async () => {
    return await httpGet("http://localhost:3001/vendas");
  }
);

export const addVenda = createAsyncThunk(
  "vendas/addVenda",
  async (projeto) => {
    return await httpPost("http://localhost:3001/vendas", projeto);
  }
);

export const deleteVenda = createAsyncThunk(
  "vendas/deleteVenda",
  async (id) => {
    await httpDelete(`http://localhost:3001/vendas/${id}`);
    return id;
  }
);

export const updateVenda = createAsyncThunk(
  "vendas/updateVenda",
  async (venda) => {
    return await httpPut(`http://localhost:3001/vendas/${venda.id}`, venda);
  }
);

const vendasSlice = createSlice({
  name: "vendas",
  initialState,
  extraReducers: {
    [fetchVendas.fulfilled]: (state, action) => {
      state.status = "loaded";
      vendasAdapter.setAll(state, action.payload);
    },
    [fetchVendas.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchVendas.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar projetos: " + action.error.message;
    },
    [addVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.addOne(state, action.payload);
    },
    [addVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [addVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao adicionar projeto: " + action.error.message;
    },
    [updateVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.upsertOne(state, action.payload);
    },
    [updateVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao editar projeto: " + action.error.message;
    },
    [deleteVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.removeOne(state, action.payload);
    },
    [deleteVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao deletar projeto: " + action.error.message;
    },
  },
});

export const {
  selectAll: selectAllVendas,
  selectById: selectVendaById,
  selectIds: selectVendassIds,
} = vendasAdapter.getSelectors((state) => state.vendas);

export default vendasSlice.reducer;
