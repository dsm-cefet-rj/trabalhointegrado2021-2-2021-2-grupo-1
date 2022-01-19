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

export const fetchVendas = createAsyncThunk(
  "vendas/fetchVendas",
  async () => {
    return await httpGet("http://localhost:3001/vendas");
  }
);

export const addVenda = createAsyncThunk(
  "vendas/addVenda",
  async (venda) => {
    return await httpPost("http://localhost:3001/vendas", venda);
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
      state.error = "Falha ao buscar vendas: " + action.error.message;
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
      state.error = "Falha ao adicionar venda: " + action.error.message;
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
      state.error = "Falha ao editar venda: " + action.error.message;
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
      state.error = "Falha ao deletar venda: " + action.error.message;
    },
  },
});

export const {
  selectAll: selectAllVendas,
  selectById: selectVendaById,
  selectIds: selectVendasIds,
} = vendasAdapter.getSelectors((state) => state.vendas);

export default vendasSlice.reducer;
