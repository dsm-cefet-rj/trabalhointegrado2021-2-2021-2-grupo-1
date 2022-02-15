import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import apiRequest from "../utils/apiRequest";

const ingressosAdapter = createEntityAdapter();

const initialState = ingressosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchIngressos = apiRequest("ingressos/fetchIngressos", "get");

export const addIngresso = apiRequest("ingressos/addIngresso", "post");

export const deleteIngresso = apiRequest("ingressos/deleteIngresso", "delete");

export const updateIngresso = apiRequest("ingressos/updateIngresso", "put");

const ingressosSlice = createSlice({
  name: "ingressos",
  initialState,
  extraReducers: {
    [fetchIngressos.fulfilled]: (state, action) => {
      state.status = "loaded";
      ingressosAdapter.setAll(state, action.payload);
    },
    [fetchIngressos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchIngressos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar ingressos: " + action.error.message;
    },
    [addIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.addOne(state, action.payload);
    },
    [addIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [addIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [updateIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.upsertOne(state, action.payload);
    },
    [updateIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [deleteIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.removeOne(state, action.payload);
    },
    [deleteIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllIngressos,
  selectById: selectIngressoById,
  selectIds: selectIngressosIds,
} = ingressosAdapter.getSelectors((state) => state.ingressos);

export default ingressosSlice.reducer;
