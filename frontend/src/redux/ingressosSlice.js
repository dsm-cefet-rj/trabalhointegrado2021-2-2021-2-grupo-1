import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { httpDelete, httpGet, httpPut, httpPost } from "../utils";

const ingressosAdapter = createEntityAdapter();

const initialState = ingressosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchIngressos = createAsyncThunk(
  "ingressos/fetchIngressos",
  async () => {
    return await httpGet("http://localhost:3001/ingressos");
  }
);

export const addIngresso = createAsyncThunk(
  "ingressos/addIngresso",
  async (ingresso) => {
    return await httpPost("http://localhost:3001/ingressos", ingresso);
  }
);

export const deleteIngresso = createAsyncThunk(
  "ingressos/deleteIngresso",
  async (id) => {
    await httpDelete(`http://localhost:3001/ingressos/${id}`);
    return id;
  }
);

export const updateIngresso = createAsyncThunk(
  "ingressos/updateIngresso",
  async (ingresso) => {
    return await httpPut(`http://localhost:3001/ingressos/${ingresso.id}`, ingresso);
  }
);

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
      state.error = "Falha ao adicionar ingresso: " + action.error.message;
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
      state.error = "Falha ao editar ingresso: " + action.error.message;
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
      state.error = "Falha ao deletar ingresso: " + action.error.message;
    },
  },
});

export const {
  selectAll: selectAllIngressos,
  selectById: selectIngressoById,
  selectIds: selectIngressosIds,
} = ingressosAdapter.getSelectors((state) => state.ingressos);
export default ingressosSlice.reducer;
