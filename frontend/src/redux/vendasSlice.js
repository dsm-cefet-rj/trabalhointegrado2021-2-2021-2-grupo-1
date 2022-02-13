import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import apiRequest from "../utils/utils";

const vendasAdapter = createEntityAdapter();

const initialState = vendasAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchVendas = apiRequest("vendas/fetchVendas", "get");

export const addVenda = apiRequest("vendas/addVenda", "post");

export const deleteVenda = apiRequest("vendas/deleteVenda", "delete");

export const updateVenda = apiRequest("vendas/updateVenda", "put");

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
      state.error = action.payload;
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
      state.error = action.payload;
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
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllVendas,
  selectById: selectVendaById,
  selectIds: selectVendasIds,
} = vendasAdapter.getSelectors((state) => state.vendas);

export default vendasSlice.reducer;
