import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import apiRequest from "../utils/apiRequest";

const eventosAdapter = createEntityAdapter();

const initialState = eventosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchEventos = apiRequest("eventos/fetchEventos", "get");

export const addEvento = apiRequest("eventos/addEvento", "post");

export const deleteEvento = apiRequest("eventos/deleteEvento", "delete");

export const updateEvento = apiRequest("eventos/updateEvento", "put");

const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  extraReducers: {
    [fetchEventos.fulfilled]: (state, action) => {
      state.status = "loaded";
      eventosAdapter.setAll(state, action.payload);
    },
    [fetchEventos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchEventos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar eventos: " + action.error.message;
    },
    [addEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.addOne(state, action.payload);
    },
    [addEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [addEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [updateEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.upsertOne(state, action.payload);
    },
    [updateEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [deleteEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.removeOne(state, action.payload);
    },
    [deleteEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllEventos,
  selectById: selectEventoById,
  selectIds: selectEventosIds,
} = eventosAdapter.getSelectors((state) => state.eventos);

export default eventosSlice.reducer;
